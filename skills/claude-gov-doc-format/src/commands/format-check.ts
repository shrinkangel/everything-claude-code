/**
 * GB/T 9704-2012 公文格式技能 - format-check 命令
 * 审核公文格式规范性
 */

import {
  CheckResult,
  FormatCheckResult,
  FontCheckResult,
  HierarchyAnalysis,
  DocSection,
  Severity,
  HierarchyLevel,
  ElementFont,
  ElementSize
} from '../rules/types.js';
import {
  DOCUMENT_NUMBER_CORRECT,
  DOCUMENT_NUMBER_SQUARE_BRACKET,
  DOCUMENT_NUMBER_PARENTHESIS,
  DATE_ARABIC,
  DATE_LEADING_ZERO,
  DATE_DOT_SEPARATOR,
  DATE_CHINESE,
  LEVEL1_PATTERN,
  LEVEL2_PATTERN,
  LEVEL3_PATTERN,
  LEVEL4_PATTERN,
  ATTACHMENT_PATTERN,
  COPY_TO_PATTERN,
  hasPattern,
  findAllMatches,
  checkHierarchyOrder
} from '../rules/patterns.js';
import {
  MARGINS,
  PRINT_AREA,
  LINES_CHARS,
  LINE_SPACING,
  PAGE_SIZE
} from '../rules/constants.js';

interface FormatCheckOptions {
  text: string;
  docType?: string;
}

/**
 * 主函数：执行完整的公文格式审核
 */
export function formatCheck(options: FormatCheckOptions): FormatCheckResult {
  const { text, docType } = options;
  const lines = text.split('\n');
  const checks: CheckResult[] = [];

  // 1. 发文字号检查
  checks.push(...checkDocumentNumber(text));

  // 2. 成文日期检查
  checks.push(...checkFormationDate(text));

  // 3. 层级标题结构检查
  const hierarchyAnalysis = checkHierarchyStructure(lines);

  // 4. 附件标注检查
  checks.push(...checkAttachment(text));

  // 5. 抄送机关检查
  checks.push(...checkCopyTo(text));

  // 6. 统计结果
  const errors = checks.filter(c => c.severity === 'error').length;
  const warnings = checks.filter(c => c.severity === 'warning').length;
  const info = checks.filter(c => c.severity === 'info').length;

  return {
    summary: {
      passed: errors === 0,
      totalChecks: checks.length,
      errors,
      warnings,
      info
    },
    checks,
    hierarchyAnalysis
  };
}

/**
 * 检查发文字号格式
 */
function checkDocumentNumber(text: string): CheckResult[] {
  const results: CheckResult[] = [];

  // 检测错误的方括号
  const squareBrackets = findAllMatches(text, DOCUMENT_NUMBER_SQUARE_BRACKET);
  if (squareBrackets.length > 0) {
    results.push({
      passed: false,
      element: '发文字号',
      section: 'header',
      severity: 'error',
      message: `发文字号使用了方括号 []，应使用六角括号〔〕`,
      suggestion: `将 ${squareBrackets[0]} 改为对应的六角括号格式`,
      lineNumber: findLineNumber(text, squareBrackets[0])
    });
  }

  // 检测错误的圆括号
  const parentheses = findAllMatches(text, DOCUMENT_NUMBER_PARENTHESIS);
  if (parentheses.length > 0) {
    results.push({
      passed: false,
      element: '发文字号',
      section: 'header',
      severity: 'error',
      message: `发文字号使用了圆括号 ()，应使用六角括号〔〕`,
      suggestion: `将 ${parentheses[0]} 改为对应的六角括号格式`
    });
  }

  // 检查是否有正确的格式
  const correctFormat = findAllMatches(text, DOCUMENT_NUMBER_CORRECT);
  if (correctFormat.length === 0 && squareBrackets.length === 0 && parentheses.length === 0) {
    // 检测是否缺少发文字号（仅在公文头部区域检测）
    const headerSection = text.split('\n').slice(0, 15).join('\n');
    if (!/〔\d{4}〕/.test(headerSection) && !/\d+号/.test(headerSection)) {
      results.push({
        passed: false,
        element: '发文字号',
        section: 'header',
        severity: 'warning',
        message: '未检测到发文字号',
        suggestion: '公文应包含发文字号，格式为：〔年份〕序号'
      });
    }
  }

  return results;
}

