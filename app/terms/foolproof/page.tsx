import Link from 'next/link'
import type { Metadata } from 'next'
import FoolProofDemo from '@/components/FoolProofDemo'
import StructuredData from '@/app/components/StructuredData'
import TableOfContents from '@/app/components/TableOfContents'
import TermHeader from '@/app/components/TermHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'フールプルーフとは？初心者向けにわかりやすく解説【実践デモ付き】 | 実践型IT用語辞典',
  description: 'フールプルーフとは？実践デモで誤操作防止の仕組みを体験。削除確認ダイアログ、入力制限、ポカヨケとの関係、フェイルセーフとの違いまで初心者向けに解説します。',
  keywords: ['フールプルーフ', 'Fool Proof', 'UI/UX', '誤操作防止', '設計思想', '初心者', 'わかりやすく', 'フールプルーフ とは', 'バリデーション', 'ポカヨケ', 'フェイルセーフ', '品質管理'],
  openGraph: {
    title: 'フールプルーフとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'フールプルーフとは？実践デモで誤操作防止の仕組みを体験。削除確認ダイアログ、入力制限、ポカヨケとの関係、フェイルセーフとの違いまで初心者向けに解説します。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'フールプルーフとは？初心者向けにわかりやすく解説【実践デモ付き】',
    description: 'フールプルーフとは？実践デモで誤操作防止の仕組みを体験。削除確認ダイアログ、入力制限、ポカヨケとの関係、フェイルセーフとの違いまで初心者向けに解説します。',
  },
}

