// Fraction Stages Implementation for "Đầu Bếp Phân Số" (Fraction Chef) Game

// Fraction division specific mechanics and challenges
const fractionDivisionStages = {
    // Stage configuration
    stages: [
        {
            name: "Basic Division",
            description: "Learn to divide whole numbers by whole numbers",
            challenges: [0, 2] // Indices from gameState.challenges
        },
        {
            name: "Dividing by Fractions",
            description: "Learn to divide fractions by fractions",
            challenges: [1, 3] // Indices from gameState.challenges
        },
        {
            name: "Mixed Division",
            description: "Practice dividing fractions by whole numbers",
            challenges: [4] // Indices from gameState.challenges
        }
    ],
    currentStage: 0,
    stageCompleted: [false, false, false],
    
    // Initialize stages
    initStages: function() {
        // Create stage selection UI
        this.createStageSelectionUI();
        
        // Set up first stage
        this.setupStage(0);
    },
    
    // Create stage selection UI
    createStageSelectionUI: function() {
        // Create stage selection container
        const stageSelectionContainer = document.createElement('div');
        stageSelectionContainer.id = 'stage-selection';
        stageSelectionContainer.className = 'stage-selection';
        
        // Create stage buttons
        this.stages.forEach((stage, index) => {
            const stageButton = document.createElement('div');
            stageButton.className = 'stage-button';
            stageButton.dataset.stage = index;
            
            // Create stage icon
            const stageIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            stageIcon.setAttribute("width", "40");
            stageIcon.setAttribute("height", "40");
            stageIcon.setAttribute("viewBox", "0 0 40 40");
            
            // Different icon for each stage
            if (index === 0) {
                // Basic division icon
                stageIcon.innerHTML = `
                    <circle cx="20" cy="20" r="18" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/>
                    <text x="20" y="25" text-anchor="middle" font-size="16" fill="#4caf50">1÷2</text>
                `;
            } else if (index === 1) {
                // Dividing by fractions icon
                stageIcon.innerHTML = `
                    <circle cx="20" cy="20" r="18" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/>
                    <text x="20" y="18" text-anchor="middle" font-size="10" fill="#4caf50">1/2</text>
                    <line x1="10" y1="20" x2="30" y2="20" stroke="#4caf50" stroke-width="2"/>
                    <text x="20" y="30" text-anchor="middle" font-size="10" fill="#4caf50">1/4</text>
                `;
            } else {
                // Mixed division icon
                stageIcon.innerHTML = `
                    <circle cx="20" cy="20" r="18" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/>
                    <text x="15" y="18" text-anchor="middle" font-size="10" fill="#4caf50">3/4</text>
                    <line x1="10" y1="20" x2="30" y2="20" stroke="#4caf50" stroke-width="2"/>
                    <text x="25" y="30" text-anchor="middle" font-size="10" fill="#4caf50">3</text>
                `;
            }
            
            // Create stage info
            const stageInfo = document.createElement('div');
            stageInfo.className = 'stage-info';
            
            const stageName = document.createElement('div');
            stageName.className = 'stage-name';
            stageName.textContent = stage.name;
            
            const stageDescription = document.createElement('div');
            stageDescription.className = 'stage-description';
            stageDescription.textContent = stage.description;
            
            // Create lock icon for locked stages
            const lockIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            lockIcon.setAttribute("width", "20");
            lockIcon.setAttribute("height", "20");
            lockIcon.setAttribute("viewBox", "0 0 20 20");
            lockIcon.setAttribute("class", "lock-icon");
            lockIcon.innerHTML = `
                <rect x="5" y="9" width="10" height="8" rx="1" fill="#9e9e9e"/>
                <path d="M7,9 L7,6 C7,3.8 8.8,2 11,2 C13.2,2 15,3.8 15,6 L15,9" stroke="#9e9e9e" stroke-width="2" fill="none"/>
            `;
            
            // Add elements to stage button
            stageButton.appendChild(stageIcon);
            stageInfo.appendChild(stageName);
            stageInfo.appendChild(stageDescription);
            stageButton.appendChild(stageInfo);
            stageButton.appendChild(lockIcon);
            
            // Add stage button to container
            stageSelectionContainer.appendChild(stageButton);
            
            // Add click event
            stageButton.addEventListener('click', () => {
                // Only allow clicking unlocked stages
                if (index === 0 || this.stageCompleted[index - 1]) {
                    this.setupStage(index);
                    
                    // Update active stage button
                    const stageButtons = document.querySelectorAll('.stage-button');
                    stageButtons.forEach(btn => btn.classList.remove('active'));
                    stageButton.classList.add('active');
                    
                    // Hide stage selection
                    document.getElementById('stage-selection-modal').style.display = 'none';
                }
            });
        });
        
        // Create stage selection modal
        const stageSelectionModal = document.createElement('div');
        stageSelectionModal.id = 'stage-selection-modal';
        stageSelectionModal.className = 'modal-overlay';
        stageSelectionModal.style.display = 'none';
        
        const stageSelectionContent = document.createElement('div');
        stageSelectionContent.className = 'modal-content';
        
        const stageSelectionTitle = document.createElement('h2');
        stageSelectionTitle.textContent = 'Select a Stage';
        stageSelectionTitle.className = 'modal-title';
        
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.className = 'btn';
        closeButton.addEventListener('click', () => {
            stageSelectionModal.style.display = 'none';
        });
        
        // Add elements to modal
        stageSelectionContent.appendChild(stageSelectionTitle);
        stageSelectionContent.appendChild(stageSelectionContainer);
        stageSelectionContent.appendChild(closeButton);
        stageSelectionModal.appendChild(stageSelectionContent);
        
        // Add modal to body
        document.body.appendChild(stageSelectionModal);
        
        // Add stage selection button to game container
        const stageSelectButton = document.createElement('button');
        stageSelectButton.id = 'stage-select-btn';
        stageSelectButton.className = 'btn stage-btn';
        stageSelectButton.textContent = 'Select Stage';
        stageSelectButton.addEventListener('click', () => {
            stageSelectionModal.style.display = 'flex';
            
            // Update stage buttons based on completion
            this.updateStageButtons();
        });
        
        // Add to controls
        const controls = document.getElementById('controls');
        controls.appendChild(stageSelectButton);
        
        // Add CSS for stage selection
        const style = document.createElement('style');
        style.textContent = `
            .stage-selection {
                display: flex;
                flex-direction: column;
                gap: 15px;
                width: 100%;
                max-width: 500px;
                margin: 20px 0;
            }
            
            .stage-button {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                background-color: #f5f5f5;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s;
                position: relative;
            }
            
            .stage-button:hover {
                background-color: #e0f2f1;
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            
            .stage-button.active {
                background-color: #e8f5e9;
                border: 2px solid #4caf50;
            }
            
            .stage-button.completed {
                background-color: #e8f5e9;
            }
            
            .stage-button.locked {
                opacity: 0.7;
                cursor: not-allowed;
            }
            
            .stage-info {
                flex: 1;
            }
            
            .stage-name {
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 5px;
            }
            
            .stage-description {
                font-size: 14px;
                color: #666;
            }
            
            .lock-icon {
                position: absolute;
                top: 10px;
                right: 10px;
                display: none;
            }
            
            .stage-button.locked .lock-icon {
                display: block;
            }
            
            .stage-btn {
                background-color: #ff9800;
            }
            
            .stage-btn:hover {
                background-color: #f57c00;
            }
            
            .completed-indicator {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 20px;
                height: 20px;
                color: #4caf50;
                display: none;
            }
            
            .stage-button.completed .completed-indicator {
                display: block;
            }
            
            @media (max-width: 768px) {
                .stage-button {
                    padding: 10px;
                }
                
                .stage-name {
                    font-size: 16px;
                }
                
                .stage-description {
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    },
    
    // Update stage buttons based on completion
    updateStageButtons: function() {
        const stageButtons = document.querySelectorAll('.stage-button');
        
        stageButtons.forEach((button, index) => {
            // Reset classes
            button.classList.remove('active', 'completed', 'locked');
            
            // Add appropriate classes
            if (index === this.currentStage) {
                button.classList.add('active');
            }
            
            if (this.stageCompleted[index]) {
                button.classList.add('completed');
                
                // Add completed indicator
                let completedIndicator = button.querySelector('.completed-indicator');
                if (!completedIndicator) {
                    completedIndicator = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    completedIndicator.setAttribute("class", "completed-indicator");
                    completedIndicator.setAttribute("width", "20");
                    completedIndicator.setAttribute("height", "20");
                    completedIndicator.setAttribute("viewBox", "0 0 20 20");
                    completedIndicator.innerHTML = `
                        <circle cx="10" cy="10" r="9" fill="#e8f5e9" stroke="#4caf50" stroke-width="1"/>
                        <path d="M6,10 L9,13 L14,7" fill="none" stroke="#4caf50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    `;
                    button.appendChild(completedIndicator);
                }
            }
            
            // Lock stages that should be locked
            if (index > 0 && !this.stageCompleted[index - 1]) {
                button.classList.add('locked');
            }
        });
    },
    
    // Set up a specific stage
    setupStage: function(stageIndex) {
        this.currentStage = stageIndex;
        const stage = this.stages[stageIndex];
        
        // Reset game state for new stage
        gameState.completedChallenges = [];
        gameState.currentChallenge = stage.challenges[0];
        gameState.attempts = 0;
        
        // Update challenge list
        this.updateChallengeList(stage);
        
        // Set up first challenge of this stage
        setupChallenge(stage.challenges[0]);
        
        // Update stage display
        this.updateStageDisplay(stage);
        
        // Update stage buttons
        this.updateStageButtons();
    },
    
    // Update challenge list for current stage
    updateChallengeList: function(stage) {
        recipeList.innerHTML = '';
        
        stage.challenges.forEach(challengeIndex => {
            const challenge = gameState.challenges[challengeIndex];
            const listItem = document.createElement('li');
            listItem.textContent = challenge.instruction;
            listItem.dataset.challengeIndex = challengeIndex;
            
            if (gameState.completedChallenges.includes(challengeIndex)) {
                listItem.style.textDecoration = 'line-through';
                listItem.style.color = '#9e9e9e';
            }
            
            recipeList.appendChild(listItem);
        });
    },
    
    // Update stage display
    updateStageDisplay: function(stage) {
        // Update recipe area title
        const recipeAreaTitle = document.querySelector('#recipe-area h3');
        if (recipeAreaTitle) {
            recipeAreaTitle.textContent = stage.name;
        }
        
        // Update stage progress
        const recipeProgress = document.getElementById('recipe-progress');
        if (recipeProgress) {
            recipeProgress.innerHTML = `Stage: <span class="stage-number">${this.currentStage + 1}/${this.stages.length}</span>`;
        }
    },
    
    // Check if stage is completed
    checkStageCompletion: function() {
        const stage = this.stages[this.currentStage];
        const allCompleted = stage.challenges.every(challengeIndex => 
            gameState.completedChallenges.includes(challengeIndex)
        );
        
        if (allCompleted) {
            this.stageCompleted[this.currentStage] = true;
            this.showStageCompletionModal();
        }
    },
    
    // Show stage completion modal
    showStageCompletionModal: function() {
        const stage = this.stages[this.currentStage];
        const isLastStage = this.currentStage === this.stages.length - 1;
        
        let modalContent = `
            <p>Congratulations! You've completed the "${stage.name}" stage!</p>
            <p>You've mastered the following concepts:</p>
            <ul>
                <li>${stage.description}</li>
            </ul>
        `;
        
        if (isLastStage) {
            modalContent += `
                <p>You've completed all stages! You're now a Fraction Division Master!</p>
            `;
        } else {
            modalContent += `
                <p>You've unlocked the next stage: "${this.stages[this.currentStage + 1].name}"</p>
            `;
        }
        
        showModal(
            "Stage Completed!",
            modalContent,
            isLastStage ? "Finish Game" : "Next Stage"
        );
        
        // Change modal button action
        const modalButton = document.getElementById('modal-button');
        modalButton.addEventListener('click', () => {
            if (isLastStage) {
                completeGame();
            } else {
                this.setupStage(this.currentStage + 1);
            }
        }, { once: true });
    },
    
    // Handle challenge completion
    handleChallengeCompletion: function(challengeIndex) {
        // Update challenge list
        const listItems = recipeList.querySelectorAll('li');
        listItems.forEach(item => {
            if (parseInt(item.dataset.challengeIndex) === challengeIndex) {
                item.style.textDecoration = 'line-through';
                item.style.color = '#9e9e9e';
            }
        });
        
        // Check if all challenges in current stage are completed
        this.checkStageCompletion();
        
        // Find next challenge in current stage
        const stage = this.stages[this.currentStage];
        const currentChallengeIndex = stage.challenges.indexOf(challengeIndex);
        
        if (currentChallengeIndex < stage.challenges.length - 1) {
            // There are more challenges in this stage
            const nextChallengeIndex = stage.challenges[currentChallengeIndex + 1];
            
            // Enable next button to go to next challenge
            nextButton.disabled = false;
            nextButton.classList.add('btn-pulse');
            
            // Set up next challenge when next button is clicked
            nextButton.onclick = () => {
                setupChallenge(nextChallengeIndex);
                nextButton.disabled = true;
                nextButton.classList.remove('btn-pulse');
            };
        } else {
            // This was the last challenge in the stage
            if (this.currentStage < this.stages.length - 1) {
                // There are more stages
                nextButton.disabled = false;
                nextButton.classList.add('btn-pulse');
                nextButton.textContent = "Next Stage";
                
                // Set up next stage when next button is clicked
                nextButton.onclick = () => {
                    this.setupStage(this.currentStage + 1);
                    nextButton.disabled = true;
                    nextButton.classList.remove('btn-pulse');
                    nextButton.textContent = "Next Challenge";
                };
            } else {
                // This was the last challenge in the last stage
                nextButton.disabled = false;
                nextButton.classList.add('btn-pulse');
                nextButton.textContent = "Finish Game";
                
                // Complete game when next button is clicked
                nextButton.onclick = () => {
                    completeGame();
                };
            }
        }
    }
};

