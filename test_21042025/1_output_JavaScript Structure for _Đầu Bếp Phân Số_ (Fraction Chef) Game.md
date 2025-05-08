# JavaScript Structure for "Đầu Bếp Phân Số" (Fraction Chef) Game

## 1. Core Module Structure

### main.js
- Entry point for the application
- Initializes game environment and core modules
- Sets up event listeners for game start/pause/resume
- Manages game lifecycle (loading, initialization, gameplay, end)
- Coordinates communication between modules

### config.js
- Game configuration parameters
- Screen resolution settings
- Difficulty level parameters
- Asset paths and resource definitions
- Sound and visual effect settings
- Stage progression thresholds

### gameState.js
- Central state management
- Current game stage tracking
- Player progress and score management
- Game session data (current fraction challenges, completed tasks)
- Timer and countdown management
- Achievement and unlocked content tracking

## 2. Interactions Module

### interactionManager.js
- Centralized handler for all user interactions
- Input detection (touch, mouse, keyboard)
- Gesture recognition system (drag, swipe, pinch, rotate)
- Input validation and processing
- Accessibility features implementation
- Device capability detection and adaptation

### dragDropSystem.js
- Draggable element creation and management
- Drop zone definition and validation
- Collision detection between dragged items and targets
- Snap-to-grid functionality for precise placement
- Animation handling for dragged objects
- Physics simulation for realistic movement

### sliceSystem.js
- Virtual cutting mechanics implementation
- Cutting path tracking and validation
- Division of objects into equal/unequal parts
- Fraction representation of cut objects
- Visual feedback for cutting precision
- Cut animation and effects

### pourSystem.js
- Liquid pouring simulation
- Volume calculation and fraction representation
- Flow rate control based on tilt angle
- Container filling visualization
- Mixing of different liquids with color blending
- Measurement precision feedback

### measureSystem.js
- Measurement tools simulation (cups, spoons, scales)
- Fraction markings visualization
- Precision detection for measurements
- Conversion between different measurement units
- Visual feedback for measurement accuracy
- Haptic feedback integration for mobile devices

## 3. Event Handling

### eventBus.js
- Centralized event management system
- Publisher-subscriber pattern implementation
- Event registration and deregistration
- Event prioritization and queuing
- Custom event creation for game-specific actions
- Cross-module communication facilitation

### inputEvents.js
- Raw input event handling (touch, click, key press)
- Input normalization across devices
- Multi-touch support for collaborative play
- Input debouncing and throttling
- Long-press and double-tap detection
- Swipe direction and velocity calculation

### gameEvents.js
- Game-specific event definitions
- Stage transition events
- Challenge completion events
- Achievement unlocked events
- Timer and countdown events
- Error and correction events

### recipeEvents.js
- Recipe-related event handling
- Ingredient addition events
- Measurement validation events
- Cooking process events
- Recipe completion events
- Recipe sharing and saving events

### audioEvents.js
- Sound effect trigger events
- Background music control
- Volume adjustment events
- Mute/unmute functionality
- Audio feedback for interactions
- Contextual sound management

## 4. Dynamic UI Updates

### uiManager.js
- Overall UI state management
- Screen transitions and animations
- Modal dialog management
- Responsive layout adjustments
- UI element visibility control
- Theme and styling coordination

### animationSystem.js
- Animation queue management
- Transition effects between game states
- Character animations (chef reactions)
- Food and ingredient animations
- Celebration and feedback animations
- Animation timing and synchronization

### renderEngine.js
- Canvas/DOM rendering management
- Frame rate optimization
- Visual asset loading and caching
- Layer management for complex scenes
- Particle effects system
- Dynamic texture generation

### componentFactory.js
- UI component creation and recycling
- Template-based component generation
- Dynamic component property updates
- Component lifecycle management
- Responsive component scaling
- Accessibility attribute management

### hudElements.js
- Heads-up display management
- Score and progress indicators
- Timer and countdown displays
- Current fraction representation
- Stage and level indicators
- Hint and help system interface

## 5. State Management

### stateManager.js
- Application state architecture
- State transitions and history
- Deep state cloning and comparison
- State persistence and restoration
- Undo/redo functionality
- State validation and error recovery

### playerProgress.js
- Player achievement tracking
- Skill mastery progression
- Unlocked content management
- Learning path customization
- Performance metrics collection
- Difficulty adjustment based on performance

### saveSystem.js
- Game progress serialization
- Local storage integration
- Cloud save functionality (optional)
- Auto-save implementation
- Save slot management
- Data integrity validation

### stageManager.js
- Stage initialization and cleanup
- Stage-specific state management
- Challenge generation for each stage
- Difficulty progression between stages
- Stage completion criteria
- Transition effects between stages

### recipeManager.js
- Recipe data structure management
- Dynamic recipe generation
- Recipe difficulty classification
- Ingredient and step tracking
- Recipe completion validation
- Custom recipe saving and sharing

## 6. Feedback Mechanism

