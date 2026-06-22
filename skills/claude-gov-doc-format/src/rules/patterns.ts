/**
 * GB/T 9704-2012 公文格式技能 - 正则表达式模式
 */

// ===== 发文字号模式 =====

/**
 * 正确的发文字号格式
 * 格式：〔年份〕序号 或 〔年份〕机关代字〔年份〕序号
 * 示例：〔2024〕1号、〔2024〕X财〔2024〕1号
 */
export const DOCUMENT_NUMBER_CORRECT = /〔\d{4}〕[^\s〔〕]+?\d+号/g;

/**
 * 错误的方括号格式
 * 示例：[2024]1号
 */
export const DOCUMENT_NUMBER_SQUARE_BRACKET = /\[\d{4}\]\s*\d+号/g;

/**
 * 错误的圆括号格式
 * 示例：(2024)1号
 */
export const DOCUMENT_NUMBER_PARENTHESIS = /\(\d{4}\)\s*\d+号/g;

/**
 * 检测发文字号中是否有正确的六角括号
 */
export const HAS_ANGLE_BRACKETS = /〔\d{4}〕/;

/**
 * 检测发文字号中是否有错误的方括号
 */
export const HAS_SQUARE_BRACKETS = /\[\d{4}\]/;

/**
 * 检测发文字号中是否有错误的圆括号
 */
export const HAS_PARENTHESES = /\(\d{4}\)/;


// ===== 成文日期模式 =====

/**
 * 正确的中文日期格式
 * 示例：二〇二四年一月一日
 */
export const DATE_CHINESE = /[〇一二三四五六七八九零]+年[一二三四五六七八九十]+月[一二三四五六七八九十]+日/g;

/**
 * 正确的阿拉伯数字日期格式
 * 示例：2024年1月1日
 */
export const DATE_ARABIC = /\d{4}年\d{1,2}月\d{1,2}日/g;

/**
 * 错误的带虚位日期格式
 * 示例：2024年01月01日
 */
export const DATE_LEADING_ZERO = /\d{4}年0\d{1}月0\d{1}日/g;

/**
 * 错误的点号分隔日期
 * 示例：2024.1.1 或 2024.01.01
 */
export const DATE_DOT_SEPARATOR = /\d{4}\.\d{1,2}\.\d{1,2}/g;

/**
 * 错误的短横线分隔日期
 * 示例：2024-1-1 或 2024-01-01
 */
export const DATE_DASH_SEPARATOR = /\d{4}-\d{1,2}-\d{1,2}/g;


// ===== 层级标题模式 =====

/**
 * 一级标题：一、二、三
 */
export const LEVEL1_PATTERN = /^一[、．.]/m;

/**
 * 二级标题：（一）（二）（三）
 * 注意：排除 (1) 这种四级标题格式
 */
export const LEVEL2_PATTERN = /^（(?!\d)[^）]+）/m;

/**
 * 三级标题：1. 2. 3.
 */
export const LEVEL3_PATTERN = /^\d+[．.]/m;

/**
 * 四级标题：（1）（2）（3）
 */
export const LEVEL4_PATTERN = /^\（\d+\）/m;

/**
 * 所有层级标题的通用检测
 */
export const HIERARCHY_PATTERNS = {
  level1: {
    pattern: /^一[、．.]/,
    font: '黑体',
    size: '3号',
    level: 1
  },
  level2: {
    pattern: /^（(?!\d)[^）]+）/,
    font: '楷体',
    size: '3号',
    level: 2
  },
  level3: {
    pattern: /^\d+[．.]/,
    font: '仿宋体',
    size: '3号',
    level: 3
  },
  level4: {
    pattern: /^\（\d+\）/,
    font: '仿宋体',
    size: '3号',
    level: 4
  }
};


// ===== 公文结构模式 =====

/**
 * 检测发文机关标志区域
 */
export const AGENCY_LOGO_PATTERN = /^(.+)$/m;

/**
 * 检测签发人区域
 */
export const SIGNER_PATTERN = /^签发人：?/m;

/**
 * 检测红色分隔线（版头与主体分隔）
 * 常见形式：—— 或 ———
 */
export const RED_LINE_PATTERN = /^[━━━───——]{3,}$/m;

/**
 * 检测主送机关
 */
export const RECIPIENT_PATTERN = /^[^：]+：/m;

/**
 * 检测附件标注
 */
export const ATTACHMENT_PATTERN = /^附件[：:]\s*\d*[．.]\s*(.+)$/m;

/**
 * 检测抄送机关
 */
export const COPY_TO_PATTERN = /^抄送[：:]\s*(.+)$/m;

/**
 * 检测印发说明
 */
export const PRINTING_PATTERN = /^(印发|抄送|主送)[：:]\s*.+$/m;

/**
 * 检测版记分隔线
 */
export const FOOTER_DIVIDER_PATTERN = /^[━━━───——]{3,}$/m;


// ===== 格式验证模式 =====

/**
 * 检测是否有中英文混用的标点
 */
export const MIXED_PUNCTUATION = /[,.]\s*[，。]/g;

/**
 * 检测不规范的空格
 */
export const UNNORMALIZED_SPACE = /\s{2,}/g;

/**
 * 检测全角数字
 */
export const FULLWIDTH_DIGIT = /[０-９]/g;

/**
 * 检测全角字母
 */
export const FULLWIDTH_LETTER = /[Ａ-Ｚａ-ｚ]/g;


// ===== 辅助函数 =====

/**
 * 检测文本中是否存在指定模式
 */
export function hasPattern(text: string, pattern: RegExp): boolean {
  return pattern.test(text);
}

/**
 * 找出所有匹配的文本
 */
export function findAllMatches(text: string, pattern: RegExp): string[] {
  const matches: string[] = [];
  let match: RegExpExecArray | null;
  // 重置 lastIndex 以确保全局匹配正常工作
  const regex = new RegExp(pattern);
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[0]);
  }
  return matches;
}

/**
 * 检测层级标题的顺序是否正确
 */
export function checkHierarchyOrder(lines: string[]): {
  order: number[];
  errors: string[];
} {
  const order: number[] = [];
  const errors: string[] = [];
  let lastLevel = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    let currentLevel = 0;

    if (LEVEL1_PATTERN.test(line)) {
      currentLevel = 1;
    } else if (LEVEL2_PATTERN.test(line)) {
      currentLevel = 2;
    } else if (LEVEL3_PATTERN.test(line)) {
      currentLevel = 3;
    } else if (LEVEL4_PATTERN.test(line)) {
      currentLevel = 4;
    }

    if (currentLevel > 0) {
      order.push(currentLevel);

      // 检查是否跳级（如从一级直接到三级）
      if (currentLevel > lastLevel + 1 && lastLevel > 0) {
        errors.push(`第 ${i + 1} 行：从 ${lastLevel} 级跳到 ${currentLevel} 级`);
      }

      lastLevel = currentLevel;
    }
  }

  return { order, errors };
}