// Enhanced division-specific interactions
function createDivisionVisualization(dividend, divisor, quotient) {
    // Create visualization container
    const visualizationContainer = document.createElementNS(svgNS, "g");
    visualizationContainer.setAttribute("id", "division-visualization");
    visualizationContainer.setAttribute("transform", "translate(250, 300)");
    workspaceSvg.appendChild(visualizationContainer);
    
    // Create title
    const title = document.createElementNS(svgNS, "text");
    title.setAttribute("x", "0");
    title.setAttribute("y", "-80");
    title.setAttribute("text-anchor", "middle");
    title.setAttribute("font-size", "16");
    title.setAttribute("fill", "#333");
    title.textContent = "Division Visualization";
    visualizationContainer.appendChild(title);
    
    // Create dividend representation
    const dividendGroup = document.createElementNS(svgNS, "g");
    dividendGroup.setAttribute("transform", "translate(-100, -40)");
    visualizationContainer.appendChild(dividendGroup);
    
    const dividendLabel = document.createElementNS(svgNS, "text");
    dividendLabel.setAttribute("x", "0");
    dividendLabel.setAttribute("y", "-15");
    dividendLabel.setAttribute("text-anchor", "middle");
    dividendLabel.setAttribute("font-size", "14");
    dividendLabel.setAttribute("fill", "#333");
    dividendLabel.textContent = "Dividend";
    dividendGroup.appendChild(dividendLabel);
    
    createFractionCircle(dividendGroup, dividend, 0, 0, 30, "#4caf50");
    
    // Create divisor representation
    const divisorGroup = document.createElementNS(svgNS, "g");
    divisorGroup.setAttribute("transform", "translate(0, -40)");
    visualizationContainer.appendChild(divisorGroup);
    
    const divisorLabel = document.createElementNS(svgNS, "text");
    divisorLabel.setAttribute("x", "0");
    divisorLabel.setAttribute("y", "-15");
    divisorLabel.setAttribute("text-anchor", "middle");
    divisorLabel.setAttribute("font-size", "14");
    divisorLabel.setAttribute("fill", "#333");
    divisorLabel.textContent = "Divisor";
    divisorGroup.appendChild(divisorLabel);
    
    createFractionCircle(divisorGroup, divisor, 0, 0, 30, "#f44336");
    
    // Create quotient representation
    const quotientGroup = document.createElementNS(svgNS, "g");
    quotientGroup.setAttribute("transform", "translate(100, -40)");
    visualizationContainer.appendChild(quotientGroup);
    
    const quotientLabel = document.createElementNS(svgNS, "text");
    quotientLabel.setAttribute("x", "0");
    quotientLabel.setAttribute("y", "-15");
    quotientLabel.setAttribute("text-anchor", "middle");
    quotientLabel.setAttribute("font-size", "14");
    quotientLabel.setAttribute("fill", "#333");
    quotientLabel.textContent = "Quotient";
    quotientGroup.appendChild(quotientLabel);
    
    createFractionCircle(quotientGroup, quotient, 0, 0, 30, "#2196f3");
    
    // Create division process visualization
    const processGroup = document.createElementNS(svgNS, "g");
    processGroup.setAttribute("transform", "translate(0, 40)");
    visualizationContainer.appendChild(processGroup);
    
    const processLabel = document.createElementNS(svgNS, "text");
    processLabel.setAttribute("x", "0");
    processLabel.setAttribute("y", "-15");
    processLabel.setAttribute("text-anchor", "middle");
    processLabel.setAttribute("font-size", "14");
    processLabel.setAttribute("fill", "#333");
    processLabel.textContent = "Division Process";
    processGroup.appendChild(processLabel);
    
    // Create step 1: Flip the divisor
    const step1Group = document.createElementNS(svgNS, "g");
    step1Group.setAttribute("transform", "translate(-100, 0)");
    processGroup.appendChild(step1Group);
    
    const step1Label = document.createElementNS(svgNS, "text");
    step1Label.setAttribute("x", "0");
    step1Label.setAttribute("y", "-5");
    step1Label.setAttribute("text-anchor", "middle");
    step1Label.setAttribute("font-size", "12");
    step1Label.setAttribute("fill", "#333");
    step1Label.textContent = "Step 1: Flip divisor";
    step1Group.appendChild(step1Label);
    
    // Create original divisor
    createFractionCircle(step1Group, divisor, -20, 20, 15, "#f44336");
    
    // Create arrow
    const arrow = document.createElementNS(svgNS, "path");
    arrow.setAttribute("d", "M0,20 L20,20");
    arrow.setAttribute("stroke", "#333");
    arrow.setAttribute("stroke-width", "2");
    arrow.setAttribute("marker-end", "url(#arrowhead)");
    step1Group.appendChild(arrow);
    
    // Create arrowhead marker
    const defs = document.createElementNS(svgNS, "defs");
    visualizationContainer.appendChild(defs);
    
    const marker = document.createElementNS(svgNS, "marker");
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    defs.appendChild(marker);
    
    const polygon = document.createElementNS(svgNS, "polygon");
    polygon.setAttribute("points", "0 0, 10 3.5, 0 7");
    polygon.setAttribute("fill", "#333");
    marker.appendChild(polygon);
    
    // Create reciprocal of divisor
    const reciprocal = {
        numerator: divisor.denominator,
        denominator: divisor.numerator
    };
    createFractionCircle(step1Group, reciprocal, 40, 20, 15, "#f44336");
    
    // Create step 2: Multiply
    const step2Group = document.createElementNS(svgNS, "g");
    step2Group.setAttribute("transform", "translate(100, 0)");
    processGroup.appendChild(step2Group);
    
    const step2Label = document.createElementNS(svgNS, "text");
    step2Label.setAttribute("x", "0");
    step2Label.setAttribute("y", "-5");
    step2Label.setAttribute("text-anchor", "middle");
    step2Label.setAttribute("font-size", "12");
    step2Label.setAttribute("fill", "#333");
    step2Label.textContent = "Step 2: Multiply";
    step2Group.appendChild(step2Label);
    
    // Create dividend
    createFractionCircle(step2Group, dividend, -30, 20, 15, "#4caf50");
    
    // Create multiplication symbol
    const multiplySymbol = document.createElementNS(svgNS, "text");
    multiplySymbol.setAttribute("x", "0");
    multiplySymbol.setAttribute("y", "25");
    multiplySymbol.setAttribute("text-anchor", "middle");
    multiplySymbol.setAttribute("font-size", "16");
    multiplySymbol.setAttribute("fill", "#333");
    multiplySymbol.textContent = "×";
    step2Group.appendChild(multiplySymbol);
    
    // Create reciprocal of divisor
    createFractionCircle(step2Group, reciprocal, 30, 20, 15, "#f44336");
    
    // Create equals symbol
    const equalsSymbol = document.createElementNS(svgNS, "text");
    equalsSymbol.setAttribute("x", "60");
    equalsSymbol.setAttribute("y", "25");
    equalsSymbol.setAttribute("text-anchor", "middle");
    equalsSymbol.setAttribute("font-size", "16");
    equalsSymbol.setAttribute("fill", "#333");
    equalsSymbol.textContent = "=";
    step2Group.appendChild(equalsSymbol);
    
    // Create quotient
    createFractionCircle(step2Group, quotient, 90, 20, 15, "#2196f3");
}

