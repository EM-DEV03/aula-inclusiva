const STRATEGIES_DATA = [
    {
        icon: 'fas fa-universal-access',
        title: 'Puntos de Accesibilidad Universal',
        description: 'Implementación de ayudas y puntos de accesibilidad para garantizar el acceso completo e independiente a todas las instalaciones educativas.',
        examples: [
            'Rampas con pendiente máxima del 8% y pasamanos bilaterales',
            'Baños inclusivos con espacio de giro de 1.50m y barras de apoyo',
            'Señalizaciones táctiles en braille y macrotipo contrastado',
            'Puertas con ancho mínimo de 90cm o sistemas automáticos',
            'Pasamanos continuos en escaleras con información táctil',
            'Elementos interactivos a altura máxima de 120cm'
        ],
        color: 'primary'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Ambiente Seguro y Confortable',
        description: 'Garantizar condiciones ambientales óptimas que promuevan el bienestar y la concentración de todos los estudiantes.',
        examples: [
            'Iluminación LED uniforme mínimo 500 lux en áreas de estudio',
            'Mobiliario ergonómico regulable en altura y profundidad',
            'Ventilación mecánica controlada con filtros de calidad',
            'Pisos antideslizantes con texturas diferenciadas',
            'Control acústico con materiales absorbentes',
            'Temperatura controlada entre 20-24°C constante'
        ],
        color: 'success'
    },
    {
        icon: 'fas fa-chalkboard-teacher',
        title: 'Aulas Especializadas Alternativas',
        description: 'Desarrollo de espacios educativos alternativos diseñados específicamente para diferentes necesidades de aprendizaje.',
        examples: [
            'Aulas sensoriales con equipamiento multisensorial',
            'Espacios al aire libre con techado retráctil',
            'Laboratorios adaptativos con mesas regulables',
            'Bibliotecas con zonas silenciosas y colaborativas',
            'Salas de terapia ocupacional integradas',
            'Espacios de descanso sensorial para autorregulación'
        ],
        color: 'info'
    },
    {
        icon: 'fas fa-user-cog',
        title: 'Acomodaciones Individualizadas',
        description: 'Adaptaciones específicas del mobiliario y equipamiento según las necesidades particulares de cada estudiante.',
        examples: [
            'Sillas postural es con soporte lumbar y lateral ajustable',
            'Mesas con altura eléctrica y inclinación variable',
            'Atriles de lectura con iluminación integrada',
            'Cojines terapéuticos para estimulación propioceptiva',
            'Superficies antideslizantes personalizadas',
            'Sistemas de comunicación aumentativa integrados'
        ],
        color: 'warning'
    },
    {
        icon: 'fas fa-bullhorn',
        title: 'Campañas de Sensibilización Integral',
        description: 'Programas sistemáticos para eliminar barreras actitudinales y promover una cultura inclusiva en toda la comunidad educativa.',
        examples: [
            'Talleres mensuales de sensibilización para toda la comunidad',
            'Jornadas de puertas abiertas con simulacros de discapacidad',
            'Murales colaborativos sobre diversidad e inclusión',
            'Testimonios de familias y personas con discapacidad',
            'Actividades de empatía y construcción de perspectiva',
            'Formación continua para personal docente y administrativo'
        ],
        color: 'danger'
    }
];

