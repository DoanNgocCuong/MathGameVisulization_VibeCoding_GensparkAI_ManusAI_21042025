# JavaScript Structure for "Đầu Bếp Phân Số" (Fraction Chef) Game

## 1. Main Module Structure

### `main.js`
- Entry point for the application
- Initializes all game components
- Sets up event listeners for window load and resize
- Manages game state transitions between Present, Practice, and Produce phases
- Coordinates communication between modules

### `config.js`
- Contains game configuration parameters
- Defines difficulty levels and thresholds
- Stores SVG paths and element dimensions
- Defines animation durations and easing functions
- Contains text content for instructions and feedback

## 2. Core Measurement System

### `measurementSystem.js`
- Core gameplay mechanics for the measuring system

#### Initialization Functions
- `initMeasuringSystem()`: Sets up the measuring cup, ingredient container, and measurement markers
- `createMeasurementMarkers()`: Generates SVG markers for fraction measurements (1/4, 1/3, 1/2, 2/3, 3/4)
- `setupIngredientContainer()`: Creates the ingredient container with tilt functionality

#### Interaction Functions
- `handleContainerTilt()`: Processes mouse movement to tilt the ingredient container
- `calculatePourRate()`: Determines ingredient flow rate based on tilt angle
- `updateIngredientLevel()`: Modifies the ingredient level in the measuring cup based on pour rate
- `detectMeasurementAccuracy()`: Compares current level with target measurement
- `resetMeasurement()`: Clears the measuring cup for a new attempt

#### Physics Simulation
- `simulateFluidFlow()`: Creates realistic pouring animation
- `updateFluidVisualization()`: Modifies SVG paths to represent fluid levels
- `calculateFluidDynamics()`: Handles fluid behavior during pouring

## 3. Event Handling

### `eventHandler.js`
- Centralizes all event handling for the game

#### Mouse Events
- `setupMouseEvents()`: Registers all mouse event listeners
- `handleMouseDown()`: Detects when user starts interaction with container
- `handleMouseMove()`: Tracks mouse movement to control tilt angle
- `handleMouseUp()`: Detects when user releases the container
- `preventDefaultBehaviors()`: Stops unwanted browser behaviors during interaction

#### Keyboard Events
- `setupKeyboardEvents()`: Registers keyboard event listeners
- `handleKeyPress()`: Processes keyboard inputs for accessibility
- `handleResetKey()`: Implements reset functionality via keyboard

#### Window Events
- `handleResize()`: Adjusts game elements when browser window changes size
- `handleVisibilityChange()`: Manages game state when tab becomes inactive/active

## 4. Dynamic UI Updates

### `uiManager.js`
- Handles all visual updates and animations

#### SVG Manipulation
- `createSVGElement()`: Generates SVG elements for the game interface
- `updateSVGAttributes()`: Modifies SVG properties during gameplay
- `animateSVGElement()`: Creates smooth transitions for visual elements
- `updateMeasurementDisplay()`: Shows current measurement level in the cup

#### Chef Character
- `updateChefExpression()`: Changes chef's facial expression based on accuracy
- `displayChefGuidance()`: Shows chef's instructional gestures
- `animateChefReaction()`: Creates chef's reaction to player actions

#### Visual Feedback
- `highlightTargetMeasurement()`: Emphasizes the current target measurement
- `showAccuracyIndicator()`: Displays visual cue for measurement precision
- `createPouringEffect()`: Generates visual effect for ingredient pouring
- `pulseElement()`: Creates attention-drawing animation for important elements

## 5. State Management

### `stateManager.js`
- Manages the game's state and progression

#### Game States
- `initGameState()`: Sets up initial game state
- `getCurrentState()`: Returns the current game state
- `transitionToState()`: Handles state transitions with proper cleanup and initialization
- `saveGameProgress()`: Stores current progress in local storage

#### Phase Management
- `setupPresentPhase()`: Initializes the tutorial/demonstration phase
- `setupPracticePhase()`: Sets up guided practice activities
- `setupProducePhase()`: Prepares the creative application phase
- `trackPhaseProgress()`: Monitors player advancement through phases

#### Data Tracking
- `recordMeasurementAttempt()`: Stores player's measurement accuracy
- `calculatePerformanceMetrics()`: Analyzes player performance data
- `determineNextChallenge()`: Selects appropriate next challenge based on performance

## 6. Feedback Mechanism

### `feedbackSystem.js`
- Provides player feedback on actions and progress

#### Accuracy Feedback
- `evaluateMeasurementAccuracy()`: Determines how close the measurement is to target
- `generateAccuracyMessage()`: Creates appropriate feedback text based on accuracy
- `categorizeAccuracy()`: Classifies measurement as "Too Little", "Almost Right", "Perfect", or "Too Much"
- `suggestCorrection()`: Provides hints for improving accuracy

#### Visual Feedback
- `showFeedbackAnimation()`: Displays animation based on measurement accuracy
- `highlightMeasurementDifference()`: Visually indicates the gap between actual and target
- `pulseSuccessIndicator()`: Creates success animation when measurement is correct
- `showErrorIndication()`: Displays visual cue when measurement is incorrect

#### Instructional Feedback
- `displayHelpfulTip()`: Shows contextual hint based on player's pattern of errors
- `demonstrateCorrectTechnique()`: Provides visual guide for proper pouring
- `offerEncouragement()`: Gives motivational feedback after multiple attempts

## 7. Utility Functions

### `utils.js`
- Contains helper functions used across modules

#### Mathematical Utilities
- `convertFractionToDecimal()`: Converts fraction strings to decimal values
- `calculatePercentageError()`: Determines error percentage in measurements
- `mapRange()`: Maps values from one range to another
- `roundToFraction()`: Rounds decimal values to nearest fraction

#### DOM Utilities
- `createElement()`: Creates and configures DOM elements
- `getElementPosition()`: Retrieves element coordinates
- `setElementTransform()`: Applies CSS transforms to elements
- `animateProperty()`: Creates smooth transitions between property values

#### Debug Utilities
- `logGameState()`: Outputs current game state for debugging
- `visualizeHitAreas()`: Shows interactive areas during development
- `measurePerformance()`: Tracks function execution time
- `toggleDebugMode()`: Enables/disables development helpers

## 8. Module Integration

### `moduleLoader.js`
- Handles dependency management and module communication

#### Module Registration
- `registerModule()`: Adds module to the game system
- `initializeModules()`: Initializes all registered modules in correct order
- `getModuleReference()`: Provides access to specific module functionality
- `checkDependencies()`: Verifies all required modules are available

#### Communication
- `setupEventBus()`: Creates publish/subscribe system for inter-module communication
- `publishEvent()`: Broadcasts events to all subscribed modules
- `subscribeToEvent()`: Registers module to receive specific events
- `unsubscribeFromEvent()`: Removes event subscription

## 9. Initialization and Bootstrap

### `bootstrap.js`
- Handles application startup sequence

#### Loading Process
- `initApplication()`: Entry point for application startup
- `loadConfiguration()`: Retrieves and applies configuration settings
- `createGameElements()`: Generates required DOM elements
- `attachEventListeners()`: Sets up initial event handlers

#### System Checks
- `checkBrowserCompatibility()`: Verifies browser supports required features
- `optimizeForDevice()`: Adjusts settings based on device capabilities
- `setupErrorHandling()`: Configures error tracking and reporting
- `initializeDebugTools()`: Sets up development tools when needed
