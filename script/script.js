initDocument = () =>{
  render(level);
}

handleClickAnswer = (e) => {
  const element = e.target;
  if(element.id === "correct"){
    score += 1;
  }
  if(element.className == "list"){
    level += 1;
    render(level);
    console.log("????");
  }
}

getAnswerForm = (text) =>{
  return `<li class = "list">`+text+`</li>`;
}

printQuestion = (text) =>{
  question.innerHTML = text;
}
printAnswers = (options) =>{
  options.innerHTML = "";
  options.map(option => {
    options.innerHTML += getAnswerForm(option);
  });
}

render = (level) =>{
  printQuestion(data[level]['question']);
  printAnswers(data[level]['options']);
  // console.log(document.getElementsByClassName("list"));
  list = document.getElementsByClassName("list");
  answer = Number(data[level]['answer']);
  list[answer - 1].setAttribute("id", "correct");
  
  // for (var item of list){
  //   item.addEventListener("click", handleClickAnswer);
  // }
}

var level = 0;
var score = 0;
var answer = 0;
// var 

var list = document.getElementsByClassName("list");
const options = document.getElementById("answers");
const question = document.getElementById("question");

options.addEventListener("click", handleClickAnswer);
