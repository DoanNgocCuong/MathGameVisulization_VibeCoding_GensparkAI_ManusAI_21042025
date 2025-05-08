// Core Game Mechanics for "Đầu Bếp Phân Số" (Fraction Chef) Game

// Game state management
const gameState = {
    currentChallenge: 0,
    challenges: [
        {
            instruction: "Divide 1 cup of flour by 2",
            dividend: { numerator: 1, denominator: 1 },
            divisor: { numerator: 2, denominator: 1 },
            answer: { numerator: 1, denominator: 2 },
            ingredient: "flour",
            tool: "measuring-cup",
            explanation: "When you divide 1 by 2, you get 1/2. This is because dividing by 2 means splitting into 2 equal parts."
        },
        {
            instruction: "Divide 3/4 cup of milk by 1/2",
            dividend: { numerator: 3, denominator: 4 },
            divisor: { numerator: 1, denominator: 2 },
            answer: { numerator: 3, denominator: 2 },
            ingredient: "milk",
            tool: "pouring-jug",
            explanation: "To divide by a fraction, multiply by its reciprocal. 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2."
        },
        {
            instruction: "Divide 2 eggs by 4",
            dividend: { numerator: 2, denominator: 1 },
            divisor: { numerator: 4, denominator: 1 },
            answer: { numerator: 1, denominator: 2 },
            ingredient: "eggs",
            tool: "knife",
            explanation: "When you divide 2 by 4, you get 2/4 which simplifies to 1/2."
        },
        {
            instruction: "Divide 1/2 cup of sugar by 1/4",
            dividend: { numerator: 1, denominator: 2 },
            divisor: { numerator: 1, denominator: 4 },
            answer: { numerator: 2, denominator: 1 },
            ingredient: "sugar",
            tool: "scale",
            explanation: "To divide by a fraction, multiply by its reciprocal. 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2."
        },
        {
            instruction: "Divide 3/4 cup of flour by 3",
            dividend: { numerator: 3, denominator: 4 },
            divisor: { numerator: 3, denominator: 1 },
            answer: { numerator: 1, denominator: 4 },
            ingredient: "flour",
            tool: "measuring-cup",
            explanation: "When you divide 3/4 by 3, you get 3/4 ÷ 3 = 3/4 ÷ 3/1 = 3/4 × 1/3 = 3/12 = 1/4."
        }
    ],
    userAnswer: { numerator: 0, denominator: 1 },
    selectedTool: null,
    selectedIngredient: null,
    interactionMode: null, // 'pour', 'slice', 'measure', 'drag'
    completedChallenges: [],
    score: 0,
    attempts: 0,
    showingExplanation: false,
    gameStarted: false,
    gameCompleted: false,
    timerActive: false,
    timeRemaining: 180, // 3 minutes in seconds
    difficultyLevel: 1
};

// Initialize the game
function initGame() {
    // Show welcome modal
    showModal(
        "Welcome to Đầu Bếp Phân Số!",
        `<p>Learn about dividing fractions by helping in the kitchen!</p>
        <p>In this game, you'll practice dividing fractions by:</p>
        <ul>
            <li>Using different kitchen tools</li>
            <li>Working with various ingredients</li>
            <li>Following recipe instructions</li>
        </ul>
        <p>First, select a tool, then an ingredient, and complete the challenge!</p>`,
        "Start Cooking!"
    );
    
    // Create tools and ingredients
    createDetailedTools();
    createDetailedIngredients();
    
    // Set up first challenge
    setupChallenge(0);
    
    // Add event listeners
    addEnhancedEventListeners();
    
    // Add button event listeners
    setupButtonListeners();
    
    // Initialize timer display
    updateTimerDisplay();
}

