const xhr = new XMLHttpRequest();
var data;

xhr.onreadystatechange = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200 || xhr.status === 201) {
      console.log("onready state change.");
      data = JSON.parse(xhr.responseText);
      initDocument();
    } else {
      console.error(xhr.responseText);
    }
  }
};

xhr.open('GET', 'https://my-json-server.typicode.com/kiju2/Simple_Quiz/questions'); // 메소드와 주소 설정
xhr.send();
