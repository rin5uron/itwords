// app/terms/[term-name]/layout.tsx テンプレート
//
// 【重要】'use client'を使うページ（インタラクティブなデモがある場合）は、
// page.tsxに直接metadataを書けないため、layout.tsxで設定する必要があります。
//
// 使い方:
// 1. このファイルをコピーして app/terms/[term-name]/layout.tsx として保存
// 2. [用語]、[特徴/デモ内容]、[身近な例]、[疑問点]を埋める
// 3. keywordsを追加
//
// 【重要】title/descriptionのルール:
// ✅ title: 「[用語]とは？小学生でもわかる【[特徴/デモ内容]】」
//    - 「| 実践型IT用語辞典」は不要（冗長）
//    - 「小学生でもわかる」で初心者への安心感を演出
//    - 【】で「デモ付き」「実演付き」など実践性をアピール
//    - 50文字以内推奨
//
// ✅ description: 「[身近な例]で使われる[用語]を[時間]で理解。[疑問点]を[方法]で学べます。」
//    - 身近な例（LINE、Wi-Fi、YouTube等）で親近感
//    - 「3分で読めます」など時間明示で心理的ハードル低減
//    - 「動かして学べる」「体験できる」など実践性を強調
//    - 「結局何？」「どう使う？」など初心者の疑問に応える
//    - 120文字以内推奨
//
// ❌ 避けるべき表現:
//    - 「初心者向けに解説」（当たり前なので不要）
//    - 「わかりやすく説明」（具体性がない）
//    - 「〜を学べます」だけ（魅力が薄い）
//

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
  description: '[身近な例]で使われる[用語]を3分で理解。「[疑問点]」を[動かして/体験して]学べます。',
  keywords: [
    '[用語名]',
    '[用語名] とは',
    '[用語名] 使い方',
    // ページ固有のキーワードを追加
  ],
  openGraph: {
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[身近な例]で使われる[用語]を3分で理解。[方法]で学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[身近な例]で使われる[用語]を3分で理解。[方法]で学べます。',
  },
}

export default function [TermName]Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
