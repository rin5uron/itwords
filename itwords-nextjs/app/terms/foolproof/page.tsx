import Link from 'next/link'
import type { Metadata } from 'next'
import FoolProofDemo from '@/components/FoolProofDemo'

export const metadata: Metadata = {
  title: 'フールプルーフとは？間違いを防ぐ設計思想を初心者向けに解説 | IT用語辞典',
  description: 'フールプルーフ（Fool Proof）は、誤操作や誤入力を未然に防ぐ設計思想です。ユーザーが間違えにくいシステムを作るための考え方を、具体例を交えて初心者にもわかりやすく解説します。',
  keywords: 'フールプルーフ,Fool Proof,UI/UX,誤操作防止,設計思想,初心者',
}

export default function FoolProofPage() {
  return (
    <div className="container">
      <header>
        <h1>
          <i className="fas fa-shield-alt"></i> フールプルーフ
        </h1>
        <p className="reading">ふーるぷるーふ / Fool Proof</p>
      </header>

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>フールプルーフ</strong>（Fool Proof）とは、ユーザーの誤操作や誤入力を
            <strong>未然に防ぐ</strong>ための設計思想のこと。
            <br />
            「Fool（間抜け）」でも「Proof（防げる）」という意味で、人間は誰でもミスをするという前提に立ち、間違えにくいシステムを作ることを目指します。
          </p>
        </section>

        <section>
          <h2>ポイント</h2>
          <ul>
            <li>
              <strong>誤操作を防ぐ設計</strong>: 危険な操作には確認ダイアログを表示
            </li>
            <li>
              <strong>入力制限</strong>: 数値しか入力できない、文字数制限など
            </li>
            <li>
              <strong>視覚的な差別化</strong>: 削除ボタンを赤色にする、アイコンで直感的に理解できる
            </li>
            <li>
              <strong>元に戻せる仕組み</strong>: Undo機能、ゴミ箱など
            </li>
          </ul>
        </section>

        <section>
          <h2>具体例</h2>
          <ul>
            <li>
              <strong>削除確認ダイアログ</strong>: ファイル削除前に「本当に削除しますか？」と確認
            </li>
            <li>
              <strong>入力フォームのバリデーション</strong>: メールアドレス形式のチェック
            </li>
            <li>
              <strong>ボタンの色分け</strong>: 危険な操作（削除など）は赤、安全な操作は青や緑
            </li>
            <li>
              <strong>物理的な例</strong>: USBケーブルの向き（逆向きには挿せない）
            </li>
          </ul>
        </section>

        <section>
          <h2>体験してみよう</h2>
          <p>
            実際に「削除」ボタンを押して、二段階の確認ダイアログがどのように誤操作を防ぐか体験してみましょう。
          </p>

          <FoolProofDemo />
        </section>

        <section>
          <h2>コード例：確認ダイアログの実装</h2>
          <p>
            JavaScriptの<code>confirm()</code>
            関数を使うことで、ユーザーに確認を促すダイアログを簡単に実装できます。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function startDemo() {
  // 1回目の確認
  const confirm1 = confirm("本当にこのファイルを削除しますか？");
  if (!confirm1) {
    console.log("キャンセルされました");
    return;
  }

  // 2回目の確認（より重要な操作の場合）
  const confirm2 = confirm("最終確認です。よろしいですか？");
  if (confirm2) {
    console.log("削除しました");
  } else {
    console.log("削除を中止しました");
  }
}`}</code>
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
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="term-name">フールプルーフ</span>
                  </td>
                  <td>
                    間違いが起きないように<strong>未然に防ぐ</strong>仕組み（設計思想）
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">バリデーション</span>
                  </td>
                  <td>
                    入力されたデータが<strong>正しいかチェック</strong>する仕組み
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="term-name">フェイルセーフ</span>
                  </td>
                  <td>
                    故障や異常が発生した際に<strong>安全な状態</strong>になる設計
                  </td>
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