// Set up a specific challenge
function setupChallenge(challengeIndex) {
    if (challengeIndex >= gameState.challenges.length) {
        // Game completed
        completeGame();
        return;
    }
    
    gameState.currentChallenge = challengeIndex;
    const challenge = gameState.challenges[challengeIndex];
    
    // Update recipe display
    updateRecipeDisplay();
    
    // Update fraction display
    updateFractionDisplay();
    
    // Clear workspace
    workspaceSvg.innerHTML = '';
    
    // Reset state
    gameState.selectedTool = null;
    gameState.selectedIngredient = null;
    gameState.interactionMode = null;
    gameState.userAnswer = { numerator: 0, denominator: 1 };
    gameState.showingExplanation = false;
    
    // Reset tool and ingredient selection
    const tools = document.querySelectorAll('.tool');
    tools.forEach(tool => tool.style.border = 'none');
    
    const ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach(ingredient => ingredient.style.border = 'none');
    
    // Highlight current challenge in recipe list
    const listItems = recipeList.querySelectorAll('li');
    listItems.forEach((item, index) => {
        if (index === challengeIndex) {
            item.style.fontWeight = 'bold';
            item.style.color = '#4caf50';
        } else {
            item.style.fontWeight = 'normal';
            item.style.color = gameState.completedChallenges.includes(index) ? '#9e9e9e' : '#000';
        }
    });
    
    // Update challenge counter
    currentChallengeDisplay.textContent = challengeIndex + 1;
    
    // Show challenge instruction
    showFeedback(challenge.instruction, "hint");
    
    // Suggest the correct tool with a hint
    setTimeout(() => {
        showFeedback(`Hint: Try using the ${challenge.tool.replace('-', ' ')} for this challenge!`, "hint");
    }, 3000);
}

// Update the recipe display
function updateRecipeDisplay() {
    recipeList.innerHTML = '';
    gameState.challenges.forEach((challenge, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = challenge.instruction;
        
        if (gameState.completedChallenges.includes(index)) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = '#9e9e9e';
        }
        
        recipeList.appendChild(listItem);
    });
}

// Update the fraction display
function updateFractionDisplay() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    const dividend = formatFraction(challenge.dividend);
    const divisor = formatFraction(challenge.divisor);
    const answer = gameState.userAnswer.numerator === 0 ? 
        "?" : formatFraction(gameState.userAnswer);
    
    fractionDisplay.innerHTML = `
        <div class="fraction-problem">
            <span class="dividend">${dividend}</span>
            <span class="division-symbol">÷</span>
            <span class="divisor">${divisor}</span>
            <span class="equals">=</span>
            <span class="answer">${answer}</span>
        </div>
    `;
}

// Format a fraction object for display
function formatFraction(fraction) {
    if (fraction.denominator === 1) {
        return fraction.numerator.toString();
    } else {
        return `<div class="fraction-display">
                    <span class="numerator">${fraction.numerator}</span>
                    <span class="fraction-line"></span>
                    <span class="denominator">${fraction.denominator}</span>
                </div>`;
    }
}

// Show feedback message
function showFeedback(message, type) {
    feedbackMessage.innerHTML = message;
    feedbackMessage.className = type;
    feedbackMessage.style.opacity = 1;
    
    // Add animation
    feedbackMessage.animate([
        { transform: 'translateY(-20px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
    ], {
        duration: 300,
        easing: 'ease-out'
    });
    
    // Auto-hide after delay unless it's an explanation
    if (!gameState.showingExplanation) {
        setTimeout(() => {
            feedbackMessage.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: 500,
                easing: 'ease-in'
            }).onfinish = () => {
                feedbackMessage.style.opacity = 0;
            };
        }, 4000);
    }
}

// Check the user's answer
function checkAnswer() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    const userAnswer = gameState.userAnswer;
    
    // Increment attempts
    gameState.attempts++;
    
    // Simplify fractions for comparison
    const simplifiedUserAnswer = simplifyFraction(userAnswer);
    const simplifiedCorrectAnswer = simplifyFraction(challenge.answer);
    
    if (simplifiedUserAnswer.numerator === simplifiedCorrectAnswer.numerator && 
        simplifiedUserAnswer.denominator === simplifiedCorrectAnswer.denominator) {
        
        // Calculate score based on attempts
        const pointsEarned = Math.max(10 - (gameState.attempts - 1) * 2, 1);
        gameState.score += pointsEarned;
        
        // Update score display
        updateScoreDisplay();
        
        // Show success animation
        showSuccessAnimation();
        
        // Show success message
        showFeedback(`Correct! Great job! You earned ${pointsEarned} points.`, "success");
        
        // Mark challenge as completed
        gameState.completedChallenges.push(gameState.currentChallenge);
        updateRecipeDisplay();
        
        // Enable next button
        nextButton.disabled = false;
        nextButton.classList.add('btn-pulse');
        
        // Reset attempts for next challenge
        gameState.attempts = 0;
        
    } else {
        // Show error animation
        showErrorAnimation();
        
        // Show error message with hint
        if (gameState.attempts >= 2) {
            // After 2 attempts, give more specific hint
            showFeedback("Not quite right. Remember: To divide by a fraction, multiply by its reciprocal!", "error");
        } else {
            showFeedback("Not quite right. Try again!", "error");
        }
    }
}