const QUIZ_DATA = [
    {
        question: "¿Cuál es la pendiente máxima recomendada internacionalmente para una rampa de accesibilidad en centros educativos?",
        options: [
            "5% (1:20) para garantizar máxima comodidad",
            "8% (1:12) según estándares internacionales",
            "10% (1:10) como límite aceptable",
            "12% (1:8) en casos excepcionales"
        ],
        correct: 1,
        explanation: "Una pendiente del 8% (1:12) es el estándar internacional que garantiza que las personas en silla de ruedas puedan subir de forma independiente y segura, cumpliendo con las normas ISO de accesibilidad."
    },
    {
        question: "¿Cuál es el nivel mínimo de iluminación recomendado para aulas inclusivas según estándares ergonómicos?",
        options: [
            "300 lux es suficiente para la mayoría de actividades",
            "500 lux como mínimo para garantizar confort visual",
            "750 lux para actividades de precisión únicamente",
            "La iluminación natural siempre es preferible"
        ],
        correct: 1,
        explanation: "500 lux es el mínimo recomendado por normas internacionales de ergonomía para espacios educativos, garantizando que estudiantes con diferentes capacidades visuales puedan realizar actividades de lectura y escritura cómodamente."
    },
    {
        question: "¿Por qué es fundamental el control acústico en aulas inclusivas?",
        options: [
            "Solo beneficia a estudiantes con pérdida auditiva",
            "Mejora la concentración de todos los estudiantes, especialmente aquellos con TEA y TDAH",
            "Es únicamente una medida de confort general",
            "Solo es necesario en aulas de música"
        ],
        correct: 1,
        explanation: "El control acústico es crucial porque beneficia especialmente a estudiantes con Trastorno del Espectro Autista (TEA), TDAH y dificultades sensoriales, quienes pueden experimentar sobrecarga sensorial con ruidos excesivos, afectando su capacidad de aprendizaje y bienestar."
    },
    {
        question: "¿Cuál es el ancho mínimo recomendado para puertas accesibles en centros educativos?",
        options: [
            "70 cm es suficiente para sillas de ruedas estándar",
            "80 cm para cumplir normativas básicas",
            "90 cm para garantizar acceso universal",
            "100 cm solo para entradas principales"
        ],
        correct: 2,
        explanation: "90 cm es el ancho mínimo recomendado para garantizar que personas con diferentes tipos de ayudas técnicas (sillas de ruedas, andadores, etc.) puedan pasar cómodamente."
    },
    {
        question: "¿Qué característica es esencial en los baños accesibles?",
        options: [
            "Solo barras de apoyo fijas",
            "Espacio de transferencia unilateral",
            "Espacio de giro de 1.20m de diámetro",
            "Espacio de giro de 1.50m de diámetro"
        ],
        correct: 3,
        explanation: "Un espacio de giro de 1.50m de diámetro es esencial para permitir que usuarios de sillas de ruedas puedan realizar un giro completo de 360° dentro del baño."
    },
    {
        question: "¿Cuál es la altura máxima recomendada para elementos interactivos (interruptores, manijas, etc.)?",
        options: [
            "120 cm desde el suelo",
            "140 cm desde el suelo",
            "160 cm desde el suelo",
            "180 cm desde el suelo"
        ],
        correct: 0,
        explanation: "120 cm es la altura máxima recomendada para garantizar que personas en silla de ruedas o de baja estatura puedan alcanzar los elementos interactivos cómodamente."
    }
];

// Variables globales
let currentQuizQuestion = 0;
let quizScore = 0;
let selectedAnswer = null;
let strategiesExpanded = 0;
let fontSize = 18;
let highContrastMode = false;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    // Inicializar AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    // Mezclar preguntas antes de comenzar
    shuffleQuestions();

    // Cargar contenido
    loadStrategies();
    loadQuiz();
    updateProgress();

    // Configurar event listeners
    setupEventListeners();

    // Anunciar página cargada para lectores de pantalla
    announceToScreenReader("Página cargada. Barreras Físicas y de Infraestructura Escolar - Guía interactiva lista para usar.");
}

function loadStrategies() {
    const container = document.getElementById('strategiesContainer');

    STRATEGIES_DATA.forEach((strategy, index) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 mb-4';

        const card = document.createElement('div');
        card.className = 'strategy-card';
        card.innerHTML = `
            <div class="strategy-header">
                <i class="${strategy.icon} strategy-icon"></i>
                <h3 class="strategy-title">${strategy.title}</h3>
                <p class="strategy-description">${strategy.description}</p>
                <i class="fas fa-chevron-down expand-indicator"></i>
            </div>
            <div class="strategy-content">
                <div class="strategy-body">
                    <div class="examples-title">
                        <i class="fas fa-list-ul"></i>
                        Ejemplos de Implementación
                    </div>
                    <div class="examples-list">
                        ${strategy.examples.map(example => `
                            <div class="example-item">
                                <i class="fas fa-check-circle example-icon"></i>
                                <span>${example}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        col.appendChild(card);
        container.appendChild(col);

        // Manejador del clic
        const header = card.querySelector('.strategy-header');
        const content = card.querySelector('.strategy-content');

        header.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');

            // Cerrar todas las tarjetas abiertas
            document.querySelectorAll('.strategy-card').forEach(c => {
                c.classList.remove('expanded');
                c.querySelector('.strategy-content').classList.remove('show');
            });

            // Abrir/cerrar la tarjeta actual
            if (!isExpanded) {
                card.classList.add('expanded');
                content.classList.add('show');
            }
        });
    });
}

