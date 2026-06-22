/**
 * GB/T 9704-2012 公文格式技能 - hierarchy-check 命令
 * 检测公文正文层级标题结构（一、→（一）→1.→（1））
 */

import {
  HierarchyAnalysis,
  HierarchyLevel,
  ElementFont,
  ElementSize
} from '../rules/types.js';
import {
  LEVEL1_PATTERN,
  LEVEL2_PATTERN,
  LEVEL3_PATTERN,
  LEVEL4_PATTERN,
  checkHierarchyOrder
} from '../rules/patterns.js';
import { HIERARCHY_TITLE_FONTS } from '../rules/constants.js';

interface HierarchyCheckOptions {
  text: string;
}

/**
 * 主函数：检测层级标题结构
 */
export function hierarchyCheck(options: HierarchyCheckOptions): HierarchyAnalysis {
  const { text } = options;
  const lines = text.split('\n');

  return analyzeHierarchyStructure(lines);
}

/**
 * 分析层级结构
 */
function analyzeHierarchyStructure(lines: string[]): HierarchyAnalysis {
  const hierarchyItems: { level: HierarchyLevel; line: number; content: string }[] = [];
  const errors: string[] = [];

  // 收集所有层级标题
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
      hierarchyItems.push({ level, line: i + 1, content: line.substring(0, 40) });
    }
  }

  // 检查层级顺序
  let lastLevel = 0;
  for (const item of hierarchyItems) {
    if (item.level > lastLevel + 1 && lastLevel > 0) {
      errors.push(`第 ${item.line} 行：层级跳跃（从 ${lastLevel} 级直接到 ${item.level} 级）`);
    }
    lastLevel = item.level;
  }

  // 检查是否缺少必要的上级层级
  const levelsPresent = new Set(hierarchyItems.map(h => h.level));
  if (levelsPresent.has(2) && !levelsPresent.has(1)) {
    errors.push('存在二级标题但缺少一级标题');
  }
  if (levelsPresent.has(3) && !levelsPresent.has(2)) {
    errors.push('存在三级标题但缺少二级标题');
  }
  if (levelsPresent.has(4) && !levelsPresent.has(3)) {
    errors.push('存在四级标题但缺少三级标题');
  }

  // 生成层级信息
  const levelInfo = [
    {
      level: 1 as HierarchyLevel,
      pattern: '一、二、三',
      font: '黑体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyItems.filter(h => h.level === 1).length,
      examples: hierarchyItems.filter(h => h.level === 1).map(h => h.content)
    },
    {
      level: 2 as HierarchyLevel,
      pattern: '（一）（二）',
      font: '楷体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyItems.filter(h => h.level === 2).length,
      examples: hierarchyItems.filter(h => h.level === 2).map(h => h.content)
    },
    {
      level: 3 as HierarchyLevel,
      pattern: '1. 2. 3.',
      font: '仿宋体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyItems.filter(h => h.level === 3).length,
      examples: hierarchyItems.filter(h => h.level === 3).map(h => h.content)
    },
    {
      level: 4 as HierarchyLevel,
      pattern: '（1）（2）',
      font: '仿宋体' as ElementFont,
      size: '3号' as ElementSize,
      count: hierarchyItems.filter(h => h.level === 4).length,
      examples: hierarchyItems.filter(h => h.level === 4).map(h => h.content)
    }
  ];

  return {
    levels: levelInfo,
    hasErrors: errors.length > 0,
    errors
  };
}

/**
 * 生成层级检查报告
 */
export function generateHierarchyReport(analysis: HierarchyAnalysis): string {
  let report = `## 层级结构检查报告\n\n`;

  // 总体评估
  if (analysis.hasErrors) {
    report += `### 状态：存在问题\n\n`;
  } else {
    report += `### 状态：正常\n\n`;
  }

  // 层级统计
  report += `| 层级 | 格式示例 | 字体 | 字号 | 数量 |\n`;
  report += `|------|----------|------|------|------|\n`;

  analysis.levels.forEach(level => {
    report += `| ${level.level}级 | ${level.pattern} | ${level.font} | ${level.size} | ${level.count} |\n`;
  });

  report += `\n`;

  // 层级顺序验证
  report += `### 层级顺序\n\n`;
  report += `正确顺序：**一级标题 → 二级标题 → 三级标题 → 四级标题**\n\n`;

  report += `格式规范：\n`;
  report += `- 一级：一、二、三... （黑体3号）\n`;
  report += `- 二级：（一）（二）... （楷体3号）\n`;
  report += `- 三级：1. 2. 3.... （仿宋体3号）\n`;
  report += `- 四级：（1）（2）（3）... （仿宋体3号）\n`;

  report += `\n`;

  // 问题列表
  if (analysis.errors.length > 0) {
    report += `### 发现问题\n\n`;
    analysis.errors.forEach(err => {
      report += `- ${err}\n`;
    });
    report += `\n`;
  }

  // 示例展示
  for (const level of analysis.levels) {
    if (level.examples.length > 0) {
      report += `### ${level.level}级标题示例\n\n`;
      level.examples.forEach((ex, idx) => {
        report += `${idx + 1}. ${ex}\n`;
      });
      report += `\n`;
    }
  }

  return report;
}

export { analyzeHierarchyStructure };
