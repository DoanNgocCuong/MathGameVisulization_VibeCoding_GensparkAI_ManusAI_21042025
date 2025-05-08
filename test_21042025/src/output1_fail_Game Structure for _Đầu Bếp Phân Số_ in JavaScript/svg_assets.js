// SVG Assets for "Đầu Bếp Phân Số" (Fraction Chef) Game

// SVG Namespace
const svgNS = "http://www.w3.org/2000/svg";

// Create kitchen tools as SVGs with more detailed visuals
function createDetailedTools() {
    // Clear existing tools
    toolsArea.innerHTML = '';
    
    // Measuring Cup
    const measuringCupSvg = document.createElementNS(svgNS, "svg");
    measuringCupSvg.setAttribute("class", "tool");
    measuringCupSvg.setAttribute("id", "measuring-cup");
    measuringCupSvg.setAttribute("viewBox", "0 0 100 100");
    measuringCupSvg.innerHTML = `
        <defs>
            <linearGradient id="cup-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgba(173, 216, 230, 0.5)"/>
                <stop offset="100%" style="stop-color:rgba(173, 216, 230, 0.8)"/>
            </linearGradient>
        </defs>
        <rect x="20" y="20" width="60" height="70" rx="5" fill="url(#cup-gradient)" stroke="#2196f3" stroke-width="2" />
        <line x1="25" y1="30" x2="35" y2="30" stroke="#333" stroke-width="1" />
        <text x="15" y="35" font-size="12" fill="#333">1</text>
        <line x1="25" y1="40" x2="35" y2="40" stroke="#333" stroke-width="1" />
        <text x="15" y="45" font-size="12" fill="#333">3/4</text>
        <line x1="25" y1="50" x2="35" y2="50" stroke="#333" stroke-width="1" />
        <text x="15" y="55" font-size="12" fill="#333">1/2</text>
        <line x1="25" y1="60" x2="35" y2="60" stroke="#333" stroke-width="1" />
        <text x="15" y="65" font-size="12" fill="#333">1/4</text>
        <path d="M20,90 L80,90 L75,95 L25,95 Z" fill="#2196f3" opacity="0.6" />
        <text x="50" y="85" font-size="10" text-anchor="middle" fill="#333">Measuring Cup</text>
    `;
    toolsArea.appendChild(measuringCupSvg);
    
    // Knife
    const knifeSvg = document.createElementNS(svgNS, "svg");
    knifeSvg.setAttribute("class", "tool");
    knifeSvg.setAttribute("id", "knife");
    knifeSvg.setAttribute("viewBox", "0 0 100 100");
    knifeSvg.innerHTML = `
        <defs>
            <linearGradient id="blade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#d1d1d1"/>
                <stop offset="100%" style="stop-color:#f5f5f5"/>
            </linearGradient>
            <linearGradient id="handle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#8d6e63"/>
                <stop offset="100%" style="stop-color:#a1887f"/>
            </linearGradient>
        </defs>
        <rect x="20" y="40" width="40" height="10" rx="2" fill="url(#handle-gradient)" stroke="#5d4037" stroke-width="1" />
        <path d="M60,35 L95,25 L95,65 L60,55 Z" fill="url(#blade-gradient)" stroke="#9e9e9e" stroke-width="1" />
        <line x1="60" y1="35" x2="60" y2="55" stroke="#9e9e9e" stroke-width="1" />
        <text x="50" y="65" font-size="10" text-anchor="middle" fill="#333">Knife</text>
    `;
    toolsArea.appendChild(knifeSvg);
    
    // Pouring Jug
    const pouringSvg = document.createElementNS(svgNS, "svg");
    pouringSvg.setAttribute("class", "tool");
    pouringSvg.setAttribute("id", "pouring-jug");
    pouringSvg.setAttribute("viewBox", "0 0 100 100");
    pouringSvg.innerHTML = `
        <defs>
            <linearGradient id="jug-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:rgba(173, 216, 230, 0.5)"/>
                <stop offset="100%" style="stop-color:rgba(173, 216, 230, 0.8)"/>
            </linearGradient>
        </defs>
        <path d="M30,20 L70,20 L80,80 L20,80 Z" fill="url(#jug-gradient)" stroke="#2196f3" stroke-width="2" />
        <path d="M70,20 L90,40 L90,50 L80,80 L80,80 Z" fill="url(#jug-gradient)" stroke="#2196f3" stroke-width="2" />
        <line x1="25" y1="35" x2="35" y2="35" stroke="#333" stroke-width="1" />
        <text x="15" y="40" font-size="12" fill="#333">1</text>
        <line x1="25" y1="50" x2="35" y2="50" stroke="#333" stroke-width="1" />
        <text x="15" y="55" font-size="12" fill="#333">1/2</text>
        <line x1="25" y1="65" x2="35" y2="65" stroke="#333" stroke-width="1" />
        <text x="15" y="70" font-size="12" fill="#333">1/4</text>
        <path d="M30,20 L70,20 L72,25 L28,25 Z" fill="#2196f3" opacity="0.6" />
        <text x="50" y="95" font-size="10" text-anchor="middle" fill="#333">Pouring Jug</text>
    `;
    toolsArea.appendChild(pouringSvg);
    
    // Scale
    const scaleSvg = document.createElementNS(svgNS, "svg");
    scaleSvg.setAttribute("class", "tool");
    scaleSvg.setAttribute("id", "scale");
    scaleSvg.setAttribute("viewBox", "0 0 100 100");
    scaleSvg.innerHTML = `
        <defs>
            <linearGradient id="scale-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#e0e0e0"/>
                <stop offset="100%" style="stop-color:#f5f5f5"/>
            </linearGradient>
        </defs>
        <rect x="35" y="70" width="30" height="10" rx="2" fill="#9e9e9e" />
        <rect x="45" y="50" width="10" height="20" fill="#9e9e9e" />
        <rect x="20" y="40" width="60" height="10" rx="5" fill="#9e9e9e" />
        <circle cx="30" cy="30" r="15" fill="url(#scale-gradient)" stroke="#9e9e9e" stroke-width="2" />
        <circle cx="70" cy="30" r="15" fill="url(#scale-gradient)" stroke="#9e9e9e" stroke-width="2" />
        <line x1="20" y1="30" x2="40" y2="30" stroke="#333" stroke-width="1" />
        <line x1="60" y1="30" x2="80" y2="30" stroke="#333" stroke-width="1" />
        <text x="50" y="95" font-size="10" text-anchor="middle" fill="#333">Scale</text>
    `;
    toolsArea.appendChild(scaleSvg);
}

