import Link from 'next/link'
import { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermPageHeader from '@/app/components/TermPageHeader'
import TableOfContents from '@/app/components/TableOfContents'
import AdInArticle from '@/app/components/AdInArticle'
import FAQAccordion from '@/app/components/FAQAccordion'

export const metadata: Metadata = {
  title: '入力から狙われる4大Web攻撃まとめ｜基本情報頻出セキュリティ',
  description: '基本情報技術者試験頻出！SQLインジェクション・XSS・CSRF・ディレクトリトラバーサルの4大攻撃を比較解説。試験問題を秒で見分けるキーワード表付き。',
  keywords: [
    'SQLインジェクション',
    'XSS クロスサイトスクリプティング',
    'CSRF クロスサイトリクエストフォージェリ',
    'ディレクトリトラバーサル',
    'Webセキュリティ 攻撃 まとめ',
    '基本情報技術者試験 セキュリティ',
    'セキュリティ攻撃 種類',
    'IT用語 わかりやすく',
  ],
  openGraph: {
    title: '入力から狙われる4大Web攻撃まとめ｜基本情報頻出セキュリティ',
    description: '基本情報技術者試験頻出！SQLインジェクション・XSS・CSRF・ディレクトリトラバーサルの4大攻撃を比較解説。試験問題を秒で見分けるキーワード表付き。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '入力から狙われる4大Web攻撃まとめ｜基本情報頻出セキュリティ',
    description: '基本情報技術者試験頻出！SQLインジェクション・XSS・CSRF・ディレクトリトラバーサルの4大攻撃を比較解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/web-input-attacks',
  },
}

export default function WebInputAttacksPage() {
  const faqs = [
    {
      question: '基本情報技術者試験でよく出るセキュリティ攻撃は？',
      answer: 'SQLインジェクション・XSS・CSRF・ディレクトリトラバーサルの4つが入力系攻撃として頻出です。それ以外にはDoS/DDoS攻撃（大量リクエストでサーバーダウン）、ブルートフォース攻撃（パスワード総当たり）、フィッシング詐欺（偽サイトへ誘導）も出題されます。',
    },
    {
      question: 'CSRFはなぜ気づかれにくいのですか？',
      answer: 'CSRFはユーザーのログイン済みセッション（クッキー）を悪用するため、サーバー側には正規のリクエストに見えます。ユーザー自身も罠サイトを踏んだ瞬間に裏で別サイトへリクエストが送られるだけなので気づきにくいのです。対策としてはCSRFトークン（フォーム送信ごとに発行する使い捨て認証コード）が一般的に使われます。',
    },
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="入力から狙われる4大Web攻撃まとめ｜基本情報頻出セキュリティ"
        description="SQLインジェクション・XSS・CSRF・ディレクトリトラバーサルの4大攻撃を比較解説。基本情報技術者試験頻出のセキュリティ攻撃をキーワードで瞬時に見分けるコツまとめ。"
        datePublished="2026-06-12"
        dateModified="2026-06-12"
      />

      <TermPageHeader
        termName="入力から狙われる4大Web攻撃"
        reading="Webセキュリティ攻撃まとめ / Web Input Attacks"
        icon="fas fa-shield-alt"
        dateCreated="2026-06-12"
        dateModified="2026-06-12"
        summaryItems={[
          '4大攻撃（SQLi・XSS・CSRF・ディレクトリトラバーサル）を一覧比較',
          'XSSとCSRFの見分け方（共通キーワードから2段階で判断）',
          '試験で秒殺するキーワード表',
        ]}
        showToc={false}
      />

      

      <main>
        <section>
          <h2>概要</h2>
          <p>
            Webアプリケーションへの攻撃の多くは、<strong>「入力欄」に細工することから始まります</strong>。
            ログインフォーム・検索ボックス・URLパラメータ——これらはすべて攻撃の入口です。
            基本情報技術者試験で頻出の<strong>4大Web入力攻撃（SQLインジェクション・XSS・CSRF・ディレクトリトラバーサル）</strong>を比較し、試験問題を秒で見分けましょう。
          </p>
        </section>

        <div className="term-page-header__toc">
          <TableOfContents />
        </div>
<AdInArticle adSlot="2892250316" position="below-toc" />
        <section>
          <h2>4大攻撃の比較（SQLインジェクション・XSS・CSRF・ディレクトリトラバーサル）</h2>
          <p>それぞれの攻撃が「何を狙い」「どんな被害をもたらすか」を一覧で確認しましょう。</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>攻撃名</th>
                  <th>一言定義</th>
                  <th>キーワード</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="term-name">SQLインジェクション</span></td>
                  <td>入力欄に悪意ある<strong>命令文（SQL）</strong>を流し込み、<strong>DB</strong>を不正取得・改ざんする攻撃</td>
                  <td><code>命令文</code> <code>DB</code></td>
                </tr>
                <tr>
                  <td><span className="term-name">XSS</span></td>
                  <td><strong>悪意あるスクリプト</strong>を仕込み、<strong>閲覧者自身のブラウザ</strong>で実行させる攻撃</td>
                  <td><code>悪意あるスクリプト</code></td>
                </tr>
                <tr>
                  <td><span className="term-name">CSRF</span></td>
                  <td><strong>悪意あるスクリプト</strong>を埋め込んだページを閲覧させ、<strong>別のWebサイト</strong>で<strong>意図しない操作</strong>を行わせる攻撃<br /><small>※スクリプトなしでも成立可</small></td>
                  <td><code>悪意あるスクリプト</code><br /><code>別のWebサイト</code></td>
                </tr>
                <tr>
                  <td><span className="term-name">ディレクトリトラバーサル</span></td>
                  <td><strong>ディレクトリパス（<code>../</code>）</strong>を使って公開していないファイルを不正閲覧する攻撃<br /><small>（トラバーサル＝横断）</small></td>
                  <td><code>（ディレクトリ）パス</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>XSSとCSRFの見分け方</h2>
          <p>
            XSSとCSRFはどちらも<strong>「悪意あるスクリプト」</strong>がキーワードで混同しやすい攻撃です。
            見分けるポイントは<strong>「どのサイトで実行されるか」</strong>です。
          </p>

          <div className="key-point-box">
            <p><strong>XSS</strong>：閲覧している<strong>そのサイト</strong>のブラウザでスクリプトが実行される → クッキー盗難・偽画面表示</p>
            <p style={{ marginTop: '0.75rem' }}><strong>CSRF</strong>：罠サイトを踏んで、ログイン中の<strong>別のサイト</strong>へ意図しない操作が送られる → 購入・退会・パスワード変更</p>
          </div>

          <p style={{ marginTop: '1rem' }}>
            試験問題で<strong>「別のWebサイトで」「意図しない操作を行わせる」</strong>という表現が出たら <strong>CSRF</strong> と判断できます。
          </p>
        </section>

        <section>
          <h2>試験で秒殺するキーワード表</h2>
          <p>問題文の「語尾・特徴的な表現」からどの攻撃か瞬時に判断できます。</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>問題文の特徴・語尾</th>
                  <th>答え</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>〜<strong>DBを不正取得・改ざん</strong>する</td>
                  <td>SQLインジェクション</td>
                </tr>
                <tr>
                  <td>〜<strong>スクリプトを閲覧者のブラウザで実行</strong>させる</td>
                  <td>XSS</td>
                </tr>
                <tr>
                  <td>〜<strong>別のWebサイトで意図しない操作</strong>を行わせる</td>
                  <td>CSRF</td>
                </tr>
                <tr>
                  <td>〜<strong>管理者が意図しないファイルの閲覧</strong>・パスを使った不正アクセス</td>
                  <td>ディレクトリトラバーサル</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>番外編：フィッシング詐欺との違い</h2>
          <p>
            フィッシング詐欺もセキュリティ試験で頻出ですが、上の4つとは性質が異なります。
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>分類</th>
                  <th>代表的な手法</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>技術的な攻撃</td>
                  <td>SQLインジェクション・XSS・CSRF・ディレクトリトラバーサル</td>
                  <td>システムの隙を突いて<strong>裏で勝手に</strong>動く</td>
                </tr>
                <tr>
                  <td>ソーシャルエンジニアリング</td>
                  <td>フィッシング詐欺</td>
                  <td>偽サイトに誘導し、<strong>ユーザー自身に</strong>入力させる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FAQAccordion faqs={faqs} />

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
                  <td><span className="term-name">SQLインジェクション</span></td>
                  <td>命令文でDBを不正操作する攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">XSS（クロスサイトスクリプティング）</span></td>
                  <td>悪意あるスクリプトを閲覧者ブラウザで実行させる攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">CSRF（クロスサイトリクエストフォージェリ）</span></td>
                  <td>別サイトへ意図しない操作を送りつける攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">ディレクトリトラバーサル</span></td>
                  <td>パスを横断して非公開ファイルを閲覧する攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">DoS/DDoS攻撃</span></td>
                  <td>大量リクエストでサーバーをダウンさせる攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">ブルートフォース攻撃</span></td>
                  <td>パスワードを総当たりで試す攻撃（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td><span className="term-name">フィッシング詐欺</span></td>
                  <td>偽サイトに誘導しユーザー自身に情報を入力させる詐欺（個別ページ準備中）</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/zero-day" className="term-name">
                      ゼロデイ攻撃
                    </Link>
                  </td>
                  <td>パッチが存在しない脆弱性を狙う攻撃</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/exploit" className="term-name">
                      エクスプロイト
                    </Link>
                  </td>
                  <td>脆弱性を悪用するための攻撃コード・プログラム</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/cve" className="term-name">
                      CVE
                    </Link>
                  </td>
                  <td>脆弱性の識別番号。攻撃に悪用される脆弱性に割り当てられる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
