# Google AdSense申請ガイド

## 📋 申請前のチェックリスト

### ✅ 必須項目（すべて完了している必要があります）

1. **サイトが公開されている**
   - ✅ サイトURL: `https://itwords.jp`
   - ✅ Vercelでデプロイ済み

2. **プライバシーポリシーがある**
   - ✅ `/privacy` ページが存在
   - ✅ AdSenseに関する記載がある

3. **利用規約がある**
   - ✅ `/terms` ページが存在

4. **お問い合わせページがある**
   - ✅ `/contact` ページが存在

5. **コンテンツが充実している**
   - ✅ 複数の用語ページがある（16ページ以上）
   - ✅ オリジナルコンテンツである

6. **Google Search Consoleに登録済み**
   - ✅ サイトマップ送信済み
   - ⚠️ インデックス登録状況を確認

7. **Google Analytics設定済み**
   - ✅ 測定ID: `G-BEWDYZKGLH`
   - ⚠️ 本番環境で正しく動作しているか確認

---

## 🚀 AdSense申請手順

### ステップ1: Googleアカウントの準備

1. **Googleアカウントにログイン**
   - AdSense申請に使用するGoogleアカウントでログイン
   - 個人アカウントでも申請可能

2. **支払い情報の準備**
   - 後で必要になりますが、申請時点では不要です

---

### ステップ2: AdSenseサイトにアクセス

1. **Google AdSenseにアクセス**
   - URL: https://www.google.com/adsense/
   - 「今すぐ始める」ボタンをクリック

2. **サイトURLを入力**
   - `https://itwords.jp` を入力
   - 「続行」をクリック

---

### ステップ3: 申請情報の入力

#### 3-1. サイトの詳細情報

- **サイトURL**: `https://itwords.jp`
- **サイトの言語**: 日本語
- **サイトのカテゴリ**: 
  - 「教育」または「技術・コンピュータ」を選択
  - 「IT・プログラミング」などが近い

#### 3-2. コンテンツの説明

**推奨する説明文（参考）**:
```
実践型IT用語辞典は、ITパスポートや基本情報技術者試験でよく出る用語を、
初心者向けにわかりやすく解説するサイトです。
各用語ページでは、実際に手を動かして体験できるデモを通じて、
IT技術の「なぜ？」を直感的に理解できるようにしています。
API、JSON、HTTP/HTTPS、Cookie、フレームワーク、GitHubなど、
Webプログラミングに必要なIT用語を幅広くカバーしています。
```

#### 3-3. 収益化の方法

- **広告の表示**: 「はい」を選択
- **広告の種類**: 自動広告（推奨）を選択

---

### ステップ4: サイトの確認

1. **AdSenseコードの取得**
   - Googleから提供されるコードをコピー
   - 形式: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>`

2. **サイトにコードを追加**
   - 後述の「AdSenseコードの実装方法」を参照

3. **サイトの確認をリクエスト**
   - 「サイトを確認しました」をクリック

---

### ステップ5: 審査待ち

1. **審査期間**
   - 通常: 1〜2週間
   - 長い場合: 1ヶ月以上かかることもある

2. **審査中の注意事項**
   - サイトの内容を変更しない（大幅な変更は避ける）
   - プライバシーポリシーや利用規約を削除しない
   - サイトを公開状態に保つ

3. **審査結果の確認**
   - AdSenseダッシュボードで確認
   - メールでも通知が届く

---

## 💻 AdSenseコードの実装方法

### Next.js 15での実装

#### 1. AdSenseコンポーネントの作成

`app/components/GoogleAdSense.tsx` を作成:

```typescript
'use client'

import Script from 'next/script'