export default function FoolProofPage() {
  const faqs = [
    {
      question: 'フールプルーフとは何ですか？',
      answer: 'フールプルーフとは、ユーザーの誤操作や誤入力を未然に防ぐための設計思想です。人間は誰でもミスをするという前提に立ち、間違えにくいシステムを作ることを目指します。「Fool（間抜け）」でも「Proof（防げる）」という意味から名付けられました。'
    },
    {
      question: 'フールプルーフの具体例を教えてください',
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
        title="フールプルーフとは？初心者向けにわかりやすく解説【実践デモ付き】"
        description="フールプルーフ（Fool Proof）は、誤操作や誤入力を未然に防ぐ設計思想です。削除確認ダイアログ、入力制限、ボタンの色分けなど具体例と実践デモで、ユーザーが間違えにくいシステムを作る考え方を初心者にもわかりやすく解説します。"
        datePublished="2024-01-07"
        dateModified="2026-01-12"
      />
      <TermHeader
        termName="フールプルーフ"
        reading="ふーるぷるーふ / Fool Proof"
        icon="fas fa-shield-alt"
      />

      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>

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
              <li>フールプルーフとは何か？</li>
              <li>身近な例（洗濯機、ATM、USB等）</li>
              <li>Web開発での実装方法（コード付き）</li>
              <li>ポカヨケ、フェイルセーフとの違い</li>
            </ul>
          </div>

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
          <h2>なぜフールプルーフが重要なのか？</h2>
          <p>
            フールプルーフは単なる「親切機能」ではありません。ビジネスやサービスの成功に直結する重要な要素です。
          </p>

          <h3>ビジネス面でのメリット</h3>
          <ul>
            <li>
              <strong>サポートコストの削減</strong>: ユーザーのミスが減れば、問い合わせや苦情対応が減少します
            </li>
            <li>
              <strong>離脱率の低下</strong>: 入力エラーで諦めるユーザーを防ぎ、コンバージョン率が向上します
            </li>
            <li>
              <strong>信頼性の向上</strong>: 「安心して使える」という評価が口コミやレビューにつながります
            </li>
            <li>
              <strong>トラブルの未然防止</strong>: 誤削除や誤送信によるクレームを防ぎます
            </li>
          </ul>

          <h3>ユーザー体験（UX）の向上</h3>
          <ul>
            <li>
              <strong>ストレス軽減</strong>: 「間違えたらどうしよう」という不安がなくなります
            </li>
            <li>
              <strong>学習コストの削減</strong>: 直感的に使えるため、マニュアル不要になります
            </li>
            <li>
              <strong>アクセシビリティ向上</strong>: 高齢者や初心者でも安心して使えます
            </li>
            <li>
              <strong>満足度の向上</strong>: 「使いやすい」と感じてもらえます
            </li>
          </ul>

          <h3>法的リスクの軽減</h3>
          <ul>
            <li>
              <strong>製造物責任（PL法）</strong>: 製品の安全性を証明できます
            </li>
            <li>
              <strong>情報漏洩対策</strong>: 誤送信による個人情報流出を防ぎます
            </li>
            <li>
              <strong>コンプライアンス</strong>: 業界標準や規制に準拠しやすくなります
            </li>
          </ul>

          <p>
            <strong>実例</strong>: あるECサイトでは、決済ボタンの二重クリック防止機能を実装したところ、
            重複注文のクレームが90%減少し、カスタマーサポートの工数が大幅に削減されました。
          </p>
        </section>

        <section>
          <h2>身近なフールプルーフの例</h2>
          <p>
            フールプルーフは私たちの日常生活のあらゆる場面で活用されています。
            ここでは、家電製品、日常生活、IT製品、公共施設など、様々な分野での具体例を紹介します。
          </p>

          <h3>家電製品におけるフールプルーフ</h3>
          <ul>
            <li>
              <strong>洗濯機</strong>: 蓋が完全に閉まらないと動作しない設計。洗濯中に蓋を開けると自動停止し、水しぶきによる怪我や床の水浸しを防ぎます。
            </li>
            <li>
              <strong>電子レンジ</strong>: 扉を開けると自動的にマイクロ波の発振が停止。開けたまま動作することがないため、電磁波被曝を防ぎます。
            </li>
            <li>
              <strong>IHクッキングヒーター</strong>: 鍋を検知しないと加熱が開始されない。空焚きや火傷を防ぎ、安全性を高めています。
            </li>
            <li>
              <strong>エアコン</strong>: フィルターが外れていると運転できない機種も。機器の故障や効率低下を未然に防ぎます。
            </li>
            <li>
              <strong>炊飯器</strong>: 内釜がセットされていないと加熱開始しない。空焚きや故障を防止します。
            </li>
          </ul>

          <h3>日常生活におけるフールプルーフ</h3>
          <ul>
            <li>
              <strong>USBコネクタ（Type-C）</strong>: 上下どちらの向きでも挿せる設計。従来のUSB-Aの「向きが分からない」ストレスを解消しました。
            </li>
            <li>
              <strong>自動車のシフトレバー</strong>: ブレーキを踏まないとシフトチェンジできない、エンジンがかからない設計。誤発進を防ぎます。
            </li>
            <li>
              <strong>ATMのカード挿入口</strong>: 正しい向きでしか挿入できない形状。カードの破損や機械の故障を防ぎます。
            </li>
            <li>
              <strong>ガソリンキャップ</strong>: 給油口とノズルのサイズが異なる（軽油とガソリン）。燃料の入れ間違いを物理的に防止します。
            </li>
            <li>
              <strong>薬のPTP包装</strong>: 一錠ずつ取り出せる設計。誤飲や過剰摂取を防ぎます。
            </li>
            <li>
              <strong>チャイルドロック</strong>: 子供が簡単に開けられない容器や引き出し。誤飲事故や怪我を防止します。
            </li>
          </ul>

          <h3>IT・Web製品におけるフールプルーフ</h3>
          <ul>
            <li>
              <strong>削除確認ダイアログ</strong>: ファイル削除前に「本当に削除しますか？」と確認。誤削除によるデータ損失を防ぎます。
            </li>
            <li>
              <strong>入力フォームのバリデーション</strong>: メールアドレス形式のチェック、必須項目の強調。入力ミスを送信前に検知します。
            </li>
            <li>
              <strong>ボタンの色分け</strong>: 危険な操作（削除など）は赤、安全な操作は青や緑。視覚的に注意を促します。
            </li>
            <li>
              <strong>パスワード表示機能</strong>: 「目」のアイコンで入力内容を確認できる。タイプミスを防ぎます。
            </li>
            <li>
              <strong>自動保存機能</strong>: GoogleドキュメントやNotionなど。保存し忘れによるデータ損失を防ぎます。
            </li>
            <li>
              <strong>ゴミ箱機能</strong>: 削除したファイルを一時保管。誤削除後も復元可能にします。
            </li>
          </ul>

          <h3>公共施設・交通機関におけるフールプルーフ</h3>
          <ul>
            <li>
              <strong>エレベーターの扉</strong>: 人や物を検知すると閉まらない。挟まれ事故を防ぎます。
            </li>
            <li>
              <strong>改札機</strong>: カードをタッチしないと通れない。無賃乗車を防ぎ、正しい利用を促します。
            </li>
            <li>
              <strong>自動ドア</strong>: センサーで人を検知して開閉。衝突や挟まれを防ぎます。
            </li>
            <li>
              <strong>非常停止ボタン</strong>: 目立つ赤色で配置。緊急時に素早く操作できます。
            </li>
          </ul>
        </section>


        <section>
          <h2>Web開発でフールプルーフを実装する方法</h2>
          <p>
            Webサイトやアプリケーションでフールプルーフを実装する具体的な方法を紹介します。
          </p>

          <h3>1. 確認ダイアログの実装</h3>
          <p>
            <Link href="/terms/javascript" style={{ color: '#007bff', textDecoration: 'underline' }}>JavaScript</Link>の<code>confirm()</code>
            関数を使うことで、ユーザーに確認を促すダイアログを簡単に実装できます。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`function deleteFile() {
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
    // 実際の削除処理
  } else {
    console.log("削除を中止しました");
  }
}`}</code>
              </pre>
            </div>
          </details>

          <h3>2. HTML5のバリデーション属性</h3>
          <p>
            <Link href="/terms/html" style={{ color: '#007bff', textDecoration: 'underline' }}>HTML</Link>の標準機能を使って、入力ミスを防ぐことができます。
          </p>

          <details>
            <summary>サンプルコードを見る (HTML)</summary>
            <div className="code-example">
              <pre>
                <code className="language-html">{`<!-- メールアドレス形式のチェック -->
<input type="email" required
       placeholder="example@example.com">

<!-- 数値のみ入力可能（範囲指定） -->
<input type="number" min="1" max="100" required>

<!-- 電話番号のパターンチェック -->
<input type="tel" pattern="[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}"
       placeholder="03-1234-5678">

<!-- 文字数制限 -->
<input type="text" maxlength="50" required>`}</code>
              </pre>
            </div>
          </details>

          <h3>3. CSSによる視覚的フィードバック</h3>
          <p>
            <Link href="/terms/css" style={{ color: '#007bff', textDecoration: 'underline' }}>CSS</Link>を使って、危険な操作を視覚的に警告できます。
          </p>

          <details>
            <summary>サンプルコードを見る (CSS)</summary>
            <div className="code-example">
              <pre>
                <code className="language-css">{`/* 削除ボタンは赤色 */
.delete-button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #c82333;
  /* ホバー時により濃い赤に */
}

/* 保存ボタンは緑色 */
.save-button {
  background-color: #28a745;
  color: white;
}

/* 無効なボタンはグレーアウト */
.button:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
  opacity: 0.6;
}`}</code>
              </pre>
            </div>
          </details>

          <h3>4. Reactでの実装例</h3>
          <p>
            モダンなフレームワークを使った実装例です。
          </p>

          <details>
            <summary>サンプルコードを見る (React + TypeScript)</summary>
            <div className="code-example">
              <pre>
                <code className="language-typescript">{`import { useState } from 'react';

function FileManager() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleDelete = (name: string) => {
    setFileName(name);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    // 実際の削除処理
    console.log(\`\${fileName}を削除しました\`);
    setShowConfirm(false);
  };

  return (
    <>
      <button onClick={() => handleDelete('document.pdf')}>
        削除
      </button>

      {showConfirm && (
        <div className="modal">
          <p>本当に{fileName}を削除しますか？</p>
          <button onClick={confirmDelete} style={{ color: 'red' }}>
            削除
          </button>
          <button onClick={() => setShowConfirm(false)}>
            キャンセル
          </button>
        </div>
      )}
    </>
  );
}`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>フールプルーフ設計のベストプラクティス</h2>
          <p>
            効果的なフールプルーフを実装するための重要なポイントをまとめました。
          </p>

          <h3>✅ 実装時のチェックリスト</h3>
          <ul>
            <li>
              <strong>重要な操作には確認ステップを設ける</strong>: 削除、送信、決済など取り消しが困難な操作
            </li>
            <li>
              <strong>視覚的に危険度を示す</strong>: 赤色=危険、黄色=注意、緑色=安全という一般的な認識を活用
            </li>
            <li>
              <strong>元に戻せる仕組みを用意</strong>: Undo機能、ゴミ箱、変更履歴など
            </li>
            <li>
              <strong>入力制限を適切に設定</strong>: type属性、pattern、min/max、requiredなど
            </li>
            <li>
              <strong>エラーメッセージは具体的に</strong>: 「エラーが発生しました」ではなく「メールアドレスの形式が正しくありません」
            </li>
            <li>
              <strong>操作の結果を明確に表示</strong>: 「保存しました」「削除しました」など、フィードバックを返す
            </li>
            <li>
              <strong>デフォルト値は安全な選択肢に</strong>: チェックボックスは「削除しない」がデフォルト
            </li>
          </ul>

          <h3>❌ 避けるべき設計パターン</h3>
          <ul>
            <li>
              <strong>確認なしで重要なデータを削除</strong>: 必ず確認ダイアログを表示する
            </li>
            <li>
              <strong>「OK」と「Cancel」が隣接</strong>: 誤クリックを招く。十分な間隔を空ける
            </li>
            <li>
              <strong>デフォルトが危険な選択肢</strong>: 「削除する」がデフォルトでチェック済みは避ける
            </li>
            <li>
              <strong>曖昧なボタンラベル</strong>: 「OK」「はい」ではなく「削除する」「保存する」と具体的に
            </li>
            <li>
              <strong>エラーメッセージが不親切</strong>: 「Error 500」だけでなく、ユーザーが取るべき行動を示す
            </li>
          </ul>
        </section>

        <section>
          <h2>製造業とフールプルーフ：ポカヨケとの関係</h2>
          <p>
            フールプルーフの概念は、製造業では<strong>「ポカヨケ」</strong>（Poka-Yoke）という名称で古くから活用されてきました。
            トヨタ生産方式の創始者である大野耐一氏が提唱した品質管理の重要な考え方です。
          </p>

          <h3>ポカヨケとは？</h3>
          <p>
            ポカヨケは「うっかりミス（ポカ）を避ける（ヨケる）」という意味の日本語で、
            作業者のヒューマンエラーを防止するための仕組みや工夫のことを指します。
          </p>

          <h3>製造現場でのポカヨケの例</h3>
          <ul>
            <li>
              <strong>部品の向き固定</strong>: 部品が正しい向きでしか組み付けられない形状設計。逆向き組み付けミスを物理的に防止します。
            </li>
            <li>
              <strong>治具の色分け</strong>: 異なる製品用の治具を色で区別。取り違えミスを視覚的に防ぎます。
            </li>
            <li>
              <strong>カウントセンサー</strong>: ネジの数を自動カウントし、規定数に達するまで次工程に進めない。部品の付け忘れを防ぎます。
            </li>
            <li>
              <strong>ガイドピン</strong>: 製品を正しい位置にセットするためのピン。位置ずれによる不良を防止します。
            </li>
            <li>
              <strong>チェックシート自動化</strong>: バーコードスキャンで作業完了を記録。確認漏れを防ぎます。
            </li>
          </ul>

          <h3>ポカヨケの3つのレベル</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>レベル</th>
                  <th>説明</th>
                  <th>具体例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>レベル1: 除去</strong></td>
                  <td>ミスが発生する可能性そのものを排除</td>
                  <td>部品の向きを固定する形状設計</td>
                </tr>
                <tr>
                  <td><strong>レベル2: 代替</strong></td>
                  <td>ミスが起きにくい別の方法に置き換える</td>
                  <td>手作業から自動化へ</td>
                </tr>
                <tr>
                  <td><strong>レベル3: 容易化</strong></td>
                  <td>ミスを検出しやすくする</td>
                  <td>警告ランプ、チェックリスト</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            ITシステム開発においても、このポカヨケの考え方は非常に有効です。
            ユーザーインターフェースの設計段階から「どこでミスが起きやすいか」を想定し、
            事前に対策を講じることで、ユーザビリティの高いシステムを構築できます。
          </p>
        </section>

        <section className="term-comparison">
          <h2>フールプルーフ vs フェイルセーフ：詳細比較</h2>
          <p>
            フールプルーフとフェイルセーフは、どちらも安全性を高めるための設計思想ですが、
            <strong>作動するタイミング</strong>と<strong>目的</strong>が大きく異なります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>フールプルーフ</th>
                  <th>フェイルセーフ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>目的</strong></td>
                  <td>誤操作を<strong>未然に防ぐ</strong></td>
                  <td>故障・異常時に<strong>安全な状態</strong>にする</td>
                </tr>
                <tr>
                  <td><strong>作動タイミング</strong></td>
                  <td><strong>操作前・操作中</strong></td>
                  <td><strong>異常発生時</strong></td>
                </tr>
                <tr>
                  <td><strong>対象</strong></td>
                  <td>ユーザーの<strong>誤操作・ミス</strong></td>
                  <td>システムの<strong>故障・異常</strong></td>
                </tr>
                <tr>
                  <td><strong>IT例</strong></td>
                  <td>削除確認ダイアログ</td>
                  <td>データベース接続エラー時に読み取り専用モードへ</td>
                </tr>
                <tr>
                  <td><strong>家電例</strong></td>
                  <td>洗濯機の蓋が開いていると動作しない</td>
                  <td>停電時、エレベーターが最寄り階で停止</td>
                </tr>
                <tr>
                  <td><strong>自動車例</strong></td>
                  <td>ブレーキを踏まないとエンジン始動しない</td>
                  <td>衝突時にエアバッグが展開</td>
                </tr>
                <tr>
                  <td><strong>英語表記</strong></td>
                  <td>Fool Proof</td>
                  <td>Fail Safe</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>併用することで安全性が向上</h3>
          <p>
            フールプルーフとフェイルセーフは対立する概念ではなく、<strong>併用することでより高い安全性</strong>を実現できます。
          </p>
          <ul>
            <li>
              <strong>自動車</strong>: フールプルーフ（ブレーキを踏まないと始動しない）+ フェイルセーフ（衝突時のエアバッグ）
            </li>
            <li>
              <strong>原子力発電所</strong>: フールプルーフ（複数人の承認が必要な操作）+ フェイルセーフ（異常検知時の自動停止）
            </li>
            <li>
              <strong>Webシステム</strong>: フールプルーフ（入力バリデーション）+ フェイルセーフ（サーバーエラー時の適切なエラーページ表示）
            </li>
          </ul>
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
                    <Link href="/terms/poka-yoke" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">ポカヨケ</span>
                    </Link>
                  </td>
                  <td>
                    製造業における<strong>ヒューマンエラー防止</strong>の仕組み（フールプルーフの製造現場版）
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/validation" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">バリデーション</span>
                    </Link>
                  </td>
                  <td>
                    入力されたデータが<strong>正しいかチェック</strong>する仕組み（フールプルーフの実装手段）
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

        <FAQAccordion faqs={faqs} />
      </main>
    </div>
  )
}
