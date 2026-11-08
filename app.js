/**
 * Vocabulary cards.
 * Required: article, noun, title
 * Visual: emoji and/or image (image preferred when both are set)
 * Optional: id, alt, plural (plural noun form; nominative article is die)
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
    plural: extra.plural || "",
  };
}

const categories = [
  {
    id: "familie",
    name: "Familie",
    emoji: "👨‍👩‍👧‍👦",
    cards: [
      makeCard("die", "Familie", "👨‍👩‍👧‍👦", { plural: "Familien" }),
      makeCard("der", "Mann", "👨", { plural: "Männer" }),
      makeCard("die", "Frau", "👩", { plural: "Frauen" }),
      makeCard("der", "Vater", "👨", { plural: "Väter" }),
      makeCard("die", "Mutter", "👩", { plural: "Mütter" }),
      makeCard("der", "Papa", "👨", { plural: "Papas" }),
      makeCard("der", "Bruder", "👦", { plural: "Brüder" }),
      makeCard("die", "Schwester", "👧", { plural: "Schwestern" }),
      makeCard("der", "Sohn", "👦", { plural: "Söhne" }),
      makeCard("die", "Tochter", "👧", { plural: "Töchter" }),
      makeCard("das", "Kind", "🧒", { plural: "Kinder" }),
      makeCard("das", "Baby", "👶", { plural: "Babys" }),
      makeCard("die", "Enkelin", "👧", { plural: "Enkelinnen" }),
      makeCard("die", "Oma", "👵", { plural: "Omas" }),
      makeCard("der", "Opa", "👴", { plural: "Opas" }),
      makeCard("der", "Partner", "🧍", { plural: "Partner" }),
      makeCard("die", "Partnerin", "🧍‍♀️", { plural: "Partnerinnen" }),
    ],
  },
  {
    id: "essen",
    name: "Essen und Trinken",
    emoji: "🍽️",
    cards: [
      makeCard("der", "Apfel", "🍎", { image: "images/apple.svg", id: "apfel", plural: "Äpfel" }),
      makeCard("die", "Banane", "🍌", { plural: "Bananen" }),
      makeCard("die", "Birne", "🍐", { plural: "Birnen" }),
      makeCard("die", "Orange", "🍊", { plural: "Orangen" }),
      makeCard("die", "Kiwi", "🥝", { plural: "Kiwis" }),
      makeCard("die", "Tomate", "🍅", { plural: "Tomaten" }),
      makeCard("die", "Kartoffel", "🥔", { plural: "Kartoffeln" }),
      makeCard("die", "Zwiebel", "🧅", { plural: "Zwiebeln" }),
      makeCard("das", "Obst", "🍇"),
      makeCard("das", "Gemüse", "🥬"),
      makeCard("das", "Brot", "🍞", { plural: "Brote" }),
      makeCard("das", "Brötchen", "🥖", { plural: "Brötchen" }),
      makeCard("das", "Ei", "🥚", { plural: "Eier" }),
      makeCard("der", "Fisch", "🐟", { plural: "Fische" }),
      makeCard("das", "Fleisch", "🥩"),
      makeCard("das", "Würstchen", "🌭", { plural: "Würstchen" }),
      makeCard("der", "Käse", "🧀", { plural: "Käse" }),
      makeCard("der", "Joghurt", "🥛", { plural: "Joghurts" }),
      makeCard("die", "Milch", "🥛"),
      makeCard("der", "Tee", "🍵", { plural: "Tees" }),
      makeCard("der", "Wein", "🍷", { plural: "Weine" }),
      makeCard("die", "Flasche", "🍾", { plural: "Flaschen" }),
      makeCard("das", "Salz", "🧂"),
      makeCard("der", "Kuchen", "🍰", { plural: "Kuchen" }),
      makeCard("der", "Pfannkuchen", "🥞", { plural: "Pfannkuchen" }),
    ],
  },
  {
    id: "sprachkurs",
    name: "Im Sprachkurs",
    emoji: "📘",
    cards: [
      makeCard("der", "Kurs", "📘", { plural: "Kurse" }),
      makeCard("die", "Sprache", "🗣️", { plural: "Sprachen" }),
      makeCard("der", "Buchstabe", "🔤", { plural: "Buchstaben" }),
      makeCard("die", "Zahl", "🔢", { plural: "Zahlen" }),
      makeCard("das", "Jahr", "📅", { plural: "Jahre" }),
      makeCard("das", "Land", "🗺️", { plural: "Länder" }),
      makeCard("das", "Formular", "📝", { plural: "Formulare" }),
    ],
  },
  {
    id: "adresse",
    name: "Name und Adresse",
    emoji: "📫",
    cards: [
      makeCard("der", "Name", "🪪", { plural: "Namen" }),
      makeCard("der", "Vorname", "✍️", { plural: "Vornamen" }),
      makeCard("die", "Adresse", "📫", { plural: "Adressen" }),
      makeCard("die", "Straße", "🛣️", { plural: "Straßen" }),
      makeCard("die", "Hausnummer", "🏠", { plural: "Hausnummern" }),
      makeCard("die", "Postleitzahl", "📮", { plural: "Postleitzahlen" }),
      makeCard("die", "Stadt", "🏙️", { plural: "Städte" }),
      makeCard("die", "Nummer", "🔢", { plural: "Nummern" }),
      makeCard("die", "Telefonnummer", "📱", { plural: "Telefonnummern" }),
      makeCard("die", "E-Mail", "📧", { id: "e-mail", plural: "E-Mails" }),
    ],
  },
];

/** Classic German Buchstabiertafel (Telefonalphabet), widely used for spelling names. */
const spellingAlphabet = [
  { letter: "A", word: "Anton" },
  { letter: "B", word: "Berta" },
  { letter: "C", word: "Cäsar" },
  { letter: "D", word: "Dora" },
  { letter: "E", word: "Emil" },
  { letter: "F", word: "Friedrich" },
  { letter: "G", word: "Gustav" },
  { letter: "H", word: "Heinrich" },
  { letter: "I", word: "Ida" },
  { letter: "J", word: "Julius" },
  { letter: "K", word: "Kaufmann" },
  { letter: "L", word: "Ludwig" },
  { letter: "M", word: "Martha" },
  { letter: "N", word: "Nordpol" },
  { letter: "O", word: "Otto" },
  { letter: "P", word: "Paula" },
  { letter: "Q", word: "Quelle" },
  { letter: "R", word: "Richard" },
  { letter: "S", word: "Samuel" },
  { letter: "T", word: "Theodor" },
  { letter: "U", word: "Ulrich" },
  { letter: "V", word: "Viktor" },
  { letter: "W", word: "Wilhelm" },
  { letter: "X", word: "Xanthippe" },
  { letter: "Y", word: "Ypsilon" },
  { letter: "Z", word: "Zacharias" },
  { letter: "Ä", word: "Ärger" },
  { letter: "Ö", word: "Ökonom" },
  { letter: "Ü", word: "Übermut" },
  { letter: "ß", word: "Eszett" },
];

