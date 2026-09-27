# PH1復習クイズ

PH1で学んだ **HTML / Tailwind / JavaScript / React** の基本を、4択クイズで確かめるアプリです。
1問ずつ答えると、その場で正誤と一言解説が出て、最後に点数と「間違えた問題の振り返り」がまとまります。
ベストスコアは `localStorage` に保存されるので、リロードしても残ります。

## 使い方

```bash
pnpm install
pnpm run dev     # 開発サーバー
pnpm run build   # 本番ビルド（dist/ に出力）
pnpm run preview # ビルド結果の確認
pnpm run lint    # oxlint
```

## 使った技術

- React 19（関数コンポーネント / useState / useEffect）
- Tailwind CSS v4（`@tailwindcss/vite` プラグイン）
- Vite 8（`base: './'` で GitHub Pages のサブディレクトリに対応）
- localStorage（ベストスコアの保存）

## ファイル構成

```
src/
├── App.jsx                     state と画面の出し分けを持つ親
├── data/questions.js           問題データ（全10問）
└── components/
    ├── StartScreen.jsx         スタート画面
    ├── ProgressBar.jsx         進捗バー
    ├── QuestionCard.jsx        問題・解説・次へボタン
    ├── ChoiceButton.jsx        選択肢1つ分
    └── ResultScreen.jsx        結果と振り返り
```

実装前に書いた要件分解表は [`docs/requirements.md`](docs/requirements.md) にあります。
