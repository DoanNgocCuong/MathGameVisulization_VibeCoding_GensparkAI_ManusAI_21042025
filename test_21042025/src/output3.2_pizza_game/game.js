// Pizza Phân Số - Game JavaScript

// Canvas setup
const canvas = document.getElementById('pizza-canvas');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const pizzaRadius = Math.min(centerX, centerY) - 20;

// Game state
let gameState = {
    currentLevel: 1,
    requiredSlices: 2,
    lines: [],
    isDrawing: false,
    startPoint: null,
    endPoint: null,
    levelCompleted: false
};

// Level configurations
const levels = [
    { level: 1, slices: 2, instruction: "Cut the pizza into 2 equal parts (1/2)" },
    { level: 2, slices: 3, instruction: "Cut the pizza into 3 equal parts (1/3)" },
    { level: 3, slices: 4, instruction: "Cut the pizza into 4 equal parts (1/4)" },
    { level: 4, slices: 6, instruction: "Cut the pizza into 6 equal parts (1/6)" }
];

// Initialize the game
function initGame() {
    updateLevelDisplay();
    drawPizza();
    setupEventListeners();
}

// Update level display
function updateLevelDisplay() {
    const levelInfo = levels.find(l => l.level === gameState.currentLevel);
    document.getElementById('level-display').textContent = `Level ${gameState.currentLevel}`;
    document.getElementById('instruction').textContent = levelInfo.instruction;
    gameState.requiredSlices = levelInfo.slices;
    document.getElementById('feedback').textContent = '';
    
    // Update level buttons highlight
    document.querySelectorAll('.level-btn').forEach(btn => {
        if (parseInt(btn.dataset.level) === gameState.currentLevel) {
            btn.style.backgroundColor = '#ddd';
        } else {
            btn.style.backgroundColor = '';
        }
    });
    
    // Hide next level button if on last level
    document.getElementById('next-level').style.display = 
        gameState.currentLevel >= levels.length ? 'none' : 'inline-block';
}

// Draw the pizza
function drawPizza() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw pizza base (circle)
    ctx.beginPath();
    ctx.arc(centerX, centerY, pizzaRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFC107'; // Pizza color
    ctx.fill();
    ctx.strokeStyle = '#8D6E63'; // Crust color
    ctx.lineWidth = 5;
    ctx.stroke();
    
    // Draw pizza details (simple toppings)
    for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 / 8) * i;
        const x = centerX + Math.cos(angle) * (pizzaRadius * 0.6);
        const y = centerY + Math.sin(angle) * (pizzaRadius * 0.6);
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#D32F2F'; // Pepperoni color
        ctx.fill();
    }
    
    // Draw cutting lines
    drawCuttingLines();
}

// Draw cutting lines
function drawCuttingLines() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000';
    
    gameState.lines.forEach(line => {
        ctx.beginPath();
        // Extend lines to go through the entire pizza
        const angle = Math.atan2(line.endY - line.startY, line.endX - line.startX);
        const startX = centerX + Math.cos(angle) * -pizzaRadius;
        const startY = centerY + Math.sin(angle) * -pizzaRadius;
        const endX = centerX + Math.cos(angle) * pizzaRadius;
        const endY = centerY + Math.sin(angle) * pizzaRadius;
        
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    });
}

// Setup event listeners
function setupEventListeners() {
    // Canvas mouse/touch events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDrawing);
    canvas.addEventListener('mouseleave', endDrawing);
    
    // Touch events
    canvas.addEventListener('touchstart', handleTouch);
    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('touchend', handleTouch);
    
    // Button events
    document.getElementById('check-button').addEventListener('click', checkSlices);
    document.getElementById('reset-button').addEventListener('click', resetPizza);
    document.getElementById('next-level').addEventListener('click', nextLevel);
    
    // Level selection
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            gameState.currentLevel = parseInt(btn.dataset.level);
            resetGame();
        });
    });
}

// Handle touch events
function handleTouch(e) {
    e.preventDefault();
    const touch = e.touches[0] || e.changedTouches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    if (e.type === 'touchstart') {
        startDrawing({ offsetX: x, offsetY: y });
    } else if (e.type === 'touchmove') {
        draw({ offsetX: x, offsetY: y });
    } else if (e.type === 'touchend') {
        endDrawing();
    }
}

// Start drawing a line
function startDrawing(e) {
    if (gameState.levelCompleted) return;
    
    gameState.isDrawing = true;
    gameState.startPoint = { x: e.offsetX, y: e.offsetY };
}

