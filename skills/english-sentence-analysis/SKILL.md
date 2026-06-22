---
name: english-sentence-analysis
description: Use when the user asks to analyze, parse, break down, or explain the grammar, structure, or meaning of an English sentence — for reading comprehension or grammar learning purposes
---

# 英文句子分析 (English Sentence Analysis)

## 核心思路

面对一个句子，最根本的问题只有三个：

1. **什么意思？** —— 用平实的英语和中文把意思说清楚
2. **怎么搭的？** —— 主干是什么，枝叶怎么挂上去的
3. **能学到什么？** —— 哪些表达、搭配、句型值得带走

不追求学术完备，只求把句子真正读懂。

---

## 分析步骤

### 第一步：释义 (What It Means)

**用简单英语复述** —— 把句子用自己的话重说一遍，检验是否真的理解了。

**给出中文翻译** —— 通顺、准确，不机械直译。

---

### 第二步：结构 (How It's Built)

**找出主干 (Skeleton)：** 主句的主语 + 谓语 +（宾语/补语）。这是句子的脊梁骨，其他的都是挂件。

```
主干：[主语] → [谓语动词] → [宾语/补语]
```

**拆解分支 (Branches)：** 从句、介词短语、非谓语结构，各自挂在哪里、修饰谁。用缩进表示层次：

```
主干：...
  ├── 从句1（原因/时间/定语...）：引导词 + 内容
  │     └── 嵌套从句：...
  └── 从句2：...
```

**关键修饰关系：** 只标出容易看岔或理解关键所在的修饰关系，不要逐词穷举。

---

### 第三步：要点 (What to Take Away)

挑出句中值得学习的语言点，每个用一条简短说明：

- **值得学的表达 (Expression)：** 固定搭配、短语、习语
- **值得学的句型 (Pattern)：** 可复用的句式结构
- **值得注意的语法点 (Grammar point)：** 容易忽略的语法现象

控制在 2–4 条，只标真正有价值的东西。

---

## 输出模板

```
📝 原句
[sentence]

────────────────────
💬 释义

英文复述：...
中文翻译：...

────────────────────
🔧 结构

主干：...
分支：
  ...

────────────────────
📌 要点

• [类别]：[内容]
• ...

────────────────────
💡 继续问，或贴下一个句子。
```

---

## 示例一：简单句

📝 原句
The cat sat on the mat.

────────────────────
💬 释义

英文复述：A cat was sitting on a mat.
中文翻译：猫坐在垫子上。

────────────────────
🔧 结构

主干：The cat → sat
分支：无。on the mat 是介词短语作地点状语，修饰 sat。

────────────────────
📌 要点

• 表达：sat on ——「坐在…上」的基础搭配
• 句型：S + V + 介词短语（地点状语），最基础的英语句型之一

────────────────────
💡 继续问，或贴下一个句子。

---

## 示例二：复杂句

📝 原句
Although the professor who had written the book was widely respected, her argument, which challenged decades of established theory, was ultimately rejected by the committee.

────────────────────
💬 释义

英文复述：The professor wrote a book and was respected. But her argument went against long-held ideas, so the committee rejected it in the end.
中文翻译：这位教授写了一本书并广受尊敬，但她的论点挑战了几十年来根深蒂固的理论，所以最终还是被委员会否决了。

────────────────────
🔧 结构

主干：her argument → was rejected → by the committee
分支：
  ├── 非限制性定语从句（插入）：which challenged decades of established theory — 修饰 her argument，解释这个论点是什么
  └── 让步状语从句：Although the professor was widely respected — 制造对比：尽管教授有威望，论点还是被拒
        └── 限制性定语从句：who had written the book — 修饰 the professor，说明是哪位教授

────────────────────
📌 要点

• 表达：widely respected ——「广受尊敬」
• 表达：challenge established theory ——「挑战既有理论」
• 句型：Although + 让步背景，主句 + 结果 —— 先让步再转折的经典论证句式
• 语法点：非限制性定语从句（which...）用逗号隔开，是附加说明而非限定，去掉不影响主句成立

────────────────────
💡 继续问，或贴下一个句子。
```
