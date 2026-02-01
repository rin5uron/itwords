import Link from 'next/link'
import type { Metadata } from 'next'
import StructuredData from '@/app/components/StructuredData'
import TermHeader from '@/app/components/TermHeader'
import AdBelowRelatedTerms from '@/app/components/AdBelowRelatedTerms'

export const metadata: Metadata = {
  title: 'ポカヨケとは？IT開発への応用を初心者向けに解説【実践例付き】 | 実践型IT用語辞典',
  description: 'ポカヨケ（Poka-Yoke）とは、製造業のトヨタ生産方式で生まれたヒューマンエラー防止の仕組みです。CI/CD、コードレビュー、デプロイ制限など、IT開発への応用方法を初心者にもわかりやすく解説します。',
  keywords: ['ポカヨケ', 'Poka-Yoke', 'トヨタ生産方式', 'ヒューマンエラー防止', 'ポカヨケ とは', 'IT開発', '品質管理', 'フールプルーフ', '初心者', 'わかりやすく'],
  openGraph: {
    title: 'ポカヨケとは？IT開発への応用を初心者向けに解説【実践例付き】',
    description: 'トヨタ生産方式のポカヨケをIT開発に応用する方法をわかりやすく解説。',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ポカヨケとは？IT開発への応用を初心者向けに解説【実践例付き】',
    description: 'トヨタ生産方式のポカヨケをIT開発に応用する方法をわかりやすく解説。',
  },
  alternates: {
    canonical: 'https://itwords.jp/terms/poka-yoke',
  },
}