// Draw line while moving
function draw(e) {
    if (!gameState.isDrawing) return;
    
    // Clear and redraw pizza
    drawPizza();
    
    // Draw current line
    ctx.beginPath();
    ctx.moveTo(gameState.startPoint.x, gameState.startPoint.y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

// End drawing a line
function endDrawing() {
    if (!gameState.isDrawing) return;
    
    gameState.isDrawing = false;
    
    // Only add lines that pass near the center
    const distToCenter = Math.sqrt(
        Math.pow(gameState.startPoint.x - centerX, 2) + 
        Math.pow(gameState.startPoint.y - centerY, 2)
    );
    
    if (distToCenter < pizzaRadius) {
        // Calculate angle of the line
        const angle = Math.atan2(
            gameState.startPoint.y - centerY,
            gameState.startPoint.x - centerX
        );
        
        // Add line to game state
        gameState.lines.push({
            startX: centerX,
            startY: centerY,
            endX: centerX + Math.cos(angle) * pizzaRadius,
            endY: centerY + Math.sin(angle) * pizzaRadius
        });
    }
    
    // Redraw pizza with all lines
    drawPizza();
}

// Check if pizza is cut into correct number of equal slices
function checkSlices() {
    if (gameState.lines.length === 0) {
        setFeedback("You need to cut the pizza first!");
        return;
    }
    
    // For simplicity, we'll just check if the number of lines matches the required number of slices
    // In a real implementation, we would check if the angles between lines are equal
    
    const expectedLines = gameState.requiredSlices - 1;
    
    if (gameState.lines.length < expectedLines) {
        setFeedback(`Not enough cuts! You need ${expectedLines} straight cuts to make ${gameState.requiredSlices} equal slices.`);
    } else if (gameState.lines.length > expectedLines) {
        setFeedback(`Too many cuts! You need exactly ${expectedLines} straight cuts.`);
    } else {
        // Check if angles between lines are approximately equal
        const angles = calculateAngles();
        const isEqual = checkEqualAngles(angles);
        
        if (isEqual) {
            setFeedback("Perfect! You've cut the pizza into equal slices!");
            gameState.levelCompleted = true;
        } else {
            setFeedback("The slices are not equal. Try again!");
        }
    }
}

// Calculate angles between lines
function calculateAngles() {
    const angles = [];
    
    // Sort lines by their angle
    const sortedLines = [...gameState.lines].sort((a, b) => {
        const angleA = Math.atan2(a.endY - a.startY, a.endX - a.startX);
        const angleB = Math.atan2(b.endY - b.startY, b.endX - b.startX);
        return angleA - angleB;
    });
    
    // Calculate angles between consecutive lines
    for (let i = 0; i < sortedLines.length; i++) {
        const currentLine = sortedLines[i];
        const nextLine = sortedLines[(i + 1) % sortedLines.length];
        
        const angle1 = Math.atan2(currentLine.endY - currentLine.startY, currentLine.endX - currentLine.startX);
        const angle2 = Math.atan2(nextLine.endY - nextLine.startY, nextLine.endX - nextLine.startX);
        
        // Calculate the smallest angle between the two lines
        let angleDiff = Math.abs(angle1 - angle2);
        if (angleDiff > Math.PI) {
            angleDiff = 2 * Math.PI - angleDiff;
        }
        
        angles.push(angleDiff);
    }
    
    // Add the angle between the last and first line
    if (sortedLines.length > 1) {
        const firstLine = sortedLines[0];
        const lastLine = sortedLines[sortedLines.length - 1];
        
        const angle1 = Math.atan2(lastLine.endY - lastLine.startY, lastLine.endX - lastLine.startX);
        const angle2 = Math.atan2(firstLine.endY - firstLine.startY, firstLine.endX - firstLine.startX);
        
        let angleDiff = Math.abs(angle1 - angle2);
        if (angleDiff > Math.PI) {
            angleDiff = 2 * Math.PI - angleDiff;
        }
        
        angles.push(angleDiff);
    }
    
    return angles;
}

// Check if angles are approximately equal
function checkEqualAngles(angles) {
    if (angles.length === 0) return false;
    
    const expectedAngle = Math.PI / gameState.requiredSlices;
    const tolerance = 0.2; // Allow some tolerance for imprecision
    
    for (const angle of angles) {
        if (Math.abs(angle - expectedAngle) > tolerance) {
            return false;
        }
    }
    
    return true;
}

// Set feedback message
function setFeedback(message) {
    document.getElementById('feedback').textContent = message;
}

// Reset pizza (clear all cuts)
function resetPizza() {
    gameState.lines = [];
    gameState.levelCompleted = false;
    drawPizza();
    setFeedback("");
}

// Move to next level
function nextLevel() {
    if (gameState.levelCompleted && gameState.currentLevel < levels.length) {
        gameState.currentLevel++;
        resetGame();
    } else {
        setFeedback("Complete this level first!");
    }
}

// Reset game for new level
function resetGame() {
    gameState.lines = [];
    gameState.levelCompleted = false;
    updateLevelDisplay();
    drawPizza();
}

// Initialize the game when the page loads
window.onload = initGame;
