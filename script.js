const questions = [
  "La familia conversa con respeto cuando aparece un desacuerdo.",
  "Las responsabilidades del hogar están distribuidas con claridad.",
  "Cada integrante siente que puede expresar emociones sin miedo.",
  "Existen momentos compartidos para fortalecer la convivencia.",
  "La familia sabe cuándo buscar apoyo externo si lo necesita.",
  "Los acuerdos familiares se revisan y ajustan con participación de todos."
];

const recommendationsByLevel = {
  high: [
    "Mantengan los espacios de conversación que ya funcionan y revisen acuerdos una vez por semana.",
    "Registren una meta mensual para conservar hábitos positivos de convivencia.",
    "Compartan recursos útiles con otros integrantes de la familia para sostener la participación."
  ],
  medium: [
    "Elijan un tema de conversación por semana y acuerden una regla básica de escucha.",
    "Definan una meta pequeña, medible y con fecha cercana para reducir tensiones.",
    "Identifiquen qué situaciones generan más estrés y qué apoyo concreto necesita cada persona."
  ],
  low: [
    "Prioricen la seguridad y el respeto antes de intentar resolver todos los conflictos.",
    "Busquen acompañamiento profesional o institucional si hay violencia, miedo o riesgo.",
    "Construyan acuerdos muy simples: una conversación breve, una responsabilidad y una acción de cuidado."
  ]
};

const resources = [
  {
    title: "Guía de conversación familiar",
    category: "Comunicación",
    color: "#0e6b67",
    icon: "message",
    text: "Preguntas y acuerdos básicos para hablar sin interrupciones, validar emociones y cerrar compromisos."
  },
  {
    title: "Mapa de señales de estrés",
    category: "Bienestar",
    color: "#315f89",
    icon: "heart",
    text: "Lista de señales emocionales, físicas y de convivencia que ayudan a reconocer cuándo pedir apoyo."
  },
  {
    title: "Plan de resolución de conflictos",
    category: "Comunicación",
    color: "#d9664f",
    icon: "check",
    text: "Pasos para describir el problema, escuchar versiones, acordar una acción y revisar avances."
  },
  {
    title: "Ruta de apoyo institucional",
    category: "Apoyo",
    color: "#8a6f20",
    icon: "route",
    text: "Orientación para buscar canales oficiales locales cuando el conflicto requiere acompañamiento externo."
  },
  {
    title: "Rutina semanal de bienestar",
    category: "Bienestar",
    color: "#5d7c48",
    icon: "calendar",
    text: "Actividades cortas para descanso, diálogo, organización del hogar y reconocimiento positivo."
  },
  {
    title: "Registro de acuerdos",
    category: "Apoyo",
    color: "#7d4b86",
    icon: "file",
    text: "Formato simple para dejar por escrito compromisos familiares, responsables y fechas de revisión."
  },
  {
    title: "Semáforo de convivencia",
    category: "Cuidado",
    color: "#b44c3a",
    icon: "alert",
    text: "Guía para distinguir señales de calma, tensión o riesgo y decidir cuándo detener una discusión."
  },
  {
    title: "Directorio de apoyo cercano",
    category: "Apoyo",
    color: "#315f89",
    icon: "phone",
    text: "Plantilla para organizar contactos institucionales, redes familiares y rutas de atención disponibles."
  },
  {
    title: "Pausa de regulación emocional",
    category: "Cuidado",
    color: "#5d7c48",
    icon: "pause",
    text: "Ejercicio breve para respirar, nombrar emociones y retomar una conversación cuando haya más calma."
  }
];

const icons = {
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path>',
  check: '<path d="M20 6 9 17l-5-5"></path>',
  route: '<path d="M4 6h5a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13"></path><path d="M17 15l3 3-3 3"></path>',
  calendar: '<path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M3 10h18"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h5"></path>',
  alert: '<path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.3 3.9 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"></path>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"></path>',
  pause: '<path d="M10 4H6v16h4V4z"></path><path d="M18 4h-4v16h4V4z"></path>'
};

