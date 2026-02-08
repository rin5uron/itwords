'use client'

import Link from 'next/link'
import Image from 'next/image'
import FoolProofDemo from '@/components/FoolProofDemo'
import ConfirmDialogDemo from '@/components/ConfirmDialogDemo'
import InputValidationDemo from '@/components/InputValidationDemo'
import DisabledUIDemo from '@/components/DisabledUIDemo'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export default function FoolProofPage() {
  const faqs = [
    {
      question: 'なぜフールプルーフが重要なのですか？',
      answer: '人は必ずミスをするからです。ミスを「注意不足」で片付けると事故やトラブルにつながります。設計で防げば、ユーザーのストレスが減り、トラブル・問い合わせが減り、安全性・信頼性が上がります。'
    }
  ]

  return (
    <div className="container">
      <StructuredData
        type="FAQPage"
        faqs={faqs}
      />
      <StructuredData
        type="Article"
        title="【身近な例で学ぶ】フールプルーフとは？意味や目的をわかりやすく解説"
        description="フールプルーフは、誤操作や誤入力を未然に防ぐ設計思想です。削除確認ダイアログ、入力制限、ボタンの色分けなど具体例と実践デモで、ユーザーが間違えにくいシステムを作る考え方を初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-02-04"
      />
      <TermPageHeader

        termName="フールプルーフ"
        reading="ふーるぷるーふ / Fool Proof"
        icon="fas fa-shield-alt"
        dateCreated="2024-01-07"
        dateModified="2026-02-03"
        summaryItems={[
          'フールプルーフとは「ミスを防ぐ」設計思想',
          'Webサイト・Webサービスで身近に使われている',
          '身近な例（日常生活・ITサービス）からの理解',
          'よくある質問（FAQ）'
        ]}
        heroImage={
          <div
            style={{
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto clamp(24px, 4vw, 32px) auto',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              aspectRatio: '3 / 2',
            }}
          >
            <Image
              src="/images/terms/foolproof-hero.jpeg"
              alt="フールプルーフ - 確認ダイアログなどミスを防ぐ設計をわかりやすく学ぶ"
              width={1536}
              height={1024}
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </div>
        }
      />

      <main>
        <section>
          <h2>1. フールプルーフとは</h2>
          <p>
            <strong>フールプルーフ</strong>（Foolproof）とは、
            <strong>「利用者が間違えても、重大なミスや事故につながらないようにする設計思想」</strong>のことです。
          </p>
          <p>
            「注意力」や「慣れ」に頼らず、
            <strong>設計そのものがミスを防ぐ</strong>ことを目的とします。
            関連概念として<a href="https://www.toyota.co.jp/jpn/company/history/75years/data/automotive_business/production/system/explanation03.html" target="_blank" rel="noopener noreferrer">トヨタ自動車 - トヨタ生産方式「自働化」</a>（誤品取り出し防止などポカヨケの考え方）も参照してください。
          </p>
        </section>

        <section>
          <h2>2. Webの世界でのフールプルーフ</h2>
          <p>
            実は、私たちが毎日使っているWebはフールプルーフだらけです。
          </p>
          <h3>Webでよくあるフールプルーフの例</h3>
          <ul>
            <li>入力内容が正しくないと送信できない</li>
            <li>必須項目が未入力だとエラーが表示される</li>
            <li>条件を満たすまでボタンが押せない</li>
            <li>操作前に確認ダイアログが表示される</li>
          </ul>

          <h3>入力制限・ボタンの無効化</h3>
          <p>
            ユーザーが「間違えないように頑張る」のではなく、
            <strong>間違えた状態では先に進めない設計</strong>になっています。
          </p>
          <FoolProofDemo />

          <h3>その他のフールプルーフ例</h3>
          <p>
            他にもWebでよく使われるフールプルーフの例を、アコーディオン形式で紹介します。
          </p>
          <div className="demo-accordion">
            <details>
              <summary>
                確認ダイアログ（confirm）
              </summary>
              <div style={{ padding: '18px', borderTop: '1px solid #e2e8f0' }}>
                <p>
                  削除・送信・購入前などに「本当に実行しますか？」と確認する仕組みです。
                </p>
                <ConfirmDialogDemo />
                <details style={{ marginTop: '1rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.95em', color: '#0d9488' }}>サンプルコードを見る</summary>
                  <div className="code-example" style={{ marginTop: '0.5rem' }}>
                    <pre><code className="language-javascript">{`const confirmed = confirm('本当に削除しますか？');
if (confirmed) {
  // 削除処理を実行
}`}</code></pre>
                  </div>
                </details>
              </div>
            </details>

            <details>
              <summary>
                入力形式のガイド・リアルタイム警告
              </summary>
              <div style={{ padding: '18px', borderTop: '1px solid #e2e8f0' }}>
                <p>
                  メールアドレス形式でないと警告表示、文字数オーバーで即時エラー表示する仕組みです。
                </p>
                <InputValidationDemo />
                <details style={{ marginTop: '1rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.95em', color: '#0d9488' }}>サンプルコードを見る</summary>
                  <div className="code-example" style={{ marginTop: '0.5rem' }}>
                    <pre><code className="language-html">{`<!-- メールアドレス形式のみ許可 -->
<input type="email">

<!-- 文字数制限 -->
<input maxlength="20">`}</code></pre>
                  </div>
                </details>
              </div>
            </details>

            <details>
              <summary>
                操作できないUI（非表示・グレーアウト）
              </summary>
              <div style={{ padding: '18px', borderTop: '1px solid #e2e8f0' }}>
                <p>
                  権限がない操作は最初から表示しない、条件未達成の操作は選択不可にする仕組みです。
                </p>
                <DisabledUIDemo />
                <details style={{ marginTop: '1rem' }}>
                  <summary style={{ cursor: 'pointer', fontSize: '0.95em', color: '#0d9488' }}>サンプルコードを見る</summary>
                  <div className="code-example" style={{ marginTop: '0.5rem' }}>
                    <pre><code className="language-html">{`<!-- disabled属性でボタンを無効化 -->
<button disabled>送信</button>`}</code></pre>
                    <pre><code className="language-css">{`button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}`}</code></pre>
                  </div>
                </details>
              </div>
            </details>
          </div>
        </section>

        <section>
          <h2>3. 身近なフールプルーフの例</h2>
          <p>
            Webも日常も、考え方は同じです。
          </p>
          <h3>ITサービスの例</h3>
          <ul>
            <li><strong>ATM</strong>：金額未入力だと次に進めない</li>
            <li><strong>スマホアプリ</strong>：未設定項目があると保存できない</li>
          </ul>
          <h3>日常生活の例</h3>
          <ul>
            <li><strong>電子レンジ</strong>：ドアが開いていると動かない</li>
            <li><strong>USB</strong>：上下逆では挿さらない（Type-Cは両面挿し可能）</li>
          </ul>
        </section>

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
                    <Link href="/terms/validation" className="term-name">
                      バリデーション
                    </Link>
                  </td>
                  <td>フールプルーフを実現する代表的な手段の一つ</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/poka-yoke" className="term-name">
                      ポカヨケ
                    </Link>
                  </td>
                  <td>製造業におけるフールプルーフの概念</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/html" className="term-name">
                      HTML
                    </Link>
                  </td>
                  <td>HTML5の標準機能でフールプルーフを実装できる</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/javascript" className="term-name">
                      JavaScript
                    </Link>
                  </td>
                  <td>確認ダイアログやカスタム制御で誤操作を防ぐ</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/css" className="term-name">
                      CSS
                    </Link>
                  </td>
                  <td>ボタンの色分けやdisabled状態のスタイリング</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>


        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
