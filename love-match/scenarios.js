// love-match/scenarios.js
// Curated relationship scenarios and perspective questions

const LOVE_MATCH_SCENARIOS = [
  {
    category: "Conflict & Harmony",
    prompt: "When we have an argument or disagreement, what is your first instinct?",
    options: [
      { text: "Talk it out right then and there until it's settled", matchTag: "direct" },
      { text: "Take 15–30 minutes alone to cool off, then discuss calmly", matchTag: "space" },
      { text: "Use humor or give a gentle hug to diffuse the tension first", matchTag: "soft" },
      { text: "Sleep on it so we can talk with a fresh head tomorrow", matchTag: "pause" }
    ]
  },
  {
    category: "Romance & Connection",
    prompt: "What makes you feel most genuinely loved and appreciated?",
    options: [
      { text: "Unexpected sweet words, compliments, and love notes", matchTag: "words" },
      { text: "Undivided quality time with zero phone distractions", matchTag: "time" },
      { text: "Spontaneous hugs, holding hands, and physical closeness", matchTag: "touch" },
      { text: "Thoughtful favors, breakfasts in bed, and small surprises", matchTag: "acts" }
    ]
  },
  {
    category: "Daily Life",
    prompt: "It's a completely free Sunday with no obligations. What's the ideal day?",
    options: [
      { text: "Sleeping in late, making pancakes, and staying in bed all day", matchTag: "lazy" },
      { text: "Heading out early for a scenic coffee drive and wandering around", matchTag: "explore" },
      { text: "Working out together or doing a fun outdoor activity", matchTag: "active" },
      { text: "Binging movies together with a giant spread of comfort food", matchTag: "movie" }
    ]
  },
  {
    category: "Stress & Comfort",
    prompt: "When you have had a dreadful, exhausting day, what do you need most?",
    options: [
      { text: "Venting non-stop while you listen and validate me", matchTag: "vent" },
      { text: "Silent cuddles with no questions asked", matchTag: "quiet" },
      { text: "Distraction: let's watch something hilarious and eat food", matchTag: "distract" },
      { text: "Some quiet alone time first to decompress before talking", matchTag: "solo" }
    ]
  },
  {
    category: "Future & Dreams",
    prompt: "If we had unlimited money to build our future dream home, where would it be?",
    options: [
      { text: "A modern penthouse in the heart of a bustling, lively city", matchTag: "city" },
      { text: "A warm, sunlit villa walking distance from a quiet beach", matchTag: "coast" },
      { text: "A peaceful cottage surrounded by forest and mountain views", matchTag: "nature" },
      { text: "A cozy suburban house with a big lush garden and dogs", matchTag: "suburb" }
    ]
  },
  {
    category: "Social Life",
    prompt: "When we are invited to a big party or gathering with friends:",
    options: [
      { text: "Let's stay by each other's side the whole night", matchTag: "together" },
      { text: "We mingle separately and reconnect across the room", matchTag: "independent" },
      { text: "Show up for an hour to be polite, then sneak out early together", matchTag: "irish_exit" },
      { text: "Be the life of the party and stay until the lights turn on", matchTag: "extrovert" }
    ]
  },
  {
    category: "Memories & Milestones",
    prompt: "How should we celebrate special milestones or anniversaries?",
    options: [
      { text: "A fancy candlelit dinner with dressing up and romance", matchTag: "glam" },
      { text: "A quick weekend getaway trip to somewhere we've never been", matchTag: "trip" },
      { text: "Recreating our first date or our favorite humble memory", matchTag: "nostalgia" },
      { text: "A private cozy dinner cooked together at home in pajamas", matchTag: "intimate" }
    ]
  },
  {
    category: "Surprises & Gifts",
    prompt: "What kind of surprise gift warms your heart the most?",
    options: [
      { text: "Something handmade, written, or full of sentimental memories", matchTag: "sentimental" },
      { text: "That exact practical item I've been mentioning wanting for weeks", matchTag: "practical" },
      { text: "An experiential surprise (concert tickets, spa day, secret date)", matchTag: "experience" },
      { text: "A spontaneous box of my favorite snacks, boba, or desserts", matchTag: "treats" }
    ]
  },
  {
    category: "Communication",
    prompt: "When one of us feels upset about something small, what's best?",
    options: [
      { text: "Say it right away before it brews, even if it feels silly", matchTag: "immediate" },
      { text: "Wait for a calm moment later in the evening to bring it up", matchTag: "timed" },
      { text: "Write it down in a gentle text if speaking it aloud feels hard", matchTag: "text" },
      { text: "Let small things go unless they happen repeatedly", matchTag: "brush_off" }
    ]
  },
  {
    category: "Adventures & Travel",
    prompt: "When travelling together, what is our top priority?",
    options: [
      { text: "Hunting down the most incredible local food and street snacks", matchTag: "foodie" },
      { text: "Pure relaxation: sleeping in, pools, lounging, and zero rush", matchTag: "chill" },
      { text: "Sightseeing: packing the day with landmarks and adventures", matchTag: "explorer" },
      { text: "Just being together in a new place; the schedule doesn't matter", matchTag: "vibe" }
    ]
  }
];