export default function GoogleAdSense({ 
  adClientId 
}: { 
  adClientId: string 
}) {
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adClientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
```

#### 2. layout.tsxに追加

`app/layout.tsx` を編集:

```typescript
import GoogleAdSense from './components/GoogleAdSense'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const AD_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_ID

  return (
    <html lang="ja">
      <body>
        {GA_ID && <GoogleAnalytics GA_ID={GA_ID} />}
        {AD_CLIENT_ID && <GoogleAdSense adClientId={AD_CLIENT_ID} />}
        {children}
      </body>
    </html>
  )
}
```

#### 3. 環境変数の設定

**Vercelの環境変数に追加**:
- 変数名: `NEXT_PUBLIC_ADSENSE_ID`
- 値: `ca-pub-XXXXXXXXXX`（AdSenseから取得したコードの`client=`の後の部分）

**ローカル開発用（`.env.local`）**:
```
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX
```

---

## ⚠️ 申請時の注意点

### 避けるべきこと

1. **コピーコンテンツ**
   - 他のサイトからコピーした内容はNG
   - すべてオリジナルコンテンツである必要がある

2. **不適切なコンテンツ**
   - 違法な内容、暴力的な内容、アダルトコンテンツなど

3. **クリックを促す行為**
   - 「広告をクリックしてください」などの誘導はNG
   - 審査落ちの原因になる

4. **未完成のサイト**
   - コンテンツが少なすぎる（最低10ページ以上推奨）
   - 「工事中」などのページが多すぎる

### 推奨されること

1. **充実したコンテンツ**
   - ✅ 現在16ページ以上の用語ページがある
   - ✅ 各ページにオリジナルの解説がある

2. **ナビゲーションが明確**
   - ✅ トップページから各用語ページにアクセスできる
   - ✅ フッターにプライバシーポリシーへのリンクがある

3. **モバイル対応**
   - ✅ レスポンシブデザイン対応済み

4. **更新頻度**
   - 定期的にコンテンツを追加すると良い

---

## 📊 申請後の確認事項

### 審査通過後

1. **広告の表示確認**
   - サイトに広告が表示されるか確認
   - 広告が表示されない場合は、コードの実装を確認

2. **収益の確認**
   - AdSenseダッシュボードで収益を確認
   - 最初は収益が少ないのが普通

3. **パフォーマンスの最適化**
   - 広告の配置を調整
   - ユーザー体験を損なわないように注意

---

## 🔍 よくある質問

### Q1: 審査に落ちたらどうする？

**A**: 審査結果のメールに理由が記載されていることが多いです。主な理由：
- コンテンツが不十分
- プライバシーポリシーが不適切
- サイトが未完成

改善後、30日後に再申請可能です。

### Q2: 申請中にサイトを更新しても大丈夫？

**A**: 軽微な更新（誤字修正、新規ページ追加など）は問題ありません。ただし、大幅な変更（デザイン変更、URL変更など）は避けた方が良いです。

### Q3: 複数のサイトを同時に申請できる？

**A**: 1つのAdSenseアカウントで複数のサイトを管理できます。ただし、最初の申請は1サイトずつ行うことを推奨します。

### Q4: 収益はいつから発生する？

**A**: 審査通過後、広告が表示され、ユーザーがクリックすると収益が発生します。最初の支払いは、収益が$100（約15,000円）に達した時点です。

---

## 📝 申請時のチェックリスト（最終確認）

申請ボタンを押す前に、以下を確認してください：

- [ ] サイトが正常に表示される（`https://itwords.jp`）
- [ ] プライバシーポリシーが存在し、AdSenseに関する記載がある
- [ ] 利用規約が存在する
- [ ] お問い合わせページが存在する
- [ ] コンテンツが10ページ以上ある（現在16ページ以上 ✅）
- [ ] すべてのコンテンツがオリジナルである
- [ ] モバイル対応している
- [ ] Google Search Consoleに登録済み
- [ ] AdSenseコードをサイトに追加した（申請後すぐに追加）

---

## 🎯 次のステップ

1. **AdSenseコードの実装**
   - 上記の手順に従ってコードを追加
   - デプロイして動作確認

2. **申請の提出**
   - Google AdSenseサイトで申請を提出

3. **審査待ち**
   - 1〜2週間待つ
   - 審査結果を確認

4. **審査通過後**
   - 広告の表示を確認
   - 収益のモニタリング

---

## 📚 参考リンク

- [Google AdSense公式サイト](https://www.google.com/adsense/)
- [AdSenseプログラムポリシー](https://support.google.com/adsense/answer/48182)
- [AdSenseヘルプセンター](https://support.google.com/adsense/)

---

**最終更新**: 2026年1月9日

