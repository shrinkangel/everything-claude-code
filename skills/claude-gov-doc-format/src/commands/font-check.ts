/**
 * GB/T 9704-2012 公文格式技能 - font-check 命令
 * 专门检测公文中的字体字号规范
 */

import {
  FontCheckResult,
  HierarchyLevel,
  ElementFont,
  ElementSize
} from '../rules/types.js';
import {
  LEVEL1_PATTERN,
  LEVEL2_PATTERN,
  LEVEL3_PATTERN,
  LEVEL4_PATTERN
} from '../rules/patterns.js';
import {
  HIERARCHY_TITLE_FONTS,
  BODY_FONTS,
  HEADER_FONTS,
  FOOTER_FONTS
} from '../rules/constants.js';

interface FontCheckOptions {
  text: string;
}

/**
 * 主函数：检测字体字号规范
 */
export function fontCheck(options: FontCheckOptions): FontCheckResult[] {
  const { text } = options;
  const lines = text.split('\n');
  const results: FontCheckResult[] = [];

  // 1. 检测层级标题字体
  results.push(...checkTitleHierarchyFonts(lines));

  // 2. 检测正文字体
  results.push(...checkBodyFont(text));

  // 3. 检测发文字号字体
  results.push(...checkDocumentNumberFont(text));

  // 4. 检测主送机关字体
  results.push(...checkMainRecipientFont(text));

  return results;
}

/**
 * 检测层级标题字体规范
 */
function checkTitleHierarchyFonts(lines: string[]): FontCheckResult[] {
  const results: FontCheckResult[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.length < 2) continue;

    // 一级标题：一、二、三 → 黑体3号
    if (LEVEL1_PATTERN.test(line)) {
      results.push({
        element: '一级标题',
        expectedFont: '黑体',
        expectedSize: '3号',
        status: 'unknown',
        severity: 'info',
        message: `第 ${i + 1} 行：检测到一级标题"${line.substring(0, 15)}..."，应使用黑体3号`,
        suggestion: '一级标题格式：一、二、三，字体：黑体，字号：3号'
      });
    }

    // 二级标题：（一）（二）→ 楷体3号
    else if (LEVEL2_PATTERN.test(line)) {
      results.push({
        element: '二级标题',
        expectedFont: '楷体',
        expectedSize: '3号',
        status: 'unknown',
        severity: 'info',
        message: `第 ${i + 1} 行：检测到二级标题"${line.substring(0, 15)}..."，应使用楷体3号`,
        suggestion: '二级标题格式：（一）（二），字体：楷体，字号：3号'
      });
    }

    // 三级标题：1. 2. 3. → 仿宋体3号
    else if (LEVEL3_PATTERN.test(line)) {
      results.push({
        element: '三级标题',
        expectedFont: '仿宋体',
        expectedSize: '3号',
        status: 'unknown',
        severity: 'info',
        message: `第 ${i + 1} 行：检测到三级标题"${line.substring(0, 15)}..."，应使用仿宋体3号`,
        suggestion: '三级标题格式：1. 2. 3.，字体：仿宋体，字号：3号'
      });
    }

    // 四级标题：（1）（2）（3）→ 仿宋体3号
    else if (LEVEL4_PATTERN.test(line)) {
      results.push({
        element: '四级标题',
        expectedFont: '仿宋体',
        expectedSize: '3号',
        status: 'unknown',
        severity: 'info',
        message: `第 ${i + 1} 行：检测到四级标题"${line.substring(0, 15)}..."，应使用仿宋体3号`,
        suggestion: '四级标题格式：（1）（2）（3），字体：仿宋体，字号：3号'
      });
    }
  }

  return results;
}

/**
 * 检测正文字体规范
 */
function checkBodyFont(text: string): FontCheckResult[] {
  const results: FontCheckResult[] = [];

  // 统计正文段落数量（排除标题、空行等）
  const lines = text.split('\n');
  const bodyLines = lines.filter(line =>
    line.trim().length > 10 &&
    !LEVEL1_PATTERN.test(line) &&
    !LEVEL2_PATTERN.test(line) &&
    !LEVEL3_PATTERN.test(line) &&
    !LEVEL4_PATTERN.test(line)
  );

  if (bodyLines.length > 0) {
    results.push({
      element: '正文',
      expectedFont: '仿宋体_GB2312',
      expectedSize: '3号',
      status: 'unknown',
      severity: 'info',
      message: `检测到正文段落 ${bodyLines.length} 段，建议使用仿宋体_GB2312，3号字`,
      suggestion: '正文字体规范：仿宋体_GB2312，字号：3号，行距：1.3~1.5倍'
    });
  }

  return results;
}