// Show success animation
function showSuccessAnimation() {
    // Create confetti effect
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.getElementById('game-container').appendChild(confettiContainer);
    
    // Create confetti pieces
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
    
    // Highlight correct answer
    const answerSpan = fractionDisplay.querySelector('.answer');
    answerSpan.classList.add('correct-answer');
    setTimeout(() => {
        answerSpan.classList.remove('correct-answer');
    }, 2000);
}

// Show error animation
function showErrorAnimation() {
    // Shake the fraction display
    fractionDisplay.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(-10px)' },
        { transform: 'translateX(10px)' },
        { transform: 'translateX(0)' }
    ], {
        duration: 500,
        easing: 'ease-in-out'
    });
    
    // Highlight incorrect answer
    const answerSpan = fractionDisplay.querySelector('.answer');
    answerSpan.classList.add('incorrect-answer');
    setTimeout(() => {
        answerSpan.classList.remove('incorrect-answer');
    }, 2000);
}

// Simplify a fraction
function simplifyFraction(fraction) {
    const gcd = findGCD(fraction.numerator, fraction.denominator);
    return {
        numerator: fraction.numerator / gcd,
        denominator: fraction.denominator / gcd
    };
}

// Find the greatest common divisor (GCD)
function findGCD(a, b) {
    return b === 0 ? a : findGCD(b, a % b);
}

// Move to the next challenge
function nextChallenge() {
    // Disable next button until next challenge is completed
    nextButton.disabled = true;
    nextButton.classList.remove('btn-pulse');
    
    // Proceed to next challenge
    setupChallenge(gameState.currentChallenge + 1);
}

// Show a hint
function showHint() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // If already showing explanation, hide it
    if (gameState.showingExplanation) {
        gameState.showingExplanation = false;
        showFeedback(challenge.instruction, "hint");
        helpButton.textContent = "Hint";
        return;
    }
    
    // Otherwise show explanation
    gameState.showingExplanation = true;
    
    const dividend = formatFractionText(challenge.dividend);
    const divisor = formatFractionText(challenge.divisor);
    
    let hintMessage = `<h3>How to Divide Fractions</h3>`;
    hintMessage += `<p>${challenge.explanation}</p>`;
    hintMessage += `<p>Remember: To divide by a fraction, multiply by its reciprocal!</p>`;
    
    showFeedback(hintMessage, "hint");
    helpButton.textContent = "Hide Hint";
}

// Format fraction as text (not HTML)
function formatFractionText(fraction) {
    if (fraction.denominator === 1) {
        return fraction.numerator.toString();
    } else {
        return `${fraction.numerator}/${fraction.denominator}`;
    }
}

