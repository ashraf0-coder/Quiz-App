// script.js
const questions = [
    {
      question: "1. What is the second pillar of Islam?",
      options: ["Salah", "Zakat", "Hajj ", "Sawm"],
      answer: "Salah"
    },
    {
      question: "2. Who was the first Islamic prophet?",
      options: ["Essa", "Adam", "Musa", "Ibrahim"],
      answer: "Adam"
    },
    {
      question: "3. What is the first chapter of the Quran?",
      options: ["Fatiha", "Waqi'a", "Naas", "Baqarah"],
      answer: "Fatiha"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const quizContainer = document.getElementById("quiz-container");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
  
    currentQuestion.options.forEach(options => {
      const button = document.createElement("button");
      button.textContent = options;
      button.onclick = () => checkAnswer(options);
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quizContainer.style.display = "block";
    resultElement.style.display = "block";
    scoreElement.textContent = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "block";
    resultElement.style.display = "none";
    loadQuestion();
  }
  

   // add questions

   let question = [];

function addQuestion(question, options, answer) {
  const newQuestion = { question, options, answer };
  questions.push(newQuestion);
  console.log("Question Added: ", newQuestion);
}

// Questions
addQuestion("4. How many prophets are mentioned in the Quran?",
             ["25", "30", "35", "20"],
            "25")
addQuestion("5. Who was the first woman to accept Islam?",
            ["Aisha", "Hafsa", "Khadija", "Fatima"],
              "Khadija")
addQuestion("6. Who is the only woman mentioned in the Quran?",
            ["Maryam", "Aisha", "Khadija", "Fatima"],
              "Maryam")
addQuestion("7. How many surahs are in the Quran?",
            [" 100 Surahs", "130 Surahs", "140 Surahs", "114 Surahs"],
              "114 Surahs")
addQuestion("8. Who built the Ka'aba?",
            ["Isma'il CS", "Ibrahim CS", "Musa CS", "Essa CS"],
              "Ibrahim CS",)
addQuestion("9. How many books are in Islam?",
            ["Five books", "Six books", "Four books", "Three books"],
              "Five books",)
addQuestion("10. Which Prophet (as) had control of the Jinn and was able to talk to animals?",
              ["Sulaiman (as)", "Dawud (as)", "Yunus (as)", "Musa (as)"],
              "Sulaiman (as)"
)
addQuestion("11. What does Zam Zam mean?",
            ["Holy water", "Water well", "Stop", "Drink"],
            "Stop"
)
addQuestion("12. What is Az-Zaqqum?",
            ["Food for the people of hellfire", "Drink for the people of hellfire", "Home for the people of hellfire", "Clothes for the people of hellfire"],
            "Food for the people of hellfire"
)
addQuestion("13. What was the relation between Prophet Musa (as) & Prophet Haroon (as)?",
            ["Cousins", "Brothers", "Father & Son", "Friends"],
            "Brothers"
)
addQuestion("14. Which Angel will blow the horn to signal the Day of Judgement?",
            ["Jibraeel (as)", "Mikaeel (as)", "Malik Ul Moat (as)", "Israfeel (as)"],
            "Israfeel (as)"
)
addQuestion("15. Which Prophet (as) addressed the ruler King Nimrod?",
            ["Prophet Ibrahim (as)", "Prophet Isa (as)", "Prophet Yusuf (as)", "Prophet Lut (as)"],
            "Prophet Ibrahim (as)"
)
addQuestion("16. Which uncle of Prophet Muhammad (PBUH) didn’t accept Islam?",
            ["Abdul Muttalib", "Hamza", "Abu Lahab", "Al-Abbas"],
            "Abu Lahab"
)
addQuestion("17. Which Surah doesn’t begin with the basmallah?",
            ["Surah Rahman", "Surah Yasin", "Surah Fatihah","Surah Tawbah"],
            "Surah Tawbah"
)
addQuestion("18. What is Abu Bakr (r)’s full name?",
            ["Abdur Rahman ibn Uthman", "Uthman ibn Abdullah", "Abdullah ibn Uthman", "Abdullah ibn Abdur Rahman"],
            "Abdullah ibn Uthman"
)
addQuestion("19. How many gates of Jannah are there?",
            ["5", "6", "7", "8"],
            "8"
)
addQuestion("20. Which Prophet (as) is mentioned the most in the Quran by name?",
            ["Prophet Muhammad ﷺ", "Prophet Isa (as)", "Prophet Musa (as)", "Prophet Adam (as)"],
            "Prophet Musa (as)"
)

  // Start the quiz
  loadQuestion();
  