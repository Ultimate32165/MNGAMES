// questions.js
// Topics: 'travelling', 'food', 'cute', 'love', 'anger', 'silly', 'spicy', 'unhinged', 'habits', 'memories', 'hypothetical'
// type: 'text' (both write) or 'mcq' (both choose from options)

const QUESTION_BANK = [
  // ==================== FOOD ====================
  {
    topic: "food",
    type: "text",
    prompt: "What is {NAME}'s ultimate late-night guilty indulgence when nobody is watching?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "What is {NAME}'s exact condiment philosophy?",
    options: [
      "Drowns everything in extra spicy chili oil/sauce",
      "Must have garlic mayo or cheesy ranch on the side",
      "Pure purist—wants only salt and pepper",
      "Keeps dipping sauces separate so textures stay crunchy"
    ]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What signature dish does {NAME} secretly think they cook better than restaurants?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "If {NAME} is handed an appetizer platter with only one piece left, what happens?",
    options: [
      "Insists you take it after offering three times",
      "Cuts it into two tiny, mathematically equal halves",
      "Pretends to look away and snatches it instantly",
      "Leaves it untouched until the waiter clears the table"
    ]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What texture in food gives {NAME} an immediate, visceral 'nope'?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "When {NAME} discovers an amazing new cafe or bakery, what is their instinct?",
    options: [
      "Order the exact same thing there every single week",
      "Drag you along the very next day to taste test",
      "Keep it a secret lowkey spot for quiet reading",
      "Take 10 aesthetic photos before taking a single bite"
    ]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What snack does {NAME} always buy whenever you stop at a convenience store?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "How does {NAME} handle grocery shopping on an empty stomach?",
    options: [
      "Sticks rigidly to the handwritten grocery list",
      "Buys $40 worth of chips, bakery treats, and dips",
      "Samples whatever free treats or bites are available",
      "Rushes through the aisles in pure survival mode"
    ]
  },

  // ==================== TRAVELLING ====================
  {
    topic: "travelling",
    type: "text",
    prompt: "What is {NAME}'s absolute dream scenic view to wake up to on vacation?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "What kind of travel companion is {NAME} during the flight or train ride?",
    options: [
      "Knocked out cold before takeoff with an eye mask on",
      "Glued to the window taking cloud videos and timelapse shots",
      "Organized with downloaded playlists, books, and pre-packed snacks",
      "Restless passenger who stretches, walks the aisle, and talks"
    ]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "What travel crisis or plan derailment did {NAME} handle surprisingly smoothly?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "When choosing accommodations, what does {NAME} inspect first?",
    options: [
      "The aesthetic view from the window or private balcony",
      "Water pressure, clean tiles, and bathroom aesthetics",
      "How comfortable and cloud-like the mattress and pillows look",
      "Proximity to top-rated coffee spots and street food hubs"
    ]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "What is {NAME}'s golden rule or superstition whenever packing a suitcase?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "On day three of a trip, how are {NAME}'s energy levels looking?",
    options: [
      "Up at 7 AM ready to hike and explore non-stop",
      "Thriving exclusively on iced caffeine and good vibes",
      "Needs a mandatory 3-hour midday nap in the hotel room",
      "Completely checked out and demanding a lazy pool/beach day"
    ]
  },

  // ==================== LOVE ====================
  {
    topic: "love",
    type: "text",
    prompt: "What is an unspoken habit between you two that proves how deeply {NAME} cares?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "What makes {NAME}'s eyes light up with unmistakable affection?",
    options: [
      "Watching you get super passionate while explaining a favorite topic",
      "Catching you laughing so hard you cover your face",
      "When you surprise them by wearing their favorite scent or outfit",
      "When you instinctively reach for their hand in a crowded place"
    ]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What little ritual or routine between the two of you feels sacred to {NAME}?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "How does {NAME} react when they miss you intensely during a busy day?",
    options: [
      "Spams your phone with 12 unhinged reels or memes in a row",
      "Sends a short, sweet 'thinking of you' voice note",
      "Calls unexpectedly just to hear your voice for 45 seconds",
      "Saves up every tiny thought to dump on you the moment you meet"
    ]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What is something {NAME} learned to love simply because you adore it?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "What is {NAME}'s comfort instinct when you are feeling low or insecure?",
    options: [
      "Pulls you into a long, quiet embrace without saying a word",
      "Gives an impassioned motivational speech reminding you of your worth",
      "Brings your favorite drink/snack and handles whatever is stressing you",
      "Distracts you with goofy jokes and playful forehead kisses"
    ]
  },

  // ==================== CUTE ====================
  {
    topic: "cute",
    type: "text",
    prompt: "What is a signature facial expression {NAME} makes when being playfully shy?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "What is {NAME}'s most adorable unconscious nervous habit?",
    options: [
      "Twirling their hair or rubbing the back of their neck",
      "Biting their lower lip while concentrating deeply",
      "Fidgeting with rings, watch straps, or sleeve hems",
      "Pacing around the room while talking on the phone"
    ]
  },
  {
    topic: "cute",
    type: "text",
    prompt: "What is a voice pitch or cute accent {NAME} only uses when speaking to you?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "How does {NAME} look when bundled up for freezing weather?",
    options: [
      "Like an oversized penguin barely able to move their arms",
      "Completely hidden behind a scarf with only eyes peeking out",
      "Refuses heavy layers and pretends they aren't shivering",
      "Effortlessly stylish like a vintage winter catalogue model"
    ]
  },
  {
    topic: "cute",
    type: "text",
    prompt: "What cute gesture does {NAME} do when they want your attention right this second?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "What is {NAME}'s reaction when an adorable dog or kitten walks by in public?",
    options: [
      "Glares in adoration, making quiet squeaking noises",
      "Immediately crouches down and asks the owner if they can pet it",
      "Turns to you with puppy eyes begging: 'Can we adopt one please?'",
      "Stares respectfully from afar while grinning ear-to-ear"
    ]
  },

  // ==================== ANGER / PET PEEVES ====================
  {
    topic: "anger",
    type: "text",
    prompt: "What petty household inconvenience pushes {NAME} from 0 to 100 on the frustration scale?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "What is {NAME}'s telltale body language when someone is testing their patience?",
    options: [
      "Jaw clenches and one eyebrow rises in pure judgment",
      "Crosses arms tightly and lets out a slow, theatrical sigh",
      "Starts tapping their fingers or foot at 180 beats per minute",
      "Smiles politely while mentally planning an escape route"
    ]
  },
  {
    topic: "anger",
    type: "text",
    prompt: "What is one opinion or take that {NAME} will passionately argue about every single time?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "When {NAME} is mad at technology that glitches or crashes, what is their response?",
    options: [
      "Aggressively taps the screen like physical force will speed it up",
      "Stares blankly in utter betrayal and closes the laptop lid",
      "Starts lecturing the device out loud in exasperation",
      "Immediately forces a restart while muttering under their breath"
    ]
  },
  {
    topic: "anger",
    type: "text",
    prompt: "What is the best way to approach {NAME} when they are clearly grumpy but claim 'I'm fine'?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "What social pet peeve makes {NAME} roll their eyes hardest?",
    options: [
      "People playing videos on maximum volume without headphones in public",
      "Groups blocking an entire hallway or grocery aisle without awareness",
      "People who flake on confirmed plans 10 minutes beforehand",
      "Mansplaining or talking over someone who was already speaking"
    ]
  },

  // ==================== SILLY ====================
  {
    topic: "silly",
    type: "text",
    prompt: "What is the most ridiculous reason {NAME} has ever burst out crying or laughing uncontrollably?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "If {NAME} were competing in an absurd Olympic event, what would they win gold in?",
    options: [
      "Speed-running through a 5-minute shower in 32 minutes",
      "Finding obscure items that were sitting directly in plain sight",
      "Tripping over invisible cracks on completely flat flooring",
      "Constructing elaborate justifications for buying unneeded cute items"
    ]
  },
  {
    topic: "silly",
    type: "text",
    prompt: "What is a goofy nickname {NAME} has given to an everyday household object or gadget?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "What would {NAME}'s wrestling ring entrance persona be called?",
    options: [
      "The Blanket Menace (strikes only from under plush covers)",
      "Captain Hangry (dangerous when carbs are delayed)",
      "The Snooze Bandit (steals 5 minutes of sleep repeatedly)",
      "The Snack Gremlin (attacks pantries in total darkness)"
    ]
  },
  {
    topic: "silly",
    type: "text",
    prompt: "What completely irrational belief did {NAME} hold as a kid for way too long?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "If {NAME} suddenly had to communicate using only movie sound effects for a day, what's their staple?",
    options: [
      "Dramatic cartoon slide-whistle and anvil drops",
      "Star Wars lightsaber humming and pew-pew sounds",
      "Suspenseful horror movie violin screeches",
      "Triumphant trumpet fanfare whenever they enter a room"
    ]
  },

  // ==================== SPICY ====================
  {
    topic: "spicy",
    type: "text",
    prompt: "What specific touch or stroke on {NAME}'s body instantly turns up the heat between you two?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What whispered compliment or phrase completely disarms {NAME} behind closed doors?",
    options: [
      "A husky whisper praising how gorgeous/handsome they look right now",
      "Telling them you've been thinking about this all day long",
      "Calling them by a low, private pet name with a slow kiss",
      "A teasing whisper daring them to take full control"
    ]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What everyday non-sexual habit of yours does {NAME} secretly find irresistibly attractive?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What dynamic between you two sparks the hottest bedroom chemistry?",
    options: [
      "Intense eye contact and slow, breathless romance",
      "Playful dominance with breathless teasing and resistance",
      "Spontaneous, urgent chemistry that starts out of nowhere",
      "Cozy, intimate affection that gradually escalates in warmth"
    ]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is a bold, sensual surprise {NAME} would melt over coming home to?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What kiss rhythm is {NAME}'s absolute kryptonite?",
    options: [
      "Starting soft on the lips, then trailing slowly down the neck to collarbone",
      "Deep, urgent kisses with both hands running through their hair",
      "Teasing butterfly pecks that stop just before things get serious",
      "A slow, lingering kiss that pulls their lower lip gently"
    ]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "Where is {NAME}'s secret sweet spot that makes them shudder when kissed or lightly bitten?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What outfit or aesthetic on you makes {NAME} stare with predatory focus?",
    options: [
      "Formal evening attire or a sharp fitted suit/dress",
      "Lounging in their oversized clothing with nothing underneath",
      "Clean-cut casual jeans with a fitted, flattering top",
      "Fresh out of the shower wrapped simply in a towel"
    ]
  },

  // ==================== UNHINGED ====================
  {
    topic: "unhinged",
    type: "text",
    prompt: "If {NAME} suddenly inherited a shady abandoned warehouse, what would they build inside?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "If {NAME} were caught on an episode of a chaotic reality TV show, what would they get eliminated for?",
    options: [
      "Starting unnecessary drama over stolen refrigerator snacks",
      "Forming an alliance with everyone, then accidentally betraying everyone",
      "Getting disqualified for refusing to participate before their morning coffee",
      "Breaking character and laughing in the confessional booth"
    ]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What completely unhinged survival strategy would {NAME} deploy during an apocalypse?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "If {NAME} could replace all pigeons in the city with any animal, what would it be?",
    options: [
      "Tiny flying red pandas with wings",
      "Miniature screaming capybaras",
      "Raccoons wearing small trench coats",
      "Chunky ducks that quack in auto-tune"
    ]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What is the wildest intrusive purchase {NAME} would make if given unlimited money for 60 seconds?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "What would {NAME} do if a raccoon broke into your kitchen at 3 AM and offered a trade?",
    options: [
      "Trade a bag of chips for whatever shiny trinket it brought",
      "Scream, jump onto the kitchen counter, and call for backup",
      "Try to negotiate a long-term business alliance with it",
      "Take a video for socials and name it your new roommate"
    ]
  },

  // ==================== HABITS & DAILY LIFE ====================
  {
    topic: "habits",
    type: "text",
    prompt: "What is {NAME}'s exact ritual when preparing to sit down for a long work or study session?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "What is the state of {NAME}'s browser tabs right this second?",
    options: [
      "Neatly organized with 4 tidy tabs open max",
      "Over 40 tabs open, 3 of them playing sound somewhere",
      "Bookmarked into 12 folders they will never open again",
      "Tabs grouped by color with military-level precision"
    ]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What unusual quirk does {NAME} exhibit when they are deep in thought?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "How does {NAME} approach making the bed in the morning?",
    options: [
      "Hospital corners and decorative throw pillows styled perfectly",
      "A quick pull of the duvet to make it look presentable from afar",
      "Leave it completely tangled—'I'm just getting back into it tonight'",
      "Only makes the bed if guests or parents are visiting"
    ]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What specific sound or noise drives {NAME} crazy when trying to relax?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "What is {NAME}'s beverage management style on their desk?",
    options: [
      "One single water bottle refilled faithfully all day",
      "The 'beverage trio': water for hydration, coffee for energy, tea for vibes",
      "Half-empty mugs collecting in a small museum cluster",
      "Spills ice water at least once every calendar month"
    ]
  },

  // ==================== MEMORIES ====================
  {
    topic: "memories",
    type: "text",
    prompt: "What was a moment when you looked at {NAME} and thought, 'Yep, I am in big trouble, I'm falling hard'?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What was the setting of your very first deep, vulnerable late-night conversation?",
    options: [
      "Parked in a car with fogged-up windows late into the night",
      "On a phone call while both of you were lying in your beds",
      "Sitting on a quiet outdoor curb or rooftop watching the breeze",
      "Over a table at an empty cafe long past closing time"
    ]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What is a small, quiet moment between you two that felt like a movie scene?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What funny hurdle did you two overcome in your first few months together?",
    options: [
      "Figuring out each other's erratic sleep schedules and texting patterns",
      "Surviving an awkward or hilarious meeting with friends/family",
      "A cooking disaster where both of you pretended the meal tasted great",
      "Trying to look composed and cool while having intense inner butterflies"
    ]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What photo of {NAME} saved in your phone is your secret favorite?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What memory always comes up whenever you both reminisce about how far you've come?",
    options: [
      "Supporting each other through an exhausting life transition or exam",
      "A spontaneous date where everything went off-plan but ended up magical",
      "The first time one of you accidentally said 'I love you'",
      "A silly inside joke that originated from an embarrassing fumble"
    ]
  },

  // ==================== HYPOTHETICAL ====================
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} were granted one wish by a genie with zero loopholes, what would they wish for?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} were suddenly given a magic remote control for reality, which button gets used most?",
    options: [
      "Pause: freeze the world to sleep an extra 2 hours every morning",
      "Mute: instantly silence annoying sounds and loud chatter",
      "Fast-Forward: skip tedious chores and awkward small talk",
      "Rewind: re-live favorite romantic dates and delicious meals"
    ]
  },
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} were forced to live in any fictional game or movie universe, where would they choose?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} suddenly woke up with the ability to fly, what is their day-one destination?",
    options: [
      "Hovering just above traffic to smirk down at gridlock",
      "Flying directly above the clouds to catch the sunrise in peace",
      "Soaring over your window to tap on the glass dramatically",
      "Flying straight to a foreign city for a quick fresh snack"
    ]
  },
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} could design an ideal secret hideout accessible only by the two of you, what would it feature?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} could instantly acquire black-belt mastery in any craft, what would they choose?",
    options: [
      "Master chef cooking and gourmet baking skills",
      "Virtuoso piano, guitar, or musical composition",
      "World-class visual art, illustration, and design",
      "Master martial arts and acrobatics"
    ]
  }
];