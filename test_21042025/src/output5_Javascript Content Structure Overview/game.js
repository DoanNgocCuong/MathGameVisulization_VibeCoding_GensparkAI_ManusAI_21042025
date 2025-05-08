// Fraction Chef Game - Core JavaScript Mechanisms

// ==========================================
// 1. STATE MANAGEMENT
// ==========================================
const gameState = {
    currentLevel: 1,
    maxLevels: 3,
    currentRecipe: [],
    currentTaskIndex: 0,
    currentAmount: 0,
    targetAmount: 0,
    progress: 0,
    isPouring: false
};

// Level definitions with increasing complexity
const levels = [
    {
        level: 1,
        recipe: [
            { fraction: "1/4", decimal: 0.25, ingredient: "water" },
            { fraction: "1/2", decimal: 0.5, ingredient: "milk" }
        ]
    },
    {
        level: 2,
        recipe: [
            { fraction: "1/3", decimal: 0.33, ingredient: "water" },
            { fraction: "1/4", decimal: 0.25, ingredient: "oil" },
            { fraction: "1/2", decimal: 0.5, ingredient: "milk" }
        ]
    },
    {
        level: 3,
        recipe: [
            { fraction: "2/3", decimal: 0.67, ingredient: "water" },
            { fraction: "3/4", decimal: 0.75, ingredient: "milk" },
            { fraction: "1/4", decimal: 0.25, ingredient: "oil" },
            { fraction: "1/2", decimal: 0.5, ingredient: "flour" }
        ]
    }
];

// ==========================================
// 2. DOM ELEMENTS
// ==========================================
// Get DOM elements
const measuringCup = document.getElementById('measuring-cup');
const liquidLevel = document.getElementById('liquid-level');
const recipeList = document.getElementById('recipe-list');
const currentFraction = document.getElementById('current-fraction');
const feedbackContainer = document.getElementById('feedback-container');
const progressBar = document.getElementById('progress-bar');
const resetBtn = document.getElementById('reset-btn');
const nextLevelBtn = document.getElementById('next-level-btn');
const pourBtn = document.getElementById('pour-btn');
const levelIndicator = document.getElementById('level-indicator');
const ingredientBtns = document.querySelectorAll('.ingredient-btn');

// ==========================================
// 3. INITIALIZATION
// ==========================================
// Initialize the game
function initGame() {
    // Create fraction marks on measuring cup
    createFractionMarks();
    
    // Load first level
    loadLevel(gameState.currentLevel);
    
    // Add event listeners
    setupEventListeners();
}

// Create fraction marks on the measuring cup
function createFractionMarks() {
    const fractions = [
        { value: 0.25, label: "1/4" },
        { value: 0.33, label: "1/3" },
        { value: 0.5, label: "1/2" },
        { value: 0.67, label: "2/3" },
        { value: 0.75, label: "3/4" },
        { value: 1, label: "1" }
    ];
    
    fractions.forEach(fraction => {
        const mark = document.createElement('div');
        mark.className = 'fraction-mark';
        mark.style.bottom = `${fraction.value * 100}%`;
        mark.textContent = fraction.label;
        measuringCup.appendChild(mark);
    });
}

// Load a specific level
function loadLevel(levelNum) {
    const level = levels[levelNum - 1];
    gameState.currentLevel = levelNum;
    gameState.currentRecipe = level.recipe;
    gameState.currentTaskIndex = 0;
    gameState.currentAmount = 0;
    gameState.progress = 0;
    
    // Update UI
    levelIndicator.textContent = `Level ${levelNum}`;
    updateRecipeDisplay();
    updateCurrentTask();
    updateProgressBar();
    resetMeasuringCup();
    
    // Disable next level button until level is completed
    nextLevelBtn.disabled = true;
}