const PLURAL_ARTICLE = "die";

const els = {
  subtitle: document.getElementById("app-subtitle"),
  home: document.getElementById("home"),
  categoryList: document.getElementById("category-list"),
  practice: document.getElementById("practice"),
  backBtn: document.getElementById("back-btn"),
  skillToggle: document.getElementById("skill-toggle"),
  tabArticle: document.getElementById("tab-article"),
  tabPlural: document.getElementById("tab-plural"),
  tabLearn: document.getElementById("tab-learn"),
  tabTest: document.getElementById("tab-test"),
  panel: document.getElementById("panel-main"),
  image: document.getElementById("card-image"),
  emoji: document.getElementById("card-emoji"),
  title: document.getElementById("card-title"),
  testPhrase: document.getElementById("test-phrase"),
  testPromptRow: document.getElementById("test-prompt-row"),
  testSingular: document.getElementById("test-singular"),
  pluralArrow: document.getElementById("plural-arrow"),
  pluralArticle: document.getElementById("plural-article"),
  answerLabel: document.getElementById("answer-label"),
  revealedAnswer: document.getElementById("revealed-answer"),
  testNoun: document.getElementById("test-noun"),
  wrongMark: document.getElementById("wrong-mark"),
  testStatus: document.getElementById("test-status"),
  testArea: document.getElementById("test-area"),
  answerHint: document.getElementById("answer-hint"),
  input: document.getElementById("answer-input"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  counter: document.getElementById("card-counter"),
};

let screen = "home"; // home | practice
let practiceType = "topic"; // topic | spelling
let activeCategory = null;
let skill = "article"; // article | plural
let mode = "learn"; // learn | test
let currentIndex = 0;
let answeredCorrect = false;

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\u00df/g, "ss");
}

