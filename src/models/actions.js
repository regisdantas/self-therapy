export class Action {
  constructor(key, label, onClick) {
    this.key = key;
    this.label = label;
    this.onClick = onClick;
  }
}

export const EmotionAction = (key, onClick) => {
  return new Action(key, 'Emotion', () => onClick(key));
}
export const BehaviorAction = (key, onClick) => {
  return new Action(key, 'Behavior', () => onClick(key));
}
export const ThoughtAction = (key, onClick) => {
  return new Action(key, 'Thought', () => onClick(key));
}
export const QuestioningAction = (key, onClick) => {
  return new Action(key, 'Deep Questioning', () => onClick(key));
}
export const AlternativeAction = (key, onClick) => {
  return new Action(key, 'Positive Alternative Thought', () => onClick(key));
}
export const StrategyAction = (key, onClick) => {
  return new Action(key, 'Strategy', () => onClick(key));
}