// Create ingredients as SVGs with more detailed visuals
function createDetailedIngredients() {
    // Clear existing ingredients
    ingredientsArea.innerHTML = '';
    
    // Flour
    const flourSvg = document.createElementNS(svgNS, "svg");
    flourSvg.setAttribute("class", "ingredient");
    flourSvg.setAttribute("id", "flour");
    flourSvg.setAttribute("viewBox", "0 0 100 100");
    flourSvg.innerHTML = `
        <defs>
            <linearGradient id="flour-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffffff"/>
                <stop offset="100%" style="stop-color:#f5f5f5"/>
            </linearGradient>
        </defs>
        <rect x="20" y="30" width="60" height="50" rx="5" fill="url(#flour-gradient)" stroke="#9e9e9e" stroke-width="2" />
        <path d="M20,40 L80,40" stroke="#e0e0e0" stroke-width="1" />
        <path d="M20,50 L80,50" stroke="#e0e0e0" stroke-width="1" />
        <path d="M20,60 L80,60" stroke="#e0e0e0" stroke-width="1" />
        <path d="M20,70 L80,70" stroke="#e0e0e0" stroke-width="1" />
        <text x="50" y="55" font-size="14" text-anchor="middle" fill="#333">Flour</text>
        <ellipse cx="50" cy="80" rx="30" ry="3" fill="#e0e0e0" opacity="0.5" />
    `;
    ingredientsArea.appendChild(flourSvg);
    
    // Milk
    const milkSvg = document.createElementNS(svgNS, "svg");
    milkSvg.setAttribute("class", "ingredient");
    milkSvg.setAttribute("id", "milk");
    milkSvg.setAttribute("viewBox", "0 0 100 100");
    milkSvg.innerHTML = `
        <defs>
            <linearGradient id="milk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffffff"/>
                <stop offset="100%" style="stop-color:#f8f8f8"/>
            </linearGradient>
        </defs>
        <path d="M35,20 C35,20 30,25 30,30 L30,75 C30,78 33,80 35,80 L65,80 C67,80 70,78 70,75 L70,30 C70,25 65,20 65,20 Z" fill="url(#milk-gradient)" stroke="#9e9e9e" stroke-width="2" />
        <path d="M35,20 L65,20" stroke="#9e9e9e" stroke-width="2" />
        <rect x="45" y="10" width="10" height="10" rx="2" fill="#e0e0e0" stroke="#9e9e9e" stroke-width="1" />
        <text x="50" y="55" font-size="14" text-anchor="middle" fill="#333">Milk</text>
        <ellipse cx="50" cy="80" rx="20" ry="2" fill="#e0e0e0" opacity="0.5" />
    `;
    ingredientsArea.appendChild(milkSvg);
    
    // Eggs
    const eggsSvg = document.createElementNS(svgNS, "svg");
    eggsSvg.setAttribute("class", "ingredient");
    eggsSvg.setAttribute("id", "eggs");
    eggsSvg.setAttribute("viewBox", "0 0 100 100");
    eggsSvg.innerHTML = `
        <defs>
            <radialGradient id="egg-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style="stop-color:#fffde7"/>
                <stop offset="100%" style="stop-color:#fff8e1"/>
            </radialGradient>
        </defs>
        <ellipse cx="35" cy="50" rx="20" ry="25" fill="url(#egg-gradient)" stroke="#e6b800" stroke-width="1" />
        <ellipse cx="65" cy="55" rx="20" ry="25" fill="url(#egg-gradient)" stroke="#e6b800" stroke-width="1" />
        <text x="50" y="45" font-size="14" text-anchor="middle" fill="#333">Eggs</text>
        <ellipse cx="50" cy="80" rx="30" ry="3" fill="#e0e0e0" opacity="0.5" />
    `;
    ingredientsArea.appendChild(eggsSvg);
    
    // Sugar
    const sugarSvg = document.createElementNS(svgNS, "svg");
    sugarSvg.setAttribute("class", "ingredient");
    sugarSvg.setAttribute("id", "sugar");
    sugarSvg.setAttribute("viewBox", "0 0 100 100");
    sugarSvg.innerHTML = `
        <defs>
            <linearGradient id="sugar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffffff"/>
                <stop offset="100%" style="stop-color:#f5f5f5"/>
            </linearGradient>
        </defs>
        <rect x="25" y="30" width="50" height="50" rx="5" fill="url(#sugar-gradient)" stroke="#9e9e9e" stroke-width="2" />
        <circle cx="35" cy="40" r="2" fill="#e0e0e0" />
        <circle cx="45" cy="45" r="2" fill="#e0e0e0" />
        <circle cx="55" cy="40" r="2" fill="#e0e0e0" />
        <circle cx="65" cy="45" r="2" fill="#e0e0e0" />
        <circle cx="40" cy="55" r="2" fill="#e0e0e0" />
        <circle cx="50" cy="60" r="2" fill="#e0e0e0" />
        <circle cx="60" cy="55" r="2" fill="#e0e0e0" />
        <text x="50" y="55" font-size="14" text-anchor="middle" fill="#333">Sugar</text>
        <ellipse cx="50" cy="80" rx="25" ry="2" fill="#e0e0e0" opacity="0.5" />
    `;
    ingredientsArea.appendChild(sugarSvg);
}