// Create a fraction circle visualization
function createFractionCircle(parent, fraction, x, y, radius, color) {
    const fractionGroup = document.createElementNS(svgNS, "g");
    fractionGroup.setAttribute("transform", `translate(${x}, ${y})`);
    parent.appendChild(fractionGroup);
    
    // Create circle
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "0");
    circle.setAttribute("cy", "0");
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "white");
    circle.setAttribute("stroke", color);
    circle.setAttribute("stroke-width", "2");
    fractionGroup.appendChild(circle);
    
    // Create fraction text
    const fractionText = document.createElementNS(svgNS, "text");
    fractionText.setAttribute("x", "0");
    fractionText.setAttribute("y", "0");
    fractionText.setAttribute("text-anchor", "middle");
    fractionText.setAttribute("dominant-baseline", "middle");
    fractionText.setAttribute("font-size", radius * 0.6);
    fractionText.setAttribute("fill", color);
    
    if (fraction.denominator === 1) {
        // Whole number
        fractionText.textContent = fraction.numerator;
    } else {
        // Create fraction with line
        const numerator = document.createElementNS(svgNS, "tspan");
        numerator.setAttribute("x", "0");
        numerator.setAttribute("dy", `-${radius * 0.3}`);
        numerator.textContent = fraction.numerator;
        fractionText.appendChild(numerator);
        
        const line = document.createElementNS(svgNS, "tspan");
        line.setAttribute("x", "0");
        line.setAttribute("dy", `${radius * 0.3}`);
        line.textContent = "—";
        fractionText.appendChild(line);
        
        const denominator = document.createElementNS(svgNS, "tspan");
        denominator.setAttribute("x", "0");
        denominator.setAttribute("dy", `${radius * 0.3}`);
        denominator.textContent = fraction.denominator;
        fractionText.appendChild(denominator);
    }
    
    fractionGroup.appendChild(fractionText);
    
    return fractionGroup;
}

