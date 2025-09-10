AOS.init({
  duration: 1000,
  once: true,
});

// Variables globales
let fontSize = 18;
let highContrastMode = false;
let currentQuizQuestion = 0;
let quizScore = 0;
let selectedAnswer = null;
let screenReaderEnabled = false;
let currentHighlighted = null;

// Funciones de Voz / Lector
function speakMessage(message, element = null) {
  if (!screenReaderEnabled) return;

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = "es-ES";
  speechSynthesis.speak(utterance);

  if (currentHighlighted) {
    currentHighlighted.classList.remove("reading-highlight");
  }

  if (element) {
    element.classList.add("reading-highlight");
    currentHighlighted = element;

    if (element.classList.contains("strategy-card")) {
      element.classList.add("active");
    }
  }
}

function toggleScreenReader() {
  screenReaderEnabled = !screenReaderEnabled;
  const btn = document.getElementById("screenReaderBtn");

  if (screenReaderEnabled) {
    btn.innerHTML = '<i class="fas fa-volume-up"></i> Lector de Pantalla ON';
    speakMessage("Lector de pantalla activado");
  } else {
    btn.innerHTML = '<i class="fas fa-volume-mute"></i> Lector de Pantalla OFF';
    speechSynthesis.cancel();
    if (currentHighlighted) {
      currentHighlighted.classList.remove("reading-highlight");
      currentHighlighted = null;
    }
  }
}

// Detectar selección de texto con mouse
document.addEventListener("mouseup", () => {
  if (!screenReaderEnabled) return;
  const selection = window.getSelection().toString().trim();
  if (selection.length > 0) {
    speakMessage(selection, window.getSelection().anchorNode.parentElement);
  }
});

// Detectar clic en elementos legibles
document.addEventListener("click", (e) => {
  if (!screenReaderEnabled) return;
  const target = e.target.closest(".readable, .strategy-card, .option-btn");
  if (target) {
    speakMessage(target.innerText.trim(), target);
  }
});

// Progreso de lectura de la página (Hero)
function updatePageProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.round((scrollTop / docHeight) * 100);

  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (progressBar && progressText) {
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "% Completado";
  }
}
window.addEventListener("scroll", updatePageProgress);

// Estrategias por Barreras
const STRATEGIES_INFRAESTRUCTURA = [
  {
    icon: "fas fa-universal-access",
    title: "Puntos de Accesibilidad Universal",
    description:
      "Implementación de ayudas y puntos de accesibilidad para garantizar el acceso completo e independiente a todas las instalaciones educativas.",
    examples: [
      "Rampas con pendiente máxima del 8% y pasamanos bilaterales",
      "Baños inclusivos con espacio de giro de 1.50m y barras de apoyo",
      "Señalizaciones táctiles en braille y macrotipo contrastado",
      "Puertas con ancho mínimo de 90cm o sistemas automáticos",
      "Pasamanos continuos en escaleras con información táctil",
    ],
    color: "primary",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Ambiente Seguro y Confortable",
    description:
      "Garantizar condiciones ambientales óptimas que promuevan el bienestar y la concentración de todos los estudiantes.",
    examples: [
      "Iluminación LED uniforme mínimo 500 lux en áreas de estudio",
      "Mobiliario ergonómico regulable en altura y profundidad",
      "Ventilación mecánica controlada con filtros de calidad",
      "Pisos antideslizantes con texturas diferenciadas",
      "Control acústico con materiales absorbentes",
    ],
    color: "success",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Aulas Especializadas Alternativas",
    description:
      "Desarrollo de espacios educativos alternativos diseñados específicamente para diferentes necesidades de aprendizaje.",
    examples: [
      "Aulas sensoriales con equipamiento multisensorial",
      "Espacios al aire libre con techado retráctil",
      "Laboratorios adaptativos con mesas regulables",
      "Bibliotecas con zonas silenciosas y colaborativas",
      "Salas de terapia ocupacional integradas",
    ],
    color: "info",
  },
  {
    icon: "fas fa-user-cog",
    title: "Acomodaciones Individualizadas",
    description:
      "Adaptaciones específicas del mobiliario y equipamiento según las necesidades particulares de cada estudiante.",
    examples: [
      "Sillas posturales con soporte lumbar y lateral ajustable",
      "Mesas con altura eléctrica y inclinación variable",
      "Atriles de lectura con iluminación integrada",
      "Cojines terapéuticos para estimulación propioceptiva",
      "Superficies antideslizantes personalizadas",
    ],
    color: "warning",
  },
  {
    icon: "fas fa-bullhorn",
    title: "Campañas de Sensibilización Integral",
    description:
      "Programas sistemáticos para eliminar barreras actitudinales y promover una cultura inclusiva en toda la comunidad educativa.",
    examples: [
      "Talleres mensuales de sensibilización para toda la comunidad",
      "Jornadas de puertas abiertas con simulacros de discapacidad",
      "Murales colaborativos sobre diversidad e inclusión",
      "Testimonios de familias y personas con discapacidad",
      "Formación continua para personal docente y administrativo",
    ],
    color: "danger",
  },
];

