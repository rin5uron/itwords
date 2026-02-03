'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'

export default function SQLPage() {
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null)

  const faqs = [
    {
      question: 'SQLの読み方は？',
      answer: 'SQLは「エスキューエル」または「シークェル」と読みます。「Structured Query Language」の略で、両方の読み方が使われますが、日本では「エスキューエル」が一般的です。もともとは「SEQUEL（シークェル）」という名前だったため、今でも「シークェル」と呼ぶ人もいます。',
    },
    {
      question: 'SQLとは何ですか？',
      answer: 'SQL（Structured Query Language）とは、データベースを操作するための言語です。データの検索（SELECT）、追加（INSERT）、更新（UPDATE）、削除（DELETE）など、データベースに対するあらゆる操作をSQLで記述します。',
    },
    {
      question: 'SQLとNoSQLの違いは？',
      answer: 'SQLはリレーショナルデータベース（MySQL、PostgreSQLなど）で使う言語で、表形式でデータを管理します。NoSQL（MongoDB、Redisなど）は表形式以外の柔軟なデータ構造を扱え、大規模データや高速処理に向いています。',
    },
    {
      question: 'SQLは難しいですか？',
      answer: '基本的なSELECT文（データ検索）は初心者でも理解しやすいです。「テーブル」から「条件に合うデータ」を「取り出す」というシンプルな構造です。ただし、JOIN（複数テーブルの結合）やサブクエリなど、高度な機能は練習が必要です。',
    },
    {
      question: 'SQLはどこで使われていますか？',
      answer: 'Webアプリケーションのユーザーデータ管理、ECサイトの商品・注文管理、業務システムの顧客情報管理など、ほぼすべてのシステムで使われています。データベースがある場所には必ずSQLがあります。',
    },
  ]

  const sqlCommands = [
    {
      type: 'SELECT',
      name: 'SELECT（データ検索）',
      description: 'データベースからデータを取得する',
      example: `SELECT name, age FROM users WHERE age >= 20;`,
      explanation: '「usersテーブル」から「20歳以上」のユーザーの「名前と年齢」を取得',
      color: '#28a745'
    },
    {
      type: 'INSERT',
      name: 'INSERT（データ追加）',
      description: '新しいデータをテーブルに追加する',
      example: `INSERT INTO users (name, age, email)\nVALUES ('田中太郎', 25, 'tanaka@example.com');`,
      explanation: '「usersテーブル」に新しいユーザー情報を追加',
      color: '#007bff'
    },
    {
      type: 'UPDATE',
      name: 'UPDATE（データ更新）',
      description: '既存のデータを更新する',
      example: `UPDATE users\nSET age = 26\nWHERE name = '田中太郎';`,
      explanation: '「田中太郎」の年齢を26歳に更新',
      color: '#ffc107'
    },
    {
      type: 'DELETE',
      name: 'DELETE（データ削除）',
      description: 'データをテーブルから削除する',
      example: `DELETE FROM users WHERE age < 18;`,
      explanation: '18歳未満のユーザーを削除',
      color: '#dc3545'
    }
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="SQL（エスキューエル）とは？読み方・基本コマンドを初心者向けに解説"
        description="SQL（エスキューエル/シークェル）を初心者向けに解説。読み方、基本コマンド（SELECT、INSERT、UPDATE、DELETE）、NoSQLとの違いを実践デモ付きで学べます。"
        datePublished="2026-01-16"
        dateModified="2026-01-16"
      />

      <TermPageHeader
        termName="SQL"
        reading="エスキューエル / シークェル / Structured Query Language"
        icon="fas fa-database"
        dateCreated="2026-01-16"
        dateModified="2026-01-16"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>SQL</strong>（Structured Query Language）とは、
            <strong>「データベースを操作するための言語」</strong>です。
          </p>

          <p>
            データベースは、たくさんの情報を整理して保存する「デジタルの倉庫」です。
            SQLは、その倉庫から「この商品の在庫を教えて」「新しい顧客情報を追加して」といった
            指示を出すための<strong>共通語</strong>です。
          </p>

          <p>
            例えば、ECサイトで「¥5,000以上の注文履歴を表示する」という処理も、
            裏側ではSQLを使ってデータベースに問い合わせています。
          </p>
        </section>

        <section>
          <h2>SQLの読み方について</h2>
          <p>
            SQLは<strong>2つの読み方</strong>があります：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>読み方</th>
                  <th>説明</th>
                  <th>使われる地域</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>エスキューエル</strong></td>
                  <td>アルファベットを1文字ずつ読む</td>
                  <td>日本で一般的</td>
                </tr>
                <tr>
                  <td><strong>シークェル</strong></td>
                  <td>もともとの名前「SEQUEL」から</td>
                  <td>英語圏で使われることも</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> どちらも正しいです！日本では「エスキューエル」が主流ですが、
            会話で「シークェル」と聞いても同じものを指しています。
          </p>
        </section>

        <section>
          <h2>SQLの4大基本操作（CRUD）</h2>
          <p>
            データベース操作の基本は、この4つです：
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>操作</th>
                  <th>SQLコマンド</th>
                  <th>意味</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Create（作成）</strong></td>
                  <td><code>INSERT</code></td>
                  <td>新しいデータを追加する</td>
                </tr>
                <tr>
                  <td><strong>Read（読取）</strong></td>
                  <td><code>SELECT</code></td>
                  <td>データを検索・取得する</td>
                </tr>
                <tr>
                  <td><strong>Update（更新）</strong></td>
                  <td><code>UPDATE</code></td>
                  <td>既存データを変更する</td>
                </tr>
                <tr>
                  <td><strong>Delete（削除）</strong></td>
                  <td><code>DELETE</code></td>
                  <td>データを削除する</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            この4つをまとめて<strong>「CRUD（クラッド）」</strong>と呼びます。
            ほとんどのシステムは、このCRUD操作の組み合わせで動いています。
          </p>
        </section>

        <section>
          <h2>実際にやってみよう：SQLコマンド選択デモ</h2>
          <p>
            それぞれのSQLコマンドをクリックして、使い方と用途を確認してみましょう！
          </p>

          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '10px',
            border: '2px solid #ddd',
            marginTop: '20px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '10px',
              marginBottom: '20px'
            }}>
              {sqlCommands.map((cmd) => (
                <button
                  key={cmd.type}
                  onClick={() => setSelectedQuery(cmd.type)}
                  style={{
                    padding: '15px',
                    backgroundColor: selectedQuery === cmd.type ? cmd.color : '#fff',
                    color: selectedQuery === cmd.type ? '#fff' : '#333',
                    border: `2px solid ${cmd.color}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cmd.name}
                </button>
              ))}
            </div>

            {selectedQuery && (
              <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '8px',
                border: '2px solid ' + sqlCommands.find(c => c.type === selectedQuery)?.color
              }}>
                <h3 style={{ marginTop: 0, color: sqlCommands.find(c => c.type === selectedQuery)?.color }}>
                  {sqlCommands.find(c => c.type === selectedQuery)?.name}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
                  {sqlCommands.find(c => c.type === selectedQuery)?.description}
                </p>

                <div style={{
                  backgroundColor: '#2d2d2d',
                  color: '#f8f8f2',
                  padding: '15px',
                  borderRadius: '5px',
                  fontFamily: 'Consolas, Monaco, monospace',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  marginBottom: '15px',
                  whiteSpace: 'pre-wrap'
                }}>
                  {sqlCommands.find(c => c.type === selectedQuery)?.example}
                </div>

                <p style={{
                  backgroundColor: '#e7f3ff',
                  padding: '10px',
                  borderRadius: '5px',
                  fontSize: '14px',
                  color: '#0066cc',
                  margin: 0
                }}>
                  <strong>💡 意味：</strong> {sqlCommands.find(c => c.type === selectedQuery)?.explanation}
                </p>
              </div>
            )}

            {!selectedQuery && (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#999'
              }}>
                👆 上のボタンをクリックして、SQLコマンドの例を見てみましょう！
              </div>
            )}
          </div>
        </section>

        <section>
          <h2>SQLとNoSQLの違い</h2>
          <p>データベースには大きく分けて2種類あります：</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>SQL（リレーショナル）</th>
                  <th>NoSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>データ構造</strong></td>
                  <td>表形式（テーブル）</td>
                  <td>柔軟（ドキュメント、キーバリューなど）</td>
                </tr>
                <tr>
                  <td><strong>代表例</strong></td>
                  <td>MySQL、PostgreSQL、SQLite</td>
                  <td>MongoDB、Redis、DynamoDB</td>
                </tr>
                <tr>
                  <td><strong>得意なこと</strong></td>
                  <td>複雑な検索、データの整合性</td>
                  <td>大規模データ、高速処理</td>
                </tr>
                <tr>
                  <td><strong>向いている用途</strong></td>
                  <td>業務システム、金融システム</td>
                  <td>SNS、ログ管理、リアルタイム分析</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> どちらが優れているわけではなく、用途によって使い分けます。
            初心者がデータベースを学ぶなら、まずはSQL（MySQL、PostgreSQL）から始めるのがおすすめです。
          </p>
        </section>

        <section>
          <h2>SQLの実行環境</h2>
          <p>SQLを実際に使うには、<strong>データベース管理システム（DBMS）</strong>が必要です：</p>

          <h3>よく使われるDBMS</h3>
          <ul>
            <li>
              <strong>MySQL</strong>: 世界で最も人気のあるオープンソースDB。Webアプリケーションで広く使われる
            </li>
            <li>
              <strong>PostgreSQL</strong>: 高機能で拡張性が高い。大規模システムでも使える
            </li>
            <li>
              <strong>SQLite</strong>: ファイル1つで動く軽量DB。スマホアプリや小規模システムに最適
            </li>
            <li>
              <strong>Microsoft SQL Server</strong>: Windowsサーバーで使われる企業向けDB
            </li>
            <li>
              <strong>Oracle Database</strong>: 大企業向けの高性能DB
            </li>
          </ul>

          <p>
            初心者がSQLを学ぶなら、<strong>MySQL</strong>または<strong>SQLite</strong>がおすすめです。
            無料で使えて、学習教材も豊富です。
          </p>
        </section>

        <section>
          <h2>SQLのよくある質問</h2>

          <h3>プログラミング言語とSQLは違うの？</h3>
          <p>
            はい、違います。JavaScript、Pythonなどのプログラミング言語は「計算や処理の流れ」を書きます。
            一方、SQLは「データベースへの命令」を書く専用言語です。
          </p>
          <p>
            例えば、PythonやJavaScriptの中から<strong>SQLを呼び出して</strong>データベースを操作します。
          </p>

          <h3>SQLインジェクションとは？</h3>
          <p>
            <strong>SQLインジェクション</strong>は、悪意のあるSQL文を入力欄に埋め込んで
            データベースを不正に操作する攻撃手法です。
          </p>
          <p>
            例えば、ログインフォームに<code>'; DROP TABLE users; --</code>のような文字列を入力して、
            ユーザーテーブルを削除しようとする攻撃です。
          </p>
          <p>
            対策として、<strong>プレースホルダ（準備済み文）</strong>を使うことが重要です。
          </p>
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
                  <td><Link href="/terms/api" className="term-name">API</Link></td>
                  <td>Web APIはSQLでデータベースを操作してデータを返す</td>
                </tr>
                <tr>
                  <td>データベース</td>
                  <td>SQLで操作する対象となるデータの保管場所</td>
                </tr>
                <tr>
                  <td>MySQL</td>
                  <td>SQLを使うデータベース管理システムの一つ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  )
}
