const quiz = [

  {
    question: 'チェヨンはどれ？',
    answers: ['./img/twice_chaeyoung.jpg', './img/chaewong.jpg', './img/chaeryon.jpg', './img/izone_chaeyoung.jpg'],
    correct: 'twice_chaeyoung.jpg'
  },
  {
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
  },

];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const $img = document.getElementsByTagName('img');
const $span = document.getElementById('span');



const setupQuiz = () => {

  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  let imgIndex = 0;

  console.log(quizIndex);

  if (quiz[quizIndex].answers[buttonIndex].match('img')) {

    while (imgIndex < $img.length) {
      $img[imgIndex].src = quiz[quizIndex].answers[imgIndex];
      imgIndex++;
    }
  } else {

    while (buttonIndex < buttonLength) {
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
    }
  };

}


setupQuiz();



const clickHandler = (e) => {

  // if(e.target.textContent.match('img')){

  // }
  if (e.target.src) {

    const imgSrc = e.target.src;
    const splittedUrl = imgSrc.split('/');
    const correctUrl = splittedUrl[splittedUrl.length - 1];




    if (quiz[quizIndex].correct === correctUrl) {

      console.log($span);
      $span.classList.add('span_display');
      window.alert('正解！');



    } else {
      window.alert('不正解！')

    }


  } else {
    if (quiz[quizIndex].correct === e.target.textContent) {
      window.alert('正解！')

    } else {
      window.alert('不正解！')

    }
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
}