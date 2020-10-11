const welcome = document.querySelector(".welcome");
function myFunction() {
    start.style.display = "none";
    question1.style.display = "block";
  var txt;
  var person = prompt("Veuillez entre votre nom:", "John Smith");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}

function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
  
    location.href = "quizz.html";
  }