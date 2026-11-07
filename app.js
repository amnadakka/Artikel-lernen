/**
 * Vocabulary cards.
 * Required: article, noun, title
 * Visual: emoji and/or image (image preferred when both are set)
 * Optional: id, alt
 */
function makeCard(article, noun, emoji, extra = {}) {
  return {
    id: extra.id || noun.toLowerCase().replace(/[^a-z0-9äöüß]+/gi, "-"),
    article,
    noun,
    title: `${article} ${noun}`,
    emoji,
    image: extra.image || "",
    alt: extra.alt || noun,
  };
}

const categories = [
  {
    id: "familie",
    name: "Familie",
    emoji: "👨‍👩‍👧‍👦",
    cards: [
      makeCard("die", "Familie", "👨‍👩‍👧‍👦"),
      makeCard("der", "Mann", "👨"),
      makeCard("die", "Frau", "👩"),
      makeCard("der", "Vater", "👨"),
      makeCard("die", "Mutter", "👩"),
      makeCard("der", "Papa", "👨"),
      makeCard("der", "Bruder", "👦"),
      makeCard("die", "Schwester", "👧"),
      makeCard("der", "Sohn", "👦"),
      makeCard("die", "Tochter", "👧"),
      makeCard("das", "Kind", "🧒"),
      makeCard("das", "Baby", "👶"),
      makeCard("die", "Enkelin", "👧"),
      makeCard("die", "Oma", "👵"),
      makeCard("der", "Opa", "👴"),
      makeCard("der", "Partner", "🧍"),
      makeCard("die", "Partnerin", "🧍‍♀️"),
    ],
  },
  {
    id: "essen",
    name: "Essen und Trinken",
    emoji: "🍽️",
    cards: [
      makeCard("der", "Apfel", "🍎", { image: "images/apple.svg", id: "apfel" }),
      makeCard("die", "Banane", "🍌"),
      makeCard("die", "Birne", "🍐"),
      makeCard("die", "Orange", "🍊"),
      makeCard("die", "Kiwi", "🥝"),
      makeCard("die", "Tomate", "🍅"),
      makeCard("die", "Kartoffel", "🥔"),
      makeCard("die", "Zwiebel", "🧅"),
      makeCard("das", "Obst", "🍇"),
      makeCard("das", "Gemüse", "🥬"),
      makeCard("das", "Brot", "🍞"),
      makeCard("das", "Brötchen", "🥖"),
      makeCard("das", "Ei", "🥚"),
      makeCard("der", "Fisch", "🐟"),
      makeCard("das", "Fleisch", "🥩"),
      makeCard("das", "Würstchen", "🌭"),
      makeCard("der", "Käse", "🧀"),
      makeCard("der", "Joghurt", "🥛"),
      makeCard("die", "Milch", "🥛"),
      makeCard("der", "Tee", "🍵"),
      makeCard("der", "Wein", "🍷"),
      makeCard("die", "Flasche", "🍾"),
      makeCard("das", "Salz", "🧂"),
      makeCard("der", "Kuchen", "🍰"),
      makeCard("der", "Pfannkuchen", "🥞"),
    ],
  },
  {
    id: "sprachkurs",
    name: "Im Sprachkurs",
    emoji: "📘",
    cards: [
      makeCard("der", "Kurs", "📘"),
      makeCard("die", "Sprache", "🗣️"),
      makeCard("der", "Buchstabe", "🔤"),
      makeCard("die", "Zahl", "🔢"),
      makeCard("das", "Jahr", "📅"),
      makeCard("das", "Land", "🗺️"),
      makeCard("das", "Formular", "📝"),
    ],
  },
  {
    id: "adresse",
    name: "Name und Adresse",
    emoji: "📫",
    cards: [
      makeCard("der", "Name", "🪪"),
      makeCard("der", "Vorname", "✍️"),
      makeCard("die", "Adresse", "📫"),
      makeCard("die", "Straße", "🛣️"),
      makeCard("die", "Hausnummer", "🏠"),
      makeCard("die", "Postleitzahl", "📮"),
      makeCard("die", "Stadt", "🏙️"),
      makeCard("die", "Nummer", "🔢"),
      makeCard("die", "Telefonnummer", "📱"),
      makeCard("die", "E-Mail", "📧", { id: "e-mail" }),
    ],
  },
];

