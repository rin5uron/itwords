# repository/vercel ページ修正プラン

**目標**: 月500円（10倍）
**戦略**: 2大稼ぎ頭を完璧にして土台化

---

## 📋 repository ページ修正チェックリスト

### 1. 目次を追加（最優先）
**現状**: TableOfContentsコンポーネントがあるのに使われていない

**修正**:
```tsx
import TableOfContents from '@/app/components/TableOfContents'

// TermPageHeaderの直後、AdInArticleの前に追加
<TableOfContents />

<AdInArticle adSlot="2892250316" position="below-toc" />
```

**場所**: page.tsx line 68の前

---

### 2. 冒頭に図解を追加
**現状**: テキストだけで説明開始

**修正**:
1. ダウンロードフォルダの画像を `/public/images/repository-concept.png` に配置
2. セクションの最初（line 71の前）に画像追加:

```tsx
<section>
  <figure className="concept-image">
    <Image
      src="/images/repository-concept.png"
      alt="リポジトリの概念図：ローカルからGitHubへの流れと履歴管理"
      width={800}
      height={450}
      priority
    />
    <figcaption>リポジトリは変更履歴を記録できる「タイムマシン付きの本棚」</figcaption>
  </figure>

  <p>
    <strong>リポジトリ（Repository）</strong>とは...
```

---

### 3. 冒頭を端的に
**現状**: line 72-93で説明が長い

**修正**:
```tsx
<p>
  <strong>リポジトリ（Repository）</strong>とは、
  <strong>プログラムのソースコードやファイルを保存・管理する「保管庫」</strong>です。
  変更履歴を記録できるので、間違えて削除しても過去の状態に戻せます。
</p>
```

**場所**: line 72-92を上記に置き換え

---

### 4. 表を図解に置き換え（優先度中）
**対象**:
- line 101-128: リポジトリ・ディレクトリ・ファイルの違い
- line 154-196: リポジトリとフォルダの違い

**修正案**:
- 1つ目の表 → 図解（ファイル/フォルダ/リポジトリの視覚的な違い）
- 2つ目の表 → 簡略化（重要な3-4行だけ残す）

---

### 5. モバイル広告最適化
**現状**: AdInArticle は適切だが、サイズ確認

**確認事項**:
- AdSenseのレスポンシブ広告が適用されているか
- スマホで潰れて見えないか

---

### 6. 内部リンク追加
**現状**: 一部のみリンク（github, vercel）

**追加が必要**:
- git（line 281で言及されているが、リンクなし）
- commit（line 405で言及）
- branch（line 412で言及）
- clone（line 418で言及）

**修正例**:
```tsx
リポジトリは、<Link href="/terms/git">Git</Link>というバージョン管理システムで管理するためのフォルダです。
```

---

### 7. 関連記事セクション強化
**現状**: line 384-432で関連用語の表

**修正**:
- commit, branch, cloneのページを作成（または既存確認）
- リンクを追加

---

## 📋 vercel ページ修正（同じパターン）

1. 目次追加
2. 冒頭に図解（Vercelのデプロイフロー）
3. 端的な答え「Vercelの読み方は"ヴァーセル"」を最初に
4. モバイル広告最適化
5. 内部リンク追加（deploy, hosting, domain, dns等）

---

## 🖼️ 図解作成ルール

### 配置場所
`/public/images/`

### ファイル名
- `repository-concept.png` - リポジトリの概念図
- `vercel-concept.png` - Vercelの概念図
- `repository-structure.png` - ファイル/フォルダ/リポジトリの違い（オプション）

### デザインルール
- 色: 青〜水色基調（#0066CC, #4DA6FF, #E6F2FF）
- テイスト: アニメ調（既存ページと統一）
- テキスト: 画像内は最小限
- サイズ: 横800px、縦450px程度
- フォーマット: PNG（透過なし）

---

## ⏰ 作業順序（週1-2時間で完了）

### Week 1: repository構造修正（1.5時間）
1. [ ] 目次追加（15分）
2. [ ] 図解画像配置（30分）
3. [ ] 冒頭を端的に（15分）
4. [ ] ローカル確認（30分）

### Week 2: repository内容強化（1.5時間）
1. [ ] 内部リンク追加（30分）
2. [ ] 表を簡略化（30分）
3. [ ] モバイル確認（30分）

### Week 3-4: vercel（同じパターン）

---

## 🚀 次のステップ

1. **今日**: この修正プランをもとに作業開始
2. **目次追加**: TableOfContentsコンポーネント追加（5分で完了）
3. **図解配置**: ダウンロードフォルダの画像を /public/images/ へ
4. **ローカルテスト**: `npm run dev` で確認

---

## 📊 期待される効果

- **目次追加** → 滞在時間+30%, ページ/セッション+0.3
- **図解追加** → 直帰率-15%, 理解度UP
- **端的な答え** → AI回答・強調スニペット狙い
- **内部リンク** → クラスター効果、Google評価UP

**6ヶ月後の目標**:
- repository: 月3,500セッション（現在の5倍）
- vercel: 月500セッション（新規）
- **合計PV**: 15,000/月 → **月500円達成**
