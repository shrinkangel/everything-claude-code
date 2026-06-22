/**
 * GB/T 9704-2012 公文格式技能 - layout-gen 命令
 * 根据公文类型生成排版指南
 */

import {
  DocType,
  LayoutParams,
  LayoutGuide,
  FontRule
} from '../rules/types.js';
import {
  PAGE_SIZE,
  PRINT_AREA,
  MARGINS,
  LINES_CHARS,
  LINE_SPACING,
  HEADER_FONTS,
  BODY_FONTS,
  FOOTER_FONTS,
  HIERARCHY_TITLE_FONTS,
  DOC_TYPE_NAMES,
  LETTER_SPECIAL,
  COMMAND_SPECIAL
} from '../rules/constants.js';

interface LayoutGenOptions {
  docType: DocType;
}

/**
 * 主函数：生成排版指南
 */
export function layoutGen(options: LayoutGenOptions): LayoutGuide {
  const { docType } = options;
  const docTypeName = DOC_TYPE_NAMES[docType] || docType;

  return {
    docType,
    docTypeName,
    layout: getLayoutParams(docType),
    fonts: getFontRules(docType),
    specialNotes: getSpecialNotes(docType)
  };
}

/**
 * 获取布局参数
 */
function getLayoutParams(docType: DocType): LayoutParams {
  // 基础布局参数
  const baseLayout: LayoutParams = {
    pageSize: {
      width: PAGE_SIZE.width,
      height: PAGE_SIZE.height,
      format: PAGE_SIZE.format
    },
    printArea: {
      width: PRINT_AREA.width,
      height: PRINT_AREA.height
    },
    margins: {
      top: MARGINS.top,
      bottom: MARGINS.bottom,
      left: MARGINS.left,
      right: MARGINS.right
    },
    lineSpacing: {
      min: LINE_SPACING.min,
      max: LINE_SPACING.max
    },
    linesPerPage: LINES_CHARS.linesPerPage,
    charsPerLine: LINES_CHARS.charsPerLine
  };

  // 信函格式有特殊参数
  if (docType === 'letter') {
    return {
      ...baseLayout,
      margins: {
        ...baseLayout.margins,
        top: LETTER_SPECIAL.topMargin
      }
    };
  }

  return baseLayout;
}

/**
 * 获取字体规则
 */
function getFontRules(docType: DocType): FontRule[] {
  const fonts: FontRule[] = [];

  // 版头部分
  fonts.push({
    element: '发文机关标志',
    font: HEADER_FONTS.agencyLogo.font,
    size: HEADER_FONTS.agencyLogo.size,
    section: 'header',
    description: HEADER_FONTS.agencyLogo.description
  });

  if (docType === 'command') {
    fonts.push({
      element: '命令标志',
      font: '小标宋体',
      size: '2号',
      section: 'header',
      description: '命令格式特有'
    });
  } else {
    fonts.push({
      element: '发文字号',
      font: HEADER_FONTS.documentNumber.font,
      size: HEADER_FONTS.documentNumber.size,
      section: 'header',
      description: HEADER_FONTS.documentNumber.description
    });
  }

  // 主体部分
  fonts.push({
    element: '标题',
    font: BODY_FONTS.title.font,
    size: BODY_FONTS.title.size,
    section: 'body',
    description: BODY_FONTS.title.description
  });

  fonts.push({
    element: '主送机关',
    font: BODY_FONTS.mainRecipient.font,
    size: BODY_FONTS.mainRecipient.size,
    section: 'body',
    description: BODY_FONTS.mainRecipient.description
  });

  fonts.push({
    element: '正文',
    font: BODY_FONTS.body.font,
    size: BODY_FONTS.body.size,
    section: 'body',
    description: BODY_FONTS.body.description
  });

  fonts.push({
    element: '附件说明',
    font: BODY_FONTS.attachment.font,
    size: BODY_FONTS.attachment.size,
    section: 'body',
    description: BODY_FONTS.attachment.description
  });

  // 层级标题
  Object.values(HIERARCHY_TITLE_FONTS).forEach(h => {
    fonts.push({
      element: `${h.level}级标题`,
      font: h.font,
      size: h.size,
      section: 'body',
      description: h.description
    });
  });

  // 版记部分
  fonts.push({
    element: '抄送机关',
    font: FOOTER_FONTS.copyTo.font,
    size: FOOTER_FONTS.copyTo.size,
    section: 'footer',
    description: FOOTER_FONTS.copyTo.description
  });

  fonts.push({
    element: '印发说明',
    font: FOOTER_FONTS.printing.font,
    size: FOOTER_FONTS.printing.size,
    section: 'footer',
    description: FOOTER_FONTS.printing.description
  });

  fonts.push({
    element: '页码',
    font: FOOTER_FONTS.pageNumber.font,
    size: FOOTER_FONTS.pageNumber.size,
    section: 'footer',
    description: FOOTER_FONTS.pageNumber.description
  });

  return fonts;
}

