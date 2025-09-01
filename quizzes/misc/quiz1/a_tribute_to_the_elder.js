function displayQuiz() {
            const quizData = [
                        {
                            question: "which one",
                            options: ["1 and 2","3 and 4"],
                            weights: [
                                        {a_tribute_to_the_elder1: +1, a_tribute_to_the_elder2:+1}
                                        {a_tribute_to_the_elder3: +1, a_tribute_to_the_elder4:+1}
                                    ]
                        },
                        {
                            question: "which one",
                            options: ["3 and 2","1 and 4"],
                            weights: [
                                        {a_tribute_to_the_elder3: +1, a_tribute_to_the_elder2:+1}
                                        {a_tribute_to_the_elder1: +1, a_tribute_to_the_elder4:+1}
                                    ]
                        },
                    ]
            if (a_tribute_to_the_elder1 >= a_tribute_to_the_elder2 && a_tribute_to_the_elder1 >= a_tribute_to_the_elder3 && a_tribute_to_the_elder1 >= a_tribute_to_the_elder4) {
                        console.log ("a_tribute_to_the_elder1")
            } else if (a_tribute_to_the_elder2 >= a_tribute_to_the_elder1 && a_tribute_to_the_elder2 >= a_tribute_to_the_elder3 && a_tribute_to_the_elder2 >= a_tribute_to_the_elder4) {
                        console.log ("a_tribute_to_the_elder2")
            } else if (a_tribute_to_the_elder3 >= a_tribute_to_the_elder2 && a_tribute_to_the_elder3 >= a_tribute_to_the_elder1 && a_tribute_to_the_elder3 >= a_tribute_to_the_elder4) {
                        console.log ("a_tribute_to_the_elder3")
            } else if (a_tribute_to_the_elder4 >= a_tribute_to_the_elder2 && a_tribute_to_the_elder4 >= a_tribute_to_the_elder3 && a_tribute_to_the_elder4 >= a_tribute_to_the_elder1) {
                        console.log ("a_tribute_to_the_elder4")
            } else {
                        console.log ("a_tribute_to_the_elder3")
            }

        //Variables for scores 
        let currentQuestionIndex = 0;
        let a_tribute_to_the_elder1 = 0;
        let a_tribute_to_the_elder2 = 0;
        let a_tribute_to_the_elder3 = 0; 
        let a_tribute_to_the_elder4 = 0; 

        let score = 0;
        let timeLeft = 30;
        let timerInterval;
        const timerEl = document.getElementById('time');
        const questionEl = document.querySelector('.question');
        const optionsEl = document.querySelector('.options');
        const resultEl = document.querySelector('.result');
        const scoreEl = document.getElementById('score');
        const restartBtn = document.querySelector('.restart-btn');

        // Function to load the question
        function loadQuestion() {
            if (currentQuestion >= quizData.length) {
                endQuiz();
                return;
            }
            clearInterval(timerInterval);
            timeLeft = 30;
            timerEl.textContent = timeLeft;
            startTimer();
            const currentQuiz = quizData[currentQuestion];
            questionEl.textContent = currentQuiz.question;
            optionsEl.innerHTML = ''; // Clear previous options
            currentQuiz.options.forEach(option => {
                const button = document.createElement('button');
                button.classList.add('option');
                button.textContent = option;
                button.onclick = () => checkAnswer(option);
                optionsEl.appendChild(button);
            });
        }

        // Check the answer
        function checkAnswer(selectedOption) {
            if (selectedOption === quizData[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            loadQuestion();
        }

        // Start the timer
        function startTimer() {
            timerInterval = setInterval(() => {
                timeLeft--;
                timerEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    endQuiz();
                }
            }, 1000);
        }

        // End the quiz and show the results
        function endQuiz() {
            clearInterval(timerInterval);
            questionEl.style.display = 'none';
            optionsEl.style.display = 'none';
            resultEl.style.display = 'block';
            scoreEl.textContent = score;
            restartBtn.style.display = 'block';
        }

        // Restart the quiz
        restartBtn.addEventListener('click', () => {
            // Reset variables
            currentQuestion = 0;
            score = 0;
            timeLeft = 30;
            timerEl.textContent = timeLeft;

            // Reset the display
            questionEl.style.display = 'block';
            optionsEl.style.display = 'flex'; // Ensure options are displayed correctly
            resultEl.style.display = 'none';
            restartBtn.style.display = 'none';

            // Load the first question
            loadQuestion();
        });

        // Initialize the quiz with the first question
loadQuestion();
