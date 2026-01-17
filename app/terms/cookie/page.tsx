'use client'

import Link from 'next/link'
import TableOfContents from '@/app/components/TableOfContents'
import TermHeader from '@/app/components/TermHeader'
import CookieDemo from '@/app/components/CookieDemo'
import StructuredData from '@/app/components/StructuredData'
import FAQAccordion from '@/app/components/FAQAccordion'

const faqs = [
  {
    question: 'Cookieとは何ですか？',
    answer: 'Cookie（クッキー）とは、Webサイトがあなたのブラウザに保存する小さなデータファイルです。ログイン状態の保持、ショッピングカートの中身の記憶、言語設定の保存など、ユーザーの利便性を向上させるために使われます。',
  },
  {
    question: 'CookieとLocalStorageの違いは何ですか？',
    answer: 'Cookieはサーバーとブラウザの間で自動的にやり取りされる小さなデータで、主にログイン状態の保持に使われます。LocalStorageはブラウザにのみ保存される大きなデータで、主にアプリケーションの設定やキャッシュに使われます。',
  },
  {
    question: 'Cookieは削除できますか？',
    answer: 'はい、Cookieは削除できます。ブラウザの設定画面から個別に削除することも、全てのCookieを一括削除することも可能です。ただし、Cookieを削除するとログイン状態が解除されたり、サイトの設定がリセットされたりします。',
  },
  {
    question: 'サードパーティCookieとは何ですか？',
    answer: 'サードパーティCookieは、訪問しているサイト以外の第三者が発行するCookieです。主に広告のトラッキングや複数サイトをまたいだ行動分析に使われますが、プライバシー上の懸念があるため、多くのブラウザが制限や廃止の方向に進んでいます。',
  },
  {
    question: 'Cookieの有効期限はどのくらいですか？',
    answer: 'Cookieの有効期限は、セッションCookie（ブラウザを閉じるまで）と永続Cookie（指定された期限まで、数日〜数年）の2種類があります。Webサイト側で有効期限を設定でき、期限が切れると自動的に削除されます。',
  },
]