function toggleStrategy(index) {
    const card = document.querySelectorAll('.strategy-card')[index];
    const content = document.getElementById(`content-${index}`);
    const isExpanded = card.classList.contains('expanded');

    if (isExpanded) {
        // Colapsar
        card.classList.remove('expanded');
        content.classList.remove('show');
        card.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
        strategiesExpanded--;
        announceToScreenReader(`Estrategia ${STRATEGIES_DATA[index].title} colapsada`);
    } else {
        // Expandir
        card.classList.add('expanded');
        content.classList.add('show');
        card.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
        strategiesExpanded++;
        announceToScreenReader(`Estrategia ${STRATEGIES_DATA[index].title} expandida. ${STRATEGIES_DATA[index].examples.length} ejemplos disponibles`);
    }

    updateProgress();
}

function handleStrategyKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleStrategy(index);
    }
}

function loadQuiz() {
    displayQuizQuestion();
}

function displayQuizQuestion() {
    if (currentQuizQuestion >= QUIZ_DATA.length) {
        showQuizResults();
        return;
    }

    const container = document.getElementById('quizContainer');
    const question = QUIZ_DATA[currentQuizQuestion];

    container.innerHTML = `
        <div class="question-card" role="group" aria-labelledby="question-${currentQuizQuestion}">
            <div class="question-text" id="question-${currentQuizQuestion}">
                <strong class="d-block mb-3">Pregunta ${currentQuizQuestion + 1}</strong>
                ${question.question}
            </div>
            
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-btn" 
                            onclick="selectOption(${index})" 
                            id="option-${index}" 
                            role="radio" 
                            aria-checked="false">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        ${option}
                    </button>
                `).join('')}
            </div>
            
            <div class="text-center mt-4">
                <button class="btn btn-primary btn-lg" 
                        id="checkAnswerBtn" 
                        onclick="checkAnswer()" 
                        disabled>
                    Verificar Respuesta
                </button>
                <div id="check-answer-help" class="text-muted mt-2">
                    Selecciona una opción para continuar
                </div>
            </div>
            
            <div id="feedback-container"></div>
        </div>
    `;

    selectedAnswer = null;
    updateQuizProgress();
}

function selectOption(index) {
    // Remover selección anterior
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        btn.setAttribute('aria-checked', 'false');
        btn.setAttribute('tabindex', '-1');
    });

    // Seleccionar nueva opción
    const selectedBtn = document.getElementById(`option-${index}`);
    selectedBtn.classList.add('selected');
    selectedBtn.setAttribute('aria-checked', 'true');
    selectedBtn.setAttribute('tabindex', '0');
    selectedBtn.focus();

    selectedAnswer = index;

    // Habilitar botón de verificar
    const checkBtn = document.getElementById('checkAnswerBtn');
    checkBtn.disabled = false;
    checkBtn.focus();

    // Actualizar texto de ayuda
    document.getElementById('check-answer-help').textContent = `Opción ${String.fromCharCode(65 + index)} seleccionada. Presiona verificar para continuar.`;

    announceToScreenReader(`Opción ${String.fromCharCode(65 + index)} seleccionada`);
}

function handleOptionKeydown(event, index) {
    const options = document.querySelectorAll('.option-btn');

    switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
            event.preventDefault();
            const nextIndex = (index + 1) % options.length;
            options[nextIndex].focus();
            break;

        case 'ArrowUp':
        case 'ArrowLeft':
            event.preventDefault();
            const prevIndex = (index - 1 + options.length) % options.length;
            options[prevIndex].focus();
            break;

        case ' ':
        case 'Enter':
            event.preventDefault();
            selectOption(index);
            break;
    }
}

function checkAnswer() {
    if (selectedAnswer === null) return;

    const question = QUIZ_DATA[currentQuizQuestion];
    const options = document.querySelectorAll('.option-btn');
    const feedbackContainer = document.getElementById('feedback-container');
    const isCorrect = selectedAnswer === question.correct;

    // Deshabilitar todas las opciones
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === question.correct) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Mostrar feedback
    feedbackContainer.innerHTML = `
                <div class="feedback-alert alert ${isCorrect ? 'alert-success' : 'alert-danger'} mt-4" role="alert">
                    <div class="d-flex align-items-start">
                        <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-3 mt-1" 
                           style="font-size: 1.5rem;" aria-hidden="true"></i>
                        <div>
                            <h5 class="alert-heading mb-2">
                                ${isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta'}
                            </h5>
                            <p class="mb-3">${question.explanation}</p>
                            <button class="btn ${isCorrect ? 'btn-success' : 'btn-primary'}" 
                                    onclick="nextQuestion()" 
                                    id="nextQuestionBtn">
                                <i class="fas fa-arrow-right me-2" aria-hidden="true"></i>
                                ${currentQuizQuestion + 1 < QUIZ_DATA.length ? 'Siguiente Pregunta' : 'Ver Resultados'}
                            </button>
                        </div>
                    </div>
                </div>
            `;

    if (isCorrect) {
        quizScore++;
    }

    // Enfocar el botón de siguiente
    setTimeout(() => {
        document.getElementById('nextQuestionBtn').focus();
    }, 100);

    const resultMessage = isCorrect ?
        `Correcto. ${question.explanation}` :
        `Incorrecto. La respuesta correcta era ${String.fromCharCode(65 + question.correct)}. ${question.explanation}`;

    announceToScreenReader(resultMessage);

    // Deshabilitar botón de verificar
    document.getElementById('checkAnswerBtn').disabled = true;
}

function nextQuestion() {
    currentQuizQuestion++;
    displayQuizQuestion();
}

function showQuizResults() {
    const container = document.getElementById('quizContainer');
    const percentage = Math.round((quizScore / QUIZ_DATA.length) * 100);
    let resultClass, resultIcon, resultMessage;

    if (percentage >= 80) {
        resultClass = 'success';
        resultIcon = 'fa-trophy';
        resultMessage = '¡Excelente dominio del tema!';
    } else if (percentage >= 60) {
        resultClass = 'warning';
        resultIcon = 'fa-medal';
        resultMessage = 'Buen conocimiento, sigue practicando.';
    } else {
        resultClass = 'info';
        resultIcon = 'fa-book-open';
        resultMessage = 'Te recomendamos revisar el contenido nuevamente.';
    }

    container.innerHTML = `
                <div class="text-center">
                    <div class="alert alert-${resultClass} p-4" role="alert">
                        <i class="fas ${resultIcon} fa-3x mb-3" aria-hidden="true"></i>
                        <h3 class="alert-heading">Evaluación Completada</h3>
                        <hr>
                        <p class="fs-4 mb-3">
                            <strong>Puntuación: ${quizScore} de ${QUIZ_DATA.length} (${percentage}%)</strong>
                        </p>
                        <p class="mb-4">${resultMessage}</p>
                        
                        <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
                            <button class="btn btn-primary btn-lg" onclick="restartQuiz()">
                                <i class="fas fa-redo me-2" aria-hidden="true"></i>Reiniciar Evaluación
                            </button>
                            <button class="btn btn-outline-primary btn-lg" onclick="scrollToSection('strategies')">
                                <i class="fas fa-arrow-up me-2" aria-hidden="true"></i>Revisar Estrategias
                            </button>
                        </div>
                    </div>
                </div>
            `;

    updateProgress();
    announceToScreenReader(`Evaluación completada. Obtuviste ${quizScore} de ${QUIZ_DATA.length} respuestas correctas, equivalente al ${percentage} por ciento. ${resultMessage}`);
}

function restartQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    selectedAnswer = null;

    // Mezclar el array de preguntas
    shuffleQuestions();

    displayQuizQuestion();
    announceToScreenReader("Evaluación reiniciada con nuevas preguntas aleatorias.");
}

// Añadir función para mezclar las preguntas
function shuffleQuestions() {
    for (let i = QUIZ_DATA.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [QUIZ_DATA[i], QUIZ_DATA[j]] = [QUIZ_DATA[j], QUIZ_DATA[i]];
    }
}

function updateProgress() {
    const strategiesProgress = (strategiesExpanded / STRATEGIES_DATA.length) * 0.6;
    const quizProgress = (currentQuizQuestion / QUIZ_DATA.length) * 0.4;
    const totalProgress = Math.round((strategiesProgress + quizProgress) * 100);

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    progressBar.style.width = `${totalProgress}%`;
    progressBar.setAttribute('aria-valuenow', totalProgress);
    progressText.textContent = `${totalProgress}% Completado`;

    if (totalProgress === 100) {
        announceToScreenReader("¡Felicitaciones! Has completado toda la guía al 100%.");
    }
}

function updateQuizProgress() {
    const progress = ((currentQuizQuestion + 1) / QUIZ_DATA.length) * 100;
    const progressBar = document.getElementById('quizProgressBar');
    const progressText = document.getElementById('quizProgressText');

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Pregunta ${currentQuizQuestion + 1} de ${QUIZ_DATA.length}`;
}

