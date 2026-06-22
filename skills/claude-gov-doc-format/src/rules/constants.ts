/**
 * GB/T 9704-2012 公文格式技能 - 常量定义
 */

// 页面尺寸常量
export const PAGE_SIZE = {
  width: 210,   // A4 宽度 (mm)
  height: 297,   // A4 高度 (mm)
  format: 'A4'
};

// 版心尺寸
export const PRINT_AREA = {
  width: 156,   // mm
  height: 225   // mm
};

// 页边距（天头、订口、右白边、下边距）
export const MARGINS = {
  top: 37,      // 天头 (mm) ±1mm
  bottom: 35,   // 下边距 (mm) ±1mm
  left: 28,     // 订口 (mm) ±1mm
  right: 28     // 右白边 (mm)
};

// 行距参数
export const LINE_SPACING = {
  min: 1.3,
  max: 1.5
};

// 每面行数、每行字数
export const LINES_CHARS = {
  linesPerPage: 22,
  charsPerLine: 28
};

// 版头部分字体规范
export const HEADER_FONTS = {
  agencyLogo: {
    font: '小标宋体' as const,
    size: '2号' as const,
    description: '发文机关标志，居中排列'
  },
  signer: {
    font: '仿宋体' as const,
    size: '3号' as const,
    description: '签发人姓名，右侧对齐'
  },
  documentNumber: {
    font: '仿宋体' as const,
    size: '3号' as const,
    description: '发文字号，使用六角括号'
  }
};

// 主体部分字体规范
export const BODY_FONTS = {
  title: {
    font: '小标宋体' as const,
    size: '2号' as const,
    description: '标题，可加份号、密级和保密期限、紧急程度'
  },
  subtitle: {
    font: '仿宋体' as const,
    size: '3号' as const,
    description: '副标题'
  },
  mainRecipient: {
    font: '仿宋体' as const,
    size: '3号' as const,
    description: '主送机关，左侧顶格'
  },
  body: {
    font: '仿宋体_GB2312' as const,
    size: '3号' as const,
    description: '正文内容'
  },
  attachment: {
    font: '仿宋体' as const,
    size: '3号' as const,
    description: '附件说明和附件序号'
  }
};

// 版记部分字体规范
export const FOOTER_FONTS = {
  copyTo: {
    font: '仿宋体' as const,
    size: '4号' as const,
    description: '抄送机关，分类排列、段前缩1字符'
  },
  printing: {
    font: '仿宋体' as const,
    size: '4号' as const,
    description: '印发机关和印发日期'
  },
  pageNumber: {
    font: '仿宋体' as const,
    size: '半角4号' as const,
    description: '页码，单页码居右、双页码居中'
  }
};

// 层级标题字体规范（正文内）
export const HIERARCHY_TITLE_FONTS = {
  level1: {
    level: 1,
    pattern: /^一[、．.]/,
    font: '黑体' as const,
    size: '3号' as const,
    example: '一、二、三',
    description: '一级标题，使用黑体3号'
  },
  level2: {
    level: 2,
    pattern: /^（[^0-9][^）]*）/,
    font: '楷体' as const,
    size: '3号' as const,
    example: '（一）（二）（三）',
    description: '二级标题，使用楷体3号'
  },
  level3: {
    level: 3,
    pattern: /^\d+[．.]/,
    font: '仿宋体' as const,
    size: '3号' as const,
    example: '1. 2. 3.',
    description: '三级标题，使用仿宋体3号'
  },
  level4: {
    level: 4,
    pattern: /^\（\d+\）/,
    font: '仿宋体' as const,
    size: '3号' as const,
    example: '（1）（2）（3）',
    description: '四级标题，使用仿宋体3号'
  }
};

// 发文字号正则模式
export const DOCUMENT_NUMBER_PATTERNS = {
  // 正确的格式：〔2024〕1号 或 〔2024〕X财〔2024〕1号
  correct: /〔\d{4}〕\S*?\d+号/g,
  // 错误的方括号格式：[2024]1号
  wrongSquare: /\[\d{4}\]\d+号/g,
  // 错误的圆括号格式：(2024)1号
  wrongParen: /\(\d{4}\)\d+号/g
};

// 成文日期正则模式
export const DATE_PATTERNS = {
  // 正确格式：2024年1月1日 或 二〇二四年一月一日
  correctChinese: /[〇一二三四五六七八九零]+年[一二三四五六七八九十]+月[一二三四五六七八九十]+日/g,
  correctArabic: /\d{4}年\d{1,2}月\d{1,2}日/g,
  // 错误格式：带虚位的日期
  wrongLeadingZero: /\d{4}年0\d{1,2}月\d{1,2}日/g,
  // 错误格式：使用点号分隔
  wrongDot: /\d{4}\.\d{1,2}\.\d{1,2}/g
};

// 附件标注正则
export const ATTACHMENT_PATTERN = /^附件：?/;

// 抄送机关关键词
export const COPY_TO_KEYWORDS = ['抄送：', '抄送', '主送', '报送'];

// 版记分隔线关键词
export const DIVIDER_KEYWORDS = ['——', '——', '────', '———'];

// 公文类型名称映射
export const DOC_TYPE_NAMES: Record<string, string> = {
  general: '通用格式',
  letter: '信函格式',
  command: '命令格式',
  notice: '通知格式',
  report: '报告格式',
  opinion: '意见格式'
};

// 信函格式特殊参数
export const LETTER_SPECIAL = {
  topMargin: 30,        // 发文机关标志上边缘距上边距 (mm)
  noPageNumberOnFirst: true,
  noPrintingInfo: true
};

// 命令格式特殊参数
export const COMMAND_SPECIAL = {
  commandWord: '命令',
  font: '小标宋体',
  size: '2号'
};