const STRATEGIES_SOCIAL = [
  {
    icon: "fas fa-users",
    title: "Campañas de Sensibilización",
    description:
      "Actividades para generar empatía y eliminar prejuicios sociales hacia la diversidad.",
    examples: [
      "Organizar Días de la Diversidad",
      "Obras de teatro sobre inclusión",
      "Exposiciones fotográficas inclusivas",
      "Simulacros de discapacidad en el colegio",
      "Testimonios de familias y estudiantes diversos",
    ],
    color: "primary",
  },
  {
    icon: "fas fa-people-carry",
    title: "Participación Familiar",
    description:
      "Impulsar la colaboración de familias en actividades escolares inclusivas.",
    examples: [
      "Escuela de Padres Inclusiva",
      "Talleres prácticos de apoyo en casa",
      "Programas de voluntariado familiar",
      "Grupos de apoyo entre familias",
      "Encuentros familiares con dinámicas inclusivas",
    ],
    color: "success",
  },
  {
    icon: "fas fa-book-open",
    title: "Protocolos de Convivencia Inclusiva",
    description:
      "Normas claras y procedimientos para prevenir la discriminación.",
    examples: [
      "Manual de Convivencia Inclusiva",
      "Mediación escolar con estudiantes capacitados",
      "Definiciones claras de discriminación",
      "Seguimiento post-conflicto",
      "Consecuencias progresivas para conductas excluyentes",
    ],
    color: "info",
  },
  {
    icon: "fas fa-user-graduate",
    title: "Liderazgo Estudiantil Inclusivo",
    description:
      "Promover la participación activa de estudiantes diversos en roles de liderazgo.",
    examples: [
      "Consejos estudiantiles diversos",
      "Embajadores de inclusión",
      "Reconocimientos a estudiantes inclusivos",
      "Mentorías de estudiantes diversos",
      "Proyectos colaborativos liderados por estudiantes",
    ],
    color: "warning",
  },
  {
    icon: "fas fa-globe",
    title: "Encuentros Interculturales",
    description:
      "Actividades que fomentan el respeto entre culturas y tradiciones diversas.",
    examples: [
      "Ferias culturales trimestrales",
      "Intercambios con otras instituciones inclusivas",
      "Proyectos comunitarios diversos",
      "Espacios de diálogo mensual",
      "Actividades de integración intercultural",
    ],
    color: "danger",
  },
];

