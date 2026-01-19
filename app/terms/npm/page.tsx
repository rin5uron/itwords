'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TableOfContents from '@/app/components/TableOfContents'
import TermHeader from '@/app/components/TermHeader'
import FAQAccordion from '@/app/components/FAQAccordion'

export default function NpmPage() {
  const faqs = [
    {
      question: 'npmの読み方は？',
      answer: 'npmは「エヌピーエム」と読みます。Node Package Managerの略で、1文字ずつ「エヌ・ピー・エム」と発音します。「ヌプム」や「エンプム」とは読みません。',
    },
    {
      question: 'npmとは何ですか？',
      answer: 'npm（Node Package Manager）とは、JavaScriptのパッケージ（ライブラリ）を管理するツールです。世界中の開発者が作った200万以上のパッケージを簡単にインストール・管理できます。',
    },
    {
      question: 'npmとyarnの違いは？',
      answer: 'yarnはnpmの代替パッケージマネージャーで、より高速で安定したインストールを目指して開発されました。基本的な機能は同じですが、yarnの方が並列ダウンロードやキャッシュ機能が優れています。',
    },
    {
      question: 'npm installとnpm ciの違いは？',
      answer: 'npm installはpackage.jsonから依存関係を解決してインストールします。npm ciはpackage-lock.jsonを厳密に再現するため、CIや本番環境で使われます。npm ciの方が高速で確実です。',
    },
  ]

  const [selectedCommand, setSelectedCommand] = useState('')
  const [output, setOutput] = useState<string[]>([])

  const npmCommands = [
    {
      name: 'npm install',
      description: 'package.jsonの全パッケージをインストール',
      output: [
        '> npm install',
        '',
        'added 142 packages in 3s',
        '',
        '25 packages are looking for funding',
        '  run `npm fund` for details'
      ],
      color: '#28a745'
    },
    {
      name: 'npm install react',
      description: 'Reactをインストール',
      output: [
        '> npm install react',
        '',
        'added 3 packages in 1.2s',
        '',
        '+ react@18.2.0'
      ],
      color: '#007bff'
    },
    {
      name: 'npm run dev',
      description: '開発サーバーを起動',
      output: [
        '> npm run dev',
        '',
        '> my-app@0.1.0 dev',
        '> next dev',
        '',
        '  ▲ Next.js 15.0.0',
        '  - Local:        http://localhost:3000',
        '',
        '✓ Ready in 1.2s'
      ],
      color: '#ffc107'
    },
    {
      name: 'npm run build',
      description: 'プロジェクトをビルド',
      output: [
        '> npm run build',
        '',
        '> my-app@0.1.0 build',
        '> next build',
        '',
        '  ▲ Next.js 15.0.0',
        '',
        '✓ Creating an optimized production build',
        '✓ Compiled successfully',
        '✓ Collecting page data',
        '✓ Generating static pages (5/5)',
        '',
        '✓ Build completed successfully'
      ],
      color: '#dc3545'
    },
    {
      name: 'npm update',
      description: 'パッケージを最新版に更新',
      output: [
        '> npm update',
        '',
        'updated 8 packages in 2.5s',
        '',
        '3 packages are looking for funding',
        '  run `npm fund` for details'
      ],
      color: '#17a2b8'
    },
    {
      name: 'npm uninstall lodash',
      description: 'パッケージを削除',
      output: [
        '> npm uninstall lodash',
        '',
        'removed 1 package in 0.8s'
      ],
      color: '#6c757d'
    }
  ]

  const runCommand = (cmd: typeof npmCommands[0]) => {
    setSelectedCommand(cmd.name)
    setOutput([])

    // アニメーション効果で1行ずつ表示
    cmd.output.forEach((line, index) => {
      setTimeout(() => {
        setOutput(prev => [...prev, line])
      }, index * 150)
    })
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="npmとは？小学生でもわかる【コマンド実行デモ付き】"
        description="npmとは？コマンドデモで使い方を今すぐ体験。「npm install」「npm run」の意味、package.jsonの役割、node_modulesの仕組みまで初心者向けに解説します。"
        datePublished="2024-01-01"
        dateModified="2026-01-19"
      />
      <div style={{ position: 'relative' }}>
        <TermHeader
          termName="npm"
          reading="エヌピーエム / Node Package Manager"
          icon="fab fa-npm"
        />

        {/* 作成日・更新日（タイトルと同じラインで右寄せ） */}
        <div className="date-info" style={{
          position: 'absolute',
          top: '0',
          right: '0',
          display: 'flex',
          gap: '15px',
          fontSize: '14px',
          color: '#666',
          alignItems: 'center',
          height: '2.2em',
          flexWrap: 'wrap',
          justifyContent: 'flex-end',
          lineHeight: '2.2em'
        }}>
          <span>作成日: 2024-01-01</span>
          <span>更新日: 2026-01-19</span>
        </div>
      </div>

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
              <li>npmとは何か？何に使うのか</li>
              <li>npm installやnpm runの実行デモ</li>
              <li>package.jsonとnode_modulesの役割</li>
              <li>yarnやpnpmとの違い</li>
            </ul>
          </div>

          <p>
            <strong>npm</strong>（Node Package Manager）とは、
            <strong>「JavaScriptのパッケージ（ライブラリ）を管理するツール」</strong>です。
          </p>

          <p>
            プログラミングをしていると、「誰かがすでに作った便利な機能を使いたい」という場面が必ず出てきます。
            例えば、「日付を扱うライブラリ」「グラフを描画するライブラリ」など、
            車輪の再発明をせずに済むコードがたくさんあります。
          </p>

          <p>
            npmは、そういった<strong>便利なパッケージを簡単にインストール・管理できる仕組み</strong>を提供してくれます。
            コマンド一つで、世界中の開発者が作った200万以上のパッケージを利用できるのです。
          </p>

          <p className="note">
            <strong>💡 豆知識：</strong>
            npmは2010年にIsaac Z. Schlueterによって開発され、現在はMicrosoftの子会社であるGitHub社が運営しています。
            Node.jsに標準搭載されているため、Node.jsをインストールすれば自動的にnpmも使えるようになります。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>npmコマンドを体験してみよう</h3>
            <p>
              よく使うnpmコマンドを選んで、実行結果を確認できます。
              実際に手を動かすことで、npmの動作が理解しやすくなります。
            </p>
            <div style={{
              border: '2px solid #007bff',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
              backgroundColor: '#f8f9fa'
            }}>
              <h3>コマンドを選択して実行</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginTop: '15px' }}>
                {npmCommands.map((cmd) => (
                  <button
                    key={cmd.name}
                    onClick={() => runCommand(cmd)}
                    style={{
                      padding: '12px 15px',
                      fontSize: '13px',
                      backgroundColor: selectedCommand === cmd.name ? cmd.color : '#fff',
                      color: selectedCommand === cmd.name ? '#fff' : cmd.color,
                      border: `2px solid ${cmd.color}`,
                      borderRadius: '5px',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontSize: '14px', marginBottom: '5px' }}>{cmd.name}</div>
                    <div style={{
                      fontSize: '11px',
                      opacity: selectedCommand === cmd.name ? 0.9 : 0.7,
                      fontFamily: 'sans-serif',
                      fontWeight: 'normal'
                    }}>
                      {cmd.description}
                    </div>
                  </button>
                ))}
              </div>

              <div style={{
                marginTop: '20px',
                backgroundColor: '#282c34',
                color: '#abb2bf',
                padding: '20px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '14px',
                minHeight: '200px',
                maxHeight: '400px',
                overflow: 'auto'
              }}>
                {output.length === 0 ? (
                  <div style={{ color: '#6c757d' }}>
                    $ ターミナル待機中...<br />
                    <br />
                    ↑ コマンドを選択して実行してください
                  </div>
                ) : (
                  output.map((line, index) => (
                    <div key={index} style={{ marginBottom: '4px' }}>
                      {line}
                    </div>
                  ))
                )}
                {output.length > 0 && output.length === npmCommands.find(c => c.name === selectedCommand)?.output.length && (
                  <div style={{ marginTop: '10px', color: '#28a745' }}>
                    $<span style={{ animation: 'blink 1s infinite' }}>_</span>
                  </div>
                )}
              </div>

              <p style={{ marginTop: '15px', fontSize: '14px', color: '#6c757d' }}>
                💡 これらのコマンドは実際の開発でよく使われます。コマンドを選ぶと、ターミナルでの実行結果をシミュレートします！
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>npmの役割</h2>

          <h3>1. パッケージのインストール</h3>
          <p>
            他の開発者が作った便利なコードを、簡単にダウンロードして使えます。
          </p>
          <div className="code-example">
            <pre><code>{`# Reactをインストール
npm install react

# 日付処理ライブラリをインストール
npm install date-fns`}</code></pre>
          </div>

          <h3>2. 依存関係の管理</h3>
          <p>
            「このプロジェクトは、Reactのバージョン18.2.0を使っている」といった情報を、
            <code>package.json</code>というファイルに記録します。
            これにより、チームメンバー全員が同じ環境で開発できるようになります。
          </p>

          <h3>3. スクリプトの実行</h3>
          <p>
            開発サーバーの起動、ビルド、テストなど、よく使うコマンドを登録して実行できます。
            <Link href="/terms/vercel">Vercel</Link>などのホスティングサービスにデプロイする際も、
            npmスクリプトが自動実行されます。
          </p>
          <div className="code-example">
            <pre><code>{`# 開発サーバー起動
npm run dev

# ビルド実行
npm run build`}</code></pre>
          </div>
        </section>

        <section>
          <h2>package.jsonとは？</h2>
          <p>
            <code>package.json</code>は、プロジェクトの「設定ファイル」です。
            どんなパッケージを使っているか、どんなスクリプトがあるかなどが書かれています。
          </p>

          <div className="code-example">
            <pre><code>{`{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "react": "^18.2.0",
    "next": "^15.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}`}</code></pre>
          </div>

          <h3>主な項目</h3>
          <ul>
            <li><code>name</code>: プロジェクト名</li>
            <li><code>version</code>: プロジェクトのバージョン</li>
            <li><code>scripts</code>: よく使うコマンドの登録</li>
            <li><code>dependencies</code>: 本番環境で必要なパッケージ</li>
            <li><code>devDependencies</code>: 開発時だけ必要なパッケージ</li>
          </ul>
        </section>

        <section>
          <h2>node_modulesとは？</h2>
          <p>
            <code>npm install</code>を実行すると、<code>node_modules</code>というフォルダが作られます。
            ここに、インストールしたパッケージの実際のコードが保存されます。
          </p>

          <p className="note">
            <strong>⚠️ 重要：</strong> <code>node_modules</code>は非常に大きくなるため、
            <Link href="/terms/github">GitHub</Link>にはアップロードしません。
            <code>.gitignore</code>に<code>node_modules/</code>を追加しましょう。
          </p>

          <h3>なぜnode_modulesをGitHubに上げないのか？</h3>
          <ul>
            <li>サイズが大きい（数百MB〜数GB）</li>
            <li><code>package.json</code>があれば、誰でも<code>npm install</code>で復元できる</li>
            <li>環境によって必要なファイルが異なる場合がある</li>
          </ul>
        </section>

        <section>
          <h2>npmの基本コマンド</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>コマンド</th>
                  <th>意味</th>
                  <th>使う場面</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>npm init</code></td>
                  <td>新しいプロジェクトを作成</td>
                  <td>プロジェクト開始時</td>
                </tr>
                <tr>
                  <td><code>npm install</code></td>
                  <td>package.jsonに書かれた全パッケージをインストール</td>
                  <td>GitHubからクローンした直後</td>
                </tr>
                <tr>
                  <td><code>npm install [パッケージ名]</code></td>
                  <td>特定のパッケージをインストール</td>
                  <td>新しいライブラリを追加したいとき</td>
                </tr>
                <tr>
                  <td><code>npm install --save-dev [パッケージ名]</code></td>
                  <td>開発時のみ使うパッケージをインストール</td>
                  <td>テストツールなどを追加</td>
                </tr>
                <tr>
                  <td><code>npm uninstall [パッケージ名]</code></td>
                  <td>パッケージを削除</td>
                  <td>不要なライブラリを削除</td>
                </tr>
                <tr>
                  <td><code>npm run [スクリプト名]</code></td>
                  <td>package.jsonに登録したスクリプトを実行</td>
                  <td>開発サーバー起動、ビルドなど</td>
                </tr>
                <tr>
                  <td><code>npm update</code></td>
                  <td>パッケージを最新版に更新</td>
                  <td>定期的なメンテナンス</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>セマンティックバージョニング</h2>
          <p>
            npmのパッケージは、<code>1.2.3</code>のような形式でバージョンが管理されています。
          </p>

          <div className="code-example">
            <pre><code>{`メジャー.マイナー.パッチ
  1   .  2  .  3

1 (メジャー): 互換性のない大きな変更
2 (マイナー): 後方互換性のある機能追加
3 (パッチ): バグ修正`}</code></pre>
          </div>

          <h3>バージョン指定の記号</h3>
          <ul>
            <li>
              <code>^1.2.3</code>: 1.x.xの最新版（マイナー・パッチは自動更新OK）
            </li>
            <li>
              <code>~1.2.3</code>: 1.2.xの最新版（パッチのみ自動更新OK）
            </li>
            <li>
              <code>1.2.3</code>: 完全に固定（更新しない）
            </li>
          </ul>

          <p className="note">
            <strong>💡 ポイント：</strong> <code>^</code>が一般的です。
            大きな破壊的変更は入らず、バグ修正や小さな機能追加は自動で取り込まれます。
          </p>
        </section>

        <section>
          <h2>package-lock.jsonとは？</h2>
          <p>
            <code>npm install</code>を実行すると、<code>package-lock.json</code>というファイルも作られます。
          </p>

          <h3>役割</h3>
          <p>
            インストールされた<strong>正確なバージョン</strong>を記録します。
            これにより、チームメンバー全員が同じバージョンのパッケージを使うことができます。
          </p>

          <p className="note">
            <strong>⚠️ 重要：</strong> <code>package-lock.json</code>は、
            <code>.gitignore</code>に入れず、GitHubにコミットしましょう！
          </p>
        </section>

        <section>
          <h2>npm vs yarn vs pnpm</h2>
          <p>
            npmの他にも、パッケージ管理ツールがあります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>ツール</th>
                  <th>特徴</th>
                  <th>向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>npm</strong></td>
                  <td>Node.jsに標準搭載、最も普及している</td>
                  <td>初心者、標準的なプロジェクト</td>
                </tr>
                <tr>
                  <td>yarn</td>
                  <td>高速、オフラインキャッシュ、Facebookが開発</td>
                  <td>大規模プロジェクト、速度重視</td>
                </tr>
                <tr>
                  <td>pnpm</td>
                  <td>ディスク容量を節約、最も高速</td>
                  <td>モノレポ、ディスク容量が気になる人</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>初心者はnpmから始めるのがおすすめ</strong>です。
            慣れてきたら、他のツールも試してみましょう。
          </p>
        </section>

        <section>
          <h2>npmでよくあるトラブルと解決法</h2>

          <h3>1. 「command not found: npm」</h3>
          <p>
            Node.jsがインストールされていません。
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>
            からNode.jsをインストールしてください。
          </p>

          <h3>2. 「EACCES: permission denied」</h3>
          <p>
            権限エラーです。<code>sudo</code>を付けるか、
            Node.jsのインストール方法を見直しましょう（nvmの使用を推奨）。
          </p>

          <h3>3. 「Cannot find module ...」</h3>
          <p>
            パッケージがインストールされていません。<code>npm install</code>を実行してください。
          </p>

          <h3>4. 「version conflict」</h3>
          <p>
            パッケージのバージョンが競合しています。
            <code>npm install --legacy-peer-deps</code>を試すか、
            package.jsonのバージョンを調整しましょう。
          </p>
        </section>

        <section>
          <h2>npmレジストリ</h2>
          <p>
            <strong>npmレジストリ</strong>は、世界中のパッケージが保存されているデータベースです。
          </p>

          <ul>
            <li>
              <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npmjs.com</a>
              でパッケージを検索できる
            </li>
            <li>200万以上のパッケージが公開されている</li>
            <li>誰でも自分のパッケージを公開できる</li>
          </ul>

          <p className="note">
            <strong>💡 ヒント：</strong> パッケージを選ぶときは、
            週間ダウンロード数、GitHubスター数、更新頻度をチェックしましょう。
          </p>
        </section>

        <section>
          <h2>実際の使用例</h2>

          <h3>Next.jsプロジェクトを始める</h3>
          <div className="code-example">
            <pre><code>{`# Next.jsプロジェクトを作成
npx create-next-app@latest my-app

# ディレクトリに移動
cd my-app

# 開発サーバー起動
npm run dev

# ブラウザで http://localhost:3000 を開く`}</code></pre>
          </div>

          <h3>便利なパッケージを追加</h3>
          <div className="code-example">
            <pre><code>{`# 日付処理ライブラリを追加
npm install date-fns

# アイコンライブラリを追加
npm install react-icons

# 使ってみる（コード内）
import { format } from 'date-fns'
const today = format(new Date(), 'yyyy-MM-dd')`}</code></pre>
          </div>

          <p>
            詳しくは<a href="https://docs.npmjs.com/" target="_blank" rel="noopener noreferrer">npm公式ドキュメント</a>や
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js公式サイト</a>で確認できます。
          </p>
        </section>

        <section>
          <h2>npmを使うメリット・デメリット</h2>

          <h3>メリット</h3>
          <ul>
            <li><strong>豊富なパッケージ：</strong> 200万以上のパッケージから選べる</li>
            <li><strong>標準搭載：</strong> Node.jsに標準で含まれているため追加インストール不要</li>
            <li><strong>依存関係の自動解決：</strong> パッケージが必要とする他のパッケージも自動インストール</li>
            <li><strong>バージョン管理：</strong> セマンティックバージョニングで安全に更新</li>
            <li><strong>広く使われている：</strong> 情報が豊富で問題解決しやすい</li>
          </ul>

          <h3>デメリット</h3>
          <ul>
            <li><strong>node_modulesが巨大：</strong> 数百MB〜数GBになることも</li>
            <li><strong>インストールが遅い場合がある：</strong> yarnやpnpmの方が高速</li>
            <li><strong>セキュリティリスク：</strong> 悪意のあるパッケージが混入する可能性</li>
          </ul>

          <p className="note">
            <strong>💡 セキュリティ対策：</strong>
            パッケージをインストールする前に、週間ダウンロード数、GitHubスター数、最終更新日を確認しましょう。
            また、<code>npm audit</code>コマンドで脆弱性をチェックできます。
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
                  <td><Link href="/terms/framework" className="term-name">Framework</Link></td>
                  <td>npmでインストールして使う開発フレームワーク</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>package.jsonはGitHubで共有、node_modulesは除外</td>
                </tr>
                <tr>
                  <td><Link href="/terms/javascript" className="term-name">JavaScript</Link></td>
                  <td>npmはJavaScriptのパッケージ管理ツール</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                  <td>npmはNode.jsに標準搭載されている</td>
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
