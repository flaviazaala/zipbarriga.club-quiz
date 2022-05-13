function goToQuestTwo() {
  const questionOne = document.getElementById('question-1');
  const questionTwo = document.getElementById('question-2');
  questionOne.style.display = 'none';
  questionTwo.style.display = 'flex';
}

function goToQuestThree() {
  const questionTwo = document.getElementById('question-2');
  const questionThree = document.getElementById('question-3');
  questionTwo.style.display = 'none';
  questionThree.style.display = 'flex';
}

function goToQuestFour() {
  const questionThree = document.getElementById('question-3');
  const questionFour = document.getElementById('question-4');
  questionThree.style.display = 'none';
  questionFour.style.display = 'flex';
}

function goToSalesPage() {
  window.location.href = "https://protocologorduraz.online";
}