const STRATEGIES_PEDAGOGICAS = [
  {
    icon: "fas fa-chalkboard",
    title: "Metodologías Inclusivas",
    description:
      "Aplicar principios del DUA con múltiples formas de representación, participación y compromiso.",
    examples: [
      "Contenido en texto, audio y gráficos",
      "Opciones de expresión oral y artística",
      "Niveles de desafío ajustados a estudiantes",
      "Conectar con intereses personales",
      "Actividades interactivas inclusivas",
    ],
    color: "primary",
  },
  {
    icon: "fas fa-chalkboard-teacher",
    title: "Capacitación Docente",
    description:
      "Formar al personal en competencias inclusivas y uso de tecnología asistiva.",
    examples: [
      "Talleres mensuales de 8 horas",
      "Interpretación de diagnósticos",
      "Adaptaciones curriculares",
      "Uso de software accesible",
      "Comunicación alternativa",
    ],
    color: "success",
  },
  {
    icon: "fas fa-book",
    title: "Materiales Diversificados",
    description:
      "Ampliar recursos educativos con materiales tangibles y accesibles.",
    examples: [
      "Textos en braille y macrotipo",
      "Audiolibros con velocidad ajustable",
      "Material manipulativo para matemáticas",
      "Guías visuales paso a paso",
      "Software educativo accesible",
    ],
    color: "info",
  },
  {
    icon: "fas fa-users-cog",
    title: "Equipos Multidisciplinarios",
    description:
      "Crear equipos de apoyo con profesionales que acompañen al estudiante.",
    examples: [
      "Psicólogo educativo",
      "Terapeuta ocupacional",
      "Docente de apoyo",
      "Fonoaudiólogo escolar",
      "Reuniones semanales de seguimiento",
    ],
    color: "warning",
  },
  {
    icon: "fas fa-hands-helping",
    title: "Aprendizaje Colaborativo",
    description: "Técnicas que fomentan el trabajo en equipo y la inclusión.",
    examples: [
      "Método de rompecabezas",
      "Tutoría entre pares",
      "Círculos de lectura",
      "Proyectos grupales",
      "Roles rotativos inclusivos",
    ],
    color: "danger",
  },
];

// Quiz
let QUIZ_DATA = [
  {
    question: "¿Cuál de estas imágenes representa la inclusión?",
    options: [
      {
        img: "img/imagen1.jpg",
        alt: "Niño en silla de ruedas frente a una escalera sin rampa",
      },
      {
        img: "img/imagen2.jpg",
        alt: "Niño en silla de ruedas usando una rampa con ayuda de compañeros",
      },
      { img: "img/imagen3.webp", alt: "Un aula sin adaptaciones especiales" },
      {
        img: "img/imagen4.jpg",
        alt: "Niños jugando sin incluir a un compañero con discapacidad",
      },
    ],
    correct: 1,
    explanation:
      "La inclusión se representa cuando el niño puede usar la rampa y recibe apoyo positivo.",
  },
  {
    question: "¿Qué imagen muestra apoyo entre compañeros?",
    options: [
      { img: "img/imagen5.jpg", alt: "Niño solo con dificultad" },
      {
        img: "img/imagen6.webp",
        alt: "Niños ayudando a un compañero con discapacidad",
      },
      {
        img: "img/imagen7.jpg",
        alt: "Profesor explicando solo a un estudiante",
      },
      {
        img: "img/imagen8.jpg",
        alt: "Grupo de niños trabajando juntos pero excluyendo a uno",
      },
    ],
    correct: 1,
    explanation:
      "La imagen correcta es cuando los amigos apoyan al compañero para que participe con todos.",
  },
  {
    question: "¿Cuál de estas situaciones es inclusiva?",
    options: [
      { img: "img/imagen9.webp", alt: "Niños jugando y un compañero excluido" },
      {
        img: "img/imagen10.jpg",
        alt: "Niños jugando todos juntos con un compañero con discapacidad",
      },
      { img: "img/imagen11.jpg", alt: "Aula con mesas sin adaptaciones" },
      { img: "img/imagen12.webp", alt: "Patio escolar sin rampas" },
    ],
    correct: 1,
    explanation:
      "La inclusión se da cuando todos los niños participan juntos en el juego.",
  },
  {
    question: "¿Qué imagen muestra un aula inclusiva?",
    options: [
      { img: "img/imagen13.jpg", alt: "Aula con mesas sin adaptaciones" },
      {
        img: "img/imagen14.jpg",
        alt: "Aula con rampas, señalización y materiales adaptados",
      },
      { img: "img/imagen15.webp", alt: "Aula espaciosa pero sin adaptaciones" },
      {
        img: "img/imagen16.jfif",
        alt: "Biblioteca con pocos libros accesibles",
      },
    ],
    correct: 1,
    explanation:
      "Un aula inclusiva tiene adaptaciones y materiales que permiten aprender a todos los estudiantes.",
  },
  {
    question: "¿Dónde se ve la colaboración inclusiva?",
    options: [
      { img: "img/imagen17.jpg", alt: "Un grupo ignora a un compañero" },
      {
        img: "img/imagen18.webp",
        alt: "Un grupo ayuda a un compañero a integrarse",
      },
      {
        img: "img/imagen19.png",
        alt: "Un grupo reunido sin participación de todos",
      },
      {
        img: "img/imagen20.webp",
        alt: "Estudiantes en un debate sin dar turno a un compañero",
      },
    ],
    correct: 1,
    explanation:
      "La colaboración inclusiva es cuando todos apoyan a los compañeros para participar.",
  },
];

