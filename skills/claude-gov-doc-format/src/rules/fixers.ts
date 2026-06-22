/**
 * GB/T 9704-2012 公文格式技能 - 修正规则
 * 自动修正格式问题
 */

import { ChangeRecord } from './types.js';

// ===== 发文字号修正 =====

/**
 * 修正发文字号括号格式
 * [] → 〔〕 或 () → 〔〕 或 【】 → 〔〕
 */
export function fixDocumentNumberBrackets(text: string): {
  fixed: string;
  changes: ChangeRecord[];
} {
  const changes: ChangeRecord[] = [];
  let fixed = text;

  // 方括号 [年份] → 六角括号 〔年份〕
  // 使用更精确的匹配：只在年份周围替换
  fixed = fixed.replace(/\[(\d{4})\]/g, (match, year) => {
    changes.push({
      type: 'document-number',
      original: match,
      fixed: `〔${year}〕`,
      lineNumber: 0, // 会在后面计算
      description: '发文字号年份使用六角括号'
    });
    return `〔${year}〕`;
  });

  // 圆括号 (年份) → 六角括号 〔年份〕
  fixed = fixed.replace(/\((\d{4})\)/g, (match, year) => {
    changes.push({
      type: 'document-number',
      original: match,
      fixed: `〔${year}〕`,
      lineNumber: 0,
      description: '发文字号年份使用六角括号'
    });
    return `〔${year}〕`;
  });

  // 书名号 【年份】 → 六角括号 〔年份〕
  fixed = fixed.replace(/【(\d{4})】/g, (match, year) => {
    changes.push({
      type: 'document-number',
      original: match,
      fixed: `〔${year}〕`,
      lineNumber: 0,
      description: '发文字号年份使用六角括号'
    });
    return `〔${year}〕`;
  });

  // 计算行号
  const lines = text.split('\n');
  let changeIndex = 0;
  for (let i = 0; i < lines.length; i++) {
    for (const change of changes) {
      if (change.lineNumber === 0 && lines[i].includes(change.original)) {
        change.lineNumber = i + 1;
        changeIndex++;
      }
    }
  }

  return { fixed, changes };
}


// ===== 日期格式修正 =====

/**
 * 修正成文日期格式
 * 1. 去掉虚位：01月 → 1月，01日 → 1日
 * 2. 修正分隔符：2024.1.1 → 2024年1月1日
 * 3. 修正短横：2024-01-01 → 2024年1月1日
 */
export function fixDateFormat(text: string): {
  fixed: string;
  changes: ChangeRecord[];
} {
  const changes: ChangeRecord[] = [];
  let fixed = text;

  // 先处理点号分隔的日期：2024.1.1 → 2024年1月1日
  fixed = fixed.replace(/(\d{4})\.(\d{1,2})\.(\d{1,2})/g, (match, year, month, day) => {
    changes.push({
      type: 'date-format',
      original: match,
      fixed: `${year}年${parseInt(month)}月${parseInt(day)}日`,
      lineNumber: 0,
      description: '日期使用"年月日"格式，去掉虚位'
    });
    return `${year}年${parseInt(month)}月${parseInt(day)}日`;
  });

  // 短横分隔的日期：2024-01-01 → 2024年1月1日
  fixed = fixed.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, (match, year, month, day) => {
    changes.push({
      type: 'date-format',
      original: match,
      fixed: `${year}年${parseInt(month)}月${parseInt(day)}日`,
      lineNumber: 0,
      description: '日期使用"年月日"格式，去掉虚位'
    });
    return `${year}年${parseInt(month)}月${parseInt(day)}日`;
  });

  // 处理中文年份后面的虚位月份：2024年01月 → 2024年1月
  // 使用负向后行断言，确保只处理年份后面的月份
  fixed = fixed.replace(/(\d{4}年)0*(\d{1,2})月/g, (match, year, month) => {
    changes.push({
      type: 'date-format',
      original: match,
      fixed: `${year}${parseInt(month)}月`,
      lineNumber: 0,
      description: '日期去掉月份虚位'
    });
    return `${year}${parseInt(month)}月`;
  });

  // 处理日期虚位：01日 → 1日
  fixed = fixed.replace(/(\d{1,2}日)0*(\d{1,2})/g, (match, prefix, day) => {
    // 这是为了处理 "15日01日" 这种情况
    return match;
  });

  // 更精确的日期虚位处理：日在前面的情况
  // 匹配 "年XX月0X日" 模式
  fixed = fixed.replace(/(\d{4}年\d{1,2}月)0*(\d{1,2}日)/g, (match, yearMonth, day) => {
    const dayNum = parseInt(day.replace('日', ''));
    const newDay = `${dayNum}日`;
    if (day !== newDay) {
      changes.push({
        type: 'date-format',
        original: match,
        fixed: `${yearMonth}${newDay}`,
        lineNumber: 0,
        description: '日期去掉日虚位'
      });
      return `${yearMonth}${newDay}`;
    }
    return match;
  });

  // 计算行号
  const lines = text.split('\n');
  for (const change of changes) {
    for (let i = 0; i < lines.length; i++) {
      if (change.lineNumber === 0 && lines[i].includes(change.original)) {
        change.lineNumber = i + 1;
        break;
      }
    }
  }

  return { fixed, changes };
}