/**
 * 检测发文字号字体
 */
function checkDocumentNumberFont(text: string): FontCheckResult[] {
  const results: FontCheckResult[] = [];

  // 检测发文字号
  if (/〔\d{4}〕/.test(text) || /\d+号/.test(text)) {
    results.push({
      element: '发文字号',
      expectedFont: '仿宋体',
      expectedSize: '3号',
      status: 'unknown',
      severity: 'info',
      message: '检测到发文字号，建议使用仿宋体3号',
      suggestion: '发文字号格式：〔年份〕序号，字体：仿宋体，字号：3号'
    });
  }

  return results;
}

/**
 * 检测主送机关字体
 */
function checkMainRecipientFont(text: string): FontCheckResult[] {
  const results: FontCheckResult[] = [];

  // 检测主送机关
  if (/^[^：]+：/.test(text)) {
    results.push({
      element: '主送机关',
      expectedFont: '仿宋体',
      expectedSize: '3号',
      status: 'unknown',
      severity: 'info',
      message: '检测到主送机关标注，建议使用仿宋体3号',
      suggestion: '主送机关格式：左侧顶格，字体：仿宋体，字号：3号'
    });
  }

  return results;
}

/**
 * 生成字体检查报告
 */
export function generateFontReport(results: FontCheckResult[]): string {
  let report = `## 字体字号检查报告\n\n`;

  // 按元素分类
  const grouped = groupBy(results, r => r.element);

  for (const [element, items] of grouped) {
    report += `### ${element}\n\n`;
    report += `| 期望字体 | 期望字号 | 状态 | 说明 |\n`;
    report += `|----------|----------|------|------|\n`;

    for (const item of items) {
      report += `| ${item.expectedFont} | ${item.expectedSize} | ${getStatusIcon(item.status)} | ${item.message} |\n`;
    }

    report += `\n`;
  }

  // 字体规范汇总表
  report += `### 字体字号规范参考\n\n`;
  report += `| 元素 | 字体 | 字号 |\n`;
  report += `|------|------|------|\n`;
  report += `| 发文机关标志 | 小标宋体 | 2号 |\n`;
  report += `| 标题 | 小标宋体 | 2号 |\n`;
  report += `| 签发人 | 仿宋体 | 3号 |\n`;
  report += `| 发文字号 | 仿宋体 | 3号 |\n`;
  report += `| 主送机关 | 仿宋体 | 3号 |\n`;
  report += `| 正文 | 仿宋体_GB2312 | 3号 |\n`;
  report += `| 一级标题 | 黑体 | 3号 |\n`;
  report += `| 二级标题 | 楷体 | 3号 |\n`;
  report += `| 三级标题 | 仿宋体 | 3号 |\n`;
  report += `| 四级标题 | 仿宋体 | 3号 |\n`;
  report += `| 附件说明 | 仿宋体 | 3号 |\n`;
  report += `| 抄送机关 | 仿宋体 | 4号 |\n`;
  report += `| 印发说明 | 仿宋体 | 4号 |\n`;
  report += `| 页码 | 仿宋体 | 半角4号 |\n`;

  return report;
}

/**
 * 获取状态图标
 */
function getStatusIcon(status: string): string {
  switch (status) {
    case 'correct': return '✓';
    case 'incorrect': return '✗';
    case 'unknown': return '?';
    default: return '?';
  }
}

/**
 * 按键分组辅助函数
 */
function groupBy<T>(array: T[], keyFn: (item: T) => string): Map<string, T[]> {
  const map = new Map<string, T[]>();
  for (const item of array) {
    const key = keyFn(item);
    const group = map.get(key) || [];
    group.push(item);
    map.set(key, group);
  }
  return map;
}

export { checkTitleHierarchyFonts, checkBodyFont };