// Funciones de accesibilidad
function increaseFontSize() {
    fontSize = Math.min(fontSize + 2, 24);
    document.documentElement.style.fontSize = fontSize + 'px';
    announceToScreenReader(`Tamaño de texto aumentado a ${fontSize} píxeles`);
}

function decreaseFontSize() {
    fontSize = Math.max(fontSize - 2, 14);
    document.documentElement.style.fontSize = fontSize + 'px';
    announceToScreenReader(`Tamaño de texto disminuido a ${fontSize} píxeles`);
}

function toggleHighContrast() {
    highContrastMode = !highContrastMode;
    const body = document.body;
    const btn = document.getElementById('contrastBtn');

    if (highContrastMode) {
        body.classList.add('high-contrast');
        btn.innerHTML = '<i class="fas fa-adjust" aria-hidden="true"></i> Contraste Normal';
        announceToScreenReader("Modo de alto contraste activado");
    } else {
        body.classList.remove('high-contrast');
        btn.innerHTML = '<i class="fas fa-adjust" aria-hidden="true"></i> Contraste';
        announceToScreenReader("Modo de alto contraste desactivado");
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Enfocar el primer elemento focusable de la sección
    setTimeout(() => {
        const focusableElement = section.querySelector('button, [tabindex], input, select, textarea, [role="button"]');
        if (focusableElement) {
            focusableElement.focus();
        }
    }, 800);

    announceToScreenReader(`Navegando a la sección ${sectionId === 'strategies' ? 'estrategias' : 'evaluación'}`);
}

function announceToScreenReader(message) {
    // Crear elemento temporal para anuncios a lectores de pantalla
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

function setupEventListeners() {
    // Navegación por teclado mejorada
    document.addEventListener('keydown', function (e) {
        // Escape para cerrar modales
        if (e.key === 'Escape') {
            const modal = bootstrap.Modal.getInstance(document.querySelector('.modal.show'));
            if (modal) {
                modal.hide();
            }
        }

        // Atajos de teclado
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case '+':
                case '=':
                    e.preventDefault();
                    increaseFontSize();
                    break;
                case '-':
                    e.preventDefault();
                    decreaseFontSize();
                    break;
            }
        }
    });

    // Mejorar navegación por teclado en elementos custom
    document.addEventListener('focusin', function (e) {
        if (e.target.classList.contains('strategy-card')) {
            e.target.style.outline = '3px solid #0066cc';
            e.target.style.outlineOffset = '2px';
        }
    });

    document.addEventListener('focusout', function (e) {
        if (e.target.classList.contains('strategy-card')) {
            e.target.style.outline = '';
            e.target.style.outlineOffset = '';
        }
    });
}

