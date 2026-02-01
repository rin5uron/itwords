import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import AESDemo from '@/components/AESDemo'
import FAQAccordion from '@/app/components/FAQAccordion'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export const metadata: Metadata = {
  title: 'AESとは？小学生でもわかる【動かして学べるデモ付き】',
  description: 'AESとは？暗号化デモで仕組みを今すぐ体験。Wi-FiやHTTPSで使われる暗号化、128と256の違い、実装方法まで初心者向けに解説します。',
  keywords: ['AES', 'AES とは', '暗号化', 'Advanced Encryption Standard', 'AES-128', 'AES-256', '共通鍵暗号', 'セキュリティ', 'IT用語 わかりやすく', 'プログラミング 初心者', 'AES デモ', 'AES 実装'],
  openGraph: {
    title: 'AESとは？小学生でもわかる【動かして学べるデモ付き】',
    description: 'AESとは？暗号化デモで仕組みを今すぐ体験。Wi-FiやHTTPSで使われる暗号化、128と256の違い、実装方法まで初心者向けに解説します。',
    type: 'article',
    images: [
      {
        url: '/images/terms/aes-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'AES暗号化のイメージ - 共通鍵暗号方式',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AESとは？小学生でもわかる【動かして学べるデモ付き】',
    description: 'AESとは？暗号化デモで仕組みを今すぐ体験。Wi-FiやHTTPSで使われる暗号化、128と256の違い、実装方法まで初心者向けに解説します。',
    images: ['/images/terms/aes-hero.jpg'],
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/aes',
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
      answer: 'AES-128とAES-256の違いは、暗号化に使用する「鍵の長さ」です。AES-128は128ビット（16バイト）の鍵を使用し、AES-256は256ビット（32バイト）の鍵を使用します。AES-256の方がより強固なセキュリティを提供しますが、その分処理時間が若干長くなります。一般用途ではAES-128で十分ですが、金融・医療など重要データにはAES-256が推奨されます。',
    },
    {
      question: 'AESはどこで使われていますか？',
      answer: 'AESは、Wi-Fi通信の暗号化（WPA2/WPA3）、HTTPS通信、ファイルやディスクの暗号化、VPN通信、メッセージングアプリ（WhatsApp、Signalなど）、オンラインバンキングなど、幅広い場面で使用されています。',
    },
    {
      question: 'AESは安全ですか？',
      answer: 'AESは非常に高いセキュリティを持つ暗号化方式とされています。米国政府の機密情報保護にも採用されており、現時点で現実的な時間内にAESを破ることは極めて困難です。ただし、鍵の管理が適切でない場合や、古いモード（ECBなど）を使用した場合は脆弱性が生じる可能性があります。',
    },
    {
      question: 'AESの暗号化モードはどれを使うべきですか？',
      answer: '新規開発では AES-GCM モードを使用することを強く推奨します。GCMは暗号化と認証を同時に行い、並列処理も可能で高速です。TLS 1.3（最新のHTTPS）でも標準採用されています。ECBモードは絶対に使用しないでください。既存システムでCBCを使っている場合も、可能な限りGCMへの移行を検討してください。',
    },
    {
      question: 'JavaScriptでAESを実装するにはどうすればいいですか？',
      answer: 'JavaScriptでAESを実装するには、crypto-jsライブラリまたはブラウザ標準のWeb Crypto APIを使います。crypto-jsはシンプルで使いやすく、Web Crypto APIはライブラリ不要でAES-GCMに対応しています。自作実装は避け、実績のあるライブラリを使用することが重要です。',
    },
    {
      question: 'AESとRSAの違いは何ですか？',
      answer: 'AESは「共通鍵暗号」で、暗号化と復号化に同じ鍵を使います。高速ですが、事前に安全に鍵を共有する必要があります。RSAは「公開鍵暗号」で、暗号化と復号化に異なる鍵を使います。鍵配送問題を解決できますが、処理が遅いです。実際のHTTPS通信では、RSAで共通鍵を安全に交換し、その後の通信はAESで高速に暗号化する組み合わせが使われます。',
    },
    {
      question: 'AES暗号化で最もよくある間違いは何ですか？',
      answer: '最もよくある間違いは、1) 鍵をソースコードに直接書く（環境変数に保存すべき）、2) ECBモードを使う（GCMやCBCを使うべき）、3) 初期化ベクトル（IV）を使い回す（毎回ランダム生成すべき）、4) 弱いパスワードを鍵として使う（十分な長さとランダム性が必要）、の4つです。これらを避けることで、AESの安全性を最大限に活かせます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="AESとは？初心者向けにわかりやすく解説"
        description="AESとは？暗号化デモで仕組みを今すぐ体験。Wi-FiやHTTPSで使われる暗号化、128と256の違い、実装方法まで初心者向けに解説します。"
        datePublished="2024-01-09"
        dateModified="2026-01-19"
      />

      <TermPageHeader
        termName="AES"
        reading="エーイーエス / Advanced Encryption Standard"
        icon="fas fa-lock"
        dateCreated="2024-01-09"
        dateModified="2026-01-19"
        summaryItems={[
          'AESとは何か？暗号化の仕組み',
          '暗号化デモで実際に体験',
          'AES-128と256の違いと選び方',
          'JavaScriptでの実装方法'
        ]}
      />

      {/* ヒーロー画像（タイトルの下に配置） */}
      <div style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto 2rem auto',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        height: 'auto',
        minHeight: '400px'
      }}>
        <Image
          src="/images/terms/aes-hero.jpg"
          alt="AES暗号化のイメージ - 共通鍵暗号方式"
          width={1200}
          height={630}
          priority
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block'
          }}
        />
      </div>

      <main>
        <section>
          <h2>概要</h2>

          <p>
            <strong>AES</strong>（Advanced Encryption Standard）とは、<strong>現代で最も広く使われている暗号化規格</strong>です。
            データを第三者に読み取られないように変換する「共通鍵暗号方式」で、<strong>同じ鍵を使って暗号化・復号化</strong>します。
          </p>
          <p>
            例えば、鍵を使ってメッセージを暗号化し、同じ鍵で復号化する仕組みです。
            <strong>米国政府が2001年に標準として採用</strong>し、高いセキュリティと高速な処理が特徴です。
          </p>

          <p>
            AESは私たちの身近なところで使われています。
            Wi-FiのWPA2/WPA3、<Link href="/terms/http">HTTPS</Link>通信、
            <Link href="/terms/api">API</Link>の暗号化など、
            インターネットのセキュリティを支える重要な技術です。
          </p>
        </section>

        <section>
          <h2>共通鍵暗号方式とは？</h2>
          <p>
            AESは<strong>共通鍵暗号方式</strong>（対称鍵暗号方式）で、<strong>暗号化と復号化に同じ鍵を使う</strong>のが特徴です。
          </p>
          <p>
            例えるなら、同じ合鍵を持っている二人だけが開けられる金庫のようなイメージです。
            送信者Aさんと受信者Bさんが同じ鍵を持っていて、Aさんが鍵でメッセージを暗号化し、
            Bさんが同じ鍵で復号化します。
          </p>

          <h3>共通鍵暗号方式のメリット・デメリット</h3>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>メリット</th>
                  <th>デメリット</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>処理速度</strong></td>
                  <td>⚡ <strong>非常に高速</strong>（公開鍵暗号より100〜1000倍速い）</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><strong>鍵の長さ</strong></td>
                  <td>短い鍵で高いセキュリティ（128〜256ビット）</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td><strong>鍵の配送</strong></td>
                  <td>-</td>
                  <td>⚠️ 事前に安全に鍵を共有する必要がある</td>
                </tr>
                <tr>
                  <td><strong>鍵の管理</strong></td>
                  <td>-</td>
                  <td>⚠️ 通信相手ごとに異なる鍵が必要（n人なら n(n-1)/2 個の鍵）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            このデメリットを補うため、実際の<Link href="/terms/http">HTTPS</Link>通信では<strong>RSA（公開鍵暗号）とAESを組み合わせて</strong>使います。
            RSAで共通鍵を安全に交換し、その後の通信はAESで高速に暗号化します。
            この組み合わせにより、鍵配送問題を解決しながら高速な暗号化通信を実現しています。
          </p>

          <p className="note">
            <strong>💡 実際の通信例：</strong>
            あなたが今このページを見ているときも、AESが使われています。
            ブラウザのアドレスバーに鍵マークが表示されていれば、AESで暗号化された安全な通信（HTTPS）が行われている証拠です。
          </p>
        </section>

        <section>
          <h2>AESの暗号化の仕組み</h2>
          <p>
            AESは<strong>ブロック暗号</strong>と呼ばれる方式で、データを128ビット（16バイト）の
            ブロックに分割して暗号化します。
          </p>

          <h3>AESの処理ステップ</h3>
          <p>
            AESは複数の「ラウンド」と呼ばれる処理を繰り返します。
            ラウンド数は鍵の長さによって異なります：
          </p>
          <ul>
            <li><strong>AES-128</strong>：10ラウンド</li>
            <li><strong>AES-192</strong>：12ラウンド</li>
            <li><strong>AES-256</strong>：14ラウンド</li>
          </ul>

          <p>各ラウンドでは、以下の4つの処理を実行します：</p>
          <ol>
            <li>
              <strong>SubBytes（バイト置換）</strong>：各バイトを別の値に置き換える（S-Boxと呼ばれる置換表を使用）
            </li>
            <li>
              <strong>ShiftRows（行シフト）</strong>：各行を左にシフトする
            </li>
            <li>
              <strong>MixColumns（列混合）</strong>：各列を混合する（最終ラウンド以外）
            </li>
            <li>
              <strong>AddRoundKey（ラウンド鍵の加算）</strong>：ラウンド鍵とXOR演算
            </li>
          </ol>

          <p>
            これらの処理を繰り返すことで、元のデータが全く異なる暗号文に変換されます。
            <strong>同じ処理を逆順で実行</strong>することで、暗号文を元のデータに復号化できます。
          </p>
        </section>

        <section>
          <h2>体験してみよう：AES暗号化</h2>
          <p>
            <strong>💡 ポイント：</strong> 同じ鍵を使わないと復号化できません。これが「共通鍵暗号方式」の基本です。
          </p>

          <AESDemo />
        </section>

        <section>
          <h2>AES-128 vs AES-192 vs AES-256：詳細比較</h2>
          <p>
            AESには鍵の長さによって3つのバリエーションがあります。
            **鍵が長いほどセキュリティは高まりますが、処理時間も若干長くなります**。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>AES-128</th>
                  <th>AES-192</th>
                  <th>AES-256</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>鍵の長さ</strong></td>
                  <td>128ビット（16バイト）</td>
                  <td>192ビット（24バイト）</td>
                  <td>256ビット（32バイト）</td>
                </tr>
                <tr>
                  <td><strong>ラウンド数</strong></td>
                  <td>10ラウンド</td>
                  <td>12ラウンド</td>
                  <td>14ラウンド</td>
                </tr>
                <tr>
                  <td><strong>セキュリティ強度</strong></td>
                  <td>2<sup>128</sup> 通りの鍵</td>
                  <td>2<sup>192</sup> 通りの鍵</td>
                  <td>2<sup>256</sup> 通りの鍵</td>
                </tr>
                <tr>
                  <td><strong>解読にかかる時間<br/>（総当たり攻撃）</strong></td>
                  <td>約10<sup>27</sup>年<br/>（1兆年の1兆倍）</td>
                  <td>約10<sup>45</sup>年</td>
                  <td>約10<sup>63</sup>年<br/>（宇宙の年齢の10<sup>50</sup>倍）</td>
                </tr>
                <tr>
                  <td><strong>処理速度</strong></td>
                  <td>⚡ 最速</td>
                  <td>中間</td>
                  <td>若干遅い（約20-40%遅い）</td>
                </tr>
                <tr>
                  <td><strong>推奨用途</strong></td>
                  <td>一般的なWeb通信、<br/>ファイル暗号化</td>
                  <td>政府機関、<br/>高度なセキュリティ要件</td>
                  <td>軍事、機密情報、<br/>長期保存データ</td>
                </tr>
                <tr>
                  <td><strong>実際の使用例</strong></td>
                  <td>Wi-Fi（WPA2）、<br/>HTTPS、VPN</td>
                  <td>米国政府の機密情報<br/>（SECRET レベル）</td>
                  <td>米国政府の最高機密<br/>（TOP SECRET）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>どれを選ぶべき？</h3>
          <ul>
            <li>
              <strong>一般的な用途（個人、企業）</strong>：AES-128で十分
              <br/>→ Wi-Fi、HTTPS、ファイル暗号化など
            </li>
            <li>
              <strong>高度なセキュリティが必要</strong>：AES-256を選択
              <br/>→ 金融機関、医療データ、個人情報、長期保存データ
            </li>
            <li>
              <strong>AES-192</strong>：ほとんど使われない（128と256の中間という中途半端な位置）
            </li>
          </ul>

          <p>
            <strong>💡 重要</strong>：AES-128でも事実上解読不可能です。
            セキュリティ上の弱点は鍵の長さではなく、<strong>鍵の管理ミス</strong>や<strong>実装の脆弱性</strong>であることがほとんどです。
          </p>
        </section>

        <section>
          <h2>AESの暗号化モード</h2>
          <p>
            AESは128ビットのブロックを暗号化しますが、実際のデータはそれより長いことがほとんどです。
            複数のブロックをどう処理するかを定める「暗号化モード」が重要です。
          </p>

          <h3>主な暗号化モード</h3>

          <h4>1. ECB（Electronic Codebook）モード ❌ 非推奨</h4>
          <p>
            <strong>各ブロックを独立して暗号化</strong>する最もシンプルなモード。
          </p>
          <ul>
            <li>⚠️ <strong>同じ平文ブロックは同じ暗号文になる</strong> → パターンが見えてしまう</li>
            <li>⚠️ セキュリティ上の問題があるため、<strong>使用すべきではない</strong></li>
          </ul>

          <h4>2. CBC（Cipher Block Chaining）モード ✅ よく使われる</h4>
          <p>
            <strong>前のブロックの暗号文を次のブロックの暗号化に使う</strong>モード。
          </p>
          <ul>
            <li>✅ 同じ平文でも異なる暗号文になる</li>
            <li>✅ セキュアで広く使われている（SSL/TLS、ファイル暗号化など）</li>
            <li>⚠️ 初期化ベクトル（IV）が必要</li>
            <li>⚠️ 並列処理ができない（順次処理のみ）</li>
          </ul>

          <h4>3. GCM（Galois/Counter Mode）⭐ 最新・最高</h4>
          <p>
            <strong>暗号化と認証を同時に行う</strong>最新のモード。
          </p>
          <ul>
            <li>✅ <strong>暗号化 + 改ざん検知</strong>を同時に実現</li>
            <li>✅ 並列処理が可能で高速</li>
            <li>✅ TLS 1.3（最新のHTTPS）で標準採用</li>
            <li>✅ <strong>現在最も推奨されるモード</strong></li>
          </ul>

          <h4>4. CTR（Counter）モード</h4>
          <p>
            <strong>カウンタ値を暗号化</strong>して平文とXORするモード。
          </p>
          <ul>
            <li>✅ 並列処理が可能</li>
            <li>✅ ランダムアクセスが可能（特定のブロックだけ復号化できる）</li>
            <li>⚠️ 認証機能がない（GCMの方が優れている）</li>
          </ul>

          <div className="comparison-table" style={{ marginTop: '1.5rem' }}>
            <table>
              <thead>
                <tr>
                  <th>モード</th>
                  <th>セキュリティ</th>
                  <th>並列処理</th>
                  <th>認証</th>
                  <th>推奨度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ECB</strong></td>
                  <td>❌ 弱い</td>
                  <td>✅ 可能</td>
                  <td>❌ なし</td>
                  <td>❌ 使用禁止</td>
                </tr>
                <tr>
                  <td><strong>CBC</strong></td>
                  <td>✅ 強い</td>
                  <td>❌ 不可</td>
                  <td>❌ なし</td>
                  <td>✅ 推奨</td>
                </tr>
                <tr>
                  <td><strong>GCM</strong></td>
                  <td>✅ 強い</td>
                  <td>✅ 可能</td>
                  <td>✅ あり</td>
                  <td>⭐ 最推奨</td>
                </tr>
                <tr>
                  <td><strong>CTR</strong></td>
                  <td>✅ 強い</td>
                  <td>✅ 可能</td>
                  <td>❌ なし</td>
                  <td>✅ 推奨</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: '1rem' }}>
            <strong>💡 結論</strong>：新規開発では<strong>AES-GCM</strong>を使いましょう。
            既存システムでCBCを使っている場合も、可能な限りGCMへの移行を検討してください。
          </p>
        </section>

        <section>
          <h2>AESの実用例</h2>
          <p>AESは私たちの身近なところで、毎日のように使われています：</p>
          <ul>
            <li>
              <strong>Wi-Fi通信</strong>：WPA2/WPA3規格でAESを使用。自宅や職場のWi-Fiで通信が保護されています
            </li>
            <li>
              <strong>HTTPS通信</strong>：Webサイトとの通信を暗号化。URLが「https://」で始まるサイトで使われています
            </li>
            <li>
              <strong>ファイル暗号化</strong>：MacのFileVault、WindowsのBitLockerなど、ディスク全体を暗号化
            </li>
            <li>
              <strong>VPN通信</strong>：リモートワークでの安全な通信に必須
            </li>
            <li>
              <strong>メッセージングアプリ</strong>：WhatsApp、Signal、LINEなどのエンドツーエンド暗号化
            </li>
            <li>
              <strong>オンラインバンキング</strong>：取引情報の保護に使用
            </li>
            <li>
              <strong>パスワードマネージャー</strong>：1Password、LastPassなどでパスワードを安全に保存
            </li>
          </ul>
        </section>

        <section>
          <h2>JavaScriptでAESを実装する方法</h2>
          <p>
            実際にWeb開発でAESを使う場合は、<strong>crypto-jsライブラリ</strong>を使うのが一般的です。
            <Link href="/terms/npm">npm</Link>で簡単にインストールできます。
          </p>

          <details>
            <summary>サンプルコードを見る (JavaScript + crypto-js)</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// インストール: npm install crypto-js