// Renderizado de Estrategias
function loadStrategies() {
  const container = document.getElementById("strategiesContainer");
  container.innerHTML = "";

  function renderSection(title, data) {
    const section = document.createElement("div");
    section.innerHTML = `<h3 class="text-white mb-4">${title}</h3>`;
    const row = document.createElement("div");
    row.className = "row";

    data.forEach((strategy) => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4 mb-4";
      const card = document.createElement("div");
      card.className = "strategy-card readable";
      card.innerHTML = `
                <div class="strategy-header">
                    <i class="${strategy.icon} strategy-icon"></i>
                    <h3 class="strategy-title">${strategy.title}</h3>
                    <p class="strategy-description">${strategy.description}</p>
                    <i class="fas fa-chevron-down expand-indicator"></i>
                </div>
                <div class="strategy-content">
                    <div class="strategy-body">
                        <div class="examples-title"><i class="fas fa-list-ul"></i> Ejemplos</div>
                        ${strategy.examples
                          .map(
                            (example) => `
                          <div class="example-item">
                            <i class="fas fa-check-circle example-icon"></i>${example}
                          </div>`
                          )
                          .join("")}
                    </div>
                </div>`;
      col.appendChild(card);
      row.appendChild(col);
    });

    section.appendChild(row);
    container.appendChild(section);
  }

  renderSection(
    "Barrera de Infraestructura Física",
    STRATEGIES_INFRAESTRUCTURA
  );
  renderSection("Barrera Social y Actitudinal", STRATEGIES_SOCIAL);
  renderSection("Barrera Pedagógica y Metodológica", STRATEGIES_PEDAGOGICAS);

  addCardListeners();
}

function addCardListeners() {
  const cards = document.querySelectorAll(".strategy-card");
  cards.forEach((card) => {
    const header = card.querySelector(".strategy-header");
    header.addEventListener("click", () => {
      if (card.classList.contains("active")) {
        card.classList.remove("active");
        return;
      }
      document.querySelectorAll(".strategy-card.active").forEach((openCard) => {
        openCard.classList.remove("active");
      });
      card.classList.add("active");
    });
  });
}