// Show modal dialog
function showModal(title, content, buttonText) {
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalButton = document.getElementById('modal-button');
    const modalOverlay = document.getElementById('modal-overlay');
    
    modalTitle.textContent = title;
    modalText.innerHTML = content;
    modalButton.textContent = buttonText;
    
    modalOverlay.style.display = 'flex';
    
    // Add animation
    const modalContent = document.getElementById('modal-content');
    modalContent.animate([
        { transform: 'scale(0.8)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 }
    ], {
        duration: 300,
        easing: 'ease-out'
    });
}

// Complete the game
function completeGame() {
    gameState.gameCompleted = true;
    gameState.timerActive = false;
    
    // Calculate final score with time bonus
    const timeBonus = Math.floor(gameState.timeRemaining / 10);
    const finalScore = gameState.score + timeBonus;
    
    // Show completion modal
    showModal(
        "Congratulations!",
        `<p>You've completed all the fraction division challenges!</p>
        <p>Your score: ${gameState.score}</p>
        <p>Time bonus: ${timeBonus}</p>
        <p>Final score: ${finalScore}</p>
        <p>You're now a Fraction Chef Master!</p>`,
        "Play Again"
    );
    
    // Change modal button action to restart game
    const modalButton = document.getElementById('modal-button');
    modalButton.addEventListener('click', restartGame, { once: true });
}

// Restart the game
function restartGame() {
    // Reset game state
    gameState.currentChallenge = 0;
    gameState.completedChallenges = [];
    gameState.score = 0;
    gameState.attempts = 0;
    gameState.showingExplanation = false;
    gameState.gameCompleted = false;
    gameState.timeRemaining = 180;
    
    // Hide modal
    document.getElementById('modal-overlay').style.display = 'none';
    
    // Setup first challenge
    setupChallenge(0);
    
    // Reset and start timer
    updateTimerDisplay();
    startTimer();
    
    // Update score display
    updateScoreDisplay();
}

// Start the game timer
function startTimer() {
    if (!gameState.timerActive) {
        gameState.timerActive = true;
        
        const timerInterval = setInterval(() => {
            if (!gameState.timerActive) {
                clearInterval(timerInterval);
                return;
            }
            
            gameState.timeRemaining--;
            updateTimerDisplay();
            
            if (gameState.timeRemaining <= 0) {
                clearInterval(timerInterval);
                gameState.timerActive = false;
                
                // Time's up
                if (!gameState.gameCompleted) {
                    showModal(
                        "Time's Up!",
                        `<p>You've run out of time!</p>
                        <p>Your score: ${gameState.score}</p>
                        <p>Challenges completed: ${gameState.completedChallenges.length}/${gameState.challenges.length}</p>`,
                        "Try Again"
                    );
                    
                    // Change modal button action to restart game
                    const modalButton = document.getElementById('modal-button');
                    modalButton.addEventListener('click', restartGame, { once: true });
                }
            }
        }, 1000);
    }
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    
    const timerDisplay = document.getElementById('timer-display');
    if (timerDisplay) {
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        // Add warning class when time is running low
        if (gameState.timeRemaining <= 30) {
            timerDisplay.classList.add('timer-warning');
        } else {
            timerDisplay.classList.remove('timer-warning');
        }
    }
}

// Update score display
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = gameState.score;
        
        // Animate score change
        scoreDisplay.animate([
            { transform: 'scale(1.5)', color: '#4caf50' },
            { transform: 'scale(1)', color: 'inherit' }
        ], {
            duration: 500,
            easing: 'ease-out'
        });
    }
}

// Setup button listeners
function setupButtonListeners() {
    // Check answer button
    const checkButton = document.getElementById('check-btn');
    checkButton.addEventListener('click', () => {
        // Only check if user has made a selection
        if (gameState.userAnswer.numerator !== 0) {
            checkAnswer();
        } else {
            showFeedback("Please make a selection first!", "error");
        }
    });
    
    // Next challenge button
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', nextChallenge);
    nextButton.disabled = true; // Disabled until challenge is completed
    
    // Help/hint button
    const helpButton = document.getElementById('help-btn');
    helpButton.addEventListener('click', showHint);
    
    // Modal button
    const modalButton = document.getElementById('modal-button');
    modalButton.addEventListener('click', () => {
        document.getElementById('modal-overlay').style.display = 'none';
        
        // Start the game if not already started
        if (!gameState.gameStarted) {
            gameState.gameStarted = true;
            startTimer();
        }
    });
}

// Add keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Space or Enter to check answer
        if ((e.key === ' ' || e.key === 'Enter') && !e.ctrlKey && !e.altKey && !e.metaKey) {
            if (document.getElementById('modal-overlay').style.display !== 'flex') {
                e.preventDefault();
                document.getElementById('check-btn').click();
            } else {
                e.preventDefault();
                document.getElementById('modal-button').click();
            }
        }
        
        // N key for next challenge
        if (e.key === 'n' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            if (!document.getElementById('next-btn').disabled) {
                e.preventDefault();
                document.getElementById('next-btn').click();
            }
        }
        
        // H key for hint
        if (e.key === 'h' && !e.ctrlKey && !e.altKey && !e.metaKey) {
            e.preventDefault();
            document.getElementById('help-btn').click();
        }
    });
}

