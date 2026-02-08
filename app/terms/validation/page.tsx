'use client'

import Link from 'next/link'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import ValidationDemo from '@/components/ValidationDemo'
const metadata = {
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
      answer: 'バリデーション（Validation）とは、入力されたデータが正しい形式・内容かをチェックする仕組みです。「検証」「妥当性確認」とも呼ばれ、ユーザーの入力ミスやシステムエラーを未然に防ぐために使われます。メールアドレス、パスワード、電話番号など、様々な項目で使用されます。'
    },
    {
      question: 'バリデーションとフールプルーフの違いは？',
      answer: 'フールプルーフは「誤操作を防ぐ設計思想」という広い概念で、バリデーションはその具体的な実装手段の1つです。フールプルーフを実現する方法として、バリデーション、確認ダイアログ、ボタンの色分けなどがあります。バリデーションはフールプルーフを実装するための代表的な技術です。'
    },
    {
      question: 'クライアントサイドとサーバーサイドのバリデーションの違いは？',
      answer: 'クライアントサイドバリデーションはブラウザ上で即座にチェックし、ユーザー体験を向上させます。HTML5のrequired属性やJavaScriptで実装します。サーバーサイドバリデーションはサーバーで厳密にチェックし、セキュリティを確保します。クライアント側のチェックを回避した悪意ある入力を防ぐため、必ず両方を実装してください。'
    },
    {
      question: 'リアルタイムバリデーションとは？',
      answer: 'リアルタイムバリデーションとは、ユーザーが入力している最中やフォーカスを外した瞬間にバリデーションを実行する方法です。送信ボタンを押す前にエラーを検出できるため、ユーザー体験が大幅に向上します。ただし、重い処理（API呼び出しなど）は debounce（遅延実行）を使ってパフォーマンスを最適化する必要があります。'
    },
    {
      question: 'バリデーションでよくある失敗は？',
      answer: '主な失敗例は、①クライアントサイドのみでバリデーション（セキュリティリスク）、②曖昧なエラーメッセージ（ユーザーが修正方法が分からない）、③パスワードバリデーションが厳しすぎる（離脱率が上がる）、④送信後にまとめてエラー表示（ユーザーストレス）、⑤正規表現のミス（先頭と末尾のチェック忘れ）などです。'
    },
    {
      question: 'バリデーションはどこで使われますか？',
      answer: '会員登録フォーム、ログインフォーム、問い合わせフォーム、決済画面、データベース入力、ECサイトの商品注文、予約フォーム、アンケートなど、ユーザーがデータを入力するあらゆる場面で使用されます。特に個人情報や決済情報を扱う場面では必須です。'
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

      <TermPageHeader
        termName="バリデーション"
        reading="ばりでーしょん / Validation"
        icon="fas fa-check-circle"
        dateCreated="2026-01-13"
        dateModified="2026-01-13"
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
          <h2>体験してみよう：リアルタイムバリデーション</h2>
          <p>
            実際にフォームに入力して、バリデーションがどのように動作するか体験してみましょう。
            入力中にリアルタイムでエラーチェックが実行されます。
          </p>

          <ValidationDemo />

          <p style={{ marginTop: '1rem', color: '#666', fontSize: '14px' }}>
            💡 <strong>ポイント</strong>：正しい入力には緑色のチェックマーク、エラーには赤色の警告が表示されます。
            これが<Link href="/terms/foolproof" style={{ color: '#007bff', textDecoration: 'underline' }}>フールプルーフ</Link>（誤操作防止）の実装例です。
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
          <h2>よくある失敗例とその対策</h2>
          <p>
            バリデーション実装で陥りがちな失敗例と、その対策方法を表で整理しました。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '25%' }}>失敗例</th>
                  <th style={{ width: '35%' }}>問題点</th>
                  <th style={{ width: '40%' }}>対策</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>❌ クライアントサイドのみ</strong></td>
                  <td>JavaScriptを無効化するとバリデーションが回避される</td>
                  <td><strong>必ずサーバーサイドでも検証</strong><br />クライアント=体験向上、サーバー=セキュリティ</td>
                </tr>
                <tr>
                  <td><strong>❌ 曖昧なエラーメッセージ</strong></td>
                  <td>「エラーが発生しました」では修正方法が分からない</td>
                  <td><strong>具体的に指摘</strong><br />例：「メールアドレスに@が含まれていません」</td>
                </tr>
                <tr>
                  <td><strong>❌ パスワードが厳しすぎる</strong></td>
                  <td>「大文字・小文字・数字・記号・12文字以上」で離脱率が上がる</td>
                  <td><strong>8文字以上+英数字</strong>程度に留める<br />または強度メーターを表示</td>
                </tr>
                <tr>
                  <td><strong>❌ 送信後にまとめて表示</strong></td>
                  <td>全部入力してから「5箇所エラー」と言われるとストレス</td>
                  <td><strong>リアルタイムバリデーション</strong>で入力直後に表示</td>
                </tr>
                <tr>
                  <td><strong>❌ 正規表現のミス</strong></td>
                  <td>先頭(^)と末尾($)のチェックがないと部分一致で通る</td>
                  <td><strong>^と$で囲む</strong><br />例：<code>/^[0-9]+$/</code></td>
                </tr>
              </tbody>
            </table>
          </div>

          <details style={{ marginTop: '1.5rem' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>正規表現の具体例を見る</summary>
            <div className="code-example" style={{ marginTop: '1rem' }}>
              <pre>
                <code className="language-javascript">{`// ❌ 悪い例：先頭と末尾のチェックがない
const badPattern = /@/;
// "abc@def@ghi" もマッチしてしまう

// ✅ 良い例：^と$で囲む
const goodPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

// ❌ 悪い例：数字のみのチェックが甘い
const badNumber = /[0-9]+/;
// "abc123def" もマッチしてしまう

// ✅ 良い例：^と$で囲む
const goodNumber = /^[0-9]+$/;`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>バリデーションのベストプラクティス</h2>

          <h3>✅ 実装時のチェックリスト</h3>
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
            <li>
              <strong>アクセシビリティ</strong>：エラーメッセージをスクリーンリーダーでも読めるように（aria-invalid、aria-describedby）
            </li>
          </ul>

          <h3>🚀 パフォーマンス最適化</h3>
          <p>
            リアルタイムバリデーションは便利ですが、<strong>入力のたびに処理が実行される</strong>ため、
            重い処理（API呼び出しなど）は<strong>debounce（遅延実行）</strong>を使います。
          </p>
          <details>
            <summary>debounceの実装例を見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// 使用例：500ms後に実行
const validateWithDebounce = debounce((value) => {
  // 重い処理（API呼び出しなど）
  console.log('バリデーション実行:', value);
}, 500);

input.addEventListener('input', (e) => {
  validateWithDebounce(e.target.value);
});`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>実務でよく使うバリデーション実装</h2>

          <h3>1. クレジットカード番号のバリデーション（Luhnアルゴリズム）</h3>
          <p>
            クレジットカード番号は単なる数字チェックではなく、<strong>Luhnアルゴリズム</strong>という
            チェックサム検証を使います。
          </p>
          <details>
            <summary>Luhnアルゴリズムの実装を見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function validateCreditCard(cardNumber) {
  // ハイフンやスペースを削除
  const digits = cardNumber.replace(/[^0-9]/g, '');

  // 13〜19桁でないとエラー
  if (digits.length < 13 || digits.length > 19) {
    return false;
  }

  // Luhnアルゴリズム
  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
}

// テスト
console.log(validateCreditCard('4111-1111-1111-1111')); // true
console.log(validateCreditCard('1234-5678-9012-3456')); // false`}</code>
              </pre>
            </div>
          </details>

          <h3>2. 郵便番号から住所を自動入力</h3>
          <p>
            日本の郵便番号（7桁）をバリデーションし、APIで住所を取得して自動入力する実装です。
          </p>
          <details>
            <summary>郵便番号バリデーション+自動入力の実装を見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`async function validateAndFillAddress(postalCode) {
  // 郵便番号のバリデーション（7桁の数字）
  const pattern = /^[0-9]{7}$/;
  const cleanedCode = postalCode.replace(/-/g, '');

  if (!pattern.test(cleanedCode)) {
    return {
      valid: false,
      message: '郵便番号は7桁の数字で入力してください'
    };
  }

  try {
    // 郵便番号APIで住所を取得
    const response = await fetch(
      \`https://zipcloud.ibsnet.co.jp/api/search?zipcode=\${cleanedCode}\`
    );
    const data = await response.json();

    if (data.results) {
      const address = data.results[0];
      return {
        valid: true,
        prefecture: address.address1,
        city: address.address2,
        town: address.address3
      };
    } else {
      return {
        valid: false,
        message: '該当する住所が見つかりませんでした'
      };
    }
  } catch (error) {
    return {
      valid: false,
      message: '住所の取得に失敗しました'
    };
  }
}`}</code>
              </pre>
            </div>
          </details>

          <h3>3. パスワード強度メーター</h3>
          <p>
            厳しいバリデーションルールの代わりに、<strong>パスワード強度を視覚化</strong>する方法です。
          </p>
          <details>
            <summary>パスワード強度メーターの実装を見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function calculatePasswordStrength(password) {
  let strength = 0;

  // 長さによる加点
  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  if (password.length >= 16) strength += 1;

  // 文字種による加点
  if (/[a-z]/.test(password)) strength += 1;  // 小文字
  if (/[A-Z]/.test(password)) strength += 1;  // 大文字
  if (/[0-9]/.test(password)) strength += 1;  // 数字
  if (/[^a-zA-Z0-9]/.test(password)) strength += 1;  // 記号

  // 強度を判定
  if (strength <= 2) return { level: 'weak', label: '弱い', color: '#dc3545' };
  if (strength <= 5) return { level: 'medium', label: '普通', color: '#ffc107' };
  return { level: 'strong', label: '強い', color: '#28a745' };
}

// 使用例
const password = 'MyP@ssw0rd';
const result = calculatePasswordStrength(password);
console.log(\`パスワード強度: \${result.label}\`);
// 強度バーを表示
document.getElementById('strength-bar').style.width =
  \`\${(result.strength / 7) * 100}%\`;
document.getElementById('strength-bar').style.backgroundColor = result.color;`}</code>
              </pre>
            </div>
          </details>
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
                <tr>
                  <td>
                    <Link href="/terms/cookie" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">Cookie</span>
                    </Link>
                  </td>
                  <td>
                    ブラウザにデータを保存する仕組み
                  </td>
                  <td>
                    <strong>入力データの一時保存</strong>に使える
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/localstorage" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">LocalStorage</span>
                    </Link>
                  </td>
                  <td>
                    ブラウザにデータを永続保存
                  </td>
                  <td>
                    <strong>フォーム入力の下書き保存</strong>に使える
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/api" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">API</span>
                    </Link>
                  </td>
                  <td>
                    外部サービスとの連携窓口
                  </td>
                  <td>
                    <strong>郵便番号APIでの住所バリデーション</strong>など
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