// Función para barajar arrays
function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// Funciones del Quiz
function displayQuizQuestion() {
  if (currentQuizQuestion >= QUIZ_DATA.length) {
    showQuizResults();
    return;
  }

  const container = document.getElementById("quizContainer");
  const question = QUIZ_DATA[currentQuizQuestion];

  // Mezclar opciones cada vez que se muestra
  const shuffledOptions = shuffleArray(question.options);

  container.innerHTML = `
        <div class="question-card readable">
            <div class="question-text"><strong>Pregunta ${
              currentQuizQuestion + 1
            }</strong><br>${question.question}</div>
            <div class="options-container">
                ${shuffledOptions
                  .map(
                    (option, index) => `
                    <button id="option-${index}" class="option-btn readable" onclick="selectOption(${index})">
                        <img src="${option.img}" alt="${option.alt}" class="img-fluid rounded mb-2">
                        <div>${option.alt}</div>
                    </button>
                `
                  )
                  .join("")}
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-primary" id="checkAnswerBtn" onclick="checkAnswer()" disabled>
                  Verificar Respuesta
                </button>
            </div>
            <div id="feedback-container"></div>
        </div>`;

  // Guardamos dónde quedó la respuesta correcta después de mezclar
  question.shuffledOptions = shuffledOptions;
  question.correctIndex = shuffledOptions.findIndex(
    (opt) => opt === question.options[question.correct]
  );

  selectedAnswer = null;
  updateQuizProgress();
}

function selectOption(index) {
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => btn.classList.remove("selected"));
  const selectedBtn = document.getElementById(`option-${index}`);
  selectedBtn.classList.add("selected");
  selectedAnswer = index;
  document.getElementById("checkAnswerBtn").disabled = false;
}

// Validar respuesta
function checkAnswer() {
  if (selectedAnswer === null) return;

  const question = QUIZ_DATA[currentQuizQuestion];
  const options = document.querySelectorAll(".option-btn");
  const feedbackContainer = document.getElementById("feedback-container");
  const isCorrect = selectedAnswer === question.correctIndex;

  options.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correctIndex) btn.classList.add("correct");
    else if (index === selectedAnswer && !isCorrect)
      btn.classList.add("incorrect");
  });

  feedbackContainer.innerHTML = `
        <div class="feedback-alert alert ${
          isCorrect ? "alert-success" : "alert-danger"
        } mt-4" role="alert">
            <h5>${isCorrect ? "¡Correcto!" : "Respuesta Incorrecta"}</h5>
            <p>${question.explanation}</p>
            <button class="btn btn-primary" onclick="nextQuestion()">
                ${
                  currentQuizQuestion + 1 < QUIZ_DATA.length
                    ? "Siguiente Pregunta"
                    : "Ver Resultados"
                }
            </button>
        </div>`;

  if (isCorrect) quizScore++;
  document.getElementById("checkAnswerBtn").disabled = true;
}

function nextQuestion() {
  currentQuizQuestion++;
  displayQuizQuestion();
}

function showQuizResults() {
  const container = document.getElementById("quizContainer");
  const percentage = Math.round((quizScore / QUIZ_DATA.length) * 100);
  let resultMessage =
    percentage >= 80
      ? "¡Excelente dominio del tema!"
      : percentage >= 60
      ? "Buen conocimiento, sigue practicando."
      : "Te recomendamos revisar el contenido nuevamente.";

  container.innerHTML = `
        <div class="text-center">
            <div class="alert alert-info p-4" role="alert">
                <h3 class="alert-heading">Evaluación Completada</h3>
                <p class="fs-4 mb-3"><strong>Puntuación: ${quizScore} de ${QUIZ_DATA.length} (${percentage}%)</strong></p>
                <p class="mb-4">${resultMessage}</p>
                <button class="btn btn-primary btn-lg" onclick="restartQuiz()">Reiniciar Evaluación</button>
            </div>
        </div>`;

  lanzarConfetiPorcentaje(percentage);
}

// Reiniciar con preguntas barajadas
function restartQuiz() {
  currentQuizQuestion = 0;
  quizScore = 0;
  selectedAnswer = null;
  QUIZ_DATA = shuffleArray(QUIZ_DATA);
  displayQuizQuestion();
}

