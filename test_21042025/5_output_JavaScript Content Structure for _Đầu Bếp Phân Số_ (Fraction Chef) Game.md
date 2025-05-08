# JavaScript Content Structure for "Đầu Bếp Phân Số" (Fraction Chef) Game

## 1. Interactions

### 1.1 Measurement & Pouring Interactions
- **DragAndDropSystem**
  - Handles ingredient dragging from inventory to measuring tools
  - Implements physics-based pouring mechanics with tilt sensitivity
  - Controls ingredient behavior (liquid flow, powder falling)

### 1.2 Cutting & Division Interactions
- **CuttingSystem**
  - Processes touch/mouse drawing for cutting paths
  - Implements division algorithms for equal and custom portions
  - Manages slice selection and movement to plates/bowls

### 1.3 Mixing & Combining Interactions
- **MixingSystem**
  - Handles circular motion detection for mixing ingredients
  - Implements ratio-based combination mechanics
  - Controls visual transformation of mixed ingredients

### 1.4 Temperature & Timing Interactions
- **CookingControlSystem**
  - Manages slider controls for temperature adjustments
  - Implements fraction-based timer mechanics
  - Handles cooking state transitions based on time and temperature

### 1.5 Recipe Building Interactions
- **RecipeEditorSystem**
  - Processes ingredient selection and quantity adjustments
  - Implements recipe scaling algorithms (multiplying/dividing quantities)
  - Manages recipe comparison visualization

## 2. Event Handling

### 2.1 Input Event Management
- **InputController**
  - Centralizes touch, mouse, and keyboard event handling
  - Implements gesture recognition (swipe, pinch, rotate)
  - Manages input priority and conflict resolution

### 2.2 Game Phase Events
- **GamePhaseManager**
  - Handles transitions between Present, Practice, and Produce phases
  - Manages tutorial sequence events and progression
  - Controls challenge start/end events

### 2.3 Achievement Events
- **AchievementSystem**
  - Listens for skill mastery events
  - Processes milestone completion triggers
  - Manages badge and reward distribution events

### 2.4 Social Interaction Events
- **SocialController**
  - Handles recipe sharing events
  - Manages challenge invitation and acceptance
  - Processes collaborative cooking session events

### 2.5 Error and Correction Events
- **ErrorHandlingSystem**
  - Detects measurement errors and precision issues
  - Triggers hint and correction events
  - Manages retry and progression blocking events

## 3. Dynamic UI Updates

### 3.1 Measurement Visualization
- **MeasurementUIController**
  - Updates measuring tool visuals based on content level
  - Renders fraction markings and highlights
  - Animates liquid levels and powder volumes

### 3.2 Progress Indicators
- **ProgressVisualization**
  - Updates recipe completion progress bars
  - Renders skill mastery indicators
  - Animates achievement unlocks and level progression

### 3.3 Character Feedback Display
- **ChefCharacterController**
  - Updates Chef's expressions and animations based on player actions
  - Manages speech bubble content and timing
  - Controls character positioning for optimal guidance

### 3.4 Environmental Changes
- **KitchenEnvironmentController**
  - Updates kitchen state based on game progress
  - Manages unlocked tool appearances and availability
  - Controls ambient effects (steam, smoke, lighting)

### 3.5 Adaptive Difficulty Visualization
- **DifficultyUIController**
  - Updates challenge complexity indicators
  - Renders available help options based on performance
  - Animates difficulty transitions

## 4. State Management

### 4.1 Player Progress State
- **PlayerProgressManager**
  - Maintains skill mastery levels and unlocked content
  - Tracks completed challenges and achievements
  - Manages player profile and customization state

### 4.2 Game Session State
- **GameSessionController**
  - Maintains current game phase and challenge state
  - Tracks active ingredients and tools in use
  - Manages time remaining and score accumulation

### 4.3 Recipe State
- **RecipeStateManager**
  - Maintains current recipe requirements and completion status
  - Tracks ingredient quantities and combinations
  - Manages recipe variations and customizations

### 4.4 Educational Content State
- **LearningProgressTracker**
  - Maintains fraction concept understanding metrics
  - Tracks tutorial completion and help usage
  - Manages difficulty adaptation parameters

### 4.5 Persistence System
- **SaveStateManager**
  - Handles local storage of game progress
  - Implements cloud synchronization for cross-device play
  - Manages teacher dashboard data collection

## 5. Feedback Mechanism

### 5.1 Visual Feedback System
- **VisualFeedbackController**
  - Manages ingredient highlighting for correct/incorrect actions
  - Controls success/failure animations and effects
  - Implements precision indicator visualizations

### 5.2 Audio Feedback System
- **AudioFeedbackManager**
  - Controls sound effects for actions and outcomes
  - Manages verbal encouragement and instruction timing
  - Implements adaptive audio based on performance

### 5.3 Haptic Feedback System
- **HapticController**
  - Manages device vibration for touch interactions
  - Implements varying feedback patterns for different actions
  - Controls intensity based on action precision

### 5.4 Guidance System
- **GuidanceController**
  - Manages hint timing and content
  - Controls visual guides (arrows, highlights, demonstrations)
  - Implements adaptive help based on error patterns

### 5.5 Reward System
- **RewardManager**
  - Controls point distribution and multipliers
  - Manages badge and achievement notifications
  - Implements progression unlocks and special rewards
