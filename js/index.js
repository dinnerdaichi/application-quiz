const quiz = [{
    question: 'インドカレーに合うパンはなんですか？',
    answers: ['わかりません', 'はい、そうです', 'いいえ違います', 'なんでしょう？'],
    correct: 'はい、そうです'
  },
  {
    question: 'タイの首都、バンコクの正式名称は？',
    answers: ['バンコック', 'アロイバンコク', 'サワディーカップ', 'クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット'],
    correct: 'クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット'
  },
  {
    question: 'アンパンマンの著作権はフリー？',
    answers: ['アンパンマンの著作権はフリーです', '調べたら著作権フリーじゃないです', '私の確認不足でした', '確認不足じゃないじゃん笑？'],
    correct: '調べたら著作権フリーじゃないです'
  }

];

const quizLength = quiz.length;
let quizIndex = 0;


const question = 'インドカレーに合うパンはなんですか？';
const answers = ['わかりません', 'はい、そうです', 'いいえ違います', 'なんでしょう？'];
const correct = 'はい、そうです';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }

}

setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！')
  } else {
    window.alert('不正解！')
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();

  } else {
    window.alert('終了〜〜！');
  }

}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {

  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
  window.alert('test');
}