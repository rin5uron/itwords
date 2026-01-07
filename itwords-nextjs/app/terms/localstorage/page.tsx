import Link from 'next/link'
import type { Metadata } from 'next'
import LocalStorageDemo from '@/components/LocalStorageDemo'

export const metadata: Metadata = {
  title: 'ローカルストレージ（localStorage）とは？ブラウザにデータを保存する仕組みを初心者向けに解説 | IT用語辞典',
  description: 'ローカルストレージは、ブラウザに小さなデータを保存しておける場所です。JavaScriptからアクセスでき、ページを閉じても情報が残る仕組みを初心者にもわかりやすく解説します。',
  keywords: 'localStorage,ローカルストレージ,Web Storage,JavaScript,ブラウザ,データ保存,初心者',
}

export default function LocalStoragePage() {
  return (
    <div className="container">
      <header>
        <h1>
          <i className="fas fa-database"></i> ローカルストレージ
        </h1>
        <p className="reading">ろーかるすとれーじ / localStorage</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            ブラウザに<strong>小さなデータを保存しておける場所</strong>のこと。
            <br />
            JavaScriptからアクセスできて、
            <strong>ページを閉じても情報が残る</strong>のが特徴。
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
          <h2>体験してみよう</h2>
          <p>
            ユーザー情報を入力して保存すると、ページを更新してもデータが残ります。これは裏側で入力値を
            <Link href="/terms/json">JSON</Link>
            という形式の文字列に変換して、ローカルストレージに保存しているためです。
          </p>
          <p>①ユーザー情報を入力して保存してみよう</p>
          <p>②ページを更新してみよう</p>

          <LocalStorageDemo />
        </section>

        <section>
          <h2>コードを書いて実践してみよう</h2>
          <p>
            「体験してみよう」の裏側では、このように
            <Link href="/terms/json">JSON</Link>
            を利用してオブジェクトを文字列に変換しています。<code>JSON.stringify()</code>
            で保存し、<code>JSON.parse()</code>で元に戻すのがポイントです。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// ユーザーオブジェクトを作成
const user = { name: '山田', age: 30 };

// オブジェクトをJSON文字列に変換して保存
localStorage.setItem('userData', JSON.stringify(user));

// JSON文字列を取得してオブジェクトに変換
const jsonData = localStorage.getItem('userData');
const savedUser = JSON.parse(jsonData);

console.log(savedUser.name); // "山田"`}</code>
              </pre>
            </div>
          </details>
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
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2024 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
