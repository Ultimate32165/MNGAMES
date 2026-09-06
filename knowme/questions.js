// questions.js
// Topics: 'travelling', 'food', 'cute', 'love', 'anger', 'silly'
// type: 'text' (both write) or 'mcq' (both choose from options)

const QUESTION_BANK = [
  // --- FOOD ---
  {
    topic: "food",
    type: "text",
    prompt: "What is {NAME}'s ultimate comfort food when having a bad day?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "What kind of late-night snack does {NAME} crave most often?",
    options: ["Spicy Ramen / Noodles", "Ice cream or sweet dessert", "Chips / Savory snacks", "Whatever is in the fridge"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What is {NAME}'s go-to drink order when you visit a cafe?"
  },

  // --- TRAVELLING ---
  {
    topic: "travelling",
    type: "text",
    prompt: "What is {NAME}'s dream travel getaway with you?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "What is {NAME}'s ideal vacation style?",
    options: ["Relaxing at a luxury beach resort", "Exploring cities and street food", "Hiking and mountain nature", "Cozy cabin with zero plans"]
  },

  // --- LOVE ---
  {
    topic: "love",
    type: "text",
    prompt: "What was {NAME}'s very first thought on the day you met?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "What is {NAME}'s primary love language?",
    options: ["Words of affirmation", "Quality time together", "Physical touch & hugs", "Acts of service & surprises"]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What is {NAME}'s single favorite memory of the two of you together?"
  },

  // --- CUTE ---
  {
    topic: "cute",
    type: "text",
    prompt: "What small everyday habit of {NAME}'s do you find secretly adorable?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "If {NAME} were an animal, what would they be?",
    options: ["A sleepy golden retriever", "A sassy, independent cat", "A gentle little bunny", "A curious baby otter"]
  },

  // --- ANGER / PET PEEVES ---
  {
    topic: "anger",
    type: "text",
    prompt: "What is {NAME}'s biggest pet peeve that instantly annoys them?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "How does {NAME} usually react when they get hangry?",
    options: ["Goes quiet and pouts", "Groans and complains out loud", "Demands food immediately", "Denies being hangry until fed"]
  },

  // --- SILLY ---
  {
    topic: "silly",
    type: "text",
    prompt: "What is the funniest or most ridiculous fear {NAME} has?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "Who takes longer to get ready before heading out?",
    options: ["Definitely {NAME}", "Definitely the partner", "Both take forever", "Both get ready in 5 minutes"]
  }
];