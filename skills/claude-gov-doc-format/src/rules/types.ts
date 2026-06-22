/**
 * GB/T 9704-2012 公文格式技能 - 类型定义
 */

// 公文类型
export type DocType =
  | 'general'   // 通用格式
  | 'letter'    // 信函格式
  | 'command'   // 命令格式
  | 'notice'    // 通知格式
  | 'report'    // 报告格式
  | 'opinion';  // 意见格式

// 字体类型
export type ElementFont =
  | '小标宋体'
  | '黑体'
  | '楷体'
  | '仿宋体'
  | '仿宋体_GB2312'
  | '宋体';

// 字号类型
export type ElementSize = '2号' | '3号' | '4号' | '半角4号';

// 层级标题等级
export type HierarchyLevel = 1 | 2 | 3 | 4;

// 审核问题严重级别
export type Severity = 'error' | 'warning' | 'info';

// 公文结构部分
export type DocSection = 'header' | 'body' | 'footer';

// 审核检查项结果
export interface CheckResult {
  passed: boolean;
  element: string;
  section: DocSection;
  severity: Severity;
  message: string;
  suggestion?: string;
  lineNumber?: number;
}

// 完整审核报告
export interface FormatCheckResult {
  summary: {
    passed: boolean;
    totalChecks: number;
    errors: number;
    warnings: number;
    info: number;
  };
  checks: CheckResult[];
  hierarchyAnalysis?: HierarchyAnalysis;
}

// 层级结构分析
export interface HierarchyAnalysis {
  levels: HierarchyLevelInfo[];
  hasErrors: boolean;
  errors: string[];
}

export interface HierarchyLevelInfo {
  level: HierarchyLevel;
  pattern: string;
  font: ElementFont;
  size: ElementSize;
  count: number;
  examples: string[];
}

// 字体规则
export interface FontRule {
  element: string;
  font: ElementFont;
  size: ElementSize;
  section: DocSection;
  description?: string;
}

// 字体检查结果
export interface FontCheckResult {
  element: string;
  expectedFont: ElementFont;
  expectedSize: ElementSize;
  actualFont?: string;
  actualSize?: string;
  status: 'correct' | 'incorrect' | 'unknown';
  severity: Severity;
  message: string;
  suggestion?: string;
}

// 页面布局参数
export interface LayoutParams {
  pageSize: {
    width: number;  // mm
    height: number; // mm
    format: string;
  };
  printArea: {
    width: number;  // mm
    height: number; // mm
  };
  margins: {
    top: number;    // 天头
    bottom: number;  // 下边距
    left: number;   // 订口
    right: number;  // 右白边
  };
  lineSpacing: {
    min: number;  // 最小倍数
    max: number;  // 最大倍数
  };
  linesPerPage: number;
  charsPerLine: number;
}

// 发文字号结构
export interface DocumentNumber {
  year: string;
  sequence: string;
  agencyCode?: string;
  hasBrackets: boolean;
  bracketType: 'square' | 'angle' | 'none';
}

// 成文日期
export interface FormationDate {
  year: string;
  month: string;
  day: string;
  format: 'chinese' | 'arabic';
  hasLeadingZero: boolean;
}

// 排版指南输出
export interface LayoutGuide {
  docType: DocType;
  docTypeName: string;
  layout: LayoutParams;
  fonts: FontRule[];
  specialNotes: string[];
}

// 完整格式审核（包含字体）
export interface FullFormatResult {
  format: FormatCheckResult;
  font: FontCheckResult[];
  layout: LayoutParams;
}

// 公文元素位置
export interface ElementPosition {
  line: number;
  column: number;
  content: string;
}

// 修改记录类型
export type ChangeType = 'document-number' | 'date-format' | 'other';

// 修改记录
export interface ChangeRecord {
  type: ChangeType;
  original: string;
  fixed: string;
  lineNumber: number;
  description: string;
}

// 格式修正结果
export interface FixResult {
  success: boolean;
  originalText: string;
  fixedText: string;
  changes: ChangeRecord[];
  summary: {
    totalChanges: number;
    errorsFixed: number;
    warningsFixed: number;
    fontSuggestions: number;
  };
  formatAnalysis?: FormatCheckResult;
  fontSuggestions?: FontCheckResult[];
}
