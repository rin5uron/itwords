# プロセスログ

プロジェクトの重要な作業履歴を時系列で記録します。

---

## 2026-01-12: ヒーロー画像追加とビルドエラー対応

### 実施内容

#### 1. ゼロデイ攻撃・AESページへのヒーロー画像追加

**背景**:
- ユーザーから2枚のヒーロー画像（ChatGPTで生成）が提供された
- 1枚目: ゼロデイ攻撃のイメージ（攻撃者とユーザーの対比）
- 2枚目: AESのイメージ（共通鍵を持つ二人のユーザー）

**実装手順**:

1. **画像の配置**
   ```bash
   # 元画像をtermsディレクトリにコピー
   cp "public/images/ChatGPT Image 2026年1月11日 15_55_06.png" public/images/terms/zero-day-hero.png
   cp "public/images/ChatGPT Image 2026年1月11日 15_55_09.png" public/images/terms/aes-hero.png
   ```

2. **ゼロデイ攻撃ページ (`app/terms/zero-day/page.tsx`)の更新**
   - 既存のヒーロー画像を新しい画像に置き換え
   - 画像サイズ: 1536x1024 (3:2比率)
   - 配置: TermHeaderの直後、mainセクションの前

3. **AESページ (`app/terms/aes/page.tsx`)の更新**
   - `next/image`をインポート
   - OGP/Twitter Cardメタデータを追加
   - ヒーロー画像セクションを追加（ゼロデイ攻撃ページと同様のスタイル）

4. **画像表示スタイル**
   ```tsx
   <div style={{
     width: '100%',
     maxWidth: '900px',
     margin: '2rem auto',
     borderRadius: '12px',
     overflow: 'hidden',
     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
     maxHeight: '300px'
   }}>
     <Image
       src="/images/terms/[画像名].png"
       alt="..."
       width={1200}
       height={630}
       priority
       style={{
         width: '100%',
         height: '100%',
         objectFit: 'cover',
         objectPosition: 'center',
         display: 'block'
       }}
     />
   </div>
   ```

**コミット**:
```
ゼロデイ攻撃とAESページのヒーロー画像を更新
- ゼロデイ攻撃ページ: 攻撃者とユーザーの対比を表現した新しいヒーロー画像に変更
- AESページ: 共通鍵暗号方式を視覚的に表現したヒーロー画像を追加
- OGP/Twitter Card用のメタデータを更新
```

#### 2. Vercelビルドエラーの対応

**問題1: TypeScriptコンパイルエラー**
```
Type error: Cannot find module './components/GoogleAnalytics'
  at docs/templates/layout-template.tsx:6:29
```

**原因**:
- `docs/templates/`のテンプレートファイルがビルド対象になっていた
- `tsconfig.json`で`docs`ディレクトリが除外されていなかった

**解決**:
```json
// tsconfig.json
"exclude": ["node_modules", "docs"]
```

**問題2: Next.js 15の要件違反**
```
useSearchParams() should be wrapped in a suspense boundary at page "/search"
```

**原因**:
- Next.js 15では`useSearchParams()`をSuspense境界内で使用する必要がある
- `app/search/page.tsx`で直接使用していた

**解決**:
```tsx
// 検索ロジックを別コンポーネントに分離
function SearchResults() {
  const searchParams = useSearchParams()
  // ...検索処理
}

// Suspenseで囲んで使用
export default function SearchPage() {
  return (
    <Suspense fallback={<p>検索中...</p>}>
      <SearchResults />
    </Suspense>
  )
}
```

**コミット**:
```
ビルドエラーを修正
- tsconfig.jsonでdocsディレクトリを除外
- search/page.tsxでuseSearchParams()をSuspenseで囲んで対応
- Next.js 15の要件に準拠
```

### 課題

**画像の見切れ問題**:
- PCでは横長表示になり、画像の上下が見切れる
- 原因: `maxHeight: 300px`固定 + `objectFit: 'cover'`
- 元画像: 1536x1024 (3:2比率)
- 表示: 横幅いっぱい × 高さ300px → アスペクト比が合わない

**対応方針**:
- ユーザーが画像を16:9比率にトリミングして再アップロード予定
- 16:9比率は一般的なアスペクト比で、PCでもスマホでも綺麗に表示される

### 学び

1. **画像のアスペクト比は事前に統一する**
   - デザイン段階で表示領域のアスペクト比を決定
   - 画像生成時に同じ比率で生成するか、トリミングする

2. **Vercelデプロイ前にローカルでビルドチェック**
   - `npm run build`で本番環境と同じチェックを実行
   - 開発サーバーでは検出されないエラーを事前に発見できる

3. **Next.js 15の新要件を把握**
   - `useSearchParams()`などの動的フックは必ずSuspense内で使用
   - クライアントコンポーネントとサーバーコンポーネントの境界を意識

4. **ドキュメント・テンプレートファイルの管理**
   - `tsconfig.json`の`exclude`で明示的に除外
   - ビルド対象とドキュメントを明確に分離

---

**最終更新**: 2026-01-12