/**
 * 检查成文日期格式
 */
function checkFormationDate(text: string): CheckResult[] {
  const results: CheckResult[] = [];

  // 检测带虚位的日期
  const leadingZeroDates = findAllMatches(text, DATE_LEADING_ZERO);
  if (leadingZeroDates.length > 0) {
    results.push({
      passed: false,
      element: '成文日期',
      section: 'body',
      severity: 'error',
      message: `成文日期包含虚位（如 01月），应使用不编虚位的格式`,
      suggestion: `将 ${leadingZeroDates[0]} 改为如：2024年1月1日`,
      lineNumber: findLineNumber(text, leadingZeroDates[0])
    });
  }

  // 检测点号分隔的日期
  const dotDates = findAllMatches(text, DATE_DOT_SEPARATOR);
  if (dotDates.length > 0) {
    results.push({
      passed: false,
      element: '成文日期',
      section: 'body',
      severity: 'error',
      message: `成文日期使用了点号分隔，应使用"年月日"格式`,
      suggestion: `将 ${dotDates[0]} 改为如：2024年1月1日`
    });
  }

  // 正确格式检查（给出提示）
  const arabicDates = findAllMatches(text, DATE_ARABIC);
  if (arabicDates.length > 0 && leadingZeroDates.length === 0) {
    // 检查是否有正确格式
    const hasCorrectFormat = arabicDates.some(d => !DATE_LEADING_ZERO.test(d));
    if (hasCorrectFormat) {
      results.push({
        passed: true,
        element: '成文日期',
        section: 'body',
        severity: 'info',
        message: `成文日期格式正确：${arabicDates[0]}`
      });
    }
  }

  return results;
}

/**
 * 检查层级标题结构
 */
function checkHierarchyStructure(lines: string[]): HierarchyAnalysis {
  const hierarchyResults: { level: HierarchyLevel; line: number; content: string }[] = [];
  const errors: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    let level: HierarchyLevel | 0 = 0;

    if (LEVEL1_PATTERN.test(line)) {
      level = 1;
    } else if (LEVEL2_PATTERN.test(line)) {
      level = 2;
    } else if (LEVEL3_PATTERN.test(line)) {
      level = 3;
    } else if (LEVEL4_PATTERN.test(line)) {
      level = 4;
    }

    if (level > 0) {
      hierarchyResults.push({ level, line: i + 1, content: line.substring(0, 30) });
    }
  }

  // 检查层级顺序
  let lastLevel = 0;
  for (const item of hierarchyResults) {
    if (item.level > lastLevel + 1 && lastLevel > 0) {
      errors.push(`第 ${item.line} 行：层级跳跃（从 ${lastLevel} 级直接到 ${item.level} 级）`);
    }
    lastLevel = item.level;
  }

  // 生成层级分析信息
  const levelInfo = [
    {
      level: 1 as HierarchyLevel,
      pattern: '一、二、三',
      font: '黑体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyResults.filter(h => h.level === 1).length,
      examples: hierarchyResults.filter(h => h.level === 1).map(h => h.content)
    },
    {
      level: 2 as HierarchyLevel,
      pattern: '（一）（二）',
      font: '楷体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyResults.filter(h => h.level === 2).length,
      examples: hierarchyResults.filter(h => h.level === 2).map(h => h.content)
    },
    {
      level: 3 as HierarchyLevel,
      pattern: '1. 2. 3.',
      font: '仿宋体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyResults.filter(h => h.level === 3).length,
      examples: hierarchyResults.filter(h => h.level === 3).map(h => h.content)
    },
    {
      level: 4 as HierarchyLevel,
      pattern: '（1）（2）',
      font: '仿宋体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyResults.filter(h => h.level === 4).length,
      examples: hierarchyResults.filter(h => h.level === 4).map(h => h.content)
    }
  ];

  return {
    levels: levelInfo,
    hasErrors: errors.length > 0,
    errors
  };
}