function currentCards() {
  if (practiceType === "spelling") return spellingAlphabet;
  if (!activeCategory) return [];
  if (skill === "plural") {
    return activeCategory.cards.filter((card) => Boolean(card.plural));
  }
  return activeCategory.cards;
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

function letterCountLabel(count) {
  return count === 1 ? "1 Buchstabe" : `${count} Buchstaben`;
}

function createHomeTile({ emoji, name, countLabel, ariaLabel, onClick }) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "category-card";
  btn.setAttribute("aria-label", ariaLabel);

  const emojiEl = document.createElement("span");
  emojiEl.className = "category-emoji";
  emojiEl.setAttribute("aria-hidden", "true");
  emojiEl.textContent = emoji;

  const text = document.createElement("span");
  text.className = "category-text";

  const nameEl = document.createElement("span");
  nameEl.className = "category-name";
  nameEl.textContent = name;

  const count = document.createElement("span");
  count.className = "category-count";
  count.textContent = countLabel;

  text.append(nameEl, count);
  btn.append(emojiEl, text);
  btn.addEventListener("click", onClick);
  return btn;
}

function buildCategoryList() {
  els.categoryList.replaceChildren();

  categories.forEach((category) => {
    els.categoryList.appendChild(
      createHomeTile({
        emoji: category.emoji,
        name: category.name,
        countLabel: wordCountLabel(category.cards.length),
        ariaLabel: `${category.name}, ${wordCountLabel(category.cards.length)}`,
        onClick: () => openCategory(category.id),
      })
    );
  });

  els.categoryList.appendChild(
    createHomeTile({
      emoji: "🔤",
      name: "Buchstabiertafel",
      countLabel: letterCountLabel(spellingAlphabet.length),
      ariaLabel: `Buchstabiertafel, ${letterCountLabel(spellingAlphabet.length)}`,
      onClick: () => openSpelling(),
    })
  );
}