const CryptoJS = require('crypto-js');

// === 暗号化 ===
function encrypt(plaintext, password) {
  // AES-256-CBCで暗号化（パスワードから鍵を生成）
  const ciphertext = CryptoJS.AES.encrypt(plaintext, password).toString();
  return ciphertext;
}

// === 復号化 ===
function decrypt(ciphertext, password) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}

// === 使用例 ===
const message = "これは秘密のメッセージです";
const password = "MySecurePassword123";

// 暗号化
const encrypted = encrypt(message, password);
console.log("暗号文:", encrypted);
// 出力例: U2FsdGVkX1+abc123def456...

// 復号化
const decrypted = decrypt(encrypted, password);
console.log("復号文:", decrypted);
// 出力: これは秘密のメッセージです

// ❌ 間違ったパスワードでは復号化できない
const wrong = decrypt(encrypted, "WrongPassword");
console.log("間違ったパスワード:", wrong);
// 出力: （空文字列またはエラー）`}</code>
              </pre>
            </div>
          </details>

          <details>
            <summary>Web Crypto API（ブラウザ標準）を使う方法</summary>
            <div className="code-example">
              <pre>
                <code className="language-javascript">{`// ブラウザ標準のWeb Crypto APIを使用（ライブラリ不要）

async function generateKey() {
  // AES-GCM用の鍵を生成
  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256  // AES-256
    },
    true,  // 鍵のエクスポートを許可
    ["encrypt", "decrypt"]
  );
  return key;
}

async function encryptData(plaintext, key) {
  // テキストをバイト配列に変換
  const encoder = new TextEncoder();
  const data = encoder.encode(plaintext);

  // 初期化ベクトル（IV）を生成
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // 暗号化
  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    data
  );

  return { ciphertext, iv };
}

async function decryptData(ciphertext, key, iv) {
  // 復号化
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    ciphertext
  );

  // バイト配列をテキストに変換
  const decoder = new TextDecoder();
  return decoder.decode(decrypted);
}

// 使用例
(async () => {
  const key = await generateKey();
  const message = "秘密のメッセージ";

  const { ciphertext, iv } = await encryptData(message, key);
  console.log("暗号化完了");

  const decrypted = await decryptData(ciphertext, key, iv);
  console.log("復号文:", decrypted);
})();`}</code>
              </pre>
            </div>
          </details>
        </section>

        <section>
          <h2>AESと他の暗号化方式の比較</h2>
          <p>
            AES以外にも様々な暗号化方式があります。それぞれの特徴を理解して、適切なものを選びましょう。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>暗号方式</th>
                  <th>種類</th>
                  <th>鍵の長さ</th>
                  <th>速度</th>
                  <th>セキュリティ</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>AES</strong></td>
                  <td>共通鍵</td>
                  <td>128/192/256ビット</td>
                  <td>⚡ 非常に速い</td>
                  <td>✅ 非常に強い</td>
                  <td>データ暗号化全般<br/>（現在の標準）</td>
                </tr>
                <tr>
                  <td><strong>DES</strong></td>
                  <td>共通鍵</td>
                  <td>56ビット</td>
                  <td>⚡ 速い</td>
                  <td>❌ 弱い（破られた）</td>
                  <td>⚠️ 使用禁止<br/>（歴史的な存在）</td>
                </tr>
                <tr>
                  <td><strong>3DES</strong></td>
                  <td>共通鍵</td>
                  <td>168ビット</td>
                  <td>🐢 遅い</td>
                  <td>⚠️ 中程度</td>
                  <td>⚠️ レガシーシステム<br/>（AESへ移行推奨）</td>
                </tr>
                <tr>
                  <td><strong>RSA</strong></td>
                  <td>公開鍵</td>
                  <td>2048/4096ビット</td>
                  <td>🐢 非常に遅い</td>
                  <td>✅ 強い</td>
                  <td>鍵交換、デジタル署名<br/>（AESと併用）</td>
                </tr>
                <tr>
                  <td><strong>ChaCha20</strong></td>
                  <td>共通鍵</td>
                  <td>256ビット</td>
                  <td>⚡ 非常に速い</td>
                  <td>✅ 非常に強い</td>
                  <td>モバイル、組み込み<br/>（AESの代替）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>AESが選ばれる理由</h3>
          <ul>
            <li>
              <strong>速度とセキュリティのバランス</strong>：高速かつ非常に安全
            </li>
            <li>
              <strong>ハードウェアサポート</strong>：現代のCPUにはAES専用命令（AES-NI）が搭載され、さらに高速化
            </li>
            <li>
              <strong>国際標準</strong>：米国政府が採用し、世界中で標準として使われている
            </li>
            <li>
              <strong>実績</strong>：20年以上使われており、重大な脆弱性が見つかっていない
            </li>
          </ul>
        </section>

        <section>
          <h2>AESのセキュリティ：本当に安全？</h2>
          <p>
            AESは<strong>非常に高いセキュリティ</strong>を持ち、現時点で<strong>現実的な時間内に解読することは不可能</strong>とされています。
          </p>

          <h3>総当たり攻撃は不可能</h3>
          <p>
            例えば、AES-256を総当たり攻撃で破ろうとした場合、
            2<sup>256</sup> = 約10<sup>77</sup>通りの鍵を試す必要があります。
          </p>
          <p>
            仮に1秒間に1兆個（10<sup>12</sup>）の鍵を試せるスーパーコンピュータを使っても、
            <strong>約10<sup>63</sup>年かかります</strong>。これは宇宙の年齢（約138億年）の10<sup>50</sup>倍以上です。
          </p>

          <h3>実際の脆弱性は「実装」と「運用」</h3>
          <p>
            AES自体は安全ですが、以下のような場合に脆弱性が生じます：
          </p>
          <ul>
            <li>
              <strong>❌ 弱い鍵</strong>：「password」「12345678」など推測しやすい鍵
            </li>
            <li>
              <strong>❌ 鍵の漏洩</strong>：ソースコードに鍵をハードコード、ログに鍵を出力
            </li>
            <li>
              <strong>❌ ECBモードの使用</strong>：パターンが見えてしまう危険なモード
            </li>
            <li>
              <strong>❌ IVの使い回し</strong>：初期化ベクトルは毎回ランダムに生成すべき
            </li>
            <li>
              <strong>❌ サイドチャネル攻撃</strong>：処理時間や消費電力からの情報漏洩
            </li>
          </ul>

          <h3>✅ 安全に使うためのベストプラクティス</h3>
          <ul>
            <li>
              <strong>AES-GCMモード</strong>を使う（暗号化 + 認証）
            </li>
            <li>
              <strong>鍵は環境変数</strong>に保存（ソースコードに書かない）
            </li>
            <li>
              <strong>IV（初期化ベクトル）は毎回ランダム生成</strong>
            </li>
            <li>
              <strong>実装済みのライブラリ</strong>を使う（自作しない）
            </li>
            <li>
              <strong>AES-256</strong>を選ぶ（金融・医療など重要データ）
            </li>
          </ul>

          <p>
            詳しくは<a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto" target="_blank" rel="noopener noreferrer">MDN Web Crypto API</a>や
            <a href="https://csrc.nist.gov/publications/detail/fips/197/final" target="_blank" rel="noopener noreferrer">NIST AES標準仕様書</a>で確認できます。
          </p>
        </section>

        <section>
          <h2>AESとゼロデイ攻撃</h2>
          <p>
            AESは非常に強固な暗号化方式ですが、<Link href="/terms/zero-day">ゼロデイ攻撃</Link>のような脅威からシステムを守るためには、
            暗号化だけでなく多層的なセキュリティ対策が必要です。
          </p>

          <h3>AESだけでは防げない攻撃</h3>
          <ul>
            <li><strong>マルウェア感染：</strong> 暗号化前のデータを盗まれる</li>
            <li><strong>中間者攻撃：</strong> 鍵交換時に盗聴される</li>
            <li><strong>ソーシャルエンジニアリング：</strong> ユーザーを騙して鍵を入手</li>
            <li><strong>ゼロデイ脆弱性：</strong> 暗号化実装のバグを突かれる</li>
          </ul>

          <p>
            そのため、AES暗号化に加えて、定期的なセキュリティアップデート、
            ファイアウォール、侵入検知システム（IDS）などを組み合わせることが重要です。
          </p>
        </section>

        <FAQAccordion faqs={faqs} />

        <section className="term-comparison">
          <h2>関連用語</h2>
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
                    <Link href="/terms/zero-day" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">ゼロデイ攻撃</span>
                    </Link>
                  </td>
                  <td>
                    暗号化されていないシステムを狙うサイバー攻撃。AESで通信を保護することで防御できます
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/api" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">API</span>
                    </Link>
                  </td>
                  <td>
                    API通信でもAESによる暗号化が使われ、データを安全にやり取りします
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/http" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">HTTP</span>
                    </Link>
                  </td>
                  <td>
                    HTTPSではAESを使って通信を暗号化し、盗聴や改ざんを防ぎます
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdBelowRelatedTerms />

      </main>
    </div>
  )
}
