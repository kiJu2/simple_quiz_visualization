initDocument = () =>{
  render(level);
  quiz_size = data.length;
}

handleClickAnswer = (e) => {
  const element = e.target;
  if(level >= quiz_size - 1){
    alert("End. score is " + score);
  }
  else{
    if(element.id === "correct"){
      score += 1;
    }
    if(element.className == "list"){
      level += 1;
      render(level);
    }
  }
}

getOptionForm = (text) =>{
  return `<li class = "list">`+text+`</li>`;
}

printQuestion = (text) =>{
  question.innerHTML = text;
}
printOptions = (option_arr) =>{
  options.innerHTML = "";
  option_arr.map(option => {
    options.innerHTML += getOptionForm(option);
  });
}

render = (level) =>{
  printQuestion(data[level]['question']);
  printOptions(data[level]['options']);

  list = document.getElementsByClassName("list");
  answer = Number(data[level]['answer']);
  list[answer - 1].setAttribute("id", "correct");
}

var level = 0;
var score = 0;
var answer = 0;

var list = document.getElementsByClassName("list");
var quiz_size;
const options = document.getElementById("answers");
const question = document.getElementById("question");

options.addEventListener("click", handleClickAnswer);
