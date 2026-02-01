# 📋 テンプレート使用の必須ルール

**このファイルは、AIが用語ページを作成・更新する際に必ず従うべきルールです。**

---

## 🚨 最重要ルール

### 1. 作業開始前の必須確認
**用語ページを作成・更新する前に、必ず以下を確認すること：**

1. ✅ **README.mdを読む** - プロジェクトの基本原則とワークフローを確認
2. ✅ **テンプレートファイルを読む** - `docs/templates/page-template.tsx`の構造を確認
3. ✅ **既存ページを参考にする** - 同じ構造の既存ページ（例：`app/terms/http/page.tsx`）を確認

### 2. テンプレートへの完全準拠
**テンプレートに書かれている構造は、絶対に変更してはいけません：**

- ✅ インポートの順序
- ✅ **ヘッダーは TermPageHeader 一括**（タイトル → 日付 → このページでわかること → 目次）。TermHeader・PageSummary・TableOfContents・date-info を個別に書かない。
- ✅ コンポーネントの配置順序（TermPageHeader → main → セクション → 関連用語 → FAQAccordion）。main 内に目次・日付ブロックを置かない。
- ✅ セクションの順序（概要 → 日常生活での実例 → 補足セクション → 関連用語 → FAQ）
- ✅ メタデータの形式
- ✅ 構造化データの形式
- ✅ **目次・ヘッダーのスタイルは globals.css の .term-page-header 系・.table-of-contents 系で一括指定。個別ページにインラインで書かない。**

---

## 📝 用語ページ作成時のチェックリスト

### Phase 1: 準備（必須）
- [ ] `readme.md`を読んだ
- [ ] `docs/templates/page-template.tsx`を読んだ
- [ ] 既存の類似ページ（例：`app/terms/http/page.tsx`）を参考にした
- [ ] ユーザーに作業計画を提示し、承認を得た

### Phase 2: ファイル作成（必須）
- [ ] **TermPageHeader** をインポートし、1つだけ使っている（TermHeader・PageSummary・TableOfContents・date-info を個別に書かない）
- [ ] TermPageHeader に `termName` / `reading` / `icon` / `dateCreated` / `dateModified` を渡している。`summaryItems`（このページでわかること）は任意
- [ ] TermPageHeader → `main` の順序で配置している。main 内に目次・日付ブロックを置いていない
- [ ] セクション順序が「概要 → 日常生活での実例 → 補足 → 関連用語 → FAQ」になっている
- [ ] 関連用語セクションに`className="term-comparison"`が付いている
- [ ] 関連用語テーブルに`className="comparison-table"`が付いている
- [ ] 目次・ヘッダーのスタイルを個別ページにインラインで書いていない（globals.css の .term-page-header 系・.table-of-contents 系で一括）

### Phase 3: トップページへの追加（必須）
- [ ] トップページ（`app/page.tsx`）の適切なカテゴリセクションにカードを追加した
- [ ] 新着用語セクション（3つまで）に追加した（必要に応じて）
- [ ] 検索インデックスを更新した（`npm run build-index`）

### Phase 4: 確認（必須）
- [ ] テンプレートの構造と完全に一致しているか確認
- [ ] 既存ページと同じ構造になっているか確認
- [ ] リンターエラーがないか確認
- [ ] トップページに表示されるか確認

---

## 🔍 テンプレート構造の詳細

### 基本構造（変更禁止）
```tsx
import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'  // ← 必須（タイトル・日付・このページでわかること・目次を一括）
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = { ... }

export default function Page() {
  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData type="Article" ... />

      <TermPageHeader
        termName="[用語名]"
        reading="[読み方] / [英語表記]"
        icon="fas fa-[アイコン名]"
        dateCreated="YYYY-MM-DD"
        dateModified="YYYY-MM-DD"
        summaryItems={['[ポイント1]', '[ポイント2]', ...]}  // ← 任意。省略すると「このページでわかること」は非表示
      />

      <main>
        <section>
          <h2>概要</h2>
          ...
        </section>

        <section>
          <h2>日常生活での[用語名]の例</h2>  // ← 2番目のセクション
          ...
        </section>

        {/* 補足セクション */}
        ...

        <section className="term-comparison">  // ← 必須
          <h2>関連用語</h2>
          <div className="comparison-table">  // ← 必須
            <table>...</table>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
```

**スタイル一括指定**: 目次・ヘッダーの見た目は `app/globals.css` の `.term-page-header` / `.term-page-header__date` / `.term-page-header__summary` / `.term-page-header__toc` および `.table-of-contents` 系で一括。個別ページにインラインで書かない。

---

## ⚠️ よくある間違い

### ❌ 間違い例
- **TermPageHeader を使わず、TermHeader・PageSummary・TableOfContents・date-info を個別に書く**
- main 内に目次や日付ブロックを置く
- セクションの順序が違う（「日常生活での実例」が後半にある）
- 関連用語セクションに`className="term-comparison"`がない
- 目次・ヘッダーのスタイルを個別ページにインラインで書く（globals.css で一括すること）
- テンプレートを読まずに作成する
- **トップページに追加し忘れる**
- **検索インデックスを更新し忘れる**

### ✅ 正しい例
- 必ずテンプレートを読んでから作成
- 既存ページを参考にする
- テンプレートの構造を完全に再現する
- トップページにカードを追加する
- 検索インデックスを更新する

---

## 📚 参考ファイル

- **テンプレート**: `docs/templates/page-template.tsx`
- **ヘッダー一括コンポーネント**: `app/components/TermPageHeader.tsx`
- **一括スタイル**: `app/globals.css`（.term-page-header 系・.table-of-contents 系）
- **既存ページ例**: `app/terms/cpu/page.tsx`, `app/terms/http/page.tsx`
- **チェック一覧**: `docs/issues/template-compliance-and-emoji-checklist.md`
- **README**: `readme.md`
- **トップページ**: `app/page.tsx`

---

## 🎯 このルールの目的

1. **一貫性の確保** - すべてのページが同じ構造を持つ
2. **メンテナンス性の向上** - 構造が統一されているため修正が容易
3. **SEO対策** - 構造化データが正しく配置される
4. **ユーザー体験** - 統一されたUI/UX
5. **発見可能性** - トップページと検索インデックスに正しく追加される

---

**最終更新**: 2026-01（TermPageHeader 一括・目次スタイル一括をテンプレに反映）