export default function PokaYokePage() {
  const faqs = [
    {
      question: 'ポカヨケとは何ですか？',
      answer: 'ポカヨケ（Poka-Yoke）とは、「うっかりミス（ポカ）を避ける（ヨケる）」という意味の日本語で、作業者のヒューマンエラーを防止するための仕組みや工夫のことです。トヨタ生産方式の創始者である大野耐一氏が提唱した品質管理の重要な考え方です。'
    },
    {
      question: 'ポカヨケとフールプルーフの違いは？',
      answer: 'ポカヨケは製造業における用語で、フールプルーフはIT・製品設計における用語ですが、実は同じ概念です。どちらも「ヒューマンエラーを未然に防ぐ」という目的は同じで、製造現場では「ポカヨケ」、IT業界では「フールプルーフ」と呼ばれています。'
    },
    {
      question: 'ポカヨケの3つのレベルとは？',
      answer: 'レベル1は「除去」（ミスが発生する可能性そのものを排除）、レベル2は「代替」（ミスが起きにくい別の方法に置き換える）、レベル3は「容易化」（ミスを検出しやすくする）です。レベル1が最も効果的で、レベル3は補助的な対策となります。'
    },
    {
      question: 'IT開発でポカヨケを応用するには？',
      answer: 'CI/CDでのテスト自動化、コードレビューの必須化、本番環境へのアクセス制限、デプロイ前のチェックリスト自動化、TypeScriptによる型チェックなど、様々な場面でポカヨケの考え方を応用できます。'
    }
  ]

  return (
    <div className="container">
      <StructuredData type="FAQPage" faqs={faqs} />
      <StructuredData
        type="Article"
        title="ポカヨケとは？IT開発への応用を初心者向けに解説【実践例付き】"
        description="トヨタ生産方式のポカヨケをIT開発に応用する方法を初心者向けに解説。ヒューマンエラー防止の仕組みを学べます。"
        datePublished="2026-01-13"
        dateModified="2026-01-13"
      />

      <TermHeader
        termName="ポカヨケ"
        reading="ぽかよけ / Poka-Yoke"
        icon="fas fa-tools"
        dateCreated="2026-01-13"
        dateModified="2026-01-13"
      />

      <main>
        {/* 更新日（概要の上） */}
        <div className="date-info" style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '1px solid #e0e0e0'
        }}>
          <span>作成日: 2026-01-13 | 最終更新: 2026-01-13</span>
        </div>

        <section>
          <h2>概要</h2>
          <p>
            <strong>ポカヨケ</strong>（Poka-Yoke）とは、<strong>「うっかりミス（ポカ）を避ける（ヨケる）」</strong>という意味の日本語で、
            <strong>作業者のヒューマンエラーを防止</strong>するための仕組みや工夫のことです。
          </p>
          <p>
            トヨタ生産方式の創始者である<strong>大野耐一氏</strong>が提唱した品質管理の重要な考え方で、
            製造現場だけでなく、<strong>IT開発やサービス業</strong>でも広く応用されています。
          </p>
        </section>

        <section>
          <h2>ポカヨケとフールプルーフの関係</h2>
          <p>
            ポカヨケと<Link href="/terms/foolproof" style={{ color: '#007bff', textDecoration: 'underline' }}>フールプルーフ</Link>は、
            実は<strong>同じ概念の別名</strong>です。
          </p>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>ポカヨケ</th>
                  <th>フールプルーフ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>起源</strong></td>
                  <td>日本の製造業（トヨタ）</td>
                  <td>欧米の製品設計・IT業界</td>
                </tr>
                <tr>
                  <td><strong>主な用途</strong></td>
                  <td>製造現場、品質管理</td>
                  <td>IT製品、UI/UX設計</td>
                </tr>
                <tr>
                  <td><strong>目的</strong></td>
                  <td colSpan={2} style={{ textAlign: 'center' }}>
                    <strong>ヒューマンエラーを未然に防ぐ</strong>（同じ）
                  </td>
                </tr>
                <tr>
                  <td><strong>例</strong></td>
                  <td>部品の向き固定、治具の色分け</td>
                  <td>削除確認ダイアログ、USB Type-C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>製造現場でのポカヨケの例</h2>
          <p>
            ポカヨケは製造業で生まれた概念なので、まずは製造現場での具体例を見てみましょう。
          </p>

          <h3>物理的なポカヨケ</h3>
          <ul>
            <li>
              <strong>部品の向き固定</strong>：部品が正しい向きでしか組み付けられない形状設計。逆向き組み付けミスを物理的に防止します。
            </li>
            <li>
              <strong>ガイドピン</strong>：製品を正しい位置にセットするためのピン。位置ずれによる不良を防止します。
            </li>
            <li>
              <strong>治具の専用設計</strong>：A製品用の治具ではB製品が固定できない設計。取り違えを物理的に防ぎます。
            </li>
          </ul>

          <h3>視覚的なポカヨケ</h3>
          <ul>
            <li>
              <strong>治具の色分け</strong>：異なる製品用の治具を色で区別（A製品=赤、B製品=青）。取り違えミスを視覚的に防ぎます。
            </li>
            <li>
              <strong>正常品と不良品の分離</strong>：赤いトレイは不良品専用。混入を防ぎます。
            </li>
          </ul>

          <h3>自動化によるポカヨケ</h3>
          <ul>
            <li>
              <strong>カウントセンサー</strong>：ネジの数を自動カウントし、規定数に達するまで次工程に進めない。部品の付け忘れを防ぎます。
            </li>
            <li>
              <strong>バーコードスキャン</strong>：部品をスキャンして記録。使用済み部品の再使用や未使用部品の放置を防ぎます。
            </li>
            <li>
              <strong>重量センサー</strong>：完成品の重量をチェック。部品の付け忘れや余分な部品混入を検知します。
            </li>
          </ul>
        </section>

        <section>
          <h2>ポカヨケの3つのレベル</h2>
          <p>
            ポカヨケには効果の高さによって3つのレベルがあります。<strong>レベル1が最も効果的</strong>です。
          </p>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>レベル</th>
                  <th>説明</th>
                  <th>製造業の例</th>
                  <th>IT開発の例</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>レベル1: 除去</strong></td>
                  <td>ミスが発生する可能性そのものを排除</td>
                  <td>部品の向きを固定する形状設計</td>
                  <td>TypeScriptの型チェック（型ミスが起きない）</td>
                </tr>
                <tr>
                  <td><strong>レベル2: 代替</strong></td>
                  <td>ミスが起きにくい別の方法に置き換える</td>
                  <td>手作業から自動化へ</td>
                  <td>マニュアルデプロイからCI/CD自動化へ</td>
                </tr>
                <tr>
                  <td><strong>レベル3: 容易化</strong></td>
                  <td>ミスを検出しやすくする</td>
                  <td>警告ランプ、チェックリスト</td>
                  <td>リンター、テスト、コードレビュー</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>IT開発でのポカヨケ応用例</h2>
          <p>
            ポカヨケの考え方は、IT開発でも非常に有効です。以下は実践的な応用例です。
          </p>

          <h3>1. CI/CDでのポカヨケ</h3>
          <details>
            <summary>具体例を見る</summary>
            <div className="code-example">
              <pre>
                <code className="language-yaml">{`# GitHub Actions の例
name: CI/CD Pipeline

on:
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      # テストが失敗したらマージできない（ポカヨケ）
      - name: Run tests
        run: npm test

      # カバレッジ80%未満ならエラー（ポカヨケ）
      - name: Check coverage
        run: npm run coverage -- --min-coverage=80

      # リンターでコード品質をチェック（ポカヨケ）
      - name: Run linter
        run: npm run lint`}</code>
              </pre>
            </div>
          </details>

          <h3>2. TypeScriptによる型チェック（レベル1：除去）</h3>
          <details>
            <summary>具体例を見る</summary>
            <div className="code-example">
              <pre>
                <code className="language-typescript">{`// TypeScriptは型ミスを「除去」する
interface User {
  id: number;
  name: string;
  email: string;
}

function sendEmail(user: User) {
  // user.emai は typo なのでコンパイルエラー
  // ミスが起きる可能性そのものを排除！
  console.log(user.email);  // ✅ 正しい
}`}</code>
              </pre>
            </div>
          </details>

          <h3>3. コードレビューの必須化（レベル3：容易化）</h3>
          <ul>
            <li><strong>2人以上の承認</strong>がないとマージできない</li>
            <li><strong>破壊的変更</strong>は専用ブランチでのみ可能</li>
            <li><strong>チェックリスト</strong>を使って漏れを防ぐ</li>
          </ul>

          <h3>4. 本番環境でのポカヨケ</h3>
          <ul>
            <li>
              <strong>環境の色分け</strong>：本番環境は背景色を赤に、開発環境は緑に（視覚的に危険を示す）
            </li>
            <li>
              <strong>アクセス制限</strong>：本番DBへの直接接続は特定の人のみ可能
            </li>
            <li>
              <strong>確認ダイアログ</strong>：「本番環境にデプロイしますか？」と必ず確認
            </li>
            <li>
              <strong>読み取り専用モード</strong>：本番DBは基本的に読み取り専用、書き込みは明示的に許可が必要
            </li>
          </ul>

          <h3>5. バリデーションによるポカヨケ</h3>
          <p>
            <Link href="/terms/validation" style={{ color: '#007bff', textDecoration: 'underline' }}>バリデーション</Link>は、
            IT開発における代表的なポカヨケです。
          </p>
          <ul>
            <li>メールアドレス形式のチェック</li>
            <li>必須項目の入力チェック</li>
            <li>数値範囲のチェック</li>
          </ul>
        </section>

        <section>
          <h2>ポカヨケ実装のポイント</h2>
          <ul>
            <li>
              <strong>レベル1を目指す</strong>：可能な限り「除去」を目指し、ミスが起きる可能性そのものをなくす
            </li>
            <li>
              <strong>早い段階で検知</strong>：問題が大きくなる前に検出する（開発中 &gt; テスト &gt; 本番）
            </li>
            <li>
              <strong>自動化する</strong>：人の注意力に頼らず、システムで防ぐ
            </li>
            <li>
              <strong>視覚的にわかりやすく</strong>：色、形、音などで直感的に理解できるようにする
            </li>
            <li>
              <strong>複数のポカヨケを組み合わせる</strong>：1つの防御に頼らず、多層防御
            </li>
          </ul>
        </section>

        <section className="term-comparison">
          <h2>関連用語</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>用語名</th>
                  <th>説明</th>
                  <th>関係性</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link href="/terms/foolproof" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">フールプルーフ</span>
                    </Link>
                  </td>
                  <td>
                    誤操作を未然に防ぐ設計思想
                  </td>
                  <td>
                    ポカヨケの<strong>IT業界版</strong>（同じ概念）
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/validation" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">バリデーション</span>
                    </Link>
                  </td>
                  <td>
                    入力データが正しいかチェックする仕組み
                  </td>
                  <td>
                    ポカヨケを実現する<strong>具体的な実装手段</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Link href="/terms/javascript" style={{ color: '#007bff', textDecoration: 'underline' }}>
                      <span className="term-name">JavaScript</span>
                    </Link>
                  </td>
                  <td>
                    Webページに動きを付ける言語
                  </td>
                  <td>
                    ポカヨケを<strong>実装するための技術</strong>
                  </td>
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