// Create enhanced division-specific measuring cup interaction
function createDivisionMeasuringCupInteraction() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create standard measuring cup interaction
    createEnhancedMeasuringCupInteraction();
    
    // Add division visualization
    createDivisionVisualization(
        challenge.dividend,
        challenge.divisor,
        challenge.answer
    );
    
    // Add division rule explanation
    const explanationText = document.createElementNS(svgNS, "text");
    explanationText.setAttribute("x", "250");
    explanationText.setAttribute("y", "30");
    explanationText.setAttribute("text-anchor", "middle");
    explanationText.setAttribute("font-size", "14");
    explanationText.setAttribute("fill", "#333");
    explanationText.textContent = "To divide fractions: Multiply by the reciprocal of the divisor";
    workspaceSvg.appendChild(explanationText);
}

// Create enhanced division-specific slicing interaction
function createDivisionSlicingInteraction() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create standard slicing interaction
    createEnhancedSlicingInteraction();
    
    // Add division visualization
    createDivisionVisualization(
        challenge.dividend,
        challenge.divisor,
        challenge.answer
    );
}

// Create enhanced division-specific pouring interaction
function createDivisionPouringInteraction() {
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create standard pouring interaction
    createEnhancedPouringInteraction();
    
    // Add division visualization
    createDivisionVisualization(
        challenge.dividend,
        challenge.divisor,
        challenge.answer
    );
}

