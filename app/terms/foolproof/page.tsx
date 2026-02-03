'use client'

import Link from 'next/link'
import FoolProofDemo from '@/components/FoolProofDemo'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export default function FoolProofPage() {
  const faqs = [
    {
      question: 'フールプルーフとは何ですか？',
      answer: 'フールプルーフとは、ユーザーの誤操作や誤入力を未然に防ぐための設計思想です。人間は誰でもミスをするという前提に立ち、間違えにくいシステムを作ることを目指します。「Fool（間抜け）」でも「Proof（防げる）」という意味から名付けられました。'
    },
    {
      question: 'フールプルーフの身近な例を教えてください',
      answer: '日常生活では、洗濯機の蓋が開いていると動作しない仕組み、USB Type-Cの上下どちらでも挿せる設計、ATMのカード挿入口の形状制限などがあります。IT分野では、削除前の確認ダイアログ、メールアドレス形式のバリデーション、危険なボタンの色分け（削除は赤など）が代表的です。'
    },
    {
      question: 'フールプルーフとフェイルセーフの違いは？',
      answer: 'フールプルーフは誤操作を操作前・操作中に未然に防ぐ設計で、対象はユーザーのミスです。一方、フェイルセーフは故障や異常が発生した後に安全な状態になる設計で、対象はシステムの故障です。作動するタイミングと目的が異なりますが、両方を併用することでより高い安全性を実現できます。'
    },
    {
      question: 'Webサイトでフールプルーフを実装するには？',
      answer: 'JavaScriptのconfirm()関数で確認ダイアログを表示、HTML5のtype属性やpattern属性で入力制限、CSSでボタンの色分け、必須項目をrequired属性で指定するなどの方法があります。また、自動保存機能やゴミ箱機能で「やり直せる」仕組みを用意することも重要です。'
    },
    {
      question: 'なぜフールプルーフが重要なのですか？',
      answer: 'ユーザーの誤操作によるデータ損失やトラブルを防ぎ、ユーザーエクスペリエンスを向上させることができます。特に重要な操作（削除、決済、送信など）ほど、フールプルーフの実装が必要です。また、サポートコストの削減や、ユーザーの信頼獲得にもつながります。'
    },
    {
      question: 'ポカヨケとフールプルーフの関係は？',
      answer: 'ポカヨケは製造業におけるフールプルーフの概念で、トヨタ生産方式で提唱されました。作業者のヒューマンエラーを防止する仕組みや工夫を指します。部品の向き固定、治具の色分け、カウントセンサーなどが代表例で、ITシステム開発にも応用できる考え方です。'
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
        description="フールプルーフ（Fool Proof）は、誤操作や誤入力を未然に防ぐ設計思想です。削除確認ダイアログ、入力制限、ボタンの色分けなど具体例と実践デモで、ユーザーが間違えにくいシステムを作る考え方を初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-02-01"
      />
      <TermPageHeader
        termName="フールプルーフ"
        reading="ふーるぷるーふ / Fool Proof"
        icon="fas fa-shield-alt"
        dateCreated="2024-01-07"
        dateModified="2026-02-01"
        summaryItems={[
          'フールプルーフとは「ミスを防ぐ」設計思想',
          '身近な例：電子レンジ、ATM、USBなど',
          'Web開発での実装デモを体験できる',
          'フェイルセーフ、ポカヨケとの違いがわかる'
        ]}
      />

      <main>
        <section>
          <h2>フールプルーフとは？</h2>
          <p>
            <strong>フールプルーフ</strong>（Fool Proof）とは、ユーザーの誤操作やうっかりミスを
            <strong>未然に防ぐ</strong>ための設計思想のことです。
            <br />
            「Fool（愚か者）」でも「Proof（耐えられる）」という言葉通り、人間は誰でも間違えるという前提に立ち、そもそもミスが起きにくいようにシステムをデザインすることを目指します。
          </p>
        </section>

        <section>
          <h2>【体験デモ】削除前の確認</h2>
          <p>
            フールプルーフの最も代表的な例が、重要な操作の前に行う確認です。以下のボタンを押して、誤操作を防ぐ仕組みを体験してみましょう。
          </p>
          <FoolProofDemo />
        </section>

        <section>
          <h2>フールプルーフの身近な例</h2>
          <p>
            フールプルーフは、私たちの身の回りの様々な製品やサービスに活かされています。
          </p>
          
          <h3>日常生活の例</h3>
          <ul>
            <li>
              <strong>電子レンジ</strong>: 扉が閉まっていないと動作しない。マイクロ波が漏れるのを防ぎます。
            </li>
            <li>
              <strong>ATMのカード挿入口</strong>: 決まった向きでしかカードが入らない。カードの破損や読み取りエラーを防ぎます。
            </li>
            <li>
              <strong>USB Type-C</strong>: コネクタの上下を気にせず挿せる。接続の失敗やストレスをなくします。
            </li>
          </ul>

          <h3>Web・ITサービスの例</h3>
          <ul>
            <li>
              <strong>入力フォーム</strong>: メールアドレスの形式が違うとエラーが出る（バリデーション）。
            </li>
            <li>
              <strong>SNSの投稿ボタン</strong>: 一度クリックすると、処理が終わるまでボタンが押せなくなる。二重投稿を防ぎます。
            </li>
            <li>
              <strong>パスワード表示機能</strong>: 「目」のアイコンを押すと、入力したパスワードを確認できる。
            </li>
          </ul>

          <details>
            <summary>その他の身近な例を見る</summary>
            <ul style={{ marginTop: '1rem' }}>
              <li><strong>洗濯機</strong>: 蓋が閉まらないと脱水が始まらない。</li>
              <li><strong>自動車</strong>: ブレーキを踏まないとエンジンがかからない（AT車）。</li>
              <li><strong>薬のPTP包装</strong>: 一錠ずつしか取り出せない。誤飲や過剰摂取を防ぐ。</li>
              <li><strong>Googleドキュメント</strong>: 文字を編集すると自動で保存される。保存忘れを防ぐ。</li>
            </ul>
          </details>
        </section>

        <section className="term-comparison">
          <h2>関連用語との違い</h2>
          <p>
            フールプルーフには、似たような目的を持つ関連用語があります。違いを理解することで、より深く概念を掴むことができます。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語</th>
                  <th>目的</th>
                  <th>タイミング</th>
                  <th>対象</th>
                  <th>具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>フールプルーフ</strong></td>
                  <td>ミスを<strong>未然に防ぐ</strong></td>
                  <td>操作前・操作中</td>
                  <td>ユーザーの誤操作</td>
                  <td>削除確認ダイアログ</td>
                </tr>
                <tr>
                  <td><strong>フェイルセーフ</strong></td>
                  <td>異常時に<strong>安全を保つ</strong></td>
                  <td>異常発生後</td>
                  <td>システムの故障</td>
                  <td>停電時にエレベーターが最寄り階で停止</td>
                </tr>
                <tr>
                  <td><strong>ポカヨケ</strong></td>
                  <td>作業ミスを<strong>物理的に防ぐ</strong></td>
                  <td>作業中</td>
                  <td>作業者のヒューマンエラー</td>
                  <td>部品が正しい向きでしかはまらない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem' }}>
            <strong>フェイルセーフ</strong>は「故障」した後の安全を考え、<strong>フールプルーフ</strong>は「正常時」のユーザーのミスを防ぐ点で異なります。また、<strong>ポカヨケ</strong>は主に製造現場で使われる言葉で、フールプルーフの考え方を物理的な仕組みで実現するものです。
          </p>
        </section>

        <section>
          <h2>なぜフールプルーフは重要か？</h2>
          <p>
            優れたフールプルーフ設計は、ユーザーとサービス提供者の両方にメリットをもたらします。
          </p>
          <ul>
            <li>
              <strong>ユーザーの満足度向上</strong>: 「使いやすい」「安心できる」と感じ、ストレスなくサービスを利用できます。
            </li>
            <li>
              <strong>ビジネス上の損失防止</strong>: ユーザーの誤操作による機会損失（例：フォーム入力中の離脱）や、データ破損などのトラブルを防ぎます。
            </li>
            <li>
              <strong>サポートコストの削減</strong>: 「操作を間違えた」という問い合わせが減り、サポート業務の負担を軽減します。
            </li>
          </ul>
        </section>

        <section>
          <h2>Web開発での実装方法</h2>
          <p>
            Webサイトでフールプルーフを実装する代表的な方法をいくつか紹介します。
          </p>
          <details>
            <summary>サンプルコードを見る (HTML / CSS / JavaScript)</summary>
            <div style={{ marginTop: '1rem' }}>
              <h4>1. 確認ダイアログ (JavaScript)</h4>
              <p>
                重要な操作の前に<code>confirm()</code>で確認を取ります。
              </p>
              <div className="code-example">
                <pre><code className="language-javascript">{`const isConfirmed = confirm('本当に削除しますか？');
if (isConfirmed) {
  // 削除処理を実行
}`}</code></pre>
              </div>

              <h4 style={{ marginTop: '1.5rem' }}>2. 入力制限 (HTML)</h4>
              <p>
                <code>input</code>タグの属性で、入力できる値の種類や形式を制限します。
              </p>
              <div className="code-example">
                <pre><code className="language-html">{`<!-- 必須項目にする -->
<input type="text" required>

<!-- メールアドレス形式のみ許可 -->
<input type="email">

<!-- 1から10までの数値のみ許可 -->
<input type="number" min="1" max="10">`}</code></pre>
              </div>

              <h4 style={{ marginTop: '1.5rem' }}>3. ボタンの無効化 (CSS + HTML)</h4>
              <p>
                入力条件が満たされるまで、送信ボタンを押せないようにします。
              </p>
              <div className="code-example">
                <pre><code className="language-css">{`.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}`}</code></pre>
                <pre><code className="language-html">{`<!-- disabled属性でボタンを無効化 -->
<button class="submit-button" disabled>送信</button>`}</code></pre>
              </div>
            </div>
          </details>
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
                  <td><Link href="/terms/validation" className="term-name">バリデーション</Link></td>
                  <td>フールプルーフを実現する代表的な手段の一つ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/poka-yoke" className="term-name">ポカヨケ</Link></td>
                  <td>製造業におけるフールプルーフの概念</td>
                </tr>
                <tr>
                  <td><Link href="/terms/html" className="term-name">HTML</Link></td>
                  <td>HTML5の標準機能でフールプルーフを実装できる</td>
                </tr>
                <tr>
                  <td><Link href="/terms/javascript" className="term-name">JavaScript</Link></td>
                  <td>確認ダイアログやカスタム制御で誤操作を防ぐ</td>
                </tr>
                <tr>
                  <td><Link href="/terms/css" className="term-name">CSS</Link></td>
                  <td>ボタンの色分けやdisabled状態のスタイリング</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