/**
 * 获取特殊说明
 */
function getSpecialNotes(docType: DocType): string[] {
  const notes: string[] = [];

  switch (docType) {
    case 'letter':
      notes.push('发文机关标志上边缘距上边距30mm');
      notes.push('首页不显示页码');
      notes.push('版记不加印发机关和印发日期及分隔线');
      notes.push('份号、密级和保密期限、紧急程度标注在左上角');
      break;

    case 'command':
      notes.push('签发人仅限"签发人"三字加冒号和签发人姓名');
      notes.push('版头不加发文字号');
      notes.push('令号应标注在文头与公文主体之间');
      notes.push('正文前可不加"根据..."等起语');
      break;

    case 'notice':
      notes.push('如需标注紧急程度，应在左上角标注');
      notes.push('标题可使用"关于...的通知"格式');
      break;

    case 'report':
      notes.push('不标注主送机关的报告，可直接报送分管领导');
      notes.push('落款处可不标注发文机关名称');
      break;

    case 'opinion':
      notes.push('标题使用"关于...的意见"格式');
      notes.push('可标注"以上意见如有不妥，请批示"等结束语');
      break;

    case 'general':
    default:
      notes.push('适用于一般党政机关公文');
      notes.push('完整包含版头、主体、版记三部分');
      break;
  }

  return notes;
}

/**
 * 生成排版指南报告
 */
export function generateLayoutGuideReport(guide: LayoutGuide): string {
  const { docTypeName, layout, fonts, specialNotes } = guide;

  let report = `## 公文排版指南 - ${docTypeName}\n\n`;

  // 页面设置
  report += `### 页面设置\n\n`;
  report += `| 参数 | 值 | 说明 |\n`;
  report += `|------|-----|------|\n`;
  report += `| 幅面 | ${layout.pageSize.format} (${layout.pageSize.width}mm × ${layout.pageSize.height}mm) | 标准A4纸 |\n`;
  report += `| 版心 | ${layout.printArea.width}mm × ${layout.printArea.height}mm | 正文区域 |\n`;
  report += `| 天头（上边距） | ${layout.margins.top}mm±1mm | 版头与上边距之间 |\n`;
  report += `| 订口（左边距） | ${layout.margins.left}mm±1mm | 装订侧边距 |\n`;
  report += `| 右边距 | ${layout.margins.right}mm | 非装订侧边距 |\n`;
  report += `| 下边距 | ${layout.margins.bottom}mm±1mm | 版记与下边距之间 |\n`;
  report += `| 行距 | ${layout.lineSpacing.min}~${layout.lineSpacing.max}倍 | 正文行距 |\n`;
  report += `| 每面行数 | ${layout.linesPerPage}行 | |\n`;
  report += `| 每行字数 | ${layout.charsPerLine}字 | |\n`;

  report += `\n`;

  // 字体规范
  report += `### 字体规范\n\n`;
  report += `| 元素 | 字体 | 字号 | 位置 |\n`;
  report += `|------|------|------|------|\n`;

  // 按位置分组显示
  const headerFonts = fonts.filter(f => f.section === 'header');
  const bodyFonts = fonts.filter(f => f.section === 'body');
  const footerFonts = fonts.filter(f => f.section === 'footer');

  report += `**版头**\n`;
  headerFonts.forEach(f => {
    report += `| ${f.element} | ${f.font} | ${f.size} | ${f.description || '-'} |\n`;
  });

  report += `\n**主体**\n`;
  bodyFonts.forEach(f => {
    report += `| ${f.element} | ${f.font} | ${f.size} | ${f.description || '-'} |\n`;
  });

  report += `\n**版记**\n`;
  footerFonts.forEach(f => {
    report += `| ${f.element} | ${f.font} | ${f.size} | ${f.description || '-'} |\n`;
  });

  report += `\n`;

  // 层级标题字体
  report += `### 层级标题字体\n\n`;
  report += `| 层级 | 格式 | 字体 | 字号 |\n`;
  report += `|------|------|------|------|\n`;
  report += `| 一级 | 一、二、三 | 黑体 | 3号 |\n`;
  report += `| 二级 | （一）（二） | 楷体 | 3号 |\n`;
  report += `| 三级 | 1. 2. 3. | 仿宋体 | 3号 |\n`;
  report += `| 四级 | （1）（2） | 仿宋体 | 3号 |\n`;

  report += `\n`;

  // 特殊说明
  if (specialNotes.length > 0) {
    report += `### 特殊说明\n\n`;
    specialNotes.forEach(note => {
      report += `- ${note}\n`;
    });
    report += `\n`;
  }

  // 参考标准
  report += `### 参考标准\n\n`;
  report += `- **GB/T 9704-2012** 《党政机关公文格式》\n`;
  report += `- 幅面：A4型（210mm × 297mm）\n`;
  report += `- 版心：156mm × 225mm\n`;

  return report;
}

export { getLayoutParams, getFontRules, getSpecialNotes };