function setCardVisual(card) {
  els.emoji.classList.remove("is-letter");

  if (practiceType === "spelling") {
    els.image.hidden = true;
    els.image.removeAttribute("src");
    els.image.alt = "";
    els.emoji.textContent = card.letter;
    els.emoji.classList.add("is-visible", "is-letter");
    return;
  }

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

function appendArticleNoun(container, article, noun) {
  const colorClass = articleClass(article);
  const articleEl = document.createElement("span");
  articleEl.className = colorClass;
  articleEl.textContent = article;
  const nounEl = document.createElement("span");
  nounEl.className = `noun ${colorClass}`;
  nounEl.textContent = noun;
  container.replaceChildren(articleEl, document.createTextNode(" "), nounEl);
}

function appendPluralNoun(container, noun) {
  const articleEl = document.createElement("span");
  articleEl.className = "article plural";
  articleEl.textContent = PLURAL_ARTICLE;
  const nounEl = document.createElement("span");
  nounEl.className = "noun plural";
  nounEl.textContent = noun;
  container.replaceChildren(articleEl, document.createTextNode(" "), nounEl);
}

function setLearnTitle(card) {
  if (practiceType === "spelling") {
    const word = document.createElement("span");
    word.className = "spelling-word";
    word.textContent = card.word;
    els.title.replaceChildren(word);
    return;
  }

  if (skill === "plural") {
    appendPluralNoun(els.title, card.plural);
    return;
  }
  appendArticleNoun(els.title, card.article, card.noun);
}

function setArticleHint() {
  els.answerHint.replaceChildren();
  const parts = [
    ["der", "article-der"],
    ["die", "article-die"],
    ["das", "article-das"],
  ];
  parts.forEach(([word, cls], index) => {
    if (index > 0) {
      const sep = document.createElement("span");
      sep.className = "sep";
      sep.textContent = " / ";
      els.answerHint.appendChild(sep);
    }
    const span = document.createElement("span");
    span.className = `article ${cls}`;
    span.textContent = word;
    els.answerHint.appendChild(span);
  });
}

function clearWrongState({ keepMark = false } = {}) {
  if (!keepMark) {
    els.wrongMark.hidden = true;
    els.testStatus.textContent = "";
  }
  els.input.classList.remove("is-wrong");
}

function keepsWrongMark() {
  return practiceType === "spelling" || skill === "plural";
}

function showCorrect(card) {
  answeredCorrect = true;
  els.input.hidden = true;
  els.input.value = "";
  els.input.classList.remove("is-wrong");
  els.wrongMark.hidden = true;
  els.testStatus.textContent = "Richtig";

  if (practiceType === "spelling") {
    els.testPromptRow.hidden = true;
    els.pluralArticle.hidden = true;
    els.testNoun.hidden = true;
    els.revealedAnswer.hidden = false;
    els.revealedAnswer.className = "revealed-answer spelling-word";
    els.revealedAnswer.textContent = card.word;
    return;
  }

  if (skill === "plural") {
    appendArticleNoun(els.testSingular, card.article, card.noun);
    els.testPromptRow.hidden = false;
    els.pluralArticle.hidden = false;
    els.pluralArticle.classList.add("plural");
    els.testNoun.hidden = true;
    els.revealedAnswer.hidden = false;
    els.revealedAnswer.className = "revealed-answer noun plural";
    els.revealedAnswer.textContent = card.plural;
    return;
  }

  const colorClass = articleClass(card.article);
  els.revealedAnswer.hidden = false;
  els.revealedAnswer.className = `revealed-answer ${colorClass}`;
  els.revealedAnswer.textContent = card.article;
  els.testNoun.className = `noun ${colorClass}`;
}

function showWrong() {
  answeredCorrect = false;
  els.wrongMark.hidden = false;
  els.input.classList.add("is-wrong");
  els.testStatus.textContent = "Falsch";
}

function configureTestLayout(card) {
  if (practiceType === "spelling") {
    els.answerLabel.textContent = "Codewort";
    els.input.classList.add("is-plural");
    els.input.maxLength = 24;
    els.input.placeholder = "…";
    els.testPromptRow.hidden = true;
    els.testSingular.replaceChildren();
    els.pluralArticle.hidden = true;
    els.pluralArticle.classList.remove("plural");
    els.testNoun.hidden = true;
    els.testNoun.textContent = "";
    els.wrongMark.hidden = false;
    els.answerHint.replaceChildren();
    return;
  }

  if (skill === "plural") {
    els.answerLabel.textContent = "Plural";
    els.input.classList.add("is-plural");
    els.input.maxLength = 24;
    els.input.placeholder = "…";
    appendArticleNoun(els.testSingular, card.article, card.noun);
    els.testPromptRow.hidden = false;
    els.pluralArticle.hidden = false;
    els.pluralArticle.classList.remove("plural");
    els.testNoun.hidden = true;
    els.testNoun.textContent = "";
    els.wrongMark.hidden = false;
    els.answerHint.replaceChildren();
    return;
  }

  els.answerLabel.textContent = "Artikel";
  els.input.classList.remove("is-plural");
  els.input.maxLength = 3;
  els.input.placeholder = "…";
  els.testPromptRow.hidden = true;
  els.testSingular.replaceChildren();
  els.pluralArticle.hidden = true;
  els.pluralArticle.classList.remove("plural");
  els.testNoun.hidden = false;
  els.testNoun.textContent = card.noun;
  els.testNoun.className = "noun";
  els.wrongMark.hidden = true;
  setArticleHint();
}

function resetTest() {
  answeredCorrect = false;
  const card = currentCard();
  els.input.hidden = false;
  els.input.value = "";
  els.input.disabled = false;
  els.revealedAnswer.hidden = true;
  els.revealedAnswer.textContent = "";
  els.revealedAnswer.className = "revealed-answer";
  els.revealedAnswer.replaceChildren();
  configureTestLayout(card);
  clearWrongState({ keepMark: keepsWrongMark() });
  if (keepsWrongMark()) {
    els.wrongMark.hidden = false;
  }
}

function clearForRewrite() {
  if (screen !== "practice" || mode !== "test" || answeredCorrect) return;
  els.input.value = "";
  clearWrongState({ keepMark: keepsWrongMark() });
  if (keepsWrongMark()) {
    els.wrongMark.hidden = false;
  }
  els.input.focus();
}

function updateNav() {
  const total = currentCards().length;
  els.prevBtn.disabled = currentIndex <= 0;
  els.nextBtn.disabled = currentIndex >= total - 1;
  els.counter.textContent = total ? `${currentIndex + 1} / ${total}` : "0 / 0";
}

function updateSkillTabs() {
  const isArticle = skill === "article";
  els.tabArticle.classList.toggle("is-active", isArticle);
  els.tabPlural.classList.toggle("is-active", !isArticle);
  els.tabArticle.setAttribute("aria-selected", String(isArticle));
  els.tabPlural.setAttribute("aria-selected", String(!isArticle));
}

function updateModeTabs() {
  const isLearn = mode === "learn";
  els.tabLearn.classList.toggle("is-active", isLearn);
  els.tabTest.classList.toggle("is-active", !isLearn);
  els.tabLearn.setAttribute("aria-selected", String(isLearn));
  els.tabTest.setAttribute("aria-selected", String(!isLearn));
}

function renderCard() {
  if (!currentCard()) return;
  if (practiceType === "topic" && !activeCategory) return;

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
    els.testArea.hidden = practiceType === "spelling" || skill === "plural";
    els.panel.setAttribute("aria-labelledby", "tab-test");
    resetTest();
  }

  updateNav();
}

