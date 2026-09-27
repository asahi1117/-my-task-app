export const QUESTIONS = [
  {
    id: 1,
    category: "HTML",
    text: "文書の中で「いちばん大きい見出し」を表すタグはどれ？",
    choices: ["<title>", "<h1>", "<header>", "<head>"],
    answerIndex: 1,
    explanation:
      "<h1> が見出しの最上位。<title> はタブに出る名前、<header> はページ上部のまとまり、<head> は読み込む情報を書く場所で、どれも見出しそのものではない。",
  },
  {
    id: 2,
    category: "HTML",
    text: "画像が読み込めなかったときに、代わりに表示される文字を指定する属性は？",
    choices: ["src", "title", "alt", "href"],
    answerIndex: 2,
    explanation:
      "alt は画像の代わりのテキスト。読み込み失敗時に表示されるだけでなく、音声読み上げでも使われる。",
  },
  {
    id: 3,
    category: "Tailwind",
    text: "要素の内側の余白（padding）を、上下左右すべてに付けるクラスは？",
    choices: ["m-4", "p-4", "px-4", "gap-4"],
    answerIndex: 1,
    explanation:
      "p は padding（内側）、m は margin（外側）。px は左右だけ、gap は子要素どうしのすき間。",
  },
  {
    id: 4,
    category: "Tailwind",
    text: "「画面幅が md 以上のときだけ文字を大きくする」の正しい書き方は？",
    choices: ["text-xl:md", "md-text-xl", "md:text-xl", "@md/text-xl"],
    answerIndex: 2,
    explanation:
      "Tailwind は「条件:クラス」の順で書く。md: は「md 以上のとき」という意味で、それ未満のときは元のままになる。",
  },
  {
    id: 5,
    category: "JavaScript",
    text: "配列の各要素を変換して、新しい配列を作るメソッドは？",
    choices: ["map", "forEach", "filter", "find"],
    answerIndex: 0,
    explanation:
      "map は変換した新しい配列を返す。forEach は返り値なし、filter は条件に合う要素だけ、find は最初の1件だけを返す。",
  },
  {
    id: 6,
    category: "JavaScript",
    text: '"5" + 1 の結果はどれ？',
    choices: ["数値の 6", '文字列の "51"', "数値の 51", "エラーになる"],
    answerIndex: 1,
    explanation:
      "+ は片方が文字列だと「つなげる」意味になる。計算したいときは Number(\"5\") + 1 のように数値へ変換する。",
  },
  {
    id: 7,
    category: "JavaScript",
    text: "const について正しい説明は？",
    choices: [
      "値を一切変えられない",
      "再代入も、オブジェクトの中身の変更もできる",
      "再代入はできないが、オブジェクトの中身は変えられる",
      "関数の中では使えない",
    ],
    answerIndex: 2,
    explanation:
      "const が固定するのは「どの値を指しているか」。配列やオブジェクトの中身は push などで変えられてしまうので、変えたくないときは自分で気をつける必要がある。",
  },
  {
    id: 8,
    category: "React",
    text: "コンポーネントの中で「変わる値」を持たせたいときに使うフックは？",
    choices: ["useEffect", "useRef", "useState", "useMemo"],
    answerIndex: 2,
    explanation:
      "useState は値と、その値を変える関数のペアを返す。値を変えると React が画面を描き直してくれる。",
  },
  {
    id: 9,
    category: "React",
    text: "配列から作ったリストの各要素に key を付けるのは、なぜ？",
    choices: [
      "React がどの要素が増えた・消えた・変わったかを見分けるため",
      "CSS でスタイルを当てるため",
      "要素に通し番号を表示するため",
      "付けなくても動くので、ただの飾り",
    ],
    answerIndex: 0,
    explanation:
      "key は React が前回と今回の一覧を見比べるときの目印。無いと、並び替えや削除のときに中身がずれることがある。",
  },
  {
    id: 10,
    category: "React",
    text: "state の配列に要素を1つ足すとき、React で適切な書き方は？",
    choices: [
      "items.push(newItem) を呼ぶ",
      "setItems([...items, newItem]) を呼ぶ",
      "items[items.length] = newItem と書く",
      "items.length を増やす",
    ],
    answerIndex: 1,
    explanation:
      "React は「前と違う配列が来たか」で描き直すか決める。push は同じ配列を書き換えるだけなので気づいてもらえない。... で中身を写した新しい配列を渡す。",
  },
];