// ===== 层级标题序号格式修正 =====

/**
 * 修正层级标题序号格式
 * 1. 一、 → 保持不变
 * 2. （一） → 保持不变
 * 3. 1) → 1. （修正括号样式）
 * 4. （1） → 保持不变
 */
export function fixHierarchyNumber(text: string): {
  fixed: string;
  changes: ChangeRecord[];
} {
  const changes: ChangeRecord[] = [];
  let fixed = text;

  // 修正 1) 为 1.
  fixed = fixed.replace(/^(\s*)(\d+)\)(\s+)/gm, (match, indent, num, after) => {
    changes.push({
      type: 'other',
      original: match.trim(),
      fixed: `${num}.${after}`,
      lineNumber: 0,
      description: '层级序号使用点号(.)而非右括号)'
    });
    return `${indent}${num}.${after}`;
  });

  // 计算行号
  const lines = text.split('\n');
  for (const change of changes) {
    for (let i = 0; i < lines.length; i++) {
      if (change.lineNumber === 0 && lines[i].includes(change.original)) {
        change.lineNumber = i + 1;
        break;
      }
    }
  }

  return { fixed, changes };
}


// ===== 批量执行所有修正 =====

/**
 * 执行所有格式修正
 */
export function applyAllFixes(text: string): {
  fixed: string;
  changes: ChangeRecord[];
} {
  let { fixed, changes } = fixDocumentNumberBrackets(text);
  const dateResult = fixDateFormat(fixed);
  fixed = dateResult.fixed;
  changes = [...changes, ...dateResult.changes];
  const hierarchyResult = fixHierarchyNumber(fixed);
  fixed = hierarchyResult.fixed;
  changes = [...changes, ...hierarchyResult.changes];

  // 去重（同一位置多次修改）
  const uniqueChanges = deduplicateChanges(changes);

  return { fixed, changes: uniqueChanges };
}

/**
 * 去除重复的修改记录
 */
function deduplicateChanges(changes: ChangeRecord[]): ChangeRecord[] {
  const seen = new Set<string>();
  return changes.filter(change => {
    const key = `${change.lineNumber}-${change.type}-${change.original}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}


// ===== 辅助函数 =====

/**
 * 统计修改统计
 */
export function summarizeChanges(changes: ChangeRecord[]): {
  total: number;
  byType: Record<string, number>;
} {
  const byType: Record<string, number> = {};
  for (const change of changes) {
    byType[change.type] = (byType[change.type] || 0) + 1;
  }
  return {
    total: changes.length,
    byType
  };
}