// Create enhanced measuring cup interaction
function createEnhancedMeasuringCupInteraction() {
    workspaceSvg.innerHTML = '';
    
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create measuring cup container
    const cupContainer = document.createElementNS(svgNS, "g");
    cupContainer.setAttribute("id", "measuring-cup-container");
    workspaceSvg.appendChild(cupContainer);
    
    // Create measuring cup
    const cup = document.createElementNS(svgNS, "path");
    cup.setAttribute("d", "M150,50 L350,50 L370,250 L130,250 Z");
    cup.setAttribute("fill", "rgba(173, 216, 230, 0.5)");
    cup.setAttribute("stroke", "#2196f3");
    cup.setAttribute("stroke-width", "2");
    cupContainer.appendChild(cup);
    
    // Create cup handle
    const handle = document.createElementNS(svgNS, "path");
    handle.setAttribute("d", "M150,100 C120,100 120,150 150,150");
    handle.setAttribute("fill", "none");
    handle.setAttribute("stroke", "#2196f3");
    handle.setAttribute("stroke-width", "8");
    cupContainer.appendChild(handle);
    
    // Create measurement lines
    const measurements = [
        { fraction: "1", y: 50 },
        { fraction: "3/4", y: 100 },
        { fraction: "1/2", y: 150 },
        { fraction: "1/4", y: 200 }
    ];
    
    measurements.forEach(m => {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "150");
        line.setAttribute("y1", m.y);
        line.setAttribute("x2", "170");
        line.setAttribute("y2", m.y);
        line.setAttribute("stroke", "#333");
        line.setAttribute("stroke-width", "1");
        cupContainer.appendChild(line);
        
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "130");
        text.setAttribute("y", m.y + 5);
        text.setAttribute("text-anchor", "end");
        text.setAttribute("font-size", "14");
        text.setAttribute("fill", "#333");
        text.textContent = m.fraction;
        cupContainer.appendChild(text);
    });
    
    // Create liquid
    const liquid = document.createElementNS(svgNS, "path");
    liquid.setAttribute("d", "M150,250 L350,250 L370,250 L130,250 Z");
    liquid.setAttribute("fill", "rgba(255, 152, 0, 0.8)");
    liquid.setAttribute("id", "liquid");
    cupContainer.appendChild(liquid);
    
    // Create slider for measuring
    const sliderGroup = document.createElementNS(svgNS, "g");
    sliderGroup.setAttribute("id", "slider-group");
    workspaceSvg.appendChild(sliderGroup);
    
    const sliderTrack = document.createElementNS(svgNS, "rect");
    sliderTrack.setAttribute("x", "400");
    sliderTrack.setAttribute("y", "50");
    sliderTrack.setAttribute("width", "10");
    sliderTrack.setAttribute("height", "200");
    sliderTrack.setAttribute("rx", "5");
    sliderTrack.setAttribute("fill", "#e0e0e0");
    sliderTrack.setAttribute("stroke", "#9e9e9e");
    sliderTrack.setAttribute("stroke-width", "1");
    sliderGroup.appendChild(sliderTrack);
    
    const sliderHandle = document.createElementNS(svgNS, "g");
    sliderHandle.setAttribute("id", "slider-handle");
    sliderHandle.setAttribute("transform", "translate(405, 250)");
    sliderHandle.setAttribute("cursor", "pointer");
    sliderGroup.appendChild(sliderHandle);
    
    const handleCircle = document.createElementNS(svgNS, "circle");
    handleCircle.setAttribute("cx", "0");
    handleCircle.setAttribute("cy", "0");
    handleCircle.setAttribute("r", "15");
    handleCircle.setAttribute("fill", "#4caf50");
    sliderHandle.appendChild(handleCircle);
    
    const handleArrow = document.createElementNS(svgNS, "path");
    handleArrow.setAttribute("d", "M-5,-5 L5,0 L-5,5 Z");
    handleArrow.setAttribute("fill", "white");
    sliderHandle.appendChild(handleArrow);
    
    // Create fraction visualization
    const fractionVisualization = document.createElementNS(svgNS, "g");
    fractionVisualization.setAttribute("id", "fraction-visualization");
    fractionVisualization.setAttribute("transform", "translate(250, 300)");
    workspaceSvg.appendChild(fractionVisualization);
    
    const fractionCircle = document.createElementNS(svgNS, "circle");
    fractionCircle.setAttribute("cx", "0");
    fractionCircle.setAttribute("cy", "0");
    fractionCircle.setAttribute("r", "40");
    fractionCircle.setAttribute("fill", "none");
    fractionCircle.setAttribute("stroke", "#333");
    fractionCircle.setAttribute("stroke-width", "2");
    fractionVisualization.appendChild(fractionCircle);
    
    // Make slider draggable
    let isDragging = false;
    
    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const svgRect = workspaceSvg.getBoundingClientRect();
        let y = e.clientY - svgRect.top;
        
        // Constrain to slider track
        y = Math.max(50, Math.min(250, y));
        
        sliderHandle.setAttribute("transform", `translate(405, ${y})`);
        
        // Update liquid height
        const liquidHeight = 250 - y;
        const liquidY = 250 - liquidHeight;
        liquid.setAttribute("d", `M150,${liquidY} L350,${liquidY} L370,250 L130,250 Z`);
        
        // Calculate fraction
        const fullHeight = 200; // Height of measuring cup
        const fraction = liquidHeight / fullHeight;
        
        // Convert to fraction of fourths
        let denominator = 4;
        let numerator = Math.round(fraction * denominator);
        
        // Simplify if possible
        if (numerator === 0) {
            denominator = 1;
        } else if (numerator === denominator) {
            numerator = 1;
            denominator = 1;
        } else if (numerator === 2 && denominator === 4) {
            numerator = 1;
            denominator = 2;
        }
        
        // Update user answer based on the challenge
        gameState.userAnswer = {
            numerator: numerator,
            denominator: denominator
        };
        
        // Update fraction visualization
        updateFractionVisualization(numerator, denominator);
        
        updateFractionDisplay();
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Initial fraction visualization
    updateFractionVisualization(0, 1);
}

