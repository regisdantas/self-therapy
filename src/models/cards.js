import {
  Action,
  EmotionAction,
  BehaviorAction,
  ThoughtAction,
  QuestioningAction,
  AlternativeAction,
  StrategyAction,
} from "./actions";

export class Card {
  constructor(
    key,
    parent,
    onUpdate,
    types,
    color,
    title,
    placeholder,
    content,
    actions,
    children
  ) {
    this.key = key;
    this.types = types;
    this.color = color;
    this.title = title;
    this.placeholder = placeholder;
    this.content = content;
    this.actions = actions;
    this.children = children;
    this.parent = parent;
    this.onUpdate = onUpdate;
  }

  Remove = () => {
    if (this.parent === null || this.parent === undefined) 
      return;
    this.parent.children = this.parent.children.filter(
      (child) => child.key !== this.key
    );
    this.onUpdate();
  }

  AddChild = (child) => {
    child.key = this.key + "-" + this.children.length;
    this.children.push(child);
    this.onUpdate();
    console.log("Puushed child: " + child.key);
  };
}

export const EventCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    ['text'],
    color,
    "Situation or Event:",
    "Describe here the situation or event that driven you to think and/or feel the way you want to evaluate.",
    {},
    [
      new EmotionAction(`${key}-act-01`, () => {
        card.AddChild(new EmotionCard("", card, "red", onUpdate));
      }),
      new BehaviorAction(`${key}-act-02`, () => {
        card.AddChild(new BehaviorCard("", card, "yellow", onUpdate));
      }),
      new ThoughtAction(`${key}-act-03`, () => {
        card.AddChild(new ThoughtCard("", card, "blue", onUpdate));
      }),
    ],
    []
  );
  return card;
};

export const EmotionCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    ['text'],
    color,
    "Emotion:",
    "Write an emotion you felt during this event.",
    {},
    [
      new QuestioningAction(`${key}-act-01`, () => {
        card.AddChild(new QuestioningCard("", card, "green", onUpdate));
      }),
    ],
    []
  );
  return card;
};

export const BehaviorCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    ['text'],
    color,
    "Behavior:",
    "Write a behavior you had during this event.",
    {},
    [
      new QuestioningAction(`${key}-act-01`, () => {
        card.AddChild(new QuestioningCard("", card, "green", onUpdate));
      }),
    ],
    []
  );
  return card;
};

export const ThoughtCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    ['text'],
    color,
    "Automatic Thought:",
    "Write an automatic thought or response you had during the event.",
    {},
    [
      new QuestioningAction(`${key}-act-01`, () => {
        card.AddChild(new QuestioningCard("", card, "green", onUpdate));
      }),
    ],
    []
  );
  return card;
};

export const CopingCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    ['text'],
    color,
    "Coping Card:",
    "Write here positive thougths, reflextions and strategies to read during an ocasional event.",
    {},
    [],
    []
  );
  return card;
};

export const QuestioningCard = (key, parent, color, onUpdate) => {
  const card = new Card(
    key,
    parent,
    onUpdate,
    [ 'pick', 'text' ],
    color,
    "Questioning Card:",
    "Select a question and answer to go deeper in the reasons and root cause of these feelings and behaviors.",
    {
      text: "",
      options: [
        {label: "Why do you feel that way?", value: "why-feel"},
        {label: "Why do you think that way?", value: "why-think"},
        {label: "Why does that affect you?", value: "why-affect"},
      ]
    },
    [],
    []
  );
  return card;
};