// CSS adicional para alto contraste
const highContrastCSS = `
            .high-contrast {
                filter: contrast(150%) brightness(120%);
            }
            
            .high-contrast .btn {
                border-width: 2px !important;
                font-weight: bold !important;
            }
            
            .high-contrast .card, 
            .high-contrast .strategy-card {
                border: 2px solid #000 !important;
            }
            
            .high-contrast .text-muted {
                color: #000 !important;
            }
        `;

// Inyectar CSS de alto contraste
const style = document.createElement('style');
style.textContent = highContrastCSS;
document.head.appendChild(style);

// Crear las tarjetas dinámicamente
function createStrategyCards() {
    const container = document.getElementById('strategiesContainer');
    container.innerHTML = ''; // Limpiar el contenedor primero

    STRATEGIES_DATA.forEach((strategy, index) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4';

        const card = `
      <div class="strategy-card" data-strategy="${index}">
        <div class="strategy-header">
          <i class="${strategy.icon} strategy-icon"></i>
          <h3 class="strategy-title">${strategy.title}</h3>
          <p class="strategy-description">${strategy.description}</p>
          <i class="fas fa-chevron-down expand-indicator"></i>
        </div>
        <div class="strategy-content">
          <div class="strategy-body">
            <h4 class="mb-3">Ejemplos de Implementación:</h4>
            ${strategy.examples.map(example => `
              <div class="example-item">
                <i class="fas fa-check-circle me-2 text-success"></i>
                ${example}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

        col.innerHTML = card;
        container.appendChild(col);
    });

    // Agregar los event listeners después de crear las tarjetas
    addCardListeners();
}

function addCardListeners() {
    const cards = document.querySelectorAll('.strategy-card');

    cards.forEach(card => {
        const header = card.querySelector('.strategy-header');

        header.addEventListener('click', () => {
            // Si la tarjeta está activa, la cerramos
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                return;
            }

            // Cerrar todas las tarjetas abiertas
            document.querySelectorAll('.strategy-card.active').forEach(openCard => {
                openCard.classList.remove('active');
            });

            // Abrir la tarjeta seleccionada
            card.classList.add('active');
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createStrategyCards();
});