// Update fraction visualization
function updateFractionVisualization(numerator, denominator) {
    const fractionVisualization = document.getElementById('fraction-visualization');
    
    // Clear existing segments
    const existingSegments = fractionVisualization.querySelectorAll('.fraction-segment');
    existingSegments.forEach(segment => segment.remove());
    
    if (denominator === 1) {
        return; // No segments needed for whole numbers or zero
    }
    
    // Create segments
    const radius = 40;
    const centerX = 0;
    const centerY = 0;
    
    for (let i = 0; i < denominator; i++) {
        const startAngle = (i / denominator) * 2 * Math.PI;
        const endAngle = ((i + 1) / denominator) * 2 * Math.PI;
        
        const startX = centerX + radius * Math.cos(startAngle);
        const startY = centerY + radius * Math.sin(startAngle);
        
        const segment = document.createElementNS(svgNS, "path");
        segment.setAttribute("class", "fraction-segment");
        
        // Create arc path
        const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
        const pathData = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${centerX + radius * Math.cos(endAngle)} ${centerY + radius * Math.sin(endAngle)} Z`;
        
        segment.setAttribute("d", pathData);
        segment.setAttribute("stroke", "#333");
        segment.setAttribute("stroke-width", "1");
        
        // Fill selected segments
        if (i < numerator) {
            segment.setAttribute("fill", "rgba(255, 152, 0, 0.8)");
        } else {
            segment.setAttribute("fill", "none");
        }
        
        fractionVisualization.appendChild(segment);
    }
}

// Create enhanced slicing interaction
function createEnhancedSlicingInteraction() {
    workspaceSvg.innerHTML = '';
    
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create cutting board
    const cuttingBoard = document.createElementNS(svgNS, "rect");
    cuttingBoard.setAttribute("x", "100");
    cuttingBoard.setAttribute("y", "50");
    cuttingBoard.setAttribute("width", "300");
    cuttingBoard.setAttribute("height", "200");
    cuttingBoard.setAttribute("rx", "10");
    cuttingBoard.setAttribute("fill", "#8d6e63");
    cuttingBoard.setAttribute("stroke", "#5d4037");
    cuttingBoard.setAttribute("stroke-width", "2");
    workspaceSvg.appendChild(cuttingBoard);
    
    // Create wood grain pattern
    for (let i = 0; i < 10; i++) {
        const grainLine = document.createElementNS(svgNS, "path");
        const yPos = 70 + i * 20;
        grainLine.setAttribute("d", `M100,${yPos} Q250,${yPos + 10} 400,${yPos}`);
        grainLine.setAttribute("fill", "none");
        grainLine.setAttribute("stroke", "#6d4c41");
        grainLine.setAttribute("stroke-width", "1");
        grainLine.setAttribute("opacity", "0.5");
        workspaceSvg.appendChild(grainLine);
    }
    
    // Create food item to slice
    const foodGroup = document.createElementNS(svgNS, "g");
    foodGroup.setAttribute("id", "food-group");
    foodGroup.setAttribute("transform", "translate(250, 150)");
    workspaceSvg.appendChild(foodGroup);
    
    if (challenge.ingredient === "eggs") {
        // Create egg
        const egg1 = document.createElementNS(svgNS, "ellipse");
        egg1.setAttribute("cx", "-30");
        egg1.setAttribute("cy", "0");
        egg1.setAttribute("rx", "25");
        egg1.setAttribute("ry", "35");
        egg1.setAttribute("fill", "#fff8e1");
        egg1.setAttribute("stroke", "#e6b800");
        egg1.setAttribute("stroke-width", "1");
        egg1.setAttribute("class", "food-item");
        foodGroup.appendChild(egg1);
        
        const egg2 = document.createElementNS(svgNS, "ellipse");
        egg2.setAttribute("cx", "30");
        egg2.setAttribute("cy", "0");
        egg2.setAttribute("rx", "25");
        egg2.setAttribute("ry", "35");
        egg2.setAttribute("fill", "#fff8e1");
        egg2.setAttribute("stroke", "#e6b800");
        egg2.setAttribute("stroke-width", "1");
        egg2.setAttribute("class", "food-item");
        foodGroup.appendChild(egg2);
    } else {
        // Create generic circular food
        const foodItem = document.createElementNS(svgNS, "circle");
        foodItem.setAttribute("cx", "0");
        foodItem.setAttribute("cy", "0");
        foodItem.setAttribute("r", "70");
        foodItem.setAttribute("fill", "#fff8e1");
        foodItem.setAttribute("stroke", "#e6b800");
        foodItem.setAttribute("stroke-width", "2");
        foodItem.setAttribute("class", "food-item");
        foodGroup.appendChild(foodItem);
        
        // Add text label
        const foodLabel = document.createElementNS(svgNS, "text");
        foodLabel.setAttribute("x", "0");
        foodLabel.setAttribute("y", "0");
        foodLabel.setAttribute("text-anchor", "middle");
        foodLabel.setAttribute("dominant-baseline", "middle");
        foodLabel.setAttribute("font-size", "20");
        foodLabel.setAttribute("fill", "#333");
        foodLabel.textContent = challenge.ingredient;
        foodGroup.appendChild(foodLabel);
    }
    
    // Create knife visual
    const knifeGroup = document.createElementNS(svgNS, "g");
    knifeGroup.setAttribute("id", "knife-visual");
    knifeGroup.setAttribute("transform", "translate(400, 100)");
    knifeGroup.setAttribute("opacity", "0");
    workspaceSvg.appendChild(knifeGroup);
    
    const knifeHandle = document.createElementNS(svgNS, "rect");
    knifeHandle.setAttribute("x", "0");
    knifeHandle.setAttribute("y", "0");
    knifeHandle.setAttribute("width", "40");
    knifeHandle.setAttribute("height", "10");
    knifeHandle.setAttribute("rx", "2");
    knifeHandle.setAttribute("fill", "#8d6e63");
    knifeHandle.setAttribute("stroke", "#5d4037");
    knifeHandle.setAttribute("stroke-width", "1");
    knifeGroup.appendChild(knifeHandle);
    
    const knifeBlade = document.createElementNS(svgNS, "path");
    knifeBlade.setAttribute("d", "M40,0 L80,-10 L80,20 L40,10 Z");
    knifeBlade.setAttribute("fill", "#e0e0e0");
    knifeBlade.setAttribute("stroke", "#9e9e9e");
    knifeBlade.setAttribute("stroke-width", "1");
    knifeGroup.appendChild(knifeBlade);
    
    // Create slicing guides
    const sliceOptions = [2, 3, 4, 6, 8];
    let yPos = 270;
    
    sliceOptions.forEach(slices => {
        const sliceButton = document.createElementNS(svgNS, "rect");
        sliceButton.setAttribute("x", 50 + (slices - 2) * 80);
        sliceButton.setAttribute("y", yPos);
        sliceButton.setAttribute("width", "60");
        sliceButton.setAttribute("height", "25");
        sliceButton.setAttribute("rx", "5");
        sliceButton.setAttribute("fill", "#4caf50");
        sliceButton.setAttribute("cursor", "pointer");
        sliceButton.setAttribute("data-slices", slices);
        sliceButton.addEventListener('click', handleEnhancedSliceButtonClick);
        workspaceSvg.appendChild(sliceButton);
        
        const sliceText = document.createElementNS(svgNS, "text");
        sliceText.setAttribute("x", 80 + (slices - 2) * 80);
        sliceText.setAttribute("y", yPos + 17);
        sliceText.setAttribute("text-anchor", "middle");
        sliceText.setAttribute("fill", "white");
        sliceText.setAttribute("pointer-events", "none");
        sliceText.textContent = `${slices} slices`;
        workspaceSvg.appendChild(sliceText);
    });
    
    // Create fraction visualization
    const fractionVisualization = document.createElementNS(svgNS, "g");
    fractionVisualization.setAttribute("id", "fraction-visualization");
    fractionVisualization.setAttribute("transform", "translate(450, 150)");
    workspaceSvg.appendChild(fractionVisualization);
    
    const fractionCircle = document.createElementNS(svgNS, "circle");
    fractionCircle.setAttribute("cx", "0");
    fractionCircle.setAttribute("cy", "0");
    fractionCircle.setAttribute("r", "40");
    fractionCircle.setAttribute("fill", "none");
    fractionCircle.setAttribute("stroke", "#333");
    fractionCircle.setAttribute("stroke-width", "2");
    fractionVisualization.appendChild(fractionCircle);
}

// Handle enhanced slice button click
function handleEnhancedSliceButtonClick(e) {
    const slices = parseInt(e.target.getAttribute("data-slices"));
    
    // Clear existing slice lines
    const existingLines = workspaceSvg.querySelectorAll(".slice-line");
    existingLines.forEach(line => line.remove());
    
    // Get food group
    const foodGroup = document.getElementById('food-group');
    
    // Animate knife
    const knifeVisual = document.getElementById('knife-visual');
    knifeVisual.setAttribute("opacity", "1");
    
    // Draw slice lines and animate cutting
    for (let i = 1; i < slices; i++) {
        const angle = (i / slices) * Math.PI * 2;
        const x2 = Math.cos(angle) * 70;
        const y2 = Math.sin(angle) * 70;
        
        // Animate knife for each slice
        setTimeout(() => {
            // Position knife at start of cut
            knifeVisual.setAttribute("transform", `translate(250, 150) rotate(${angle * 180 / Math.PI}, 0, 0)`);
            
            // Animate knife moving across food
            const startTime = Date.now();
            const duration = 500; // ms
            
            function animateKnife() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Move knife along cutting line
                const currentX = progress * x2;
                const currentY = progress * y2;
                knifeVisual.setAttribute("transform", `translate(${250 + currentX}, ${150 + currentY}) rotate(${angle * 180 / Math.PI}, 0, 0)`);
                
                if (progress < 1) {
                    requestAnimationFrame(animateKnife);
                } else {
                    // Add permanent slice line after animation
                    const sliceLine = document.createElementNS(svgNS, "line");
                    sliceLine.setAttribute("x1", "0");
                    sliceLine.setAttribute("y1", "0");
                    sliceLine.setAttribute("x2", x2);
                    sliceLine.setAttribute("y2", y2);
                    sliceLine.setAttribute("stroke", "#f44336");
                    sliceLine.setAttribute("stroke-width", "2");
                    sliceLine.setAttribute("class", "slice-line");
                    foodGroup.appendChild(sliceLine);
                    
                    // Hide knife after all slices are done
                    if (i === slices - 1) {
                        setTimeout(() => {
                            knifeVisual.setAttribute("opacity", "0");
                        }, 500);
                    }
                }
            }
            
            animateKnife();
        }, i * 600); // Stagger the animations
    }
    
    // Update user answer based on the challenge
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // For slicing, we're calculating the result based on the number of slices
    // and the original value
    const dividend = challenge.dividend;
    
    // Each slice represents 1/slices of the whole
    const sliceValue = {
        numerator: dividend.numerator,
        denominator: dividend.denominator * slices
    };
    
    // Simplify if possible
    gameState.userAnswer = simplifyFraction(sliceValue);
    
    // Update fraction visualization
    updateFractionVisualization(1, slices);
    
    updateFractionDisplay();
}

// Create enhanced pouring interaction
function createEnhancedPouringInteraction() {
    workspaceSvg.innerHTML = '';
    
    const challenge = gameState.challenges[gameState.currentChallenge];
    
    // Create counter surface
    const counter = document.createElementNS(svgNS, "rect");
    counter.setAttribute("x", "50");
    counter.setAttribute("y", "250");
    counter.setAttribute("width", "400");
    counter.setAttribute("height", "30");
    counter.setAttribute("fill", "#d7ccc8");
    counter.setAttribute("stroke", "#a1887f");
    counter.setAttribute("stroke-width", "2");
    workspaceSvg.appendChild(counter);
    
    // Create source container group
    const sourceGroup = document.createElementNS(svgNS, "g");
    sourceGroup.setAttribute("id", "source-container");
    sourceGroup.setAttribute("transform", "translate(150, 125) rotate(0)");
    workspaceSvg.appendChild(sourceGroup);
    
    // Create source container
    const sourceContainer = document.createElementNS(svgNS, "path");
    sourceContainer.setAttribute("d", "M-50,-75 L50,-75 L70,75 L-70,75 Z");
    sourceContainer.setAttribute("fill", "rgba(173, 216, 230, 0.5)");
    sourceContainer.setAttribute("stroke", "#2196f3");
    sourceContainer.setAttribute("stroke-width", "2");
    sourceGroup.appendChild(sourceContainer);
    
    // Create source spout
    const sourceSpout = document.createElementNS(svgNS, "path");
    sourceSpout.setAttribute("d", "M50,-75 L90,-45 L90,-15 L70,75 L70,75 Z");
    sourceSpout.setAttribute("fill", "rgba(173, 216, 230, 0.5)");
    sourceSpout.setAttribute("stroke", "#2196f3");
    sourceSpout.setAttribute("stroke-width", "2");
    sourceGroup.appendChild(sourceSpout);
    
    // Create measurement lines for source
    const measurements = [
        { fraction: "1", y: -75 },
        { fraction: "3/4", y: -35 },
        { fraction: "1/2", y: 0 },
        { fraction: "1/4", y: 35 }
    ];
    
    measurements.forEach(m => {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "-50");
        line.setAttribute("y1", m.y);
        line.setAttribute("x2", "-30");
        line.setAttribute("y2", m.y);
        line.setAttribute("stroke", "#333");
        line.setAttribute("stroke-width", "1");
        sourceGroup.appendChild(line);
        
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "-60");
        text.setAttribute("y", m.y + 5);
        text.setAttribute("text-anchor", "end");
        text.setAttribute("font-size", "14");
        text.setAttribute("fill", "#333");
        text.textContent = m.fraction;
        sourceGroup.appendChild(text);
    });
    
    // Create source liquid
    const sourceLiquid = document.createElementNS(svgNS, "path");
    sourceLiquid.setAttribute("d", "M-50,0 L50,0 L70,75 L-70,75 Z");
    sourceLiquid.setAttribute("fill", "rgba(255, 152, 0, 0.8)");
    sourceLiquid.setAttribute("id", "source-liquid");
    sourceGroup.appendChild(sourceLiquid);
    
    // Create target container
    const targetContainer = document.createElementNS(svgNS, "rect");
    targetContainer.setAttribute("x", "300");
    targetContainer.setAttribute("y", "100");
    targetContainer.setAttribute("width", "100");
    targetContainer.setAttribute("height", "150");
    targetContainer.setAttribute("rx", "5");
    targetContainer.setAttribute("fill", "rgba(173, 216, 230, 0.5)");
    targetContainer.setAttribute("stroke", "#2196f3");
    targetContainer.setAttribute("stroke-width", "2");
    workspaceSvg.appendChild(targetContainer);
    
    // Create target liquid
    const targetLiquid = document.createElementNS(svgNS, "rect");
    targetLiquid.setAttribute("x", "300");
    targetLiquid.setAttribute("y", "250");
    targetLiquid.setAttribute("width", "100");
    targetLiquid.setAttribute("height", "0");
    targetLiquid.setAttribute("fill", "rgba(255, 152, 0, 0.8)");
    targetLiquid.setAttribute("id", "target-liquid");
    workspaceSvg.appendChild(targetLiquid);
    
    // Create measurement lines for target
    for (let i = 1; i <= 4; i++) {
        const y = 250 - (i * 37.5);
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", "300");
        line.setAttribute("y1", y);
        line.setAttribute("x2", "310");
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "#333");
        line.setAttribute("stroke-width", "1");
        workspaceSvg.appendChild(line);
        
        const text = document.createElementNS(svgNS, "text");
        text.setAttribute("x", "290");
        text.setAttribute("y", y + 5);
        text.setAttribute("text-anchor", "end");
        text.setAttribute("font-size", "14");
        text.setAttribute("fill", "#333");
        text.textContent = i === 4 ? "1" : `${i}/4`;
        workspaceSvg.appendChild(text);
    }
    
    // Create pouring animation elements
    const pourStream = document.createElementNS(svgNS, "path");
    pourStream.setAttribute("d", "M0,0 C0,0 0,0 0,0");
    pourStream.setAttribute("fill", "none");
    pourStream.setAttribute("stroke", "rgba(255, 152, 0, 0.8)");
    pourStream.setAttribute("stroke-width", "10");
    pourStream.setAttribute("stroke-linecap", "round");
    pourStream.setAttribute("id", "pour-stream");
    pourStream.setAttribute("opacity", "0");
    workspaceSvg.appendChild(pourStream);
    
    // Create droplets container
    const dropletsContainer = document.createElementNS(svgNS, "g");
    dropletsContainer.setAttribute("id", "droplets-container");
    workspaceSvg.appendChild(dropletsContainer);
    
    // Create rotation control
    const rotationControl = document.createElementNS(svgNS, "circle");
    rotationControl.setAttribute("cx", "150");
    rotationControl.setAttribute("cy", "250");
    rotationControl.setAttribute("r", "15");
    rotationControl.setAttribute("fill", "#4caf50");
    rotationControl.setAttribute("cursor", "pointer");
    rotationControl.setAttribute("id", "rotation-control");
    workspaceSvg.appendChild(rotationControl);
    
    // Create control arrow
    const controlArrow = document.createElementNS(svgNS, "path");
    controlArrow.setAttribute("d", "M145,245 L155,250 L145,255 Z");
    controlArrow.setAttribute("fill", "white");
    controlArrow.setAttribute("pointer-events", "none");
    workspaceSvg.appendChild(controlArrow);
    
    // Create fraction visualization
    const fractionVisualization = document.createElementNS(svgNS, "g");
    fractionVisualization.setAttribute("id", "fraction-visualization");
    fractionVisualization.setAttribute("transform", "translate(450, 150)");
    workspaceSvg.appendChild(fractionVisualization);
    
    const fractionCircle = document.createElementNS(svgNS, "circle");
    fractionCircle.setAttribute("cx", "0");
    fractionCircle.setAttribute("cy", "0");
    fractionCircle.setAttribute("r", "40");
    fractionCircle.setAttribute("fill", "none");
    fractionCircle.setAttribute("stroke", "#333");
    fractionCircle.setAttribute("stroke-width", "2");
    fractionVisualization.appendChild(fractionCircle);
    
    // Make rotation control draggable
    let isDragging = false;
    let sourceLevel = 75; // Initial liquid level in source (0 to 150)
    let targetLevel = 0; // Initial liquid level in target (0 to 150)
    let isPouring = false;
    
    rotationControl.addEventListener('mousedown', (e) => {
        isDragging = true;
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const svgRect = workspaceSvg.getBoundingClientRect();
        const centerX = svgRect.left + 150;
        const centerY = svgRect.top + 125;
        
        // Calculate angle
        let angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
        
        // Constrain angle to pouring range (-45 to 45 degrees)
        angle = Math.max(-45, Math.min(45, angle));
        
        // Update container rotation
        sourceGroup.setAttribute("transform", `translate(150, 125) rotate(${angle})`);
        
        // Update control arrow
        controlArrow.setAttribute("transform", `translate(150, 250) rotate(${angle})`);
        
        // Simulate pouring when tilted enough
        if (angle > 30 && sourceLevel > 0 && !isPouring) {
            isPouring = true;
            animatePouring();
        } else if (angle <= 30) {
            isPouring = false;
            pourStream.setAttribute("opacity", "0");
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        isPouring = false;
        pourStream.setAttribute("opacity", "0");
    });
    
    // Animate pouring
    function animatePouring() {
        if (!isPouring || sourceLevel <= 0) {
            pourStream.setAttribute("opacity", "0");
            return;
        }
        
        // Calculate pour stream path
        const startX = 220; // Spout tip x
        const startY = 110; // Spout tip y
        const endX = 350; // Target container center
        const endY = 250 - targetLevel; // Top of liquid in target
        
        // Create curved path for pour stream
        const controlX = (startX + endX) / 2;
        const controlY = startY + 20;
        
        pourStream.setAttribute("d", `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`);
        pourStream.setAttribute("opacity", "1");
        
        // Create droplet effect
        createDroplet(endX, endY);
        
        // Decrease source level
        sourceLevel -= 1;
        
        // Update source liquid path
        const sourceY = -75 + (150 - sourceLevel);
        sourceLiquid.setAttribute("d", `M-50,${sourceY} L50,${sourceY} L70,75 L-70,75 Z`);
        
        // Increase target level
        targetLevel += 1;
        
        // Update target liquid
        targetLiquid.setAttribute("y", 250 - targetLevel);
        targetLiquid.setAttribute("height", targetLevel);
        
        // Calculate fraction in target
        const fullHeight = 150; // Height of target container
        const fraction = targetLevel / fullHeight;
        
        // Convert to fraction of fourths
        let denominator = 4;
        let numerator = Math.round(fraction * denominator);
        
        // Simplify if possible
        if (numerator === 0) {
            denominator = 1;
        } else if (numerator === denominator) {
            numerator = 1;
            denominator = 1;
        } else if (numerator === 2 && denominator === 4) {
            numerator = 1;
            denominator = 2;
        }
        
        // Update user answer
        gameState.userAnswer = {
            numerator: numerator,
            denominator: denominator
        };
        
        // Update fraction visualization
        updateFractionVisualization(numerator, denominator);
        
        updateFractionDisplay();
        
        // Continue animation
        if (isPouring && sourceLevel > 0) {
            setTimeout(animatePouring, 50);
        } else {
            pourStream.setAttribute("opacity", "0");
        }
    }
    
    // Create droplet effect
    function createDroplet(x, y) {
        const droplet = document.createElementNS(svgNS, "circle");
        droplet.setAttribute("cx", x);
        droplet.setAttribute("cy", y);
        droplet.setAttribute("r", "5");
        droplet.setAttribute("fill", "rgba(255, 152, 0, 0.8)");
        dropletsContainer.appendChild(droplet);
        
        // Animate droplet splash
        const startTime = Date.now();
        const duration = 500; // ms
        
        function animateDroplet() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Expand and fade out
            const radius = 5 + progress * 10;
            const opacity = 0.8 * (1 - progress);
            
            droplet.setAttribute("r", radius);
            droplet.setAttribute("opacity", opacity);
            
            if (progress < 1) {
                requestAnimationFrame(animateDroplet);
            } else {
                droplet.remove();
            }
        }
        
        animateDroplet();
    }
}

// Initialize enhanced visuals
function initEnhancedVisuals() {
    // Create detailed tools and ingredients
    createDetailedTools();
    createDetailedIngredients();
    
    // Add event listeners for enhanced interactions
    addEnhancedEventListeners();
}

// Add event listeners for enhanced interactions
function addEnhancedEventListeners() {
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
                    createEnhancedMeasuringCupInteraction();
                    break;
                case 'knife':
                    gameState.interactionMode = 'slice';
                    createEnhancedSlicingInteraction();
                    break;
                case 'pouring-jug':
                    gameState.interactionMode = 'pour';
                    createEnhancedPouringInteraction();
                    break;
                case 'scale':
                    gameState.interactionMode = 'measure';
                    createEnhancedMeasuringCupInteraction();
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
