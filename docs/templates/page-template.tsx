// app/[content]/page.tsx テンプレート
// コンテンツページのテンプレート（SEO対策と構造化データを含む）
//
// ============================================
// 記事の目的・想定ターゲット
// ============================================
//
// 【記事の目的】
// - IT用語を初心者にもわかりやすく解説する
// - 「読んで終わり」ではなく「動かして理解する」を実現
// - 検索で見つけてもらえるようにSEO対策を施す
// - AdSense審査を通過できる品質のコンテンツを提供
//
// 【想定ターゲット】
// - プログラミング初心者（全くプログラミングを勉強したことがない人）
// - ITパスポート・基本情報技術者試験の受験者
// - 小学生・中学生でも理解できるレベルを目指す
// - 専門用語にアレルギーがある人
//
// ============================================
// ページ構成の流れ（確定版）
// ============================================
//
// 【基本構成の流れ】
// 1. 概要セクション
//    - 用語の説明（難しくしすぎない）
//    - 必要であれば概要を補助するデモを入れる
//
// 2. 日常生活での実例セクション
//    - 日常生活で使われている例を書く
//    - 日常で使われない用語の場合は実務での使われ方に置き換える
//
// 3. 体験デモセクション（任意）
//    - 日常生活の実例を元に書けると良い
//    - 「必ず入れる」ものではない
//    - 内容に応じて臨機応変に判断する
//
// 4. 補足セクション（任意・固定しない）
//    - 必要に応じて補足説明、図、比較、注意点、追加デモなど何でも入れてOK
//
// 5. コード実装セクション（必要な場合のみ）
//    - 日常の例 or デモとちゃんと対応している場合だけ
//    - 「何を実装しているか分からないコード」は置かない
//
// 6. 深掘りセクション（任意）
//    - 実践的なアドバイス
//    - よくある間違い
//    - つまずきポイント
//    - 深掘り説明
//
// 7. 更新履歴セクション（更新日を変更した場合のみ）
//    - 更新履歴を簡潔に記載
//
// 8. 関連用語セクション
//    - 類似用語との比較（任意）
//    - 関連用語の一覧
//
// 9. FAQセクション（任意）
//    - よくある質問と回答
//
// 【全体の考え方】
// - 上はざっと理解したい人向け
// - 下に行くほど深掘りしたい人向け
// - 読者が途中で離脱してもある程度理解できる構成を目指す
// - ページごとに柔軟に変えてOK（必須ではないセクションは任意）
//
// ============================================
// レスポンシブ対応の重要ポイント
// ============================================
// 【必須】体験デモやインラインスタイルを使う場合:
// 1. 固定幅（width: '400px'など）を使わない
//    → maxWidth: '100%' を使う
// 2. flexboxは flexWrap: 'wrap' を追加
//    → スマホで折り返す
// 3. padding/marginは clamp() を使う
//    → padding: 'clamp(15px, 3vw, 20px)' のように
// 4. フォントサイズも clamp() を使う
//    → fontSize: 'clamp(14px, 3.5vw, 16px)' のように
// 5. 黄色い警告枠などは1ページ内に収まるように
//    → overflowX: 'auto' や wordWrap: 'break-word' を使う
// 6. ボタンは flex: '1' と minWidth を組み合わせる
//    → スマホで適切なサイズになる
//
// ============================================
// 作成日・更新日のルール
// ============================================
//
// 【作成日（datePublished）】
// - 最初に公開した日を固定する
// - Search Console / 公開履歴を見て初回公開日を確認
// - 一度設定したら変更しない
// - 形式: "YYYY-MM-DD"（例: "2024-01-09"）
//
// 【更新日（dateModified）】
// - 内容に意味のある修正をしたときのみ更新する
// - 以下の場合は更新日を変更する：
//   - 情報の追加・修正（新しい実例、FAQ追加など）
//   - 構成の大幅な変更（セクション追加・削除など）
//   - 誤字脱字の修正（ただし、大幅な修正の場合のみ）
//   - デモの追加・改善
// - 以下の場合は更新日を変更しない：
//   - 軽微な誤字脱字の修正
//   - リンクの修正のみ
//   - スタイルの微調整のみ
// - 形式: "YYYY-MM-DD"（例: "2026-01-16"）
//
// 【更新履歴】
// - 更新日を変更した場合は、更新履歴を追記する
// - 更新履歴は簡潔でOK（例：表現調整、構成整理、実例追加など）
// - 更新履歴は記事の最後（関連用語の前）に配置
//
// ============================================
// トップページ表示ルール
// ============================================
// - 新着用語: 3つまで表示する
// - 人気用語: 適宜更新（6つ程度）
// - すべての用語: カテゴリ別に整理して表示