export default function CookiePage() {
  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="Cookieとは？初心者向けにわかりやすく解説"
        description="Cookie（クッキー）を初心者向けに解説。Webサイトがブラウザに保存する小さなデータファイルの仕組みを体験しながら学べます。"
        datePublished="2024-01-01"
        dateModified="2026-01-16"
      />
      <TermHeader
        termName="Cookie"
        reading="クッキー"
        icon="fas fa-cookie-bite"
      />

      <TableOfContents />

      <main>
        <section>
          <h2>概要</h2>
          <p>
            <strong>Cookie（クッキー）</strong>とは、
            <strong>「Webサイトがあなたのブラウザに保存する小さなデータファイル」</strong>です。
          </p>

          <p>
            想像してみてください。あなたが図書館に行ったとき、司書さんが
            「この人は前回、歴史の本を借りていたな」と覚えていてくれたら便利ですよね。
            Cookieは、まさにその「記憶メモ」の役割を果たします。
          </p>

          <p>
            Webサイトは、あなたが次回訪問したときに「前回はログインしていたな」
            「カートにこの商品を入れていたな」と思い出すことができるのです。
          </p>

          {/* 体験デモを概要の直下に配置 */}
          <div style={{ marginTop: '30px', marginBottom: '30px' }}>
            <h3>Cookieの仕組みを体験してみよう</h3>
            <p>
              下のデモでCookieを実際に保存・取得・削除して、仕組みを確認できます。
              実際に手を動かすことで、Cookieの動作が理解しやすくなります。
            </p>
            <CookieDemo />
          </div>
        </section>

        <section>
          <h2>Cookieの仕組み</h2>
          <p>Cookieは以下のような流れで動作します：</p>

          <ol>
            <li>
              <strong>初回訪問：</strong>
              あなたがWebサイトにアクセスすると、サーバーが「この人を識別するための情報」をCookieとしてブラウザに送る
            </li>
            <li>
              <strong>保存：</strong>
              ブラウザがそのCookieを保存する（小さなテキストファイルとして）
            </li>
            <li>
              <strong>再訪問：</strong>
              次回同じサイトを訪れると、ブラウザが自動的にCookieをサーバーに送り返す
            </li>
            <li>
              <strong>識別：</strong>
              サーバーがCookieを見て「あ、この人は前回ログインしていた人だ！」と認識する
            </li>
          </ol>

          <p>この仕組みのおかげで、毎回ログインし直す必要がなくなります。</p>
        </section>

        <section>
          <h2>Cookieの種類</h2>

          <h3>1. ファーストパーティCookie</h3>
          <p>
            <strong>訪問しているサイト自身が発行するCookie</strong>です。
          </p>
          <ul>
            <li>ログイン状態の保持</li>
            <li>ショッピングカートの中身を記憶</li>
            <li>言語設定やテーマ設定の保存</li>
          </ul>
          <p>基本的に、あなたの利便性を向上させるために使われます。</p>

          <h3>2. サードパーティCookie</h3>
          <p>
            <strong>訪問しているサイト以外の第三者が発行するCookie</strong>です。
          </p>
          <ul>
            <li>広告のトラッキング（あなたの興味を分析）</li>
            <li>複数サイトをまたいだ行動分析</li>
            <li>リターゲティング広告（一度見た商品の広告が追いかけてくる）</li>
          </ul>
          <p className="note">
            <strong>⚠️ プライバシーの観点：</strong>
            サードパーティCookieはプライバシー上の懸念があるため、
            多くのブラウザが制限や廃止の方向に進んでいます。
          </p>
        </section>

        <section>
          <h2>Cookieに保存される情報の例</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>情報の種類</th>
                  <th>具体例</th>
                  <th>用途</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>セッションID</td>
                  <td>abc123xyz789</td>
                  <td>ログイン状態の識別</td>
                </tr>
                <tr>
                  <td>ユーザー設定</td>
                  <td>language=ja, theme=dark</td>
                  <td>言語設定、テーマ設定の記憶</td>
                </tr>
                <tr>
                  <td>カート情報</td>
                  <td>cart_items=item1,item2</td>
                  <td>ショッピングカートの中身</td>
                </tr>
                <tr>
                  <td>訪問履歴</td>
                  <td>last_visit=2026-01-06</td>
                  <td>前回の訪問日時を記録</td>
                </tr>
                <tr>
                  <td>トラッキングID</td>
                  <td>ga_id=GA1.2.123456</td>
                  <td>アクセス解析（Google Analyticsなど）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="note">
            <strong>💡 重要：</strong> Cookieには通常、パスワードやクレジットカード番号などの
            機密情報は<strong>直接保存されません</strong>。保存されるのは識別用のIDなどです。
          </p>
        </section>

        <section>
          <h2>セッションCookie vs 永続Cookie</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>セッションCookie</th>
                  <th>永続Cookie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>保存期間</strong></td>
                  <td>ブラウザを閉じるまで</td>
                  <td>指定された期限まで（数日〜数年）</td>
                </tr>
                <tr>
                  <td><strong>用途</strong></td>
                  <td>一時的なログイン状態</td>
                  <td>「ログイン状態を保持する」設定</td>
                </tr>
                <tr>
                  <td><strong>削除タイミング</strong></td>
                  <td>ブラウザを閉じると自動削除</td>
                  <td>有効期限が切れるか、手動で削除</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Cookieとプライバシー</h2>
          <p>
            近年、Cookieは<strong>プライバシー保護</strong>の観点から注目されています。
          </p>

          <h3>よくある「Cookie同意バナー」</h3>
          <p>
            Webサイトを訪れると「このサイトはCookieを使用しています」というバナーが表示されることがありますよね。
            これは、<strong>EU一般データ保護規則（GDPR）</strong>などの法律により、
            Cookieの使用についてユーザーの同意を得ることが義務付けられているためです。
          </p>

          <h3>ブラウザによるCookie制限</h3>
          <ul>
            <li><strong>Safari：</strong> サードパーティCookieをデフォルトでブロック</li>
            <li><strong>Firefox：</strong> トラッキング防止機能を強化</li>
            <li><strong>Chrome：</strong> 2024年以降、サードパーティCookieの段階的廃止を進行中</li>
          </ul>

          <p>
            これらの動きは、ユーザーのプライバシーを守りつつ、
            Web広告の仕組みを再構築する大きな転換点となっています。
          </p>
        </section>

        <section>
          <h2>Cookieの確認・削除方法</h2>
          <p>ブラウザに保存されているCookieは、設定画面から確認・削除できます。</p>

          <h3>Google Chromeの場合</h3>
          <ol>
            <li>右上の「︙」（三点リーダー）をクリック</li>
            <li>「設定」→「プライバシーとセキュリティ」→「Cookieと他のサイトデータ」</li>
            <li>「すべてのCookieとサイトデータを表示」で個別に確認・削除可能</li>
          </ol>

          <p className="note">
            <strong>⚠️ 注意：</strong> Cookieを削除すると、ログイン状態が解除されたり、
            サイトの設定がリセットされたりします。
          </p>
        </section>

        <section>
          <h2>Cookieの代替技術</h2>
          <p>
            サードパーティCookieの廃止に伴い、新しい技術が登場しています：
          </p>

          <ul>
            <li>
              <strong><Link href="/terms/localstorage">LocalStorage</Link>：</strong>
              ブラウザに永続的にデータを保存（Cookie代替の一つ）
            </li>
            <li>
              <strong>Privacy Sandbox：</strong>
              Googleが提案する、プライバシーを保護しつつ広告を配信する新技術
            </li>
            <li>
              <strong>FLoC / Topics API：</strong>
              個人を特定せずに興味関心をグループ化する仕組み
            </li>
          </ul>
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
                  <td><Link href="/terms/localstorage" className="term-name">LocalStorage</Link></td>
                  <td>Cookieと似た機能を持つブラウザのデータ保存機能</td>
                </tr>
                <tr>
                  <td><Link href="/terms/http" className="term-name">HTTP/HTTPS</Link></td>
                  <td>CookieはHTTP通信でやり取りされる</td>
                </tr>
                <tr>
                  <td>セッション</td>
                  <td>ユーザーの一連の操作を識別するための仕組み</td>
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
