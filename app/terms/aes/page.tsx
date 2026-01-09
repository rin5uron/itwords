import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import AESDemo from '@/components/AESDemo'

export const metadata: Metadata = {
  title: 'AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説 | 実践型IT用語辞典',
  description: 'AES（Advanced Encryption Standard）とは何か、初心者向けにわかりやすく解説。暗号化の仕組み、AES-128・AES-256の違い、実用例を具体的に学べます。共通鍵暗号方式の基本も理解できるプログラミング初心者向けIT用語解説。',
  keywords: ['AES', 'AES とは', '暗号化', 'Advanced Encryption Standard', 'AES-128', 'AES-256', '共通鍵暗号', 'セキュリティ', 'IT用語 わかりやすく', 'プログラミング 初心者'],
  openGraph: {
    title: 'AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説',
    description: 'AESの仕組みと使い方をわかりやすく解説。現代の暗号化技術の基本を学べます。',
    type: 'article',
  },
}

export default function AESPage() {
  const faqs = [
    {
      question: 'AESとは何ですか？',
      answer: 'AES（Advanced Encryption Standard）とは、現代で最も広く使われている暗号化規格の一つです。データを第三者に読み取られないように変換する「共通鍵暗号方式」の一種で、米国政府が標準として採用しており、高いセキュリティ性能と処理速度を兼ね備えています。',
    },
    {
      question: 'AES-128とAES-256の違いは何ですか？',
      answer: 'AES-128とAES-256の違いは、暗号化に使用する「鍵の長さ」です。AES-128は128ビット（16バイト）の鍵を使用し、AES-256は256ビット（32バイト）の鍵を使用します。AES-256の方がより強固なセキュリティを提供しますが、その分処理時間が若干長くなります。',
    },
    {
      question: 'AESはどこで使われていますか？',
      answer: 'AESは、Wi-Fi通信の暗号化（WPA2/WPA3）、HTTPS通信、ファイルやディスクの暗号化、VPN通信、メッセージングアプリ（WhatsApp、Signalなど）、オンラインバンキングなど、幅広い場面で使用されています。',
    },
    {
      question: 'AESは安全ですか？',
      answer: 'AESは非常に高いセキュリティを持つ暗号化方式とされています。米国政府の機密情報保護にも採用されており、現時点で現実的な時間内にAESを破ることは極めて困難です。ただし、鍵の管理が適切でない場合や、古いモード（ECBなど）を使用した場合は脆弱性が生じる可能性があります。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="AES（Advanced Encryption Standard）とは？初心者向けにわかりやすく解説"
        description="AES（Advanced Encryption Standard）を初心者向けに解説。共通鍵暗号方式の仕組み、AES-128とAES-256の違い、実際の使用例を学べます。"
        datePublished="2024-01-09"
        dateModified="2024-01-09"
      />

      <TermHeader
        termName="AES"
        reading="エーイーエス / Advanced Encryption Standard"
        icon="fas fa-lock"
      />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>AES</strong>（Advanced Encryption Standard）とは、
            <strong>現代で最も広く使われている暗号化規格の一つ</strong>です。
          </p>

          <p>
            データを第三者に読み取られないように変換する「暗号化」の技術で、
            <strong>共通鍵暗号方式</strong>（対称鍵暗号方式）に分類されます。
          </p>

          <p>
            例えば、あなたが友人に秘密のメッセージを送りたいとします。
            そのまま送ると、途中で誰かに読まれてしまう可能性があります。
            そこで、<strong>特別な「鍵」を使ってメッセージを暗号化</strong>（意味不明な文字列に変換）し、
            友人は同じ鍵を使って暗号を解いて元のメッセージを読む、という仕組みです。
          </p>

          <p>
            AESは<strong>米国政府が2001年に標準として採用</strong>した暗号化規格で、
            高いセキュリティ性能と高速な処理が特徴です。
          </p>
        </section>

        <section>
          <h2>AESの特徴</h2>
          <p>AESが広く使われている理由は、以下のような優れた特徴があるためです。</p>

          <ul>
            <li>
              <strong>高いセキュリティ性能</strong>
              <br />
              現時点で現実的な時間内にAESを破ることは極めて困難とされています。
              米国政府の機密情報（トップシークレット）の保護にも使用されています。
            </li>
            <li>
              <strong>高速な処理</strong>
              <br />
              効率的なアルゴリズム設計により、大量のデータを高速に暗号化・復号化できます。
            </li>
            <li>
              <strong>柔軟な鍵長</strong>
              <br />
              128ビット、192ビット、256ビットの3種類の鍵長から選択でき、
              用途に応じてセキュリティレベルと処理速度のバランスを調整できます。
            </li>
            <li>
              <strong>広範なサポート</strong>
              <br />
              ほとんどのプログラミング言語やプラットフォームでAESのライブラリが提供されており、
              実装が容易です。
            </li>
          </ul>
        </section>

        <section>
          <h2>体験してみよう：AES暗号化</h2>
          <p>
            実際のAESアルゴリズムは複雑ですが、ここでは「鍵を使ってデータを暗号化・復号化する」という概念を体験できます。
            <br />
            <strong>💡 ポイント：</strong> 同じ鍵を使わないと復号化できません。これが「共通鍵暗号方式」の基本です。
          </p>

          <AESDemo />
        </section>

        <section>
          <h2>共通鍵暗号方式とは？</h2>
          <p>
            AESは<strong>共通鍵暗号方式</strong>（対称鍵暗号方式）と呼ばれる方式です。
          </p>

          <div className="concept-box">
            <h3>共通鍵暗号方式の仕組み</h3>
            <p>
              <strong>暗号化と復号化に同じ鍵を使う</strong>方式です。
            </p>
            <ul>
              <li>送信者: 鍵Aでメッセージを暗号化</li>
              <li>受信者: 同じ鍵Aで暗号を復号化</li>
            </ul>
            <p>
              まるで同じ合鍵を持っている二人だけが開けられる金庫のようなイメージです。
            </p>
          </div>

          <div className="comparison-table">
            <h3>共通鍵暗号と公開鍵暗号の違い</h3>
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>共通鍵暗号（AES）</th>
                  <th>公開鍵暗号（RSA）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>鍵の種類</td>
                  <td>暗号化と復号化に同じ鍵を使用</td>
                  <td>暗号化と復号化に異なる鍵を使用</td>
                </tr>
                <tr>
                  <td>処理速度</td>
                  <td>高速</td>
                  <td>低速</td>
                </tr>
                <tr>
                  <td>鍵の配送</td>
                  <td>事前に安全な方法で共有する必要がある</td>
                  <td>公開鍵は自由に配布できる</td>
                </tr>
                <tr>
                  <td>用途</td>
                  <td>大量データの暗号化</td>
                  <td>鍵交換、デジタル署名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>AES-128、AES-192、AES-256の違い</h2>
          <p>
            AESには、使用する鍵の長さに応じて3つのバリエーションがあります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>鍵長</th>
                  <th>ラウンド数</th>
                  <th>セキュリティレベル</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AES-128</strong></td>
                  <td>128ビット</td>
                  <td>10ラウンド</td>
                  <td>高い</td>
                  <td>一般的な用途に最適</td>
                </tr>
                <tr>
                  <td><strong>AES-192</strong></td>
                  <td>192ビット</td>
                  <td>12ラウンド</td>
                  <td>より高い</td>
                  <td>バランス重視の用途</td>
                </tr>
                <tr>
                  <td><strong>AES-256</strong></td>
                  <td>256ビット</td>
                  <td>14ラウンド</td>
                  <td>最も高い</td>
                  <td>最高レベルのセキュリティが必要な用途</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="note-box">
            <h3>どれを選ぶべき？</h3>
            <ul>
              <li>
                <strong>一般的な用途</strong>: AES-128で十分なセキュリティが得られます
              </li>
              <li>
                <strong>長期保管が必要なデータ</strong>: AES-256がおすすめです
              </li>
              <li>
                <strong>政府機関や金融機関</strong>: 規制により AES-256 が要求される場合があります
              </li>
            </ul>
            <p>
              ※ AES-128でも、現実的な時間内に破ることは極めて困難です。
              鍵が適切に管理されていれば、ほとんどの用途で十分なセキュリティを提供します。
            </p>
          </div>
        </section>

        <section>
          <h2>AESの動作モード</h2>
          <p>
            AESでデータを暗号化する際、様々な「モード」を選択できます。
            モードによって、セキュリティ性能や用途が異なります。
          </p>

          <div className="mode-list">
            <div className="mode-item">
              <h3>CBC（Cipher Block Chaining）</h3>
              <p>
                最も一般的なモードの一つ。前のブロックの暗号文が次のブロックの暗号化に影響を与えます。
              </p>
              <p><strong>用途</strong>: ファイル暗号化、ディスク暗号化</p>
            </div>

            <div className="mode-item">
              <h3>GCM（Galois/Counter Mode）</h3>
              <p>
                暗号化と認証を同時に行える高速なモード。データの改ざん検知も可能です。
              </p>
              <p><strong>用途</strong>: HTTPS通信、VPN、現代的なアプリケーション</p>
            </div>

            <div className="mode-item">
              <h3>CTR（Counter Mode）</h3>
              <p>
                並列処理が可能で高速。ストリーム暗号のように動作します。
              </p>
              <p><strong>用途</strong>: 高速な通信、並列処理が必要な場面</p>
            </div>

            <div className="mode-item warning">
              <h3>ECB（Electronic CodeBook）⚠️</h3>
              <p>
                最もシンプルなモードですが、同じ平文が同じ暗号文になるため<strong>セキュリティ上の問題</strong>があります。
              </p>
              <p><strong>推奨</strong>: 使用しない</p>
            </div>
          </div>
        </section>

        <section>
          <h2>AESの実用例</h2>
          <p>AESは私たちの日常生活の様々な場面で使われています。</p>

          <div className="use-case-list">
            <div className="use-case">
              <h3>1. Wi-Fi通信の暗号化</h3>
              <p>
                WPA2やWPA3などのWi-Fiセキュリティプロトコルで、AESが使用されています。
                あなたのスマートフォンやPCがWi-Fiに接続する際、通信内容はAESで暗号化されています。
              </p>
            </div>

            <div className="use-case">
              <h3>2. HTTPS通信</h3>
              <p>
                Webサイトとブラウザ間の通信を暗号化するHTTPS通信では、
                多くの場合AESが使用されています（TLS/SSL）。
              </p>
            </div>

            <div className="use-case">
              <h3>3. ファイルやディスクの暗号化</h3>
              <p>
                macOSのFileVault、WindowsのBitLocker、LinuxのLUKSなど、
                ディスク全体を暗号化するツールでAESが使用されています。
              </p>
            </div>

            <div className="use-case">
              <h3>4. VPN通信</h3>
              <p>
                IPsecやOpenVPNなどのVPNプロトコルで、通信データの暗号化にAESが使用されています。
              </p>
            </div>

            <div className="use-case">
              <h3>5. メッセージングアプリ</h3>
              <p>
                WhatsApp、Signal、iMessageなどのエンドツーエンド暗号化を提供するアプリで、
                AESが使用されています。
              </p>
            </div>

            <div className="use-case">
              <h3>6. パスワード管理ツール</h3>
              <p>
                1Password、LastPass、Bitwardenなどのパスワードマネージャーは、
                保存されたパスワードをAESで暗号化しています。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>AESを使う際の注意点</h2>
          <p>AESは非常に強力な暗号化方式ですが、適切に使用しないと脆弱性が生じる可能性があります。</p>

          <div className="warning-list">
            <div className="warning-item">
              <h3>1. 鍵の管理</h3>
              <p>
                暗号化に使用する鍵が漏洩すると、暗号化されたデータは保護できません。
                鍵は安全に保管し、定期的に更新することが重要です。
              </p>
            </div>

            <div className="warning-item">
              <h3>2. 初期化ベクトル（IV）</h3>
              <p>
                多くのAESモード（CBC、GCMなど）では、初期化ベクトル（IV）が必要です。
                <strong>IVは毎回ランダムに生成し、同じIVを再利用しない</strong>ことが重要です。
              </p>
            </div>

            <div className="warning-item">
              <h3>3. 安全でないモードの回避</h3>
              <p>
                ECBモードは使用せず、CBCやGCMなどの安全なモードを選択してください。
              </p>
            </div>

            <div className="warning-item">
              <h3>4. 認証の追加</h3>
              <p>
                暗号化だけではデータの改ざんを検知できません。
                GCMモードを使用するか、HMACなどで認証を追加することが推奨されます。
              </p>
            </div>
          </div>
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
                  <td className="term-name">暗号化（Encryption）</td>
                  <td>データを第三者に読み取られないように変換する技術</td>
                </tr>
                <tr>
                  <td className="term-name">復号化（Decryption）</td>
                  <td>暗号化されたデータを元に戻すこと</td>
                </tr>
                <tr>
                  <td className="term-name">RSA</td>
                  <td>公開鍵暗号方式の代表的なアルゴリズム</td>
                </tr>
                <tr>
                  <td className="term-name">SHA-256</td>
                  <td>ハッシュ関数の一種（暗号化ではなく一方向変換）</td>
                </tr>
                <tr>
                  <td className="term-name">TLS/SSL</td>
                  <td>HTTPS通信で使用される暗号化プロトコル（AESを使用）</td>
                </tr>
                <tr>
                  <td><Link href="/terms/zero-day" className="term-name">ゼロデイ攻撃</Link></td>
                  <td>脆弱性が修正される前に行われるサイバー攻撃</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>まとめ</h2>
          <p>
            AES（Advanced Encryption Standard）は、現代のデジタル社会を支える重要な暗号化技術です。
            Wi-Fi、HTTPS、VPN、メッセージングアプリなど、私たちが日常的に使用する多くのサービスで、
            AESがデータを保護しています。
          </p>
          <p>
            高いセキュリティ性能と高速な処理速度を兼ね備えたAESは、
            今後も長く使われ続ける標準的な暗号化方式と言えるでしょう。
          </p>
        </section>
      </main>

      <footer className="footer-nav">
        <Link href="/">トップページに戻る</Link>
        <p>&copy; 2026 itwords - 実践型IT用語辞典</p>
      </footer>
    </div>
  )
}