import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import FAQAccordion from '@/app/components/FAQAccordion'

// メタデータ（SEO対策）
//
// 【重要】title/descriptionのルール（2026-01-19更新）:
// ✅ title: 「[用語]とは？小学生でもわかる【[特徴/デモ内容]】」
//    - 「| 実践型IT用語辞典」は不要（冗長）
//    - 「小学生でもわかる」等のワードで初心者への安心感を演出
//    - 【】で「デモ付き」「実演付き」など実践性をアピール
//    - 50文字以内推奨
//
// ✅ description: 「[用語]とは？[魅力的フレーズ]。[具体的内容1]、[具体的内容2]、[具体的内容3]まで初心者向けに解説します。」
//    - **最初の60文字が最重要**：魅力的な言葉を前面に配置
//    - 魅力的フレーズ例：「デモで体験」「図解で今すぐ理解」「実例から学ぶ」
//    - 具体的内容を後半に配置（使い方、仕組み、違い、実装方法など）
//    - 120文字以内推奨
//
// 【descriptionのベストプラクティス（githubページから学んだ知見）】
//    ✅ 良い例:
//       「GitHubとは？小学生でもわかる図解とデモで、使い方と仕組みを今すぐ理解。プログラムのコード保存・共有・チーム開発ができるプラットフォームです。」
//       → 最初に「小学生でもわかる図解とデモで、今すぐ理解」という魅力
//       → 後半に具体的な説明
//
//    ❌ 悪い例:
//       「GitHubは、ソースコードをバージョン管理し、世界中の開発者と共有・協力できるプラットフォームです。使い方を解説します。」
//       → 説明が長すぎて魅力が埋もれる
//       → 「解説します」は当たり前で魅力がない
//
// ❌ 避けるべき表現:
//    - 「初心者向けに解説」（当たり前なので不要）
//    - 「わかりやすく説明」（具体性がない）
//    - 「〜を学べます」だけ（魅力が薄い）
//    - 「3分で読めます」（時間は言い過ぎ）
//
export const metadata: Metadata = {
  title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
  description: '[用語]とは？[魅力的フレーズ（デモで体験/図解で今すぐ理解/実例から学ぶ）]。[具体的内容1]、[具体的内容2]、[具体的内容3]まで初心者向けに解説します。',
  keywords: [
    '[用語名]',
    '[用語名] とは',
    '[用語名] 使い方',
    '[用語名] 初心者',
    '[用語名] わかりやすく',
    '[用語名] 小学生',
    '[用語名] デモ',
    '[用語名] 実例',
    // ページ固有のキーワードを追加（競合が狙わないロングテール重視）
  ],
  openGraph: {
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[用語]とは？[魅力的フレーズ]。[具体的内容1]、[具体的内容2]、[具体的内容3]まで初心者向けに解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '[用語]とは？小学生でもわかる【[特徴/デモ内容]】',
    description: '[用語]とは？[魅力的フレーズ]。[具体的内容1]、[具体的内容2]、[具体的内容3]まで初心者向けに解説します。',
  },
}