// Override tool selection to use division-specific interactions
function addDivisionEventListeners() {
    // Tool selection
    const tools = document.querySelectorAll('.tool');
    tools.forEach(tool => {
        tool.addEventListener('click', () => {
            gameState.selectedTool = tool.id;
            
            // Reset tool highlighting
            tools.forEach(t => t.style.border = 'none');
            
            // Highlight selected tool
            tool.style.border = '2px solid #4caf50';
            
            // Set interaction mode based on tool
            switch (tool.id) {
                case 'measuring-cup':
                    gameState.interactionMode = 'measure';
                    createDivisionMeasuringCupInteraction();
                    break;
                case 'knife':
                    gameState.interactionMode = 'slice';
                    createDivisionSlicingInteraction();
                    break;
                case 'pouring-jug':
                    gameState.interactionMode = 'pour';
                    createDivisionPouringInteraction();
                    break;
                case 'scale':
                    gameState.interactionMode = 'measure';
                    createDivisionMeasuringCupInteraction();
                    break;
            }
        });
    });
    
    // Ingredient selection with enhanced feedback
    const ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach(ingredient => {
        ingredient.addEventListener('click', () => {
            if (!gameState.selectedTool) {
                showFeedback("Please select a tool first!", "error");
                
                // Shake animation for feedback
                ingredient.animate([
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(5px)' },
                    { transform: 'translateX(-5px)' },
                    { transform: 'translateX(5px)' },
                    { transform: 'translateX(0)' }
                ], {
                    duration: 500,
                    easing: 'ease-in-out'
                });
                
                return;
            }
            
            gameState.selectedIngredient = ingredient.id;
            
            // Reset ingredient highlighting
            ingredients.forEach(i => i.style.border = 'none');
            
            // Highlight selected ingredient with animation
            ingredient.style.border = '2px solid #4caf50';
            ingredient.animate([
                { transform: 'scale(1)' },
                { transform: 'scale(1.1)' },
                { transform: 'scale(1)' }
            ], {
                duration: 300,
                easing: 'ease-in-out'
            });
        });
    });
}

// Override check answer to integrate with stages
function checkDivisionAnswer() {
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
        
        // Handle challenge completion in stage system
        fractionDivisionStages.handleChallengeCompletion(gameState.currentChallenge);
        
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

// Initialize the fraction division stages
function initFractionDivisionStages() {
    // Initialize stages
    fractionDivisionStages.initStages();
    
    // Override event listeners
    addDivisionEventListeners();
    
    // Override check answer button
    const checkButton = document.getElementById('check-btn');
    checkButton.removeEventListener('click', checkAnswer);
    checkButton.addEventListener('click', () => {
        // Only check if user has made a selection
        if (gameState.userAnswer.numerator !== 0) {
            checkDivisionAnswer();
        } else {
            showFeedback("Please make a selection first!", "error");
        }
    });
}

// Initialize the game with fraction division focus
window.addEventListener('load', () => {
    // Add timer and score displays to the UI
    addGameStatusUI();
    
    // Initialize the game
    initGame();
    
    // Initialize fraction division stages
    initFractionDivisionStages();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
});
