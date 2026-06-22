/**
 * GB/T 9704-2012 党政机关公文格式技能
 *
 * 提供公文格式审核和排版指南生成功能
 */

// 类型导出
export * from './rules/types.js';

// 常量导出
export * from './rules/constants.js';

// 模式导出
export * from './rules/patterns.js';

// 命令导出
export { formatCheck, generateReport } from './commands/format-check.js';
export { fontCheck, generateFontReport } from './commands/font-check.js';
export { hierarchyCheck, generateHierarchyReport } from './commands/hierarchy-check.js';
export { layoutGen, generateLayoutGuideReport } from './commands/layout-gen.js';
export { formatFix, generateFixReport, generateFixedText, generateDiffReport } from './commands/format-fix.js';

// 主入口函数
import { formatCheck, generateReport } from './commands/format-check.js';
import { fontCheck, generateFontReport } from './commands/font-check.js';
import { hierarchyCheck, generateHierarchyReport } from './commands/hierarchy-check.js';
import { layoutGen, generateLayoutGuideReport } from './commands/layout-gen.js';
import { formatFix, generateFixReport } from './commands/format-fix.js';
import { DocType } from './rules/types.js';

/**
 * 完整格式审核入口
 */
export function fullCheck(text: string, docType?: string) {
  const formatResult = formatCheck({ text, docType: docType as DocType });
  const fontResults = fontCheck({ text });

  return {
    format: formatResult,
    font: fontResults,
    report: {
      format: generateReport(formatResult),
      font: generateFontReport(fontResults)
    }
  };
}

/**
 * 根据类型生成排版指南
 */
export function generateLayout(docType: string) {
  const validTypes = ['general', 'letter', 'command', 'notice', 'report', 'opinion'];
  if (!validTypes.includes(docType)) {
    return {
      error: `无效的公文类型：${docType}`,
      validTypes
    };
  }

  const guide = layoutGen({ docType: docType as DocType });
  return {
    guide,
    report: generateLayoutGuideReport(guide)
  };
}

// 默认导出
export default {
  formatCheck,
  fontCheck,
  hierarchyCheck,
  layoutGen,
  formatFix,
  fullCheck,
  generateLayout
};