export default function ContentPage() {
  // FAQ構造化データ用（任意）
  const faqs = [
    {
      question: '[よくある質問1]',
      answer: '[回答1]',
    },
    {
      question: '[よくある質問2]',
      answer: '[回答2]',
    },
    // 必要に応じて追加
  ]

  return (
    <div className="container">
      {/* FAQ構造化データ（FAQがある場合） */}
      <StructuredData type="FAQPage" faqs={faqs} />

      {/* Article構造化データ */}
      <StructuredData
        type="Article"
        title="[ページタイトル]"
        description="[ページの説明]"
        datePublished="YYYY-MM-DD"
        dateModified="YYYY-MM-DD"
      />
      {/*
        【重要】作成日・更新日の設定
        - datePublished: 最初に公開した日（Search Consoleで確認）
        - dateModified: 内容に意味のある修正をした日（なければ作成日と同じ）
        - 形式: "YYYY-MM-DD"（例: "2024-01-09"）
      */}

      {/* BreadcrumbList構造化データ（SEO対策） */}
      {/*
        【重要】パンくずリストの追加（2026-01-19追加）
        - Googleがサイト構造を理解しやすくなる
        - 検索結果にパンくずリストが表示される
        - 内部リンク評価が向上
      */}
      {/* <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'ホーム', url: 'https://itwords.jp' },
          { name: '用語一覧', url: 'https://itwords.jp/terms' },
          { name: '[用語名]', url: 'https://itwords.jp/terms/[slug]' }
        ]}
      /> */}

      <TermHeader
        termName="[用語名]"
        reading="[読み方] / [英語表記]"
        icon="fas fa-[アイコン名]"
      />

      {/* 作成日・更新日（目立たないデザイン） */}
      <div style={{
        display: 'flex',
        gap: '15px',
        fontSize: '13px',
        color: '#999',
        marginTop: '10px',
        marginBottom: '20px',
        paddingBottom: '15px',
        borderBottom: '1px solid #eee'
      }}>
        <span>作成日: YYYY-MM-DD</span>
        <span>更新日: YYYY-MM-DD</span>
      </div>

      {/* ヒーロー画像（タイトルの下に配置・任意） */}
      {/* <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto 2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxHeight: '300px'
      }}>
        <Image
          src="/images/terms/[用語名]-hero.jpg"
          alt="[用語名]のイメージ"
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
      </div> */}

      {/* 目次（h2が4つ以上ある場合に自動表示） */}
      <TableOfContents />

      <main>
        {/* ============================================
            【セクション1】概要
            ============================================ */}
        <section>
          <h2>概要</h2>

          {/*
            ============================================
            【重要】「このページで分かること」ボックス（2026-01-19追加）
            ============================================
            - SEO効果：直帰率低下、滞在時間向上
            - UX効果：ユーザーが期待値を持って読み進められる
            - githubページで効果実証済み
            - 4つのポイントを箇条書きで明示
          */}
          <div style={{
            padding: '15px',
            backgroundColor: '#e6f7f5',
            borderRadius: '8px',
            marginBottom: '20px',
            borderLeft: '4px solid #14b8a6'
          }}>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#0d9488' }}>
              📚 このページで分かること
            </p>
            <ul style={{ marginTop: '10px', marginBottom: 0 }}>
              <li>[ポイント1：用語の基本的な意味]</li>
              <li>[ポイント2：日常での使われ方や実例]</li>
              <li>[ポイント3：デモや体験できる内容]</li>
              <li>[ポイント4：関連知識や応用]</li>
            </ul>
          </div>

          <p>
            <strong>[用語名]</strong>とは、<strong>[簡潔な説明]</strong>です。
          </p>
          <p>
            [詳細な説明。難しくしすぎない。最低500文字以上（推奨：1,000文字以上）を目指してください。]
          </p>

          {/* 
            ============================================
            【補助デモ】概要の下に配置（任意）
            ============================================
            - 概要を補助するデモを入れる場合がある
            - 比較・図・軽いシミュレーションなど
            - 必ずしも体験操作でなくてもいい
            - 文字が多いイメージを避けるため、概要の直後に配置するのが効果的
          */}
          {/* <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>[用語名]を比較で理解してみよう</h3>
            <p>[デモの説明]</p>
            <[DemoComponent] />
          </div> */}
        </section>

        {/* ============================================
            【セクション2】日常生活での実例
            ============================================
            - 日常生活で使われている例を書く
            - 日常で使われない用語の場合は：
              - よくあるパターン
              - 実務での使われ方などの実例に置き換える
            - 3つ以上の実例があると充実したコンテンツになる
            
            実装例（queue/page.tsx を参考）:
          */}
        {/* 実装例1: シンプルなリスト形式（queue/page.tsx を参考） */}
        <section>
          <h2>日常生活での[用語名]の例</h2>
          <p>
            [用語名]は私たちが毎日使っている[サービス/場面]の裏側で活躍しています。
            普段意識していないだけで、実はたくさんの場面で利用されているのです。
          </p>

          <h3>1. [実例1のタイトル]</h3>
          <p>
            [実例1の説明。具体的な場面での使い方を説明。]
          </p>

          <h3>2. [実例2のタイトル]</h3>
          <p>
            [実例2の説明。具体的な場面での使い方を説明。]
          </p>

          <h3>3. [実例3のタイトル]</h3>
          <p>
            [実例3の説明。具体的な場面での使い方を説明。]
          </p>
        </section>

        {/* 実装例2: details/summaryを使った折りたたみ形式（json/page.tsx を参考） */}
        {/* <section>
          <h2>日常生活での[用語名]の例</h2>
          <p>
            [用語名]は私たちが毎日使っている[サービス/場面]の裏側で、データのやり取りに使われています。
            目には見えませんが、[用語名]がなければ今のインターネットは成り立ちません。
          </p>

          <div className="faq-accordion" style={{ marginTop: '20px' }}>
            <div className="faq-item">
              <details style={{ marginBottom: '15px' }}>
                <summary style={{
                  padding: '15px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  listStyle: 'none'
                }}>
                  <span style={{ marginRight: '10px' }}>1. [実例1のタイトル]</span>
                </summary>
                <div style={{
                  padding: '15px',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderTop: 'none',
                  borderRadius: '0 0 5px 5px'
                }}>
                  <p>
                    [実例1の説明。具体的な場面での使い方を説明。]
                  </p>
                  {/* コード例がある場合 */}
                  {/* <div className="code-example" style={{ marginTop: '15px' }}>
                    <pre>
                      <code className="language-[言語]">{`[コード例]`}</code>
                    </pre>
                  </div> */}
                </div>
              </details>
            </div>

            <div className="faq-item">
              <details style={{ marginBottom: '15px' }}>
                <summary style={{
                  padding: '15px',
                  backgroundColor: '#f9f9f9',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  listStyle: 'none'
                }}>
                  <span style={{ marginRight: '10px' }}>2. [実例2のタイトル]</span>
                </summary>
                <div style={{
                  padding: '15px',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderTop: 'none',
                  borderRadius: '0 0 5px 5px'
                }}>
                  <p>
                    [実例2の説明。具体的な場面での使い方を説明。]
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section> */}

        {/* ============================================
            【セクション3】体験デモ（任意）
            ============================================
            - 「必ず入れる」ものではない
            - 内容に応じて臨機応変に判断する、シミュレーションでも良い
            - 日常生活の実例を元に書けると良い
            - 説明した内容をわかりやすくシミュレーションする形でもいい
            
            実装例1: 概要の直下に配置（デモコンポーネント使用）
            【重要】デモコンポーネントを使う場合:
            - コンポーネント内でレスポンシブ対応されていることを確認
            - コンポーネントが黄色い警告枠を使う場合、1ページ内に収まるようにする
          */}
        {/* <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <h3>[用語名]の仕組みを体験してみよう</h3>
          <p>
            下のデモで[用語名]の動きを体験できます。実際に手を動かすことで、[何が理解できるか]が理解しやすくなります。
          </p>
          <div style={{
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            <[DemoComponent] />
          </div>
        </div> */}

        {/* 実装例2: 独立したセクションとして配置（レスポンシブ対応） */}
        {/* <section>
          <h2>[用語名]の仕組みを体験してみよう</h2>
          <p>
            [デモの説明。何を体験できるのか、何が学べるのかを明確に。]
          </p>
          <div style={{
            maxWidth: '100%',
            overflowX: 'auto',
            marginTop: '20px'
          }}>
            <[DemoComponent] />
          </div>
        </section> */}

        {/* 実装例3: インラインの簡単なデモ（レスポンシブ対応版） */}
        {/* 
          【重要】レスポンシブ対応のポイント:
          - 固定幅（width）を使わない
          - flexboxは flex-wrap を使うか、スマホで縦並びにする
          - padding/marginは相対値（%）やmax-widthを使う
          - 黄色い警告枠は1ページ内に収まるようにする（overflow: auto など）
        */}
        {/* <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <h3>[用語名]の[何か]を体験してみよう</h3>
          <p>
            下のデモで[何を体験できるか]を確認できます。
            実際に手を動かすことで、[用語名]の動作が理解しやすくなります。
          </p>
          <div style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: 'clamp(15px, 3vw, 20px)',
            marginTop: '20px',
            backgroundColor: '#f8f9fa',
            maxWidth: '100%',
            overflowX: 'auto'
          }}>
            {/* ステップ表示（レスポンシブ対応） */}
            <div style={{ marginTop: '20px' }}>
              {steps.map((step, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}
                >
                  <div style={{
                    width: 'clamp(35px, 8vw, 40px)',
                    height: 'clamp(35px, 8vw, 40px)',
                    borderRadius: '50%',
                    backgroundColor: index <= currentStep ? step.color : '#ccc',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(16px, 4vw, 20px)',
                    flexShrink: 0
                  }}>
                    {index <= currentStep ? step.icon : '○'}
                  </div>
                  <div style={{ flex: '1', minWidth: '200px' }}>
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: 'clamp(14px, 3.5vw, 16px)',
                      color: index <= currentStep ? step.color : '#999' 
                    }}>
                      {step.title}
                    </h4>
                    <p style={{ 
                      margin: '5px 0 0 0', 
                      fontSize: 'clamp(12px, 3vw, 14px)',
                      color: '#666' 
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* ボタン（レスポンシブ対応） */}
            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              marginTop: '20px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={nextStep}
                disabled={currentStep >= steps.length - 1}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: currentStep >= steps.length - 1 ? '#ccc' : '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: currentStep >= steps.length - 1 ? 'not-allowed' : 'pointer',
                  flex: '1',
                  minWidth: '120px'
                }}
              >
                {currentStep >= steps.length - 1 ? '完了' : '次のステップ'}
              </button>
              <button
                onClick={resetSteps}
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(15px, 4vw, 20px)',
                  fontSize: 'clamp(14px, 3.5vw, 16px)',
                  backgroundColor: '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  flex: '1',
                  minWidth: '120px'
                }}
              >
                リセット
              </button>
            </div>
          </div>
        </div> */}

        {/* 実装例4: 警告メッセージ（レスポンシブ対応・1ページ内に収まる） */}
        {/* <div style={{
          padding: 'clamp(12px, 3vw, 15px)',
          backgroundColor: '#fff3cd',
          border: '2px solid #ffc107',
          borderRadius: '8px',
          marginTop: '15px',
          marginBottom: '15px',
          maxWidth: '100%',
          wordWrap: 'break-word',
          overflowWrap: 'break-word'
        }}>
          <p style={{ 
            margin: 0, 
            fontSize: 'clamp(13px, 3.2vw, 14px)', 
            fontWeight: 'bold', 
            color: '#856404',
            lineHeight: '1.5'
          }}>
            ⚠️ [警告メッセージ]
          </p>
        </div> */}

        {/* ============================================
            【セクション4】体験デモの下（固定しない）
            ============================================
            - 固定しない
            - 必要に応じて以下を自由に追加：
              - 補足説明
              - 図
              - 比較
              - 注意点
              - 追加デモ
              - 何でも入れてOK
            
            実装例: 特徴セクション（vercel/page.tsx を参考）
          */}
        {/* <section>
          <h2>[用語名]の特徴</h2>

          <h3>1. [特徴1のタイトル]</h3>
          <p>
            [特徴1の説明]
          </p>

          <h3>2. [特徴2のタイトル]</h3>
          <p>
            [特徴2の説明]
          </p>

          <h3>3. [特徴3のタイトル]</h3>
          <p>
            [特徴3の説明]
          </p>
        </section> */}

        {/* 実装例: ポイントセクション（queue/page.tsx を参考） */}
        {/* <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              <strong>[ポイント1の用語]</strong>: [説明]
            </li>
            <li>
              <strong>[ポイント2の用語]</strong>: [説明]
            </li>
            <li>
              [ポイント3の説明]
            </li>
          </ul>
        </section> */}

        {/* 実装例: 比較表セクション */}
        {/* <section>
          <h2>[用語名]と他のサービスの比較</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>サービス</th>
                  <th>特徴</th>
                  <th>向いている用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>[用語名]</strong></td>
                  <td>[特徴]</td>
                  <td>[用途]</td>
                </tr>
                <tr>
                  <td>[比較対象1]</td>
                  <td>[特徴]</td>
                  <td>[用途]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        {/* 実装例: フレックスボックスレイアウト（レスポンシブ対応） */}
        {/* 
          【重要】flexboxを使う場合のレスポンシブ対応:
          - flexWrap: 'wrap' を追加してスマホで折り返す
          - スマホでは flexDirection: 'column' にする
          - gap を使って間隔を調整（marginより安全）
          - clamp() を使ってフォントサイズやパディングを調整
        */}
        {/* <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(5px, 2vw, 10px)',
          padding: 'clamp(12px, 3vw, 15px)',
          backgroundColor: '#fff',
          borderRadius: '8px',
          border: '1px solid #ddd',
          marginTop: '20px'
        }}>
          <div style={{ 
            flex: '1', 
            minWidth: '150px',
            textAlign: 'center' 
          }}>
            <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', marginBottom: '8px' }}>🔍</div>
            <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', color: '#ea9b8a' }}>
              [項目1]
            </div>
            <div style={{ fontSize: 'clamp(11px, 2.8vw, 12px)', color: '#666', marginTop: '5px' }}>
              [説明1]
            </div>
          </div>
          <div style={{ 
            fontSize: 'clamp(16px, 4vw, 20px)', 
            color: '#999', 
            margin: '0 clamp(5px, 2vw, 10px)',
            flexShrink: 0
          }}>
            →
          </div>
          <div style={{ 
            flex: '1', 
            minWidth: '150px',
            textAlign: 'center',
            opacity: 0.5 
          }}>
            <div style={{ fontSize: 'clamp(20px, 5vw, 24px)', marginBottom: '8px' }}>💻</div>
            <div style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 'bold', color: '#8abdea' }}>
              [項目2]
            </div>
            <div style={{ fontSize: 'clamp(11px, 2.8vw, 12px)', color: '#666', marginTop: '5px' }}>
              [説明2]
            </div>
          </div>
        </div> */}

        {/* ============================================
            【セクション5】コード実装（必要な場合のみ）
            ============================================
            - 必要な場合のみ入れる
            - 日常の例 or デモとちゃんと対応している場合だけ
            - 「何を実装しているか分からないコード」は置かない
            - コードの説明を詳しく書く
            
            実装例（queue/page.tsx を参考）:
          */}
        <section>
          <h2>コードで実装してみよう：[実例のタイトル]</h2>
          <p>
            さっき説明した「[実例のタイトル]」の例を、そのままコードで実装してみましょう。
            [何を実装するのかを明確に説明。]
          </p>
          <p>
            <strong>このコードで実装していること</strong>:
          </p>
          <ul>
            <li>[実装内容1]</li>
            <li>[実装内容2]</li>
            <li>[実装内容3]</li>
          </ul>

          <details>
            <summary>
              [実装内容]を実装 <strong>(JavaScript)</strong>
            </summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// [コードの説明]
