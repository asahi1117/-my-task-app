# 要件分解表（実装前に書いたもの）

テーマ: **PH1復習クイズ** — PH1で習った HTML / Tailwind / JavaScript / React の知識を、4択クイズで確かめるアプリ。

| 項目 | 書いたこと |
| --- | --- |
| 何を作るか | PH1で学んだ Web の用語を4択で出題し、その場で正誤と一言解説を返して、最後に点数と間違えた問題をまとめて見せるクイズアプリ。 |
| 画面に出すもの | スタート画面（タイトル・問題数・ベストスコア・はじめるボタン）／クイズ画面（進捗バー・「第○問 / 全10問」・カテゴリのラベル・問題文・4つの選択肢ボタン・回答後の正誤メッセージと解説・次へボタン）／結果画面（正解数・正答率・ベストスコア・間違えた問題の振り返り一覧・もう一度ボタン）。 |
| できる操作 | 「はじめる」を押す／4つの選択肢から1つをクリックする／「次の問題へ」（最後は「結果を見る」）を押す／結果画面で「もう一度挑戦する」を押す。 |
| 持つ状態（state） | `screen`（今どの画面か: start / quiz / result）、`currentIndex`（何問目か）、`selectedIndex`（今の問題で選んだ選択肢。未回答は null）、`answers`（回答の履歴の配列）、`bestScore`（これまでの最高点）。正解数と正答率は `answers` から毎回計算するので state にしない。 |
| 使う技術 | React（関数コンポーネント）／useState（上の5つ）／useEffect（bestScore が変わったら localStorage へ保存）／localStorage（ベストスコアの保存）／props（App から各コンポーネントへデータと関数を渡す）／Tailwind CSS（レスポンシブ）／Vite（ビルド）。fetch は使わない（問題データは自分で書いた `src/data/questions.js` から読む）。 |
| つまずきそうな所 | ① 同じ問題を何度も押せてしまうと点数が増えてしまいそう → `selectedIndex` が null のときだけ回答を受け付ける。② 最後の問題で「次へ」を押したときに、最後の1問が点数に入るかどうか。③ 選択肢ボタンの色分け（未回答／正解／選んだ不正解／それ以外）の条件が複雑になりそう。④ 進捗バーの幅は Tailwind のクラスでは動的に指定できないので、どう書くか。 |

## 画面の流れ

```
start ──[はじめる]──▶ quiz ──[最後の問題で「結果を見る」]──▶ result
                       ▲                                        │
                       └──────────[もう一度挑戦する]─────────────┘
```

## コンポーネント分け（props でデータを渡す構成）

- `App` … state を全部持つ親。画面の出し分けと、状態を変える関数を定義する。
- `StartScreen` … `totalQuestions` / `bestScore` / `onStart`
- `ProgressBar` … `current` / `total`
- `QuestionCard` … `question` / `questionNumber` / `totalQuestions` / `selectedIndex` / `onSelect` / `onNext` / `isLastQuestion`
- `ChoiceButton` … `label` / `index` / `selectedIndex` / `answerIndex` / `onSelect`
- `ResultScreen` … `score` / `total` / `bestScore` / `wrongAnswers` / `onRestart`
