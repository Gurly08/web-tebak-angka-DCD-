// //inisialiasi variabel untuk menampung elemen dokumen
// const localTotalVictoryField = document.getElementById('local-total-victory-field');
// const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field');
// const destroyDataButton = document.getElementById('destroy-data-button');
// const playButton = document.getElementById('play-button');
// const beforeGameDisplay = document.getElementById('before-game-display');
// const duringGameDisplay = document.getElementById('during-game-display');
// const afterGameDisplay = document.getElementById('after-game-display');
// const answerButton1 = document.getElementById('answer-1-button');
// const answerButton2 = document.getElementById('answer-2-button');
// const answerButton3 = document.getElementById('answer-3-button');
// const sessionUserAnswerField = document.getElementById('session-user-answer-field');
// const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
// const sessionTrueAnswerField = document.getElementById('session-true-answer-field');
// const sessionUserAttemptsField = document.getElementById('session-user-attempts-amount-field');

// //inisialisasi fungsi untuk menghasilkan jawaban permainan
// function getAnswer() {
//     let answer = '123'.split('');
//     for (let i = 0; i < answer.length; i++) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let tmp = answer[i];
//         answer[i] = answer[j];
//         answer[j] = tmp;
//     }
//     return answer.join('');
// }

// //inisialiasi key untuk session storage
// const sessionAnswerKey = 'SESSION_ANSWER';
// const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
// const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';
// sessionStorage.setItem(
//     <answerButton1>1</answerButton1>,
//     <answerButton2>2</answerButton2>,
//     <answerButton3>3</answerButton3>,

//     <answerButton1>3</answerButton1>,
//     <answerButton2>1</answerButton2>,
//     <answerButton3>2</answerButton3>,
// );
// sessionStorage.getItem(
//     <answerButton1>1</answerButton1>,
//     <answerButton2>2</answerButton2>,
//     <answerButton3>3</answerButton3>,
// );

// //inisialisasi key untuk local storage
// const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
// const localMaximumAttemptsKey = 'LOCAL_MAXIMUM_ATTEMPTS';
// localStorage.setItem(
//     <answerButton1>1</answerButton1>,
//     <answerButton2>2</answerButton2>,
//     <answerButton3>3</answerButton3>,

//     <answerButton1>3</answerButton1>,
//     <answerButton2>1</answerButton2>,
//     <answerButton3>2</answerButton3>,
// );

// localStorage.getItem(
//     <answerButton1>1</answerButton1>,
//     <answerButton2>2</answerButton2>,
//     <answerButton3>3</answerButton3>,
// );

// window.addEventListener('load', function () {
//     if (typeof (Storage) !== 'undefined') {
//       // (MATERI 1)
//       // inisialisasi semua item web storage yang kita akan gunakan jika belum ada
//       if (sessionStorage.getItem(sessionAnswerKey) === null) {
//         sessionStorage.setItem(sessionAnswerKey, '');
//       }
//       if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
//         sessionStorage.setItem(sessionUserAttemptsKey, 0);
//       }
//       if (localStorage.getItem(localTotalVictoryKey) === null) {
//         localStorage.setItem(localTotalVictoryKey, 0);
//       }
//       if (localStorage.getItem(localMaximumAttemptsKey) === null) {
//         localStorage.setItem(localMaximumAttemptsKey, 0);
//       }
//     } else {
//       alert('Browser yang Anda gunakan tidak mendukung Web Storage');
//     }
//     //inisialisasi semua nilai field pada dokumen yang menggunakan nilai dari web storage
//     sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
//     localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
//     localMaximumAttemptField.innerText = localStorage.getItem(localMaximumAttemptsKey);
//   });

  