// Initialize the game when the page loads
window.addEventListener('load', () => {
    // Add timer and score displays to the UI
    addGameStatusUI();
    
    // Initialize the game
    initGame();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
});

// Add timer and score displays to the UI
function addGameStatusUI() {
    // Create status bar
    const statusBar = document.createElement('div');
    statusBar.id = 'status-bar';
    statusBar.className = 'status-bar';
    
    // Create timer display
    const timerContainer = document.createElement('div');
    timerContainer.className = 'timer-container';
    
    const timerIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    timerIcon.setAttribute("width", "24");
    timerIcon.setAttribute("height", "24");
    timerIcon.setAttribute("viewBox", "0 0 24 24");
    timerIcon.innerHTML = `
        <circle cx="12" cy="12" r="10" fill="none" stroke="#333" stroke-width="2"/>
        <path d="M12,6 L12,12 L16,14" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
    `;
    
    const timerDisplay = document.createElement('span');
    timerDisplay.id = 'timer-display';
    timerDisplay.textContent = '3:00';
    
    timerContainer.appendChild(timerIcon);
    timerContainer.appendChild(timerDisplay);
    
    // Create score display
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score-container';
    
    const scoreIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    scoreIcon.setAttribute("width", "24");
    scoreIcon.setAttribute("height", "24");
    scoreIcon.setAttribute("viewBox", "0 0 24 24");
    scoreIcon.innerHTML = `
        <path d="M12,2 L15,8 L21,9 L16.5,14 L18,20 L12,17 L6,20 L7.5,14 L3,9 L9,8 Z" fill="#FFD700" stroke="#333" stroke-width="1"/>
    `;
    
    const scoreLabel = document.createElement('span');
    scoreLabel.textContent = 'Score: ';
    
    const scoreDisplay = document.createElement('span');
    scoreDisplay.id = 'score-display';
    scoreDisplay.textContent = '0';
    
    scoreContainer.appendChild(scoreIcon);
    scoreContainer.appendChild(scoreLabel);
    scoreContainer.appendChild(scoreDisplay);
    
    // Add to status bar
    statusBar.appendChild(timerContainer);
    statusBar.appendChild(scoreContainer);
    
    // Add status bar to game container
    const gameContainer = document.getElementById('game-container');
    gameContainer.insertBefore(statusBar, gameContainer.firstChild);
    
    // Add CSS for status bar
    const style = document.createElement('style');
    style.textContent = `
        .status-bar {
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            gap: 30px;
            background-color: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            border-radius: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 10;
        }
        
        .timer-container, .score-container {
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        #timer-display, #score-display {
            font-size: 18px;
            font-weight: bold;
        }
        
        .timer-warning {
            color: #f44336 !important;
            animation: pulse 1s infinite;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        .btn-pulse {
            animation: button-pulse 1.5s infinite;
        }
        
        @keyframes button-pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(76, 175, 80, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(76, 175, 80, 0); }
        }
        
        .correct-answer {
            color: #4caf50;
            font-weight: bold;
            animation: pop 0.5s;
        }
        
        .incorrect-answer {
            color: #f44336;
            font-weight: bold;
            animation: shake 0.5s;
        }
        
        @keyframes pop {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        
        .fraction-display {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            vertical-align: middle;
            margin: 0 3px;
        }
        
        .numerator, .denominator {
            text-align: center;
        }
        
        .fraction-line {
            width: 100%;
            height: 2px;
            background-color: currentColor;
            margin: 2px 0;
        }
        
        .fraction-problem {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 24px;
        }
        
        .confetti-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 100;
        }
        
        .confetti {
            position: absolute;
            top: -10px;
            width: 10px;
            height: 10px;
            animation: fall 3s linear forwards;
        }
        
        @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
