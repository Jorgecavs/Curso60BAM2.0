// Función que muestra la alerta en el centro de la pantalla
function mostrarAlerta() {
    let overlay = document.getElementById('overlay');
    let alert = document.getElementById('alert');
    overlay.style.display = 'flex'; // Muestra el overlay
    alert.style.display = 'block'; // Muestra la alerta
  }
  
  // Función que oculta el overlay y la alerta al hacer clic en el botón de aceptar
  function aceptarAlerta() {
    let overlay = document.getElementById('overlay');
    let alert = document.getElementById('alert');
    overlay.style.display = 'none'; // Oculta el overlay
    alert.style.display = 'none'; // Oculta la alerta
  }

// Función que muestra la imagen gigante con animación
function mostrarImagen() {
    let imagenContainer = document.getElementById('imagen-container');
    let body = document.body;
  
    // Muestra el contenedor de la imagen
    imagenContainer.style.display = 'flex';
  
    // Agrega una clase al body para oscurecer el fondo
    body.classList.add('dark-background');
  }
  
  // Función que oculta la imagen al hacer clic en el botón
  function ocultarImagen() {
    let imagenContainer = document.getElementById('imagen-container');
    let body = document.body;
  
    // Oculta el contenedor de la imagen
    imagenContainer.style.display = 'none';
  
    // Remueve la clase del body para restaurar el fondo
    body.classList.remove('dark-background');
  }



function abrir() {
    document.getElementById("w1") .style.display="block";
}

function cerrar () {
    document.getElementById ("w1") .style.display="none";
}

function abrir2() {
    document.getElementById("w2") .style.display="block";
}

function cerrar2 () {
    document.getElementById ("w2") .style.display="none";
}

function abrir3() {
    document.getElementById("w3") .style.display="block";
}

function cerrar3 () {
    document.getElementById ("w3") .style.display="none";
}


// Función que muestra la alerta antes de mostrar spoilers
function mostrarAlertaSpoilers() {
    let confirmacion = confirm("Cuidado, hay demasiados spoilers. ¿Quieres pasar igual?");
  
    if (confirmacion) {
      mostrarSpoilers();
    } else {
      alert("¡Entendido! Regresarás a la página principal.");
    
    }
  }
  
  // Función que muestra el contenido de spoilers
  function mostrarSpoilers() {
    let imagenContainer = document.getElementById('spoilers-container');
    let body = document.body;
  
    // Muestra el contenedor de la imagen
    imagenContainer.style.display = 'flex';
  
    // Agrega una clase al body para oscurecer el fondo
    body.classList.add('dark-background');
 
  }

    // Función que oculta la imagen al hacer clic en el botón
    function ocultarImagen2() {
      let imagenContainer = document.getElementById('spoilers-container');
      let body = document.body;
    
      // Oculta el contenedor de la imagen
      imagenContainer.style.display = 'none';
    
      // Remueve la clase del body para restaurar el fondo
      body.classList.remove('dark-background');
    }




    // Función que muestra la alerta antes de mostrar spoilers
function mostrarAlertaSpoilers2() {
  let confirmacion = confirm("Cuidado, hay demasiados spoilers. ¿Quieres pasar igual?");

  if (confirmacion) {
    mostrarSpoilers2();
  } else {
    alert("¡Entendido! Regresarás a la página principal.");
  
  }
}

// Función que muestra el contenido de spoilers
function mostrarSpoilers2() {
  let imagenContainer = document.getElementById('spoilers-container2');
  let body = document.body;

  // Muestra el contenedor de la imagen
  imagenContainer.style.display = 'flex';

  // Agrega una clase al body para oscurecer el fondo
  body.classList.add('dark-background');

}

// Función que oculta la imagen al hacer clic en el botón
function ocultarImagen3() {
  let imagenContainer = document.getElementById('spoilers-container2');
  let body = document.body;

  // Oculta el contenedor de la imagen
  imagenContainer.style.display = 'none';

  // Remueve la clase del body para restaurar el fondo
  body.classList.remove('dark-background');
}
 

















const questions = [
  {
      question: "¿Quién es el padre de Luke Skywalker?",
      options: ["Darth Vader", "Obi-Wan Kenobi", "Palpatine", "Yoda"],
      correctAnswer: "Darth Vader"
  },
  {
      question: "¿En qué planeta nació Anakin Skywalker?",
      options: ["Tatooine", "Coruscant", "Naboo", "Endor"],
      correctAnswer: "Tatooine"
  },
  {
    question: "¿Quién fue el maestro de Obi Wan?",
    options: ["Anakin", "Yoda", "Qui Gon Jinn", "Windu"],
    correctAnswer: "Qui Gon Jinn"
  },{
    question: "¿Quiénes son los tíos de Luke Skywalker?",
    options: ["Owen y Lana", "Gwen y Heru", "Owen y Beru", "Ana y Ben"],
    correctAnswer: "Owen y Beru"
  },{
    question: "¿De qué color es el sable de Mace Windu?",
    options: ["Rojo", "Verde", "Azul", "Violeta"],
    correctAnswer: "Violeta"
  },{
    question: "¿Cómo se hace llamar Obi Wan Kenobi para pasar desapercibido?",
    options: ["Plagueis", "Ezra", "Lando", "Ben"],
    correctAnswer: "Ben"
  },
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
  const currentQuizQuestion = questions[currentQuestion];
  questionContainer.innerHTML = `<p>${currentQuizQuestion.question}</p>`;
  
  optionsContainer.innerHTML = "";
  currentQuizQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizQuestion = questions[currentQuestion];

  if (answer === currentQuizQuestion.correctAnswer) {
      score++;
  }

  nextButton.style.display = "block";
}

function showResult() {
  let resultMessage;

  if (score === 0) {
      resultMessage = "¡Oh no! No has respondido ninguna pregunta correctamente. ¡Sigue intentándolo!";
  } else if (score >= 1 && score <= 2) {
      resultMessage = `¡Bien hecho! Has respondido ${score} preguntas correctamente. ¡Puedes mejorar!`;
  } else if (score >= 3 && score <= 5) {
      resultMessage = `¡Excelente! Has respondido ${score} preguntas correctamente. ¡Eres un verdadero fan de Star Wars!`;
  } else if (score === 6) {
      resultMessage = "¡Increíble! Has respondido todas las preguntas correctamente. ¡Eres un maestro Jedi!";
  }

  resultContainer.innerHTML = `<p>${resultMessage}</p>`;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
      loadQuestion();
      nextButton.style.display = "none";
  } else {
      showResult();
      nextButton.style.display = "none";
  }
}

// Iniciar la trivia
loadQuestion();

// Agregar evento al botón "Siguiente"
nextButton.addEventListener("click", nextQuestion);

const restartButton = document.getElementById("restart-button");

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
      loadQuestion();
      nextButton.style.display = "none";
  } else {
      showResult();
      nextButton.style.display = "none";
      restartButton.style.display = "block"; // Muestra el botón de reinicio
  }
}

// Añade un evento al botón de reinicio para reiniciar la trivia
restartButton.addEventListener("click", restartTrivia);

// Función para reiniciar la trivia
function restartTrivia() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  resultContainer.innerHTML = ""; // Limpia el contenedor de resultados
  restartButton.style.display = "none"; // Oculta el botón de reinicio
  nextButton.style.display = "none";
}