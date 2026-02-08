import Link from 'next/link'
import type { Metadata } from 'next'
import LocalStorageDemo from '@/components/LocalStorageDemo'
import LocalStorageComparisonDemo from '@/components/LocalStorageComparisonDemo'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】',
  description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。使い方や注意点を実践デモで初心者にもわかりやすく解説します。',
  keywords: ['ローカルストレージ', 'localStorage', 'Web Storage', 'JavaScript', 'ブラウザ', 'データ保存', '初心者', 'わかりやすく', 'localStorage とは'],
  openGraph: {
    title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/localstorage',
  },
}

export default function LocalStoragePage() {
  const faqs = [
    {
      question: 'ローカルストレージ（localStorage）とは何ですか？',
      answer: 'ローカルストレージとは、ブラウザに小さなデータを保存しておける場所のことです。JavaScriptからアクセスでき、ページを閉じても情報が残るのが特徴です。'
    },
    {
      question: 'ローカルストレージとCookieの違いは何ですか？',
      answer: 'ローカルストレージはブラウザ内だけに保存され、サーバーに送られませんが、Cookieは毎回サーバーに送信されます。また、ローカルストレージの方が保存容量が大きく（約5-10MB）、有効期限がありません。'
    },
    {
      question: 'ローカルストレージに保存できるデータ型は何ですか？',
      answer: 'ローカルストレージは文字列しか保存できません。オブジェクトや配列を保存したい場合は、JSON.stringify()で文字列に変換してから保存し、JSON.parse()で元に戻します。'
    },
    {
      question: 'ローカルストレージとセッションストレージの違いは？',
      answer: 'ローカルストレージはブラウザを閉じても永続的にデータが残りますが、セッションストレージはタブを閉じるとデータが消えます。一時的なデータにはセッションストレージを使います。'
    },
    {
      question: 'ローカルストレージのデータを削除する方法は？',
      answer: 'localStorage.removeItem("キー名")で特定のデータを削除、localStorage.clear()で全てのデータを削除できます。また、ブラウザの設定からも削除可能です。'
    },
    {
      question: 'ローカルストレージの容量制限はどのくらいですか？',
      answer: 'ブラウザによって異なりますが、一般的に約5〜10MBです。大量のデータを保存するには向いておらず、主に設定やユーザーの好みなど小さなデータの保存に使われます。容量オーバーするとエラーが発生するため注意が必要です。'
    },
    {
      question: 'ローカルストレージは他のサイトから見えますか？',
      answer: 'いいえ、見えません。ローカルストレージはドメインごとに独立しており、example.comで保存したデータはexample.comでしかアクセスできません。これをSame-Origin Policy（同一生成元ポリシー）と言います。'
    },
    {
      question: 'ローカルストレージにパスワードを保存しても安全ですか？',
      answer: 'いいえ、安全ではありません。ローカルストレージは暗号化されておらず、JavaScriptから誰でもアクセスできるため、パスワードやクレジットカード情報など機密情報の保存には向きません。セキュアな保存にはサーバー側での管理が必要です。'
    },
    {
      question: 'ローカルストレージはいつ使うべきですか？',
      answer: 'ユーザーの設定（ダークモード、言語など）、フォームの下書き、カートの中身、訪問履歴など、ページを跨いでも保持したい非機密データの保存に適しています。ログイン状態の維持など、セキュリティが重要な場合はCookieやサーバー側のセッション管理を使います。'
    },
    {
      question: 'ローカルストレージのデータはいつまで残りますか？',
      answer: 'ローカルストレージのデータは永続的に残り、有効期限がありません。ユーザーが手動で削除するか、ブラウザのキャッシュクリアを実行しない限り、ずっと保存され続けます。定期的にクリーンアップする仕組みを実装することが推奨されます。'
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
        title="ローカルストレージとは？初心者向けにわかりやすく解説【実践デモ付き】"
        description="ローカルストレージ（localStorage）は、ブラウザにデータを保存できる仕組みです。ページを閉じても情報が残り、JavaScriptから簡単にアクセス可能。使い方や注意点を実践デモで初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-01-07"
      />
      <TermPageHeader
        termName="ローカルストレージ"
        reading="ろーかるすとれーじ / localStorage"
        icon="fas fa-database"
        dateCreated="2024-01-07"
        dateModified="2026-01-07"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            ブラウザに<strong>小さなデータを保存しておける場所</strong>のこと。
            <br />
            JavaScriptからアクセスできて、
            <strong>ページを閉じても情報が残る</strong>のが特徴。
            詳しくは<a href="https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage" target="_blank" rel="noopener noreferrer">MDN - localStorage</a>も参照してください。
          </p>
        </section>

        <section>
          <h2>比べてみよう：JavaScript、JSON、ローカルストレージ</h2>
          <p>
            ローカルストレージを理解するために、まずJavaScriptとJSONとの違いを体験してみましょう。
            同じデータを3つの方法で保存して、違いを実感できます。
          </p>

          <LocalStorageComparisonDemo />

          <div className="comparison-table" style={{ marginTop: '30px' }}>
            <table>
              <thead>
                <tr>
                  <th>方法</th>
                  <th>データの保存場所</th>
                  <th>ページを閉じたら</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>JavaScript変数</strong></td>
                  <td>メモリ（一時的）</td>
                  <td>消える</td>
                  <td>プログラム実行中だけ有効</td>
                </tr>
                <tr>
                  <td><strong>JSONファイル</strong></td>
                  <td>サーバーやファイル</td>
                  <td>残る（サーバーに保存）</td>
                  <td>サーバーが必要、重い</td>
                </tr>
                <tr>
                  <td><strong>ローカルストレージ</strong></td>
                  <td>ブラウザ内</td>
                  <td>残る</td>
                  <td>軽い、シンプル、ブラウザだけで完結</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note" style={{ marginTop: '20px' }}>
            <strong>💡 ポイント：</strong>
            ローカルストレージは、JSONのように軽くてシンプルで、しかもブラウザだけで完結します。
            サーバーを経由しないので、高速に動作するのが特徴です。
          </p>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>ブラウザ内に保存される（サーバーには送られない）</li>
            <li>
              <code>localStorage.setItem()</code> と <code>getItem()</code>{' '}
              で読み書きできる
            </li>
            <li>
              文字列しか保存できないため、オブジェクトを保存するには
              <Link href="/terms/json">JSON</Link>形式への変換が必須
            </li>
          </ul>
        </section>

        <section>
          <h2>日常生活でのローカルストレージの例</h2>
          <p>
            ローカルストレージは、私たちが毎日使っているWebサービスの裏側で活躍しています。
            普段意識していないだけで、実はたくさんの場面で利用されているのです。
          </p>

          <h3>1. ショッピングサイトのカート機能</h3>
          <p>
            Amazonや楽天などで商品をカートに入れた後、ブラウザを閉じて翌日開いても商品が残っていることがあります。
            これは、カートの中身をローカルストレージに保存しているためです。ログインしていない状態でも、
            ブラウザ内にデータが残っているので買い物を続けられます。
          </p>

          <h3>2. ダークモードの設定</h3>
          <p>
            TwitterやYouTubeでダークモードに設定すると、次回アクセス時も同じ設定が適用されます。
            この「ユーザーの好み」をローカルストレージに保存することで、毎回設定し直す手間が省けます。
          </p>

          <h3>3. フォームの下書き保存</h3>
          <p>
            Googleフォームや問い合わせフォームで入力中に誤ってブラウザを閉じてしまっても、再度開くと入力内容が残っていることがあります。
            これはローカルストレージに自動で下書きを保存しているためで、データの消失を防ぐ重要な仕組みです。
          </p>

          <LocalStorageDemo />

          <h3>4. 言語設定の記憶</h3>
          <p>
            多言語対応のWebサイトで日本語を選択すると、次回アクセス時も日本語で表示されます。
            選択した言語設定をローカルストレージに保存することで、ユーザーが毎回言語を選び直す必要がなくなります。
          </p>

          <h3>5. 訪問履歴やお気に入り機能</h3>
          <p>
            ニュースサイトやブログで「最近読んだ記事」「お気に入りの記事」が表示されるのも、
            ローカルストレージに記事IDを保存している場合が多いです。サーバーを経由しないため、高速に動作します。
          </p>
        </section>

        <section>
          <h2>コードで実装してみよう：フォームの下書き保存</h2>
          <p>
            さっき説明した「フォームの下書き保存」の例を、そのままコードで実装してみましょう。
            問い合わせフォームで入力中にブラウザを閉じても、再度開くと入力内容が残っている機能です。
          </p>
          <p>
            <strong>このコードで実装していること</strong>:
          </p>
          <ul>
            <li>フォームに入力した内容をローカルストレージに保存</li>
            <li>ページを再読み込みしても、保存した内容を自動で復元</li>
            <li>送信ボタンを押したら、ローカルストレージから削除</li>
          </ul>

          <details>
            <summary>
              フォームの下書き保存を実装 <strong>(JavaScript)</strong>
            </summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// HTMLのフォーム要素を取得
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// ページ読み込み時に、保存された下書きを復元
window.addEventListener('load', () => {
  const savedDraft = localStorage.getItem('contactDraft');
  if (savedDraft) {
    const draft = JSON.parse(savedDraft);
    nameInput.value = draft.name || '';
    emailInput.value = draft.email || '';
    messageInput.value = draft.message || '';
    console.log('下書きを復元しました');
  }
});

// 入力内容をリアルタイムで保存（入力するたびに保存）
nameInput.addEventListener('input', () => {
  const draft = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('contactDraft', JSON.stringify(draft));
});

emailInput.addEventListener('input', () => {
  const draft = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('contactDraft', JSON.stringify(draft));
});

messageInput.addEventListener('input', () => {
  const draft = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('contactDraft', JSON.stringify(draft));
});

// フォーム送信時に下書きを削除
document.getElementById('contactForm').addEventListener('submit', () => {
  localStorage.removeItem('contactDraft');
  console.log('送信完了。下書きを削除しました');
});`}</code>
              </pre>
            </div>
          </details>

          <p className="note" style={{ marginTop: '20px' }}>
            <strong>💡 ポイント：</strong>
            このコードは、さっき説明した「フォームの下書き保存」の仕組みをそのまま実装しています。
            入力内容を<Link href="/terms/json">JSON</Link>形式でローカルストレージに保存し、
            ページを再読み込みしたときに自動で復元します。
          </p>
        </section>

        <section className="term-comparison">
          <h2>関連用語・比較</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語名</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="term-name">localStorage</span>
                  </td>
                  <td>ページを閉じても残る、永続的</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">sessionStorage</span>
                  </td>
                  <td>同じタブ内だけ。閉じると消える</td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">クッキー</span>
                  </td>
                  <td>サーバーにも送れる、小さい、やや古い</td>
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