// 例: コンビニのレジに並ぶ人を管理するキュー
const registerQueue = [];

// お客さんが来たら列の後ろに並ぶ（Enqueue）
registerQueue.push('田中さん');
registerQueue.push('佐藤さん');

console.log('現在の列:', registerQueue);
// 出力: ['田中さん', '佐藤さん']

// 会計が終わった人を列の先頭から取り出す（Dequeue）
const servedCustomer = registerQueue.shift();
console.log('会計終了:', servedCustomer); // "田中さん"

console.log('残りの列:', registerQueue);
// 出力: ['佐藤さん']`}</code>
              </pre>
            </div>
          </details>

          <p className="note" style={{ marginTop: '20px' }}>
            <strong>💡 ポイント：</strong>
            このコードは、さっき説明した「[実例のタイトル]」の仕組みをそのまま実装しています。
            [コードから学べることを説明。]
          </p>
        </section>

        {/* ============================================
            【セクション6】ページの後半（深掘り）
            ============================================
            - 上はざっと理解したい人向け
            - 下に行くほど深掘りしたい人向け
            - 読者が途中で離脱してもある程度理解できる構成を目指す
            - 必要に応じて以下を追加：
              - 実践的なアドバイス
              - よくある間違い
              - つまずきポイント
              - 深掘り説明
          */}
        {/* 実践的なアドバイスセクション（任意） */}
        {/* <section>
          <h2>実践的なアドバイス</h2>
          <p>
            [初心者向けの使い方、学習の進め方、次のステップなど]
          </p>
          
          <h3>[アドバイス1のタイトル]</h3>
          <p>
            [アドバイス1の内容]
          </p>
          
          <h3>[アドバイス2のタイトル]</h3>
          <p>
            [アドバイス2の内容]
          </p>
        </section> */}

        {/* よくある間違いと対処法セクション（任意） */}
        {/* <section>
          <h2>よくある間違いと対処法</h2>
          <p>
            [初心者がよく間違えるポイント、対処法、注意点など]
          </p>
          
          <h3>間違い1: [間違いの内容]</h3>
          <p>
            [間違いの説明]
          </p>
          <p>
            <strong>対処法：</strong>[対処法の説明]
          </p>
          
          <h3>間違い2: [間違いの内容]</h3>
          <p>
            [間違いの説明]
          </p>
          <p>
            <strong>対処法：</strong>[対処法の説明]
          </p>
        </section> */}

        {/* 深掘り説明セクション（任意） */}
        {/* <section>
          <h2>[用語名]の深掘り</h2>
          <p>
            [技術的な詳細、実装時の注意点、パフォーマンスの考慮など]
          </p>
          
          <h3>[深掘りトピック1]</h3>
          <p>
            [詳細な説明]
          </p>
          
          <h3>[深掘りトピック2]</h3>
          <p>
            [詳細な説明]
          </p>
        </section> */}

        {/*
          【重要】外部リンクと内部リンクの戦略（2026-01-19更新）

          1. 外部リンク（E-E-A-T対策）
             - 公式ドキュメント、MDN、Wikipediaなどの信頼できるソースへリンク
             - 文章内に自然に埋め込む
             - 個人ブログや競合サイトへのリンクは避ける
             例：
             <p>
               詳しくは<a href="https://example.com/official-docs" target="_blank" rel="noopener noreferrer">公式ドキュメント</a>で確認できます。
             </p>

          2. 内部リンク（トピッククラスター戦略）
             - 本文中に関連用語への自然なリンクを挿入
             - 「ピラーページ」として他の用語から集約される構造を意識
             - 最低3〜5つの内部リンクを目標
             例：
             <p>
               <Link href="/terms/api">API</Link>を使うことで、<Link href="/terms/json">JSON</Link>形式でデータを取得できます。
             </p>
        */}

        {/* ============================================
            【セクション7】更新履歴（更新日を変更した場合のみ）
            ============================================
            - 更新日を変更した場合のみ表示
            - 更新履歴は簡潔でOK
            - 関連用語の前に配置
          */}
        {/* 更新履歴セクション（更新日を変更した場合のみ追加） */}
        {/* <section>
          <h2>更新履歴</h2>
          <ul>
            <li>
              <strong>YYYY-MM-DD</strong>: [更新内容の説明]
              <br />
              <small style={{ color: '#666' }}>
                例: 表現調整、構成整理、実例追加、FAQ追加など
              </small>
            </li>
            <li>
              <strong>YYYY-MM-DD</strong>: [更新内容の説明]
            </li>
          </ul>
        </section> */}

        {/* ============================================
            【セクション8】最後にまとめる
            ============================================
            - 類似用語
            - 関連用語
            - FAQ（あれば）
            - をまとめて閉める
          */}
        {/* 類似用語との比較セクション（任意） */}
        {/* <section className="term-comparison">
          <h2>[用語名]と類似用語の違い</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>特徴</th>
                  <th>違い</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="term-name">[用語名]</span>
                  </td>
                  <td>[特徴]</td>
                  <td>[説明]</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/[類似用語]" className="term-name">
                      [類似用語]
                    </Link>
                  </td>
                  <td>[特徴]</td>
                  <td>[違いの説明]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section> */}

        {/* 関連用語セクション（任意） */}
        {/* 
          重要：関連用語セクションは必ず以下の形式で統一すること
          - section要素に className="term-comparison" を付与
          - div要素に className="comparison-table" を付与
          - table要素を使用（ul/li形式は使用しない）
          - 用語名には className="term-name" を付与
          - リンク可能な用語は Link コンポーネントで囲む
          - 最低3行以上（対象用語を含む）を推奨
        */}
        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/[用語1]" className="term-name">
                      [関連用語1]
                    </Link>
                  </td>
                  <td>[説明1]</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/[用語2]" className="term-name">
                      [関連用語2]
                    </Link>
                  </td>
                  <td>[説明2]</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">[関連用語3（リンクなし）]</span>
                  </td>
                  <td>[説明3]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQセクション（FAQがある場合） */}
        <FAQAccordion faqs={faqs} />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; {new Date().getFullYear()} [サイト名]</p>
      </footer>
    </div>
  )
}