const questionList = document.querySelector("#questionList");
const assessmentForm = document.querySelector("#assessmentForm");
const resetAssessment = document.querySelector("#resetAssessment");
const scoreMeter = document.querySelector(".score-meter");
const scoreValue = document.querySelector("#scoreValue");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const recommendationList = document.querySelector("#recommendationList");
const resourceGrid = document.querySelector("#resourceGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const goalForm = document.querySelector("#goalForm");
const goalInput = document.querySelector("#goalInput");
const goalCategory = document.querySelector("#goalCategory");
const goalDate = document.querySelector("#goalDate");
const goalList = document.querySelector("#goalList");
const completedCount = document.querySelector("#completedCount");
const goalStorageKey = "apoyoFamiliarGoals";

let goals = loadGoals();

function renderQuestions() {
  questionList.innerHTML = questions
    .map((question, index) => {
      const value = 3;
      return `
        <div class="question-block">
          <div class="question-top">
            <label for="question-${index}">${question}</label>
            <span class="question-score" id="score-${index}">${value}</span>
          </div>
          <div class="range-row">
            <span>Bajo</span>
            <input id="question-${index}" name="question-${index}" type="range" min="1" max="5" value="${value}">
            <span>Alto</span>
          </div>
        </div>
      `;
    })
    .join("");

  questions.forEach((_, index) => {
    const range = document.querySelector(`#question-${index}`);
    const score = document.querySelector(`#score-${index}`);
    range.addEventListener("input", () => {
      score.textContent = range.value;
    });
  });
}

function calculateAssessment() {
  const values = questions.map((_, index) => Number(document.querySelector(`#question-${index}`).value));
  const total = values.reduce((sum, value) => sum + value, 0);
  const percent = Math.round((total / (questions.length * 5)) * 100);
  let level = "low";
  let title = "Cuidado prioritario";
  let text = "Hay señales que conviene atender con calma, apoyo y límites claros. Si existe riesgo, miedo o violencia, busca ayuda externa de manera inmediata.";

  if (percent >= 80) {
    level = "high";
    title = "Fortalezas activas";
    text = "La familia muestra bases sólidas de comunicación, organización y cuidado. El reto principal es mantener hábitos y convertirlos en metas revisables.";
  } else if (percent >= 55) {
    level = "medium";
    title = "Requiere acuerdos";
    text = "Hay recursos familiares disponibles, pero algunos aspectos necesitan acuerdos más claros, conversaciones constantes y seguimiento de compromisos.";
  }

  updateResult(percent, title, text, level);
}

function updateResult(percent, title, text, level) {
  const degrees = Math.round((percent / 100) * 360);
  const color = level === "low" ? "#d9664f" : level === "medium" ? "#f1b84b" : "#0e6b67";
  scoreMeter.style.background = `conic-gradient(${color} ${degrees}deg, #e7eeec 0deg)`;
  scoreValue.textContent = `${percent}%`;
  resultTitle.textContent = title;
  resultText.textContent = text;
  recommendationList.innerHTML = recommendationsByLevel[level]
    .map((recommendation) => `<li>${recommendation}</li>`)
    .join("");
}

function renderResources(filter = "Todos") {
  const visibleResources = filter === "Todos"
    ? resources
    : resources.filter((resource) => resource.category === filter);

  resourceGrid.innerHTML = visibleResources
    .map((resource) => `
      <article class="resource-card">
        <span class="resource-icon" style="background:${resource.color}">
          <svg viewBox="0 0 24 24" aria-hidden="true">${icons[resource.icon]}</svg>
        </span>
        <h3>${resource.title}</h3>
        <p>${resource.text}</p>
        <span class="resource-tag">${resource.category}</span>
      </article>
    `)
    .join("");
}

function loadGoals() {
  try {
    return JSON.parse(localStorage.getItem(goalStorageKey)) || [];
  } catch {
    return [];
  }
}

function saveGoals() {
  localStorage.setItem(goalStorageKey, JSON.stringify(goals));
}

function formatDate(dateValue) {
  if (!dateValue) return "Sin fecha";
  return new Intl.DateTimeFormat("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(`${dateValue}T00:00:00`));
}

function renderGoals() {
  const completed = goals.filter((goal) => goal.completed).length;
  completedCount.textContent = completed;

  if (!goals.length) {
    goalList.innerHTML = '<p class="empty-state">Aún no hay metas registradas. Agrega una acción pequeña para empezar el seguimiento.</p>';
    return;
  }

  goalList.innerHTML = goals
    .map((goal) => `
      <article class="goal-item ${goal.completed ? "completed" : ""}" data-id="${goal.id}">
        <input class="goal-check" type="checkbox" ${goal.completed ? "checked" : ""} aria-label="Marcar meta como completada">
        <div class="goal-main">
          <p class="goal-title">${goal.text}</p>
          <p class="goal-meta">${goal.category} - ${formatDate(goal.date)}</p>
        </div>
        <button class="goal-delete" type="button" aria-label="Eliminar meta">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18"></path>
            <path d="M8 6V4h8v2"></path>
            <path d="M19 6l-1 14H6L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
          </svg>
        </button>
      </article>
    `)
    .join("");
}

assessmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  calculateAssessment();
});

resetAssessment.addEventListener("click", () => {
  questions.forEach((_, index) => {
    const range = document.querySelector(`#question-${index}`);
    const score = document.querySelector(`#score-${index}`);
    range.value = "3";
    score.textContent = "3";
  });
  updateResult(
    0,
    "Completa la evaluación",
    "Al finalizar, aquí aparecerá una lectura del ambiente familiar y una recomendación inicial.",
    "low"
  );
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderResources(button.dataset.filter);
  });
});

goalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = goalInput.value.trim();
  if (!text) return;

  goals.unshift({
    id: window.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    text,
    category: goalCategory.value,
    date: goalDate.value,
    completed: false
  });

  saveGoals();
  renderGoals();
  goalForm.reset();
  goalInput.focus();
});

goalList.addEventListener("click", (event) => {
  const goalItem = event.target.closest(".goal-item");
  if (!goalItem) return;
  const id = goalItem.dataset.id;

  if (event.target.classList.contains("goal-check")) {
    goals = goals.map((goal) => goal.id === id ? { ...goal, completed: event.target.checked } : goal);
  }

  if (event.target.closest(".goal-delete")) {
    goals = goals.filter((goal) => goal.id !== id);
  }

  saveGoals();
  renderGoals();
});

renderQuestions();
renderResources();
renderGoals();