const els = {
  subtitle: document.getElementById("app-subtitle"),
  home: document.getElementById("home"),
  categoryList: document.getElementById("category-list"),
  practice: document.getElementById("practice"),
  backBtn: document.getElementById("back-btn"),
  tabLearn: document.getElementById("tab-learn"),
  tabTest: document.getElementById("tab-test"),
  panel: document.getElementById("panel-main"),
  image: document.getElementById("card-image"),
  emoji: document.getElementById("card-emoji"),
  title: document.getElementById("card-title"),
  testPhrase: document.getElementById("test-phrase"),
  revealedArticle: document.getElementById("revealed-article"),
  testNoun: document.getElementById("test-noun"),
  wrongMark: document.getElementById("wrong-mark"),
  testStatus: document.getElementById("test-status"),
  testArea: document.getElementById("test-area"),
  input: document.getElementById("article-input"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  counter: document.getElementById("card-counter"),
};

let screen = "home"; // home | practice
let activeCategory = null;
let mode = "learn";
let currentIndex = 0;
let answeredCorrect = false;

function currentCards() {
  return activeCategory ? activeCategory.cards : [];
}

function currentCard() {
  return currentCards()[currentIndex];
}

function articleClass(article) {
  const key = String(article || "").trim().toLowerCase();
  if (key === "der" || key === "die" || key === "das") {
    return `article article-${key}`;
  }
  return "article";
}

function wordCountLabel(count) {
  return count === 1 ? "1 Wort" : `${count} Wörter`;
}

function buildCategoryList() {
  els.categoryList.replaceChildren();

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-card";
    btn.setAttribute("aria-label", `${category.name}, ${wordCountLabel(category.cards.length)}`);

    const emoji = document.createElement("span");
    emoji.className = "category-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = category.emoji;

    const text = document.createElement("span");
    text.className = "category-text";

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = category.name;

    const count = document.createElement("span");
    count.className = "category-count";
    count.textContent = wordCountLabel(category.cards.length);

    text.append(name, count);
    btn.append(emoji, text);
    btn.addEventListener("click", () => openCategory(category.id));
    els.categoryList.appendChild(btn);
  });
}

function setCardVisual(card) {
  const alt = card.alt || card.noun;

  if (card.image) {
    els.image.hidden = false;
    els.image.src = card.image;
    els.image.alt = alt;
    els.emoji.textContent = "";
    els.emoji.classList.remove("is-visible");
    return;
  }

  els.image.hidden = true;
  els.image.removeAttribute("src");
  els.image.alt = "";
  els.emoji.textContent = card.emoji || "📦";
  els.emoji.classList.add("is-visible");
}

function setLearnTitle(card) {
  const colorClass = articleClass(card.article);
  const article = document.createElement("span");
  article.className = colorClass;
  article.textContent = card.article;
  const noun = document.createElement("span");
  noun.className = `noun ${colorClass}`;
  noun.textContent = card.noun;
  els.title.replaceChildren(article, document.createTextNode(" "), noun);
}

function setTestNoun(card) {
  els.testNoun.textContent = card.noun;
  els.testNoun.className = "noun";
}

function clearWrongState() {
  els.wrongMark.hidden = true;
  els.input.classList.remove("is-wrong");
  els.testStatus.textContent = "";
}

function showCorrect(card) {
  answeredCorrect = true;
  const colorClass = articleClass(card.article);

  els.input.hidden = true;
  els.input.value = "";
  els.input.classList.remove("is-wrong");

  els.revealedArticle.hidden = false;
  els.revealedArticle.className = `revealed-article ${colorClass}`;
  els.revealedArticle.textContent = card.article;

  els.testNoun.className = `noun ${colorClass}`;
  els.wrongMark.hidden = true;
  els.testStatus.textContent = "Richtig";
}