/**
 * 检查附件标注格式
 */
function checkAttachment(text: string): CheckResult[] {
  const results: CheckResult[] = [];
  const lines = text.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (ATTACHMENT_PATTERN.test(line)) {
      // 检查是否缺少序号
      if (!/附件[：:]\s*\d+/.test(line)) {
        results.push({
          passed: false,
          element: '附件标注',
          section: 'body',
          severity: 'warning',
          message: '附件标注缺少序号',
          suggestion: '格式应为：附件：1. 附件名称',
          lineNumber: i + 1
        });
      } else {
        results.push({
          passed: true,
          element: '附件标注',
          section: 'body',
          severity: 'info',
          message: `附件标注格式正确`,
          lineNumber: i + 1
        });
      }
    }
  }

  return results;
}

/**
 * 检查抄送机关格式
 */
function checkCopyTo(text: string): CheckResult[] {
  const results: CheckResult[] = [];

  if (hasPattern(text, COPY_TO_PATTERN)) {
    results.push({
      passed: true,
      element: '抄送机关',
      section: 'footer',
      severity: 'info',
      message: '检测到抄送机关标注'
    });
  }

  return results;
}

/**
 * 查找文本行号
 */
function findLineNumber(text: string, searchText: string): number {
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchText)) {
      return i + 1;
    }
  }
  return 1;
}

/**
 * 生成格式审核报告
 */
export function generateReport(result: FormatCheckResult): string {
  let report = `## 公文格式审核报告\n\n`;

  // 审核结果汇总
  report += `### 审核结果：${result.summary.passed ? '通过' : '未通过'}\n\n`;

  report += `| 项目 | 数量 |\n`;
  report += `|------|------|\n`;
  report += `| 总检查项 | ${result.summary.totalChecks} |\n`;
  report += `| 错误 | ${result.summary.errors} |\n`;
  report += `| 警告 | ${result.summary.warnings} |\n`;
  report += `| 提示 | ${result.summary.info} |\n\n`;

  // 格式问题列表
  const errorChecks = result.checks.filter(c => c.severity === 'error' || c.severity === 'warning');
  if (errorChecks.length > 0) {
    report += `### 发现问题\n\n`;
    report += `| 序号 | 元素 | 问题 | 建议 |\n`;
    report += `|------|------|------|------|\n`;

    errorChecks.forEach((check, index) => {
      report += `| ${index + 1} | ${check.element} | ${check.message} | ${check.suggestion || '-'} |\n`;
    });

    report += `\n`;
  }

  // 层级结构分析
  if (result.hierarchyAnalysis) {
    report += `### 层级结构分析\n\n`;

    report += `| 层级 | 格式 | 字体 | 字号 | 数量 |\n`;
    report += `|------|------|------|------|------|\n`;

    result.hierarchyAnalysis.levels.forEach(level => {
      if (level.count > 0) {
        report += `| ${level.level}级 | ${level.pattern} | ${level.font} | ${level.size} | ${level.count} |\n`;
      }
    });

    if (result.hierarchyAnalysis.errors.length > 0) {
      report += `\n**层级错误**：\n`;
      result.hierarchyAnalysis.errors.forEach(err => {
        report += `- ${err}\n`;
      });
    }

    report += `\n`;
  }

  // 排版参数参考
  report += `### 排版参数参考\n\n`;
  report += `| 参数 | 值 |\n`;
  report += `|------|-----|\n`;
  report += `| 幅面 | ${PAGE_SIZE.format} (${PAGE_SIZE.width}mm × ${PAGE_SIZE.height}mm) |\n`;
  report += `| 版心 | ${PRINT_AREA.width}mm × ${PRINT_AREA.height}mm |\n`;
  report += `| 天头 | ${MARGINS.top}mm±1mm |\n`;
  report += `| 订口 | ${MARGINS.left}mm±1mm |\n`;
  report += `| 每面行数 | ${LINES_CHARS.linesPerPage}行 |\n`;
  report += `| 每行字数 | ${LINES_CHARS.charsPerLine}字 |\n`;

  return report;
}

export { checkDocumentNumber, checkFormationDate, checkHierarchyStructure };