### feedbackManager.js
- Centralized feedback coordination
- Multi-modal feedback integration
- Feedback timing and prioritization
- Feedback intensity scaling
- Contextual feedback selection
- Feedback history tracking

### visualFeedback.js
- Visual cue generation
- Highlight effects for interactive elements
- Success/failure animations
- Progress visualization
- Hint highlighting system
- Visual accessibility considerations

### audioFeedback.js
- Sound effect selection and playback
- Contextual audio feedback
- Volume and pitch modulation
- Spatial audio positioning
- Audio feedback layering
- Audio accessibility considerations

### hapticsManager.js
- Vibration pattern generation (for mobile)
- Haptic intensity control
- Contextual haptic feedback
- Device capability detection
- Fallback mechanisms for unsupported devices
- Accessibility considerations for haptic feedback

### tutorialSystem.js
- Contextual help generation
- Step-by-step guidance
- Interactive demonstrations
- Hint system implementation
- Mistake detection and correction guidance
- Adaptive tutorial based on player performance

## 7. Game Mechanics

### fractionEngine.js
- Core fraction mathematics implementation
- Fraction comparison and validation
- Fraction visualization rendering
- Fraction operation calculations
- Fraction simplification algorithms
- Conversion between fractions and visual representations

### challengeGenerator.js
- Dynamic challenge creation
- Difficulty scaling algorithms
- Random but balanced challenge selection
- Learning progression path management
- Adaptive challenge adjustment
- Challenge variety maintenance

### scoringSystem.js
- Point calculation algorithms
- Precision-based scoring
- Time bonus calculations
- Combo and streak tracking
- Performance metrics collection
- Leaderboard integration

### timerSystem.js
- Countdown implementation
- Time pressure mechanics
- Pause and resume functionality
- Time bonus and penalty management
- Visual time representation
- Time-based difficulty adjustment

### achievementSystem.js
- Achievement definition and tracking
- Unlock conditions monitoring
- Achievement notification system
- Badge and reward management
- Achievement statistics collection
- Social sharing of achievements

## 8. Integration & Utilities

### assetLoader.js
- Resource preloading system
- Loading progress tracking
- Asset caching mechanisms
- Dynamic asset loading during gameplay
- Memory management for assets
- Fallback assets for error recovery

### analyticsManager.js
- Player behavior tracking
- Performance metrics collection
- Error and crash reporting
- Feature usage statistics
- Learning progress analytics
- Data anonymization and privacy controls

### debugTools.js
- Development-only debugging utilities
- Performance monitoring
- State inspection tools
- Visual debugging overlays
- Console logging enhancements
- Testing automation helpers

### localizationManager.js
- Multi-language support
- Text string management
- Dynamic text replacement
- Right-to-left language support
- Font management for different languages
- Cultural adaptation utilities

### utilityFunctions.js
- Common helper functions
- Mathematical utility functions
- String manipulation utilities
- Array and object processing helpers
- Random number generation
- Time and date utilities

## 9. Round System Implementation

### roundManager.js
- Round initialization and setup
- Round state tracking and management
- Round progression logic
- Round completion validation
- Inter-round transition effects
- Round-specific challenge generation

### roundUI.js
- Round-specific UI elements
- Round progress indicators
- Round timer visualization
- Round score display
- Round completion celebration
- Round transition animations

### roundEvents.js
- Round-specific event definitions
- Round start/end event handling
- Round milestone achievement events
- Round timer events
- Round scoring events
- Round-specific error events

## 10. Five Stages of Fractions Implementation

### stageOne.js - Understanding Fractions
- Basic fraction visualization
- Fraction naming and identification
- Simple fraction representation challenges
- Visual-to-numeric fraction conversion
- Fraction equality introduction
- Foundation concept reinforcement

### stageTwo.js - Comparing Fractions
- Fraction comparison mechanics
- Greater than/less than visualization
- Equivalent fraction recognition
- Fraction ordering challenges
- Common denominator introduction
- Visual comparison tools

### stageThree.js - Adding Fractions
- Addition operation implementation
- Like denominator addition
- Unlike denominator conversion
- Sum visualization and representation
- Addition challenge generation
- Step-by-step addition guidance

### stageFour.js - Subtracting Fractions
- Subtraction operation implementation
- Like denominator subtraction
- Unlike denominator conversion
- Difference visualization
- Subtraction challenge generation
- Negative result handling

### stageFive.js - Multiplying & Dividing Fractions
- Multiplication implementation
- Division implementation
- Product and quotient visualization
- Complex operation challenge generation
- Mixed number operations
- Real-world application scenarios

## 11. Integration Patterns

### modulePattern.js
- Encapsulation of related functionality
- Private and public method separation
- Dependency injection framework
- Module initialization sequence
- Inter-module communication protocols
- Module lifecycle management

### observerPattern.js
- Implementation of observer design pattern
- Change notification system
- State change subscriptions
- UI update triggering
- Cross-component communication
- Event-driven architecture support