function showHome() {
  screen = "home";
  practiceType = "topic";
  activeCategory = null;
  currentIndex = 0;
  answeredCorrect = false;
  skill = "article";
  mode = "learn";
  updateSkillTabs();
  updateModeTabs();

  els.skillToggle.hidden = false;
  els.home.hidden = false;
  els.practice.hidden = true;
  els.subtitle.textContent = "Thema wählen";
}

function openCategory(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  if (!category || category.cards.length === 0) return;

  practiceType = "topic";
  activeCategory = category;
  currentIndex = 0;
  answeredCorrect = false;
  skill = "article";
  mode = "learn";
  updateSkillTabs();
  updateModeTabs();
  screen = "practice";

  els.skillToggle.hidden = false;
  els.home.hidden = true;
  els.practice.hidden = false;
  els.subtitle.textContent = category.name;
  renderCard();
}

function openSpelling() {
  practiceType = "spelling";
  activeCategory = null;
  currentIndex = 0;
  answeredCorrect = false;
  skill = "article";
  mode = "learn";
  updateSkillTabs();
  updateModeTabs();
  screen = "practice";

  els.skillToggle.hidden = true;
  els.home.hidden = true;
  els.practice.hidden = false;
  els.subtitle.textContent = "Buchstabiertafel";
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

function setSkill(next) {
  if (screen !== "practice" || practiceType !== "topic" || next === skill) return;

  const cards = next === "plural"
    ? activeCategory.cards.filter((card) => Boolean(card.plural))
    : activeCategory.cards;

  if (cards.length === 0) return;

  skill = next;
  currentIndex = 0;
  answeredCorrect = false;
  updateSkillTabs();
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

function expectedWord(card) {
  if (practiceType === "spelling") return card.word;
  if (skill === "plural") return card.plural;
  return card.article;
}

function checkAnswer() {
  if (screen !== "practice" || answeredCorrect || mode !== "test") return;

  const card = currentCard();
  const answer = normalizeAnswer(els.input.value);

  if (practiceType === "spelling" || skill === "plural") {
    if (!answer) return;
    if (answer === normalizeAnswer(expectedWord(card))) {
      showCorrect(card);
      return;
    }
    showWrong();
    return;
  }

  if (answer.length !== 3) return;

  if (answer === normalizeAnswer(card.article)) {
    showCorrect(card);
    return;
  }

  showWrong();
}

function onAnswerInput() {
  if (screen !== "practice" || answeredCorrect || mode !== "test") return;

  if (practiceType === "spelling" || skill === "plural") {
    const card = currentCard();
    const expected = expectedWord(card);
    const cleaned = els.input.value.replace(/[^a-zA-ZäöüÄÖÜß\-]/g, "").slice(0, 24);
    if (cleaned !== els.input.value) {
      els.input.value = cleaned;
    }
    clearWrongState({ keepMark: true });
    els.wrongMark.hidden = false;

    const answer = normalizeAnswer(els.input.value);
    if (answer === normalizeAnswer(expected) || els.input.value.length === expected.length) {
      checkAnswer();
    }
    return;
  }

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
els.tabArticle.addEventListener("click", () => setSkill("article"));
els.tabPlural.addEventListener("click", () => setSkill("plural"));
els.tabLearn.addEventListener("click", () => setMode("learn"));
els.tabTest.addEventListener("click", () => setMode("test"));
els.wrongMark.addEventListener("click", clearForRewrite);
els.prevBtn.addEventListener("click", () => goToCard(currentIndex - 1));
els.nextBtn.addEventListener("click", () => goToCard(currentIndex + 1));
els.input.addEventListener("input", onAnswerInput);

buildCategoryList();
showHome();
