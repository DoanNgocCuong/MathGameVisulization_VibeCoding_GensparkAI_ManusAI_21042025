# LLM Instruction Structure for Math Digital Manipulatives

## Overview
This document outlines a structured format for LLM-executable instructions that can generate self-contained HTML/CSS/JavaScript math digital manipulatives based on the Simplified Framework for Math Learning Simulations.

## Instruction Structure

### 1. Concept Definition
```
# Concept Definition
- Math Concept: {specific_math_concept}
- Target Age Range: {age_range}
- Learning Objectives:
  - {primary_objective}
  - {secondary_objectives}
- Prerequisite Knowledge: {what_learners_should_already_know}
- Common Misconceptions:
  - {misconception_1}: {how_to_address}
  - {misconception_2}: {how_to_address}
```

### 2. Manipulative Configuration
```
# Manipulative Configuration
- Manipulative Type: [Representation|Exploration|Problem-Solving|Game]
- Interaction Mode: [Drag-and-Drop|Click/Tap|Draw|Multi-Touch]
- Visual Style: [Concrete|Pictorial|Abstract|Mixed]
- Feedback Type: [Immediate|Delayed|Guided|Exploratory]
- Scaffolding Level: [High|Medium|Low|Adaptive]
- Progression Model: [Linear|Branching|Open-Ended]
```

### 3. Visual Representation Requirements
```
# Visual Representation Requirements
- Primary Representation:
  - {representation_name}: {dimensions}, {behavior}, {mathematical_significance}
- Secondary Representations:
  - {representation_name}: {dimensions}, {behavior}, {mathematical_significance}
- Connection Between Representations:
  - {how_representations_connect_mathematically}
- Visual Accuracy Requirements:
  - {precision_requirements}
  - {scale_considerations}
  - {proportional_relationships}
```

### 4. Interaction Mechanics
```
# Interaction Mechanics
- Core Interactions:
  {description_of_primary_interaction_pattern}
- Object Behaviors:
  - {object_name}: {behavior_when_manipulated}, {mathematical_meaning}
  - {object_name}: {behavior_when_manipulated}, {mathematical_meaning}
- Feedback Mechanisms:
  - Correct Actions: {feedback_for_correct_actions}
  - Incorrect Actions: {feedback_for_incorrect_actions}
  - Partial Understanding: {feedback_for_partial_understanding}
- Scaffolding Elements:
  - {scaffolding_element}: {when_it_appears}, {how_it_helps}
```

### 5. Learning Progression
```
# Learning Progression
- Difficulty Levels: {number_of_levels}
- Level Progression:
  - Level 1: {concept_focus}, {challenge_level}, {success_criteria}
  - Level 2: {concept_focus}, {challenge_level}, {success_criteria}
- Conceptual Milestones:
  - {milestone_1}: {how_demonstrated}, {next_steps}
  - {milestone_2}: {how_demonstrated}, {next_steps}
- Adaptive Elements:
  - {condition_for_adaptation}: {adaptation_response}
```

### 6. User Interface
```
# User Interface
- Layout Structure:
  - Workspace: {position}, {size}, {purpose}
  - Controls: {position}, {elements}, {purpose}
  - Feedback Area: {position}, {information_displayed}
- Interactive Elements:
  - {element_name}: {appearance}, {behavior}, {purpose}
- Visual Hierarchy:
  - Primary Focus: {what_draws_attention_first}
  - Secondary Elements: {supporting_elements}
- Child-Friendly Considerations:
  - Font Size: {minimum_size}
  - Touch Targets: {minimum_size}
  - Color Scheme: {primary_colors}, {accessibility_considerations}
```

### 7. Technical Implementation
```
# Technical Implementation
- Framework: [HTML5/CSS/JavaScript|p5.js|Other]
- Responsive Design:
  - Minimum Screen Size: {width}x{height}
  - Orientation Support: [Portrait|Landscape|Both]
- Accessibility Features:
  - Keyboard Navigation: [Yes|No]
  - Screen Reader Support: [Yes|No]
  - Color Contrast Ratio: {minimum_ratio}
- Performance Considerations:
  - Animation Smoothness: {minimum_fps}
  - Touch Response Time: {maximum_ms}
```

### 8. Code Generation Instructions
```
# Code Generation Instructions
- Core HTML Structure:
  - {element_purpose}: {implementation_notes}
- CSS Requirements:
  - {style_category}: {implementation_notes}
- JavaScript Components:
  - {component_name}: {purpose}
    - {function_name}: {purpose}
- Implementation Order:
  1. {first_implementation_step}
  2. {second_implementation_step}
  ...
```

### 9. Mathematical Validation
```
# Mathematical Validation
- Accuracy Checks:
  - {check_name}: {expected_behavior}
- Edge Cases:
  - {edge_case}: {handling_approach}
- Conceptual Integrity:
  - {concept_aspect}: {validation_method}
```

### 10. Assessment Integration
```
# Assessment Integration
- Progress Tracking:
  - {metric_name}: {how_measured}, {significance}
- Success Indicators:
  - {indicator}: {threshold}, {meaning}
- Learning Analytics:
  - {data_point}: {collection_method}, {use_case}
```

## Instruction Flow

1. Define the specific math concept and learning objectives
2. Specify the manipulative configuration and interaction model
3. Detail the visual representations and their mathematical significance
4. Design the interaction mechanics and feedback systems
5. Structure the learning progression and adaptive elements
6. Create the user interface with child-friendly considerations
7. Specify technical implementation requirements
8. Provide code generation instructions in implementation order
9. Include mathematical validation checks
10. Integrate assessment capabilities

This structured approach ensures that digital math manipulatives are pedagogically sound, mathematically accurate, and effectively implemented with appropriate scaffolding and progression for the target age group.
