import Link from 'next/link'
import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'

export const metadata: Metadata = {
  title: '制作背景 | 実践型IT用語辞典',
  description:
    '実践型IT用語辞典が生まれた理由、対象とする方、他の辞典との違い、学習の進め方と今後の展望を説明しています。',
}

export default function AboutPage() {
  return (
    <div className="container">
      <SiteHeader showNav={true} />

      <main>
        <section>
          <h1>制作の背景と意図</h1>

          <h2>このサイトが生まれた理由</h2>
          <p>
            プログラミング学習を始めたばかりの頃、「API」「JSON」「フレームワーク」といった用語の説明を読んでも、なかなか理解できませんでした。
            教科書的な定義は書いてあるのに、「実際にどう使うのか」「なぜそうなるのか」が分からず、もどかしさを感じていました。
          </p>
          <p>
            そこで生まれたのがこの「実践型IT用語辞典」です。
            従来の辞典のように説明を読むだけでなく、実際に手を動かして体験できるデモを用意することで、抽象的な概念を直感的に理解できるようにしました。
          </p>

          <h2>誰のためのサイトか</h2>
          <p>
            このサイトは、次のような方々を対象にしています：
          </p>
          <ul>
            <li>プログラミング学習を始めたばかりの初心者</li>
            <li>IT業界で働く非エンジニア（営業、マーケティング、デザイナーなど）</li>
            <li>「IT用語 わかりやすく」「IT用語 初心者」と検索している方</li>
            <li>教科書的な説明では理解できなかった方</li>
            <li>実際に動かして理解したい実践派の学習者</li>
          </ul>

          <h2>他のIT用語辞典との違い</h2>
          <p>
            一般的なIT用語辞典は「定義」と「説明」で終わりますが、このサイトでは以下の点が異なります：
          </p>
          <ul>
            <li><strong>体験デモ付き</strong>：APIやローカルストレージなど、実際に動かせるデモで体感できる</li>
            <li><strong>初心者目線</strong>：専門用語を使わず、小学生でも理解できる表現を心がけている</li>
            <li><strong>実例重視</strong>：「日常のどこで使われているか」を具体的に紹介</li>
            <li><strong>FAQ充実</strong>：初心者がつまずきやすい疑問に答える</li>
            <li><strong>現役開発者が運営</strong>：実務経験に基づいた実践的な解説</li>
          </ul>

          <h2>学習の進め方</h2>
          <p>
            このサイトは自由に使っていただけますが、以下の順序で学習すると効果的です：
          </p>
          <ol>
            <li><strong>基礎から始める</strong>：HTML、CSS、JavaScriptなどのWeb技術の基本から</li>
            <li><strong>デモを触る</strong>：各ページの体験デモで実際に動かしてみる</li>
            <li><strong>関連用語へ</strong>：ページ下部の関連用語リンクから知識を広げる</li>
            <li><strong>検索機能を活用</strong>：気になる用語をすぐに調べられる</li>
            <li><strong>繰り返し見る</strong>：理解が深まるまで何度でも復習できる</li>
          </ol>

          <h2>これからの展望</h2>
          <p>
            このサイトは継続的に成長していきます。
            新しいIT用語の追加、既存ページの改善、ユーザーからのリクエストへの対応など、常に最新で分かりやすいコンテンツを提供できるよう努めています。
            「こんな用語を追加してほしい」「ここが分かりにくい」といったご意見があれば、ぜひお問い合わせからお知らせください。
          </p>

          <nav
            className="about-page-links"
            aria-label="関連リンク"
            style={{
              marginTop: '2.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid #e8e6e0',
              fontSize: '0.85rem',
              color: '#666',
              maxWidth: '320px',
            }}
          >
            <p style={{ marginBottom: '0.5rem' }}>関連リンク：</p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.25rem' }}>
                <a
                  href="https://amzn.to/4bL5vya"
                  rel="nofollow"
                  target="_blank"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ color: '#666', textDecoration: 'underline' }}
                >
                  クナイプ シュガースクラブ カメリア＆アルガン 200mL
                </a>
              </li>
              <li style={{ marginBottom: '0.25rem' }}>
                <a
                  href="https://amzn.to/4rfHPHd"
                  rel="nofollow"
                  target="_blank"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ color: '#666', textDecoration: 'underline' }}
                >
                  シャコット シェイピングプリマー 25g 001 ライトベージュ
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