function updateQuizProgress() {
  const progress = ((currentQuizQuestion + 1) / QUIZ_DATA.length) * 100;
  const progressBar = document.getElementById("quizProgressBar");
  const progressText = document.getElementById("quizProgressText");

  progressBar.style.width = `${progress}%`;
  progressText.textContent = `Pregunta ${currentQuizQuestion + 1} de ${
    QUIZ_DATA.length
  }`;
}

// Función de confeti por porcentaje
function lanzarConfetiPorcentaje(porcentaje) {
  if (porcentaje >= 80) {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#00ff88", "#00cfff", "#ffd700"],
    });
  } else if (porcentaje >= 50) {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#87cefa", "#ffb347"],
    });
  } else if (porcentaje > 0) {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff6961", "#d3d3d3"],
    });
  } else {
    let duration = 2 * 1000;
    let end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 90,
        spread: 30,
        origin: { x: Math.random(), y: 0 },
        colors: ["#a9a9a9", "#87ceeb", "#d3d3d3"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}

// Accesibilidad
function announceToScreenReader(message) {
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.className = "sr-only";
  announcement.textContent = message;
  document.body.appendChild(announcement);
  setTimeout(() => announcement.remove(), 1000);
}

function increaseFontSize() {
  fontSize = Math.min(fontSize + 2, 24);
  document.documentElement.style.fontSize = fontSize + "px";
  announceToScreenReader(`Tamaño de texto aumentado a ${fontSize} píxeles`);
}

function decreaseFontSize() {
  fontSize = Math.max(fontSize - 2, 14);
  document.documentElement.style.fontSize = fontSize + "px";
  announceToScreenReader(`Tamaño de texto disminuido a ${fontSize} píxeles`);
}

function toggleHighContrast() {
  highContrastMode = !highContrastMode;
  const body = document.body;
  const btn = document.getElementById("contrastBtn");

  if (highContrastMode) {
    body.classList.add("high-contrast");
    btn.innerHTML = '<i class="fas fa-adjust"></i> Contraste Normal';
    announceToScreenReader("Modo de alto contraste activado");
  } else {
    body.classList.remove("high-contrast");
    btn.innerHTML = '<i class="fas fa-adjust"></i> Contraste';
    announceToScreenReader("Modo de alto contraste desactivado");
  }
}

// Musica
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("backgroundMusic");
  const btn = document.getElementById("musicBtn");
  let isPlaying = true;

  if (music) {
    music.volume = 0;
    music.muted = false;

    music
      .play()
      .then(() => {
        fadeIn(music, 0.3, 2000);
      })
      .catch((err) => {
        console.log("El navegador bloqueó el autoplay:", err);
        isPlaying = false;
        btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        btn.setAttribute("aria-label", "Reproducir música de fondo");
      });
  }

  // Botón de pausa/reanudar
  btn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
      btn.setAttribute("aria-label", "Reproducir música de fondo");
    } else {
      music.play().then(() => {
        fadeIn(music, 0.3, 2000);
      });
      btn.innerHTML = '<i class="fas fa-volume-up"></i>';
      btn.setAttribute("aria-label", "Pausar música de fondo");
    }
    isPlaying = !isPlaying;
  });
});

// Función fade-in
function fadeIn(audio, targetVolume, duration) {
  let step = (targetVolume - audio.volume) / (duration / 100);
  let fade = setInterval(() => {
    if (audio.volume < targetVolume - step) {
      audio.volume = Math.min(audio.volume + step, targetVolume);
    } else {
      audio.volume = targetVolume;
      clearInterval(fade);
    }
  }, 100);
}

// Animacion Burbujas
document.addEventListener("DOMContentLoaded", () => {
  const ocean = document.querySelector(".ocean");

  for (let i = 0; i < 30; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = Math.random() * 40 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left = `${Math.random() * 100}vw`;

    bubble.style.animationDuration = `${10 + Math.random() * 20}s`;

    bubble.style.animationDelay = `${Math.random() * 1}s`;

    ocean.appendChild(bubble);
  }
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  loadStrategies();
  displayQuizQuestion();
  updatePageProgress();
});
