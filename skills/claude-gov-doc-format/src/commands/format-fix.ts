/**
 * GB/T 9704-2012 公文格式技能 - format-fix 命令
 * 自动修正公文格式问题
 */

import {
  FixResult,
  ChangeRecord,
  DocType
} from '../rules/types.js';
import {
  applyAllFixes,
  summarizeChanges
} from '../rules/fixers.js';
import {
  formatCheck,
  generateReport
} from './format-check.js';
import {
  fontCheck,
  generateFontReport
} from './font-check.js';

interface FormatFixOptions {
  text: string;
  docType?: string;
  dryRun?: boolean; // 仅预览，不实际修改
}

/**
 * 主函数：执行格式修正
 */
export function formatFix(options: FormatFixOptions): FixResult {
  const { text, docType, dryRun } = options;

  // 1. 先进行格式检查
  const formatResult = formatCheck({ text, docType: docType as DocType });
  const fontResults = fontCheck({ text });

  // 2. 执行修正
  const { fixed, changes } = applyAllFixes(text);

  // 3. 汇总
  const summary = summarizeChanges(changes);

  // 4. 如果是预览模式，不修改原文
  const finalText = dryRun ? text : fixed;

  return {
    success: true,
    originalText: text,
    fixedText: finalText,
    changes,
    summary: {
      totalChanges: summary.total,
      errorsFixed: summary.byType['document-number'] || 0 + summary.byType['date-format'] || 0,
      warningsFixed: 0, // 字体问题无法自动修正
      fontSuggestions: fontResults.length
    },
    formatAnalysis: formatResult,
    fontSuggestions: fontResults
  };
}


/**
 * 生成格式修正报告
 */
export function generateFixReport(result: FixResult): string {
  let report = `## 格式修正报告\n\n`;

  // 预览模式标识
  if (result.originalText === result.fixedText) {
    report += `**预览模式** - 仅显示修改建议，未实际修改\n\n`;
  } else {
    report += `**状态**：已修正\n\n`;
  }

  // 修改统计
  report += `### 修改统计\n\n`;
  report += `| 项目 | 数量 |\n`;
  report += `|------|------|\n`;
  report += `| 总修改数 | ${result.summary.totalChanges} |\n`;
  report += `| 发文字号修正 | ${result.summary.errorsFixed} |\n`;
  report += `| 日期格式修正 | ${result.summary.byType['date-format'] || 0} |\n`;
  report += `| 层级序号修正 | ${result.summary.byType['other'] || 0} |\n`;
  report += `| 字体建议 | ${result.summary.fontSuggestions} |\n\n`;

  // 字体建议（无法自动修正）
  if (result.fontSuggestions.length > 0) {
    report += `### 字体建议（需手动调整）\n\n`;
    report += `以下格式问题无法自动修正，请手动处理：\n\n`;

    const fontGroups = groupBy(result.fontSuggestions, f => f.element);
    for (const [element, items] of fontGroups) {
      report += `**${element}**\n`;
      for (const item of items) {
        report += `- ${item.message}\n`;
      }
      report += `\n`;
    }
  }

  // 修改记录
  if (result.changes.length > 0) {
    report += `### 修改记录\n\n`;
    report += `| 行号 | 类型 | 原始内容 | 修正内容 | 说明 |\n`;
    report += `|------|------|---------|---------|------|\n`;

    for (const change of result.changes) {
      const typeName = getTypeName(change.type);
      const original = truncate(change.original, 20);
      const fixed = truncate(change.fixed, 20);
      report += `| ${change.lineNumber || '-'} | ${typeName} | \`${original}\` | \`${fixed}\` | ${change.description} |\n`;
    }

    report += `\n`;
  }

  // 修正后的原文
  if (result.originalText !== result.fixedText) {
    report += `### 修正后的公文\n\n`;
    report += "```\n";
    report += result.fixedText;
    report += "\n```\n\n";
  }

  // 提示
  if (result.changes.length === 0 && result.fontSuggestions.length === 0) {
    report += `✅ 未发现格式问题，公文符合 GB/T 9704-2012 标准。\n\n`;
  } else if (result.changes.length === 0 && result.fontSuggestions.length > 0) {
    report += `⚠️ 未发现可自动修正的问题，但有以下字体格式建议。\n\n`;
  }

  return report;
}


/**
 * 生成纯文本修正（便于复制）
 */
export function generateFixedText(result: FixResult): string {
  return result.fixedText;
}


/**
 * 生成修改对比（Diff 格式）
 */
export function generateDiffReport(result: FixResult): string {
  if (result.originalText === result.fixedText) {
    return "原文与修正后相同，无修改。";
  }

  let diff = `### 修改对比\n\n`;
  diff += `| 位置 | 修改内容 |\n`;
  diff += `|------|----------|\n`;

  for (const change of result.changes) {
    diff += `| 第${change.lineNumber}行 | ${change.original} → ${change.fixed} |\n`;
  }

  return diff;
}


// ===== 辅助函数 =====

function getTypeName(type: string): string {
  switch (type) {
    case 'document-number':
      return '发文字号';
    case 'date-format':
      return '日期格式';
    case 'other':
      return '层级序号';
    default:
      return type;
  }
}

function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength) + '...';
}

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

export { formatFix, generateFixReport, generateFixedText, generateDiffReport };
