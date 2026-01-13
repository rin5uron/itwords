import Link from 'next/link'
import type { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'

export const metadata: Metadata = {
  title: 'バリデーションとは？初心者向けにわかりやすく解説【実装例付き】 | 実践型IT用語辞典',
  description: 'バリデーション（Validation）とは、入力データが正しいかをチェックする仕組みです。メールアドレス、パスワード、電話番号など、フォーム入力のエラーを防ぐ具体的な実装方法を初心者にもわかりやすく解説します。',
  keywords: ['バリデーション', 'Validation', '入力チェック', 'フォーム', 'バリデーション とは', '初心者', 'わかりやすく', 'HTML5', 'JavaScript', 'フールプルーフ'],
  openGraph: {
    title: 'バリデーションとは？初心者向けにわかりやすく解説【実装例付き】',
    description: 'バリデーションの仕組みと実装方法をわかりやすく解説。フォーム入力エラーを防ぐ方法を学べます。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'バリデーションとは？初心者向けにわかりやすく解説【実装例付き】',
    description: 'バリデーションの仕組みと実装方法をわかりやすく解説。フォーム入力エラーを防ぐ方法を学べます。',
  },
}

export default function ValidationPage() {
  const faqs = [
    {
      question: 'バリデーションとは何ですか？',
      answer: 'バリデーション（Validation）とは、入力されたデータが正しい形式・内容かをチェックする仕組みです。「検証」「妥当性確認」とも呼ばれ、ユーザーの入力ミスやシステムエラーを未然に防ぐために使われます。'
    },
    {
      question: 'バリデーションとフールプルーフの違いは？',
      answer: 'フールプルーフは「誤操作を防ぐ設計思想」という広い概念で、バリデーションはその具体的な実装手段の1つです。フールプルーフを実現する方法として、バリデーション、確認ダイアログ、ボタンの色分けなどがあります。'
    },
    {
      question: 'クライアントサイドとサーバーサイドのバリデーションの違いは？',
      answer: 'クライアントサイドバリデーションはブラウザ上で即座にチェックし、ユーザー体験を向上させます。サーバーサイドバリデーションはサーバーで厳密にチェックし、セキュリティを確保します。両方を組み合わせることが推奨されます。'
    },
    {
      question: 'バリデーションはどこで使われますか？',
      answer: '会員登録フォーム、ログインフォーム、問い合わせフォーム、決済画面、データベース入力など、ユーザーがデータを入力するあらゆる場面で使用されます。'
    }
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="バリデーションとは？初心者向けにわかりやすく解説【実装例付き】"
        description="バリデーションの仕組みと実装方法を初心者向けに解説。入力チェックでエラーを防ぐ方法を学べます。"
        datePublished="2026-01-13"
        dateModified="2026-01-13"
      />

      <TermHeader
        termName="バリデーション"
        reading="ばりでーしょん / Validation"
        icon="fas fa-check-circle"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>バリデーション</strong>（Validation）とは、<strong>入力されたデータが正しい形式・内容かをチェックする仕組み</strong>です。
            「検証」「妥当性確認」とも呼ばれます。
          </p>
          <p>
            例えば、メールアドレス入力欄に「abc」と入力された場合、
            「@」が含まれていないため、<strong>バリデーションエラー</strong>として「正しいメールアドレスを入力してください」と表示します。
          </p>
        </section>

        <section>
          <h2>なぜバリデーションが必要？</h2>
          <p>
            バリデーションは<Link href="/terms/foolproof" style={{ color: '#007bff', textDecoration: 'underline' }}>フールプルーフ</Link>（誤操作防止）を実現する重要な手段です。
          </p>
          <ul>
            <li>
              <strong>ユーザーの入力ミスを防ぐ</strong>：送信後に「エラーでした」と言われるストレスを軽減
            </li>
            <li>
              <strong>システムエラーを防ぐ</strong>：不正なデータがデータベースに保存されるのを防止
            </li>
            <li>
              <strong>セキュリティ対策</strong>：SQLインジェクション、XSSなどの攻撃を防ぐ
            </li>
            <li>
              <strong>データの整合性</strong>：統一された形式でデータを管理
            </li>
          </ul>
        </section>

        <section>
          <h2>バリデーションの種類</h2>

          <h3>1. クライアントサイドバリデーション</h3>
          <p>
            ブラウザ上で即座にチェックする方法。<strong>ユーザー体験が向上</strong>します。
          </p>
          <ul>
            <li><strong>HTML5の標準機能</strong>：required、type、pattern属性など</li>
            <li><strong>JavaScript</strong>：カスタムバリデーションロジック</li>
          </ul>

          <h3>2. サーバーサイドバリデーション</h3>
          <p>
            サーバーで厳密にチェックする方法。<strong>セキュリティ上必須</strong>です。
          </p>
          <ul>
            <li>クライアント側のチェックを回避した悪意ある入力を防ぐ</li>
            <li>データベースに保存する前の最終チェック</li>
          </ul>

          <p>
            <strong>💡 ベストプラクティス</strong>：クライアントとサーバーの<strong>両方</strong>でバリデーションを実装します。
          </p>
        </section>

        <section>
          <h2>実装例：HTML5バリデーション</h2>
          <p>
            <Link href="/terms/html" style={{ color: '#007bff', textDecoration: 'underline' }}>HTML</Link>の標準機能を使った最もシンプルな実装方法です。
          </p>

          <details>
            <summary>サンプルコードを見る (HTML)</summary>
            <div className="code-example">
              <pre>
                <code className="language-html">{`<!-- メールアドレスのバリデーション -->
<input type="email" required
       placeholder="example@example.com">

<!-- 数値のバリデーション（範囲指定） -->
<input type="number" min="1" max="100" required>

<!-- 電話番号のバリデーション（パターン指定） -->
<input type="tel"
       pattern="[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}"
       placeholder="03-1234-5678">

<!-- パスワードのバリデーション（最小文字数） -->
<input type="password" minlength="8" required>

<!-- URLのバリデーション -->
<input type="url" placeholder="https://example.com">`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>実装例：JavaScriptバリデーション</h2>
          <p>
            <Link href="/terms/javascript" style={{ color: '#007bff', textDecoration: 'underline' }}>JavaScript</Link>を使ったカスタムバリデーションの例です。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function validateEmail(email) {
  // メールアドレスの正規表現パターン
  const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (!pattern.test(email)) {
    return {
      valid: false,
      message: '正しいメールアドレスを入力してください'
    };
  }

  return { valid: true };
}

function validatePassword(password) {
  if (password.length < 8) {
    return {
      valid: false,
      message: 'パスワードは8文字以上にしてください'
    };
  }

  // 英数字を含むかチェック
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return {
      valid: false,
      message: 'パスワードは英字と数字を含めてください'
    };
  }

  return { valid: true };
}

// フォーム送信時にバリデーション
document.querySelector('form').addEventListener('submit', (e) => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  const emailResult = validateEmail(email);
  const passwordResult = validatePassword(password);

  if (!emailResult.valid || !passwordResult.valid) {
    e.preventDefault(); // 送信を中止
    alert(emailResult.message || passwordResult.message);
  }
});`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>よくあるバリデーションルール</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>バリデーションルール</th>
                  <th>例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>メールアドレス</strong></td>
                  <td>@を含む、ドメイン形式</td>
                  <td>user@example.com</td>
                </tr>
                <tr>
                  <td><strong>パスワード</strong></td>
                  <td>8文字以上、英数字含む</td>
                  <td>Pass1234</td>
                </tr>
                <tr>
                  <td><strong>電話番号</strong></td>
                  <td>数字とハイフン</td>
                  <td>03-1234-5678</td>
                </tr>
                <tr>
                  <td><strong>郵便番号</strong></td>
                  <td>7桁の数字（ハイフンあり/なし）</td>
                  <td>123-4567</td>
                </tr>
                <tr>
                  <td><strong>URL</strong></td>
                  <td>http://またはhttps://で開始</td>
                  <td>https://example.com</td>
                </tr>
                <tr>
                  <td><strong>日付</strong></td>
                  <td>YYYY-MM-DD形式、有効な日付</td>
                  <td>2026-01-13</td>
                </tr>
                <tr>
                  <td><strong>クレジットカード番号</strong></td>
                  <td>13〜19桁の数字、Luhnアルゴリズム</td>
                  <td>4111-1111-1111-1111</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>バリデーションのベストプラクティス</h2>
          <ul>
            <li>
              <strong>リアルタイムフィードバック</strong>：入力中・フォーカスを外した瞬間にチェック
            </li>
            <li>
              <strong>わかりやすいエラーメッセージ</strong>：「エラー」ではなく「メールアドレスの形式が正しくありません」
            </li>
            <li>
              <strong>エラー箇所を明示</strong>：赤枠、アイコン、エラーメッセージを入力欄の近くに表示
            </li>
            <li>
              <strong>両側でバリデーション</strong>：クライアントとサーバーの両方で実装
            </li>
            <li>
              <strong>ポジティブフィードバック</strong>：正しい入力には緑のチェックマークを表示
            </li>
          </ul>
        </section>

        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語名</th>
                  <th>説明</th>
                  <th>関係性</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/foolproof" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">フールプルーフ</span>
                    </Link>
                  </td>
                  <td>
                    誤操作を未然に防ぐ設計思想
                  </td>
                  <td>
                    バリデーションは<strong>フールプルーフを実現する手段の1つ</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/poka-yoke" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">ポカヨケ</span>
                    </Link>
                  </td>
                  <td>
                    製造業におけるヒューマンエラー防止の仕組み
                  </td>
                  <td>
                    バリデーションは<strong>IT版のポカヨケ</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/html" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">HTML</span>
                    </Link>
                  </td>
                  <td>
                    Webページの構造を作る言語
                  </td>
                  <td>
                    HTML5の<strong>標準バリデーション機能</strong>が使える
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/javascript" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">JavaScript</span>
                    </Link>
                  </td>
                  <td>
                    Webページに動きを付ける言語
                  </td>
                  <td>
                    <strong>カスタムバリデーション</strong>を実装できる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
