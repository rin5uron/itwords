'use client'

import Link from 'next/link'
import { useState } from 'react'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import TableOfContents from '@/app/components/TableOfContents'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export default function CLIGUIPage() {
  const [currentPath, setCurrentPath] = useState('/home/user')
  const [files, setFiles] = useState(['documents', 'photos', 'music'])
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    '$ ターミナル起動中...',
    '$ コマンドを入力してください'
  ])
  const [inputCommand, setInputCommand] = useState('')

  const faqs = [
    {
      question: 'CLIとGUIの違いは？',
      answer: 'CLI（コマンドラインインターフェース）は文字でコマンドを入力して操作する「黒い画面」です。GUI（グラフィカルユーザーインターフェース）はボタンやアイコンをマウスでクリックして操作する「視覚的な画面」です。GUIは直感的で分かりやすく、CLIは慣れれば高速で効率的です。',
    },
    {
      question: '初心者はCLIとGUIどっちを使うべき？',
      answer: '初心者はまずGUIから始めるのがおすすめです。視覚的に分かりやすく、マウスでクリックするだけで操作できます。プログラミングに慣れてきたら、CLIも少しずつ学ぶと作業効率が大幅に上がります。最終的には両方使い分けるのが理想です。',
    },
    {
      question: 'CLIは難しくないですか？',
      answer: '最初は難しく感じますが、基本的なコマンド（ls、cd、mkdir、cp など）を覚えれば日常的な作業は十分できます。GUI で10クリック必要な作業が、CLI なら1行で済むこともあります。慣れると「黒い画面」が快適に感じるようになります。',
    },
    {
      question: '昔のパソコンはCLIだけだったって本当？',
      answer: '本当です！1980年代までのパソコン（MS-DOS、UNIX など）は基本的にCLIしかありませんでした。ボタンやアイコンはなく、すべてコマンドを打ち込んで操作していました。1984年に Macintosh が GUI を普及させ、Windows 95 で一般化しました。',
    },
    {
      question: 'プログラマーはなぜCLIを使うの？',
      answer: 'CLIは効率的だからです。複数のファイルを一括処理したり、繰り返し作業を自動化したり、サーバーをリモート操作したりする場合、CLIの方が圧倒的に速いです。また、git、npm、docker などの開発ツールは基本的にCLIで操作します。',
    },
  ]

  const executeCommand = (cmd: string) => {
    const newHistory = [...terminalHistory, `$ ${cmd}`]

    if (cmd === 'ls') {
      newHistory.push(files.join('  '))
    } else if (cmd === 'pwd') {
      newHistory.push(currentPath)
    } else if (cmd.startsWith('cd ')) {
      const dir = cmd.slice(3)
      if (files.includes(dir)) {
        setCurrentPath(`${currentPath}/${dir}`)
        newHistory.push(`ディレクトリを ${dir} に移動しました`)
      } else {
        newHistory.push(`エラー: ${dir} というディレクトリは存在しません`)
      }
    } else if (cmd.startsWith('mkdir ')) {
      const newDir = cmd.slice(6)
      setFiles([...files, newDir])
      newHistory.push(`ディレクトリ ${newDir} を作成しました`)
    } else if (cmd === 'clear') {
      setTerminalHistory(['$ ターミナルをクリアしました'])
      setInputCommand('')
      return
    } else if (cmd === 'help') {
      newHistory.push('使えるコマンド: ls, pwd, cd, mkdir, clear, help')
    } else if (cmd === '') {
      // 何もしない
    } else {
      newHistory.push(`コマンドが見つかりません: ${cmd}`)
      newHistory.push('help と入力すると使えるコマンドが表示されます')
    }

    setTerminalHistory(newHistory)
    setInputCommand('')
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputCommand)
    }
  }

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="CLI/GUIとは？違い・使い分けを初心者向けに解説【どっちを使う？】"
        description="CLI（黒い画面）とGUI（ボタン）の違いを初心者向けに解説。昔のPCはCLIだけだった歴史や、初心者がどっちから学ぶべきかをシミュレーター付きで分かりやすく説明します。"
        datePublished="2026-01-17"
        dateModified="2026-01-17"
      />

      <TermHeader
        termName="CLI / GUI"
        reading="シーエルアイ / ジーユーアイ"
        icon="fas fa-terminal"
        dateCreated="2026-01-17"
        dateModified="2026-01-17"
      />

      <main>
        <TableOfContents />

        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-17 | 最終更新: 2026-01-17</span>
        </div>

        <section>
          <h2>概要</h2>
          <p>
            <strong>CLI（Command Line Interface）</strong>と<strong>GUI（Graphical User Interface）</strong>は、
            コンピュータを操作するための<strong>2つの異なる方法</strong>です。
          </p>

          <div style={{
            backgroundColor: '#f0f8ff',
            border: '2px solid #4a90e2',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '18px', color: '#2c5282' }}>
              🎯 超シンプルに言うと
            </h3>
            <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li><strong>GUI = ボタンやアイコンをマウスでクリック</strong>（見た目が分かりやすい）</li>
              <li><strong>CLI = 文字でコマンドを入力する「黒い画面」</strong>（慣れると超速い）</li>
            </ul>
          </div>

          <p style={{ marginTop: '20px' }}>
            例えば、ファイルをコピーする場合：
          </p>
          <ul>
            <li><strong>GUIの場合</strong>：ファイルを右クリック → 「コピー」を選択 → 貼り付け先を開く → 右クリック → 「貼り付け」</li>
            <li><strong>CLIの場合</strong>：<code>cp file1.txt file2.txt</code> と1行入力するだけ</li>
          </ul>
        </section>

        <section>
          <h2>GUIとは？（ボタンの世界）</h2>
          <p>
            <strong>GUI（Graphical User Interface）</strong>は、
            ボタン、アイコン、ウィンドウなどの<strong>視覚的な要素</strong>を使って操作する方法です。
          </p>

          <h3>GUIの特徴</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>特徴</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>直感的</strong></td>
                  <td>見たままクリックすればOK</td>
                </tr>
                <tr>
                  <td><strong>分かりやすい</strong></td>
                  <td>初心者でもすぐに使える</td>
                </tr>
                <tr>
                  <td><strong>視覚的</strong></td>
                  <td>フォルダやファイルがアイコンで見える</td>
                </tr>
                <tr>
                  <td><strong>マウス操作</strong></td>
                  <td>クリック、ドラッグ＆ドロップ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>GUIの例</h3>
          <ul>
            <li>Windows のエクスプローラー（ファイル管理）</li>
            <li>Mac の Finder</li>
            <li>Web ブラウザ（Chrome、Firefox など）</li>
            <li>Microsoft Word、Excel</li>
            <li>スマホのアプリ全般</li>
          </ul>
        </section>

        <section>
          <h2>CLIとは？（黒い画面の世界）</h2>
          <p>
            <strong>CLI（Command Line Interface）</strong>は、
            <strong>文字でコマンドを入力</strong>して操作する方法です。
            「ターミナル」「コマンドプロンプト」などと呼ばれる「黒い画面」がCLIです。
          </p>

          <h3>CLIの特徴</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>特徴</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>高速</strong></td>
                  <td>慣れればマウス操作より速い</td>
                </tr>
                <tr>
                  <td><strong>効率的</strong></td>
                  <td>複数ファイルを一括処理できる</td>
                </tr>
                <tr>
                  <td><strong>自動化可能</strong></td>
                  <td>スクリプトで作業を自動化できる</td>
                </tr>
                <tr>
                  <td><strong>キーボード操作</strong></td>
                  <td>マウス不要、文字入力のみ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>CLIの例</h3>
          <ul>
            <li>Windows の「コマンドプロンプト」「PowerShell」</li>
            <li>Mac/Linux の「ターミナル」</li>
            <li><Link href="/terms/github">Git</Link> コマンド（<code>git commit</code>、<code>git push</code> など）</li>
            <li><Link href="/terms/npm">npm</Link> コマンド（<code>npm install</code> など）</li>
            <li>サーバー操作（SSH接続）</li>
          </ul>
        </section>

        <section>
          <h2>CLI vs GUI：同じ操作を比較</h2>
          <p>
            同じ作業を GUI と CLI でやるとどう違うのか見てみましょう。
          </p>

          <h3>例1：ファイルをコピーする</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>操作方法</th>
                  <th>手順</th>
                  <th>クリック数/入力数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GUI</strong></td>
                  <td>
                    1. ファイルを右クリック<br />
                    2. 「コピー」を選択<br />
                    3. 貼り付け先フォルダを開く<br />
                    4. 右クリック → 「貼り付け」
                  </td>
                  <td>約5クリック</td>
                </tr>
                <tr>
                  <td><strong>CLI</strong></td>
                  <td><code>cp file1.txt /path/to/destination/</code></td>
                  <td>1行入力</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>例2：複数ファイルの一括処理</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>操作方法</th>
                  <th>手順</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GUI</strong></td>
                  <td>
                    1. ファイルを1つずつ選択<br />
                    2. 名前を変更<br />
                    3. これを100回繰り返す...
                  </td>
                </tr>
                <tr>
                  <td><strong>CLI</strong></td>
                  <td><code>for file in *.txt; do mv "$file" "new_$file"; done</code><br />（100ファイルを一瞬で処理）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 ポイント：</strong> 1回だけの操作なら GUI の方が楽ですが、
            同じ作業を何度も繰り返すなら CLI の方が圧倒的に速いです。
          </p>
        </section>

        <section>
          <h2>実際にやってみよう：CLIシミュレーター</h2>
          <p>
            実際にCLIコマンドを試してみましょう！以下のターミナルでコマンドを入力してください。
          </p>

          <div style={{
            backgroundColor: '#1e1e1e',
            color: '#d4d4d4',
            padding: '20px',
            borderRadius: '8px',
            fontFamily: 'Consolas, Monaco, monospace',
            fontSize: '14px',
            marginTop: '20px',
            minHeight: '300px',
            maxHeight: '400px',
            overflow: 'auto'
          }}>
            {terminalHistory.map((line, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                {line}
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <span style={{ color: '#4ec9b0', marginRight: '8px' }}>$</span>
              <input
                type="text"
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="コマンドを入力してEnterキーを押してください"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#d4d4d4',
                  fontFamily: 'Consolas, Monaco, monospace',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '5px',
            padding: '15px',
            marginTop: '15px'
          }}>
            <h4 style={{ marginTop: 0, fontSize: '16px', color: '#856404' }}>
              💻 使えるコマンド
            </h4>
            <ul style={{ marginBottom: 0, fontSize: '14px' }}>
              <li><code>ls</code> - ファイル一覧を表示</li>
              <li><code>pwd</code> - 現在のディレクトリを表示</li>
              <li><code>cd [フォルダ名]</code> - ディレクトリを移動</li>
              <li><code>mkdir [フォルダ名]</code> - 新しいフォルダを作成</li>
              <li><code>clear</code> - 画面をクリア</li>
              <li><code>help</code> - ヘルプを表示</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>昔のパソコンは全部CLIだった！</h2>
          <p>
            今では当たり前のように使っている「ボタンやアイコン」（GUI）ですが、
            実は<strong>1980年代までのパソコンにはGUIがありませんでした</strong>。
          </p>

          <h3>コンピュータの歴史</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>時代</th>
                  <th>システム</th>
                  <th>インターフェース</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1970年代</strong></td>
                  <td>UNIX（初期）</td>
                  <td>CLI のみ（黒い画面）</td>
                </tr>
                <tr>
                  <td><strong>1981年</strong></td>
                  <td>MS-DOS（Windows の前身）</td>
                  <td>CLI のみ</td>
                </tr>
                <tr>
                  <td><strong>1984年</strong></td>
                  <td>Macintosh 発売</td>
                  <td>GUI 登場！革命的だった</td>
                </tr>
                <tr>
                  <td><strong>1995年</strong></td>
                  <td>Windows 95 発売</td>
                  <td>GUI が一般家庭に普及</td>
                </tr>
                <tr>
                  <td><strong>2007年</strong></td>
                  <td>iPhone 発売</td>
                  <td>タッチ操作の GUI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>🕰️ 豆知識：</strong> 1984年の Macintosh の広告キャッチコピーは
            「コンピュータを使うのに、もうマニュアルは要らない」でした。
            GUI がいかに革命的だったかが分かりますね！
          </p>

          <p>
            でも、プログラマーやエンジニアは今でもCLIを好んで使います。
            なぜなら、<strong>慣れればGUIより圧倒的に速くて効率的</strong>だからです。
          </p>
        </section>

        <section>
          <h2>初心者はどっちから学ぶべき？</h2>
          <p>
            結論：<strong>まずはGUIから始めて、慣れたらCLIも学ぶ</strong>のがおすすめです。
          </p>

          <div style={{
            backgroundColor: '#e7f3ff',
            border: '2px solid #2196f3',
            borderRadius: '8px',
            padding: '20px',
            marginTop: '20px'
          }}>
            <h3 style={{ marginTop: 0, fontSize: '18px', color: '#1565c0' }}>
              🎓 学習ロードマップ
            </h3>
            <ol style={{ fontSize: '16px', lineHeight: '1.8' }}>
              <li>
                <strong>GUI で基礎を学ぶ</strong><br />
                ファイル操作、フォルダの概念、プログラムの実行方法などを GUI で理解する
              </li>
              <li>
                <strong>プログラミングを始める</strong><br />
                <Link href="/terms/javascript">JavaScript</Link>、Python などを GUI のエディタ（VS Code など）で学ぶ
              </li>
              <li>
                <strong>CLI を少しずつ触る</strong><br />
                <Link href="/terms/github">Git</Link>、<Link href="/terms/npm">npm</Link> などのコマンドを使ってみる
              </li>
              <li>
                <strong>CLI に慣れる</strong><br />
                基本コマンド（ls、cd、mkdir など）を覚えて日常的に使う
              </li>
              <li>
                <strong>両方を使い分ける</strong><br />
                目的に応じて GUI と CLI を使い分けられるようになる
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2>CLI/GUIの使い分け</h2>
          <p>
            実際の開発現場では、<strong>GUI と CLI を場面によって使い分けます</strong>。
          </p>

          <h3>GUI が向いている場面</h3>
          <ul>
            <li>初めて使うソフトウェアを試す</li>
            <li>画像や動画を編集する</li>
            <li>1回だけの単純な操作</li>
            <li>視覚的に確認しながら作業したい</li>
          </ul>

          <h3>CLI が向いている場面</h3>
          <ul>
            <li>同じ作業を何度も繰り返す</li>
            <li>大量のファイルを一括処理</li>
            <li>サーバーをリモート操作</li>
            <li><Link href="/terms/github">Git</Link> でバージョン管理</li>
            <li><Link href="/terms/npm">npm</Link> でパッケージ管理</li>
            <li>作業を自動化したい</li>
          </ul>

          <p className="note">
            <strong>💡 ポイント：</strong> プログラミングをするなら、最終的には両方使えるようになる必要があります。
            でも焦らなくて大丈夫！まずは GUI で慣れて、必要になったら CLI を学びましょう。
          </p>
        </section>

        <section>
          <h2>プログラマーがCLIを好む理由</h2>
          <p>
            「黒い画面」を使っているプログラマーを見て、カッコいいと思ったことはありませんか？
            実は、見た目だけでなく<strong>実用的な理由</strong>があります。
          </p>

          <h3>CLI が効率的な理由</h3>
          <ol>
            <li>
              <strong>マウスに手を伸ばさなくていい</strong><br />
              キーボードだけで完結するので、コードを書いている手を止めなくていい
            </li>
            <li>
              <strong>履歴機能</strong><br />
              過去に実行したコマンドを矢印キーで呼び出せる（同じ作業を繰り返す時に便利）
            </li>
            <li>
              <strong>自動化できる</strong><br />
              コマンドをファイルに保存（スクリプト）すれば、ワンクリックで実行できる
            </li>
            <li>
              <strong>リモート操作</strong><br />
              遠隔地のサーバーを操作する場合、CLI の方が軽くて速い
            </li>
            <li>
              <strong>開発ツールの標準</strong><br />
              Git、Docker、Kubernetes などの現代的なツールは基本的に CLI
            </li>
          </ol>
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
                  <td><Link href="/terms/github" className="term-name">Git</Link></td>
                  <td>CLI でバージョン管理を行うツール</td>
                </tr>
                <tr>
                  <td><Link href="/terms/npm" className="term-name">npm</Link></td>
                  <td>CLI でパッケージ管理を行うツール</td>
                </tr>
                <tr>
                  <td><Link href="/terms/github" className="term-name">GitHub</Link></td>
                  <td>GUI と CLI 両方で操作できるプラットフォーム</td>
                </tr>
                <tr>
                  <td>ターミナル</td>
                  <td>Mac/Linux で CLI を使うためのアプリ</td>
                </tr>
                <tr>
                  <td>コマンドプロンプト</td>
                  <td>Windows で CLI を使うためのアプリ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