function showWrong() {
  answeredCorrect = false;
  els.wrongMark.hidden = false;
  els.input.classList.add("is-wrong");
  els.testStatus.textContent = "Falsch";
}

function resetTest() {
  answeredCorrect = false;
  els.input.hidden = false;
  els.input.value = "";
  els.input.disabled = false;
  els.revealedArticle.hidden = true;
  els.revealedArticle.textContent = "";
  els.revealedArticle.className = "revealed-article";
  setTestNoun(currentCard());
  clearWrongState();
}

function clearForRewrite() {
  if (screen !== "practice" || mode !== "test" || answeredCorrect) return;
  els.input.value = "";
  clearWrongState();
  els.input.focus();
}

function updateNav() {
  const total = currentCards().length;
  els.prevBtn.disabled = currentIndex <= 0;
  els.nextBtn.disabled = currentIndex >= total - 1;
  els.counter.textContent = `${currentIndex + 1} / ${total}`;
}

function updateModeTabs() {
  const isLearn = mode === "learn";
  els.tabLearn.classList.toggle("is-active", isLearn);
  els.tabTest.classList.toggle("is-active", !isLearn);
  els.tabLearn.setAttribute("aria-selected", String(isLearn));
  els.tabTest.setAttribute("aria-selected", String(!isLearn));
}

function renderCard() {
  if (!activeCategory || !currentCard()) return;

  const card = currentCard();
  setCardVisual(card);

  if (mode === "learn") {
    setLearnTitle(card);
    els.title.hidden = false;
    els.testPhrase.hidden = true;
    els.testArea.hidden = true;
    els.panel.setAttribute("aria-labelledby", "tab-learn");
  } else {
    els.title.hidden = true;
    els.testPhrase.hidden = false;
    els.testArea.hidden = false;
    els.panel.setAttribute("aria-labelledby", "tab-test");
    resetTest();
  }

  updateNav();
}

function showHome() {
  screen = "home";
  activeCategory = null;
  currentIndex = 0;
  answeredCorrect = false;
  mode = "learn";
  updateModeTabs();

  els.home.hidden = false;
  els.practice.hidden = true;
  els.subtitle.textContent = "Thema wählen";
}

function openCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category || category.cards.length === 0) return;

  activeCategory = category;
  currentIndex = 0;
  answeredCorrect = false;
  mode = "learn";
  updateModeTabs();
  screen = "practice";

  els.home.hidden = true;
  els.practice.hidden = false;
  els.subtitle.textContent = category.name;
  renderCard();
}

function goToCard(index) {
  const total = currentCards().length;
  if (index < 0 || index >= total || index === currentIndex) return;
  currentIndex = index;
  renderCard();
  if (mode === "test") {
    els.input.focus();
  }
}

function setMode(next) {
  if (screen !== "practice" || next === mode) return;
  mode = next;
  updateModeTabs();
  renderCard();

  if (mode === "test") {
    els.input.focus();
  }
}

function checkAnswer() {
  if (screen !== "practice" || answeredCorrect || mode !== "test") return;

  const card = currentCard();
  const answer = els.input.value.trim().toLowerCase();

  if (answer.length !== 3) return;

  if (answer === card.article.toLowerCase()) {
    showCorrect(card);
    return;
  }

  showWrong();
}

function onArticleInput() {
  if (screen !== "practice" || answeredCorrect || mode !== "test") return;

  const cleaned = els.input.value.replace(/[^a-zA-ZäöüÄÖÜ]/g, "").slice(0, 3);
  if (cleaned !== els.input.value) {
    els.input.value = cleaned;
  }

  clearWrongState();

  if (els.input.value.trim().length === 3) {
    checkAnswer();
  }
}

els.backBtn.addEventListener("click", showHome);
els.tabLearn.addEventListener("click", () => setMode("learn"));
els.tabTest.addEventListener("click", () => setMode("test"));
els.wrongMark.addEventListener("click", clearForRewrite);
els.prevBtn.addEventListener("click", () => goToCard(currentIndex - 1));
els.nextBtn.addEventListener("click", () => goToCard(currentIndex + 1));
els.input.addEventListener("input", onArticleInput);

buildCategoryList();
showHome();