// Update the recipe display
function updateRecipeDisplay() {
    recipeList.innerHTML = '';
    gameState.currentRecipe.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.fraction} cup of ${item.ingredient}`;
        if (index < gameState.currentTaskIndex) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'green';
        }
        recipeList.appendChild(li);
    });
}

// Update the current task display
function updateCurrentTask() {
    if (gameState.currentTaskIndex < gameState.currentRecipe.length) {
        const currentTask = gameState.currentRecipe[gameState.currentTaskIndex];
        currentFraction.textContent = currentTask.fraction;
        gameState.targetAmount = currentTask.decimal;
        document.getElementById('current-task').textContent = 
            `Current task: Add ${currentTask.fraction} cup of ${currentTask.ingredient}`;
    } else {
        document.getElementById('current-task').textContent = 'Recipe complete!';
    }
}

// ==========================================
// 4. EVENT HANDLING
// ==========================================
// Set up event listeners
function setupEventListeners() {
    // Ingredient buttons
    ingredientBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const amount = parseFloat(this.getAttribute('data-amount'));
            addIngredient(amount);
        });
    });
    
    // Pour button
    pourBtn.addEventListener('click', pourIngredient);
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        loadLevel(gameState.currentLevel);
        provideFeedback('Game reset!', 'blue');
    });
    
    // Next level button
    nextLevelBtn.addEventListener('click', function() {
        if (gameState.currentLevel < gameState.maxLevels) {
            loadLevel(gameState.currentLevel + 1);
            provideFeedback(`Level ${gameState.currentLevel} started!`, 'blue');
        } else {
            provideFeedback('Congratulations! You completed all levels!', 'green');
        }
    });
}

// ==========================================
// 5. INTERACTIONS
// ==========================================
// Add ingredient to measuring cup
function addIngredient(amount) {
    if (gameState.isPouring) return;
    
    gameState.currentAmount = amount;
    updateLiquidLevel(amount);
    
    // Provide immediate feedback on selection
    const difference = Math.abs(gameState.targetAmount - amount);
    if (difference < 0.05) {
        provideFeedback('Perfect measurement!', 'green');
    } else if (difference < 0.1) {
        provideFeedback('Close! Try pouring to see if it works.', 'orange');
    } else {
        provideFeedback('That doesn\'t look right. Try a different amount.', 'red');
    }
}

// Pour the ingredient
function pourIngredient() {
    if (gameState.isPouring || gameState.currentTaskIndex >= gameState.currentRecipe.length) return;
    
    gameState.isPouring = true;
    
    // Check accuracy
    const difference = Math.abs(gameState.targetAmount - gameState.currentAmount);
    let isCorrect = false;
    
    if (difference < 0.05) {
        // Perfect measurement
        provideFeedback('Perfect! Moving to next ingredient.', 'green');
        isCorrect = true;
    } else if (difference < 0.1) {
        // Close enough
        provideFeedback('Close enough! Moving to next ingredient.', 'orange');
        isCorrect = true;
    } else {
        // Incorrect measurement
        provideFeedback('Incorrect measurement. Try again!', 'red');
    }
    
    if (isCorrect) {
        // Move to next task
        gameState.currentTaskIndex++;
        updateRecipeDisplay();
        
        // Update progress
        gameState.progress = (gameState.currentTaskIndex / gameState.currentRecipe.length) * 100;
        updateProgressBar();
        
        // Check if level is complete
        if (gameState.currentTaskIndex >= gameState.currentRecipe.length) {
            levelComplete();
        } else {
            // Reset for next task
            setTimeout(() => {
                resetMeasuringCup();
                updateCurrentTask();
                gameState.isPouring = false;
            }, 1000);
        }
    } else {
        // Reset for retry
        setTimeout(() => {
            resetMeasuringCup();
            gameState.isPouring = false;
        }, 1000);
    }
}

// ==========================================
// 6. DYNAMIC UI UPDATES
// ==========================================
// Update the liquid level in the measuring cup
function updateLiquidLevel(amount) {
    liquidLevel.style.height = `${amount * 100}%`;
    
    // Change color based on ingredient (simplified)
    const colors = ['rgba(0, 128, 255, 0.5)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 0, 0.5)'];
    const colorIndex = gameState.currentTaskIndex % colors.length;
    liquidLevel.style.backgroundColor = colors[colorIndex];
}

// Reset the measuring cup
function resetMeasuringCup() {
    gameState.currentAmount = 0;
    updateLiquidLevel(0);
}

// Update the progress bar
function updateProgressBar() {
    progressBar.style.width = `${gameState.progress}%`;
}

// ==========================================
// 7. FEEDBACK MECHANISM
// ==========================================
// Provide feedback to the player
function provideFeedback(message, color) {
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = color;
    
    // Clear feedback after a delay
    setTimeout(() => {
        if (feedbackContainer.textContent === message) {
            feedbackContainer.textContent = '';
        }
    }, 3000);
}

// Handle level completion
function levelComplete() {
    provideFeedback('Level complete! Great job!', 'green');
    
    // Enable next level button if not on last level
    if (gameState.currentLevel < gameState.maxLevels) {
        nextLevelBtn.disabled = false;
    } else {
        provideFeedback('Congratulations! You completed all levels!', 'green');
    }
}

// Initialize the game when the page loads
window.addEventListener('load', initGame);
