let questions = [
    {
        id: 1,
        question: "Qui est le président des Etats-Unis ?",
        answer: "Donald Trump",
        options: [
      "Donald Trump",
      "Joe Biden"
    ]
  },
    {
        id: 2,
        question: "Quel est le premier clip de Aya Nakamura ?",
        answer: "Aya Nakamura - Brisé",
        options: [
      "Aya Nakamura feat AFROB - Djadja",
      "Aya Nakamura - Brisé",
      "Aya Nakamura - Oublié",
      "Aya Nakamura - copines"
    ]
  },
    {
        id: 3,
        question: "Quel groupe n'est pas un goupe kpop ?",
        answer: "Nizi",
        options: [
        "Twice",
        "Nizi",
        "ioi",
        "Izone"
    ]
  },
    {
        id: 4,
        question: "Combien y a-t-il de 7 entre 0 et 100 ?",
        answer: "20",
        options: [
            "9",
            "20",
            "19",
            "17",
            "10"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);

};

function next() {


    // On dirige vers la page des resultats si c'est la dernière question
    if (question_count == questions.length - 1) {
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href = "resultats.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    // Verification des questions corrects
    if (user_answer == questions[question_count].answer) {
        //Valeurs des points
        points += 25;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth, fifth] = questions[count].options;

    question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  <li class="option">${fifth}</li>
</ul> 
  `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}
