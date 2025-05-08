# JavaScript Structure for "Pizza Phân Số" Game

## 1. Interactions

### 1.1 Pizza Canvas Interaction
- **Description**: Handles how users interact with the pizza canvas to create cutting lines
- **Components**:
  - Canvas initialization and setup
  - Drawing context configuration
  - Touch/mouse position tracking
  - Line drawing mechanics
  - Cutting line visualization
  - Pizza slice detection algorithm

### 1.2 User Input Processing
- **Description**: Processes and validates user inputs for creating pizza cuts
- **Components**:
  - Start point detection
  - End point detection
  - Line trajectory calculation
  - Input validation (ensuring lines pass through center)
  - Multi-touch/click handling

### 1.3 Game Controls
- **Description**: Manages game control elements outside the main pizza canvas
- **Components**:
  - Level selection interface
  - Reset/restart functionality
  - Help/instruction toggle
  - Game progression controls

## 2. Event Handling

### 2.1 Mouse/Touch Events
- **Description**: Captures and processes all mouse and touch interactions
- **Components**:
  - mousedown/touchstart event listeners
  - mousemove/touchmove event listeners
  - mouseup/touchend event listeners
  - Event coordinate normalization
  - Preventing default behaviors
  - Touch-to-mouse event translation

### 2.2 Game State Events
- **Description**: Handles events related to changes in game state
- **Components**:
  - Level start event
  - Level completion event
  - Game over event
  - Score update event
  - Timer events

### 2.3 UI Control Events
- **Description**: Manages events for UI controls outside the game canvas
- **Components**:
  - Button click handlers
  - Menu toggle events
  - Instruction panel events
  - Level selection events

## 3. Dynamic UI Updates

### 3.1 Pizza Rendering
- **Description**: Manages the visual representation of the pizza and cutting lines
- **Components**:
  - Initial pizza drawing
  - Line animation rendering
  - Slice highlighting
  - Visual feedback for correct/incorrect cuts
  - Canvas clearing and redrawing

### 3.2 Game Status Display
- **Description**: Updates game status information on the UI
- **Components**:
  - Current level indicator
  - Fraction requirement display
  - Score display
  - Timer display
  - Progress indicator

### 3.3 Transition Effects
- **Description**: Handles visual transitions between game states
- **Components**:
  - Level transition animations
  - Success/failure animations
  - Instruction overlay transitions
  - Pizza reset animation
  - Celebratory effects for level completion

## 4. State Management

### 4.1 Game State
- **Description**: Manages the overall state of the game
- **Components**:
  - Current level tracking
  - Game phase tracking (menu, playing, paused, completed)
  - Score management
  - Timer state
  - Game history for undo functionality

### 4.2 Pizza State
- **Description**: Tracks the current state of the pizza
- **Components**:
  - Current cuts/lines array
  - Resulting slice calculation
  - Slice equality verification
  - Required fraction tracking
  - Pizza reset functionality

### 4.3 Player Progress
- **Description**: Manages player progression through the game
- **Components**:
  - Level unlocking mechanism
  - Achievement tracking
  - Performance metrics
  - Difficulty adjustment
  - Session persistence

## 5. Feedback Mechanism

### 5.1 Visual Feedback
- **Description**: Provides visual cues to player actions
- **Components**:
  - Correct/incorrect cut indication
  - Slice highlighting on hover
  - Visual cues for equal/unequal slices
  - Progress visualization
  - Success/failure animations

### 5.2 Audio Feedback
- **Description**: Manages sound effects and audio cues
- **Components**:
  - Cutting sound effects
  - Success/failure sounds
  - Background music control
  - Level completion sounds
  - Audio mute/unmute functionality

### 5.3 Instructional Feedback
- **Description**: Provides guidance and hints to the player
- **Components**:
  - Hint system for struggling players
  - Tutorial overlay for new concepts
  - Error messages for incorrect actions
  - Congratulatory messages for success
  - Contextual help based on player actions

## 6. Core Game Logic

### 6.1 Fraction Verification
- **Description**: Core algorithm to verify if pizza is cut into equal fractions
- **Components**:
  - Angle calculation between cuts
  - Area calculation for slices
  - Equality threshold settings
  - Fraction comparison logic
  - Mathematical precision handling

### 6.2 Level Progression
- **Description**: Manages the progression and difficulty curve
- **Components**:
  - Level requirements definition
  - Difficulty scaling
  - New concept introduction
  - Challenge variation
  - Completion criteria
