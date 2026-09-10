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
  },
  {
    category: "Food & Cravings",
    prompt: "It's 8:00 PM on a Friday and neither of us feels like cooking:",
    options: [
      { text: "Order takeout from our absolute favorite comfort food spot", matchTag: "takeout" },
      { text: "Raid the pantry and whip up a chaotic, delicious snack plate", matchTag: "improviser" },
      { text: "Dress up quickly and go find an aesthetic new restaurant to try", matchTag: "dine_out" },
      { text: "Cook an easy, cozy one-pan meal together while jamming to music", matchTag: "cook_team" }
    ]
  },
  {
    category: "Money & Lifestyle",
    prompt: "When an unexpected cash bonus or windfall lands in our account:",
    options: [
      { text: "Immediately book flights and hotels for our next bucket-list trip", matchTag: "splurge_travel" },
      { text: "Put almost all of it into savings or an investment fund for the future", matchTag: "saver" },
      { text: "Upgrade something we use daily (furniture, gadgets, or coffee machine)", matchTag: "upgrade_home" },
      { text: "Split it: half to savings, and half for a guilt-free shopping spree", matchTag: "balanced" }
    ]
  },
  {
    category: "Personal Space & Growth",
    prompt: "How do you prefer balancing our independent hobbies with couple time?",
    options: [
      { text: "Parallel play: doing our own hobbies in the exact same room", matchTag: "parallel" },
      { text: "Having dedicated solo evenings so we genuinely miss each other", matchTag: "solo_time" },
      { text: "Trying our best to get into each other's hobbies and do them together", matchTag: "shared_interests" },
      { text: "Completely separate worlds for hobbies, uniting over meals and downtime", matchTag: "independent_spaces" }
    ]
  },
  {
    category: "Affection & Chemistry",
    prompt: "What is your favorite style of showing physical affection in public?",
    options: [
      { text: "Casual and constant: subtle hand-holding, linked arms, brushing shoulders", matchTag: "subtle" },
      { text: "Sweet and bold: random forehead kisses and wrap-around back hugs", matchTag: "expressive" },
      { text: "Inside jokes, playful nudges, and cheeky playful taps", matchTag: "playful" },
      { text: "Low-key and private: save almost all physical intimacy for when we're alone", matchTag: "reserved" }
    ]
  },
  {
    category: "Home & Cozy Living",
    prompt: "What makes our shared living space feel most like an actual home?",
    options: [
      { text: "Warm lighting, soft scented candles, and mountains of plush blankets", matchTag: "cozy_vibes" },
      { text: "Framed couple photos, travel mementos, and curated memories everywhere", matchTag: "sentimental_decor" },
      { text: "An immaculate, clutter-free, hyper-organized layout where everything fits", matchTag: "minimal_clean" },
      { text: "A lived-in, warm energy full of snacks, ongoing projects, and pets", matchTag: "lived_in" }
    ]
  },
  {
    category: "Spontaneity & Chaos",
    prompt: "It's 11:30 PM on a Tuesday and one of us whispers 'Want to do something crazy?'",
    options: [
      { text: "Yes! Late-night drive with the windows down blasting songs", matchTag: "night_drive" },
      { text: "Run to the 24-hour drive-thru or convenience store for midnight snacks", matchTag: "snack_run" },
      { text: "Start rearranging the entire room layout or doing a random DIY project", matchTag: "chaotic_energy" },
      { text: "Smile, kiss you, and say 'Only if doing something crazy means going to bed early'", matchTag: "sleep_first" }
    ]
  },
  {
    category: "Support & Teamwork",
    prompt: "When life feels overwhelming and responsibilities pile up:",
    options: [
      { text: "Sit down together and divide chores and tasks like a tactical unit", matchTag: "tactical" },
      { text: "Step in silently to take chores off the other person's plate without asking", matchTag: "silent_helper" },
      { text: "Order comforting food, hit pause on chores, and prioritize emotional relief", matchTag: "pause_and_breathe" },
      { text: "Give non-stop pep talks and hype the other person up to conquer it", matchTag: "cheerleader" }
    ]
  },
  {
    category: "Entertainment & Play",
    prompt: "What is our ideal evening spent playing games or having fun?",
    options: [
      { text: "Competitive board or video games where both of us play to win", matchTag: "competitive" },
      { text: "Cooperative multiplayer games where we solve puzzles or build together", matchTag: "coop" },
      { text: "Funny couple quizzes, conversational card decks, or trivia challenges", matchTag: "trivia_quiz" },
      { text: "A playful tournament with high-stakes bets (loser cooks or gives a massage)", matchTag: "betting_fun" }
    ]
  },
  {
    category: "Morning & Routines",
    prompt: "What does the perfect start to our morning look like?",
    options: [
      { text: "Waking up slowly with 20 minutes of morning cuddles and soft chatting", matchTag: "cuddle_morning" },
      { text: "One of us brewing fresh hot coffee/tea while the other makes breakfast", matchTag: "cafe_routine" },
      { text: "Waking up early, popping open the curtains, and getting straight into the day", matchTag: "early_birds" },
      { text: "Total silence, individual slow pacing, and no speaking until fully awake", matchTag: "silent_rise" }
    ]
  },
  {
    category: "Growth & Long-Term Vision",
    prompt: "Ten years from today, what matters most about our journey together?",
    options: [
      { text: "That we built a solid, secure foundation and achieved our biggest goals", matchTag: "ambition" },
      { text: "That we still laugh as hard together as we did when we first met", matchTag: "laughter" },
      { text: "That we explored the world, tried crazy things, and collected wild stories", matchTag: "adventure" },
      { text: "That we created a peaceful, loving sanctuary where we feel totally safe", matchTag: "peaceful_haven" }
    ]
  },
  {
    category: "Bedtime & Slumber",
    prompt: "When it's time to sleep at night, what is your sleeping style?",
    options: [
      { text: "Cuddle up tightly until we both drift off into dreamland", matchTag: "tangled" },
      { text: "Cuddle for a sweet 5 minutes, then roll over to our own sides", matchTag: "cuddle_then_split" },
      { text: "Back-to-back touching slightly so we feel each other's presence", matchTag: "back_touch" },
      { text: "Give me the cold side of the pillow, my own blanket, and zero touch", matchTag: "independent_sleeper" }
    ]
  },
  {
    category: "Pet Companionship",
    prompt: "If we welcome a furry companion into our life, what kind of pet parents are we?",
    options: [
      { text: "Treat them like our literal child with gourmet food and mini outfits", matchTag: "pampered_baby" },
      { text: "An energetic sidekick who goes on every hike, beach trip, and adventure", matchTag: "adventure_dog" },
      { text: "A calm, independent cuddle buddy who just naps nearby while we work", matchTag: "chill_cat" },
      { text: "Two playful rescues who keep each other company and create cute chaos", matchTag: "chaos_pack" }
    ]
  },
  {
    category: "Digital Life & Socials",
    prompt: "How do you feel about showing off our relationship on social media?",
    options: [
      { text: "Hard launch everything: photo dumps, cute videos, and anniversary posts", matchTag: "loud_proud" },
      { text: "Soft launches only: hands holding drinks, subtle aesthetic story tags", matchTag: "soft_launch" },
      { text: "Total privacy: the best memories stay strictly between the two of us", matchTag: "private_sacred" },
      { text: "Only posting funny, goofy, unhinged moments to tease each other", matchTag: "meme_couple" }
    ]
  },
  {
    category: "Music & Roadtrips",
    prompt: "Who controls the car aux cord or playlist on a long drive?",
    options: [
      { text: "A collaborative playlist curated with songs we both sing along to", matchTag: "curated_duo" },
      { text: "The driver gets full control of the music; passenger enjoys the ride", matchTag: "driver_rules" },
      { text: "The passenger is official DJ and must cater to the room's energy", matchTag: "passenger_dj" },
      { text: "Skip music: put on a captivating true crime or comedy podcast", matchTag: "podcast_road" }
    ]
  },
  {
    category: "Decision Making",
    prompt: "When neither of us can decide where to eat or what to do:",
    options: [
      { text: "The 5-3-1 rule: one gives five options, other picks three, first picks one", matchTag: "structured_choice" },
      { text: "Flip a coin or roll a die and let destiny make the call", matchTag: "destiny" },
      { text: "One person takes executive control and says 'Get dressed, I'm driving'", matchTag: "take_charge" },
      { text: "Default straight to our reliable comfort spot without overthinking", matchTag: "reliable_default" }
    ]
  },
  {
    category: "Sickness & Caretaking",
    prompt: "When you catch a nasty cold or fever, how do you prefer to be taken care of?",
    options: [
      { text: "Full nurse mode: soup, tea, forehead checks, and checking on me hourly", matchTag: "baby_me" },
      { text: "Quiet support: set down medicine and water, then let me sleep in silence", matchTag: "hands_off" },
      { text: "Just lie in bed next to me and watch comfort shows together all day", matchTag: "co_sick" },
      { text: "Distract me from feeling miserable with funny videos and lighthearted laughs", matchTag: "cheer_up" }
    ]
  },
  {
    category: "Rainy Days",
    prompt: "A heavy thunderstorm hits outside and cancels all plans. What are we doing?",
    options: [
      { text: "Building an epic living room blanket fort and binge-watching a series", matchTag: "fort_marathon" },
      { text: "Baking fresh cookies or brownies while warm tea brews", matchTag: "baking_cozy" },
      { text: "Sitting by the window listening to the rain, reading or chatting", matchTag: "rain_watcher" },
      { text: "Putting on jackets and stepping out to jump in puddles together", matchTag: "rain_dancer" }
    ]
  },
  {
    category: "Shopping & Errands",
    prompt: "What is our dynamic when doing a big grocery or home run at Target/Costco?",
    options: [
      { text: "Strict grocery list in hand, in-and-out mission like special operatives", matchTag: "efficient_mission" },
      { text: "Wandering down every single aisle sniffing candles and inspecting snacks", matchTag: "leisure_browsing" },
      { text: "One pushes the cart while the other sits inside or rides along playfully", matchTag: "silly_errands" },
      { text: "Accidentally buying $150 worth of snacks and zero items on the actual list", matchTag: "impulse_chaos" }
    ]
  },
  {
    category: "Family Dynamics",
    prompt: "When visiting each other's families for a big holiday or dinner:",
    options: [
      { text: "Teamwork all day: helping out in the kitchen and bonding with everyone", matchTag: "family_pro" },
      { text: "Subtle eye contacts and secret smirks from across the dinner table", matchTag: "secret_signals" },
      { text: "Sticking close together like an unbreakable shield against awkward questions", matchTag: "united_front" },
      { text: "Taking a quick walk together outside halfway through to breathe and reset", matchTag: "recharge_escape" }
    ]
  },
  {
    category: "Pet Names & Banter",
    prompt: "What is your favorite everyday style of affection and nicknames?",
    options: [
      { text: "Sweet classic terms of endearment like 'babe', 'sweetheart', and 'love'", matchTag: "classic_sweet" },
      { text: "Ridiculous made-up baby words that make no sense to any outsider", matchTag: "nonsense_cute" },
      { text: "Playful teasing, mocking each other lovingly, and sarcastic nicknames", matchTag: "banter_tease" },
      { text: "Using each other's real names with genuine warmth and soft tone", matchTag: "real_intimate" }
    ]
  },
  {
    category: "Flirting & Spark",
    prompt: "What keeps the butterfly spark alive in our daily relationship?",
    options: [
      { text: "Dressing up fine and taking each other on deliberate, proper date nights", matchTag: "date_night" },
      { text: "Spontaneous flirty texts in the middle of a normal workday", matchTag: "midday_flirt" },
      { text: "Whispering compliments when the other person least expects it", matchTag: "stealth_compliment" },
      { text: "Playful challenges, wrestling for blankets, and mischievous tickles", matchTag: "physical_spark" }
    ]
  },
  {
    category: "Career & Ambition",
    prompt: "When one of us gets an exciting new career breakthrough or project:",
    options: [
      { text: "Pop the sparkling cider/champagne and celebrate with a huge night out", matchTag: "big_celebration" },
      { text: "Have a heartfelt late-night conversation celebrating how proud we are", matchTag: "proud_words" },
      { text: "Buy a meaningful symbolic gift to mark this big chapter of growth", matchTag: "milestone_gift" },
      { text: "Offer practical support by handling dinner and chores so they can focus", matchTag: "support_shield" }
    ]
  },
  {
    category: "Secret Quirks",
    prompt: "What is our weirdest, most wholesome private habit?",
    options: [
      { text: "Communicating through squeaks, weird noises, and made-up sound effects", matchTag: "sound_effects" },
      { text: "Narrating what our pet or stuffed animals are supposedly thinking", matchTag: "pet_voices" },
      { text: "Singing mundane daily chores to dramatic opera or Broadway tunes", matchTag: "chore_musical" },
      { text: "Stealing each other's catchphrases until neither knows who said it first", matchTag: "shared_phrases" }
    ]
  },
  {
    category: "Fitness & Wellness",
    prompt: "How do we approach keeping active and taking care of our health?",
    options: [
      { text: "Gym buddies cheering each other on and hitting personal records", matchTag: "gym_partners" },
      { text: "Outdoor adventures like bike rides, long sunset walks, and swimming", matchTag: "nature_movement" },
      { text: "Trying new healthy recipes together in the kitchen with upbeat music", matchTag: "wellness_food" },
      { text: "Doing yoga, stretching, and mindful meditation sessions at home", matchTag: "calm_balance" }
    ]
  },
  {
    category: "Late Night Talks",
    prompt: "It's 2:00 AM, the room is pitch black, and we can't sleep. What are we discussing?",
    options: [
      { text: "Unsolved mysteries, parallel universes, and deep existential questions", matchTag: "existential" },
      { text: "Childhood memories and funny embarrassing stories we've never told", matchTag: "confessions" },
      { text: "Our exact timeline and plans for our dream future together", matchTag: "dreaming_ahead" },
      { text: "Debating ridiculous hypothetical scenarios and 'would you rather' prompts", matchTag: "silly_hypotheticals" }
    ]
  },
  {
    category: "Style & Aesthetics",
    prompt: "When picking out outfits for an event, what is our styling approach?",
    options: [
      { text: "Color-coordinating our outfits so we look sharp and intentional together", matchTag: "matching_duo" },
      { text: "Hyping each other up in front of the mirror while trying on 10 outfits", matchTag: "hype_stylist" },
      { text: "Zero coordination: dress comfortably in our own vibe and let's go", matchTag: "effortless" },
      { text: "Asking 'Does this look okay?' six times before finally trusting your answer", matchTag: "reassurance" }
    ]
  },
  {
    category: "Forgiveness & Repair",
    prompt: "After an uncomfortable conversation or tense moment, what re-bonds us fastest?",
    options: [
      { text: "A genuine, vulnerable apology acknowledging what each of us felt", matchTag: "vulnerable_words" },
      { text: "A long, tight embrace in silence until all the tension melts away", matchTag: "reassuring_hug" },
      { text: "Making each other laugh with a dumb joke to break the heavy ice", matchTag: "humor_repair" },
      { text: "Making a cup of tea or preparing food for the other as a peace offering", matchTag: "peace_treat" }
    ]
  },
  {
    category: "Bucket List",
    prompt: "What is the ultimate bucket list item we absolutely have to do together?",
    options: [
      { text: "Stargazing in an open field watching a dazzling meteor shower", matchTag: "stargaze" },
      { text: "Renting a cozy camper van and driving along a scenic coast with no map", matchTag: "van_roadtrip" },
      { text: "Visiting a magical foreign night market and eating everything in sight", matchTag: "night_market" },
      { text: "Attending our dream musician or artist's live concert in the front row", matchTag: "front_row" }
    ]
  },
  {
    category: "Cooking & Kitchen",
    prompt: "When we decide to cook a brand-new gourmet recipe together:",
    options: [
      { text: "Follow the recipe step-by-step with scientific measurement precision", matchTag: "precise_chef" },
      { text: "Season with our hearts, throw ingredients in freestyle, and taste as we go", matchTag: "freestyle_flavor" },
      { text: "One acts as the head executive chef, the other is the loyal sous-chef/chopper", matchTag: "chef_and_prep" },
      { text: "Dance around the kitchen, make a slight mess, and laugh off any burnt edges", matchTag: "kitchen_party" }
    ]
  },
  {
    category: "Trust & Vulnerability",
    prompt: "What moment made you realize 'this person is truly my safe space'?",
    options: [
      { text: "When I cried ugly tears and was met only with kindness and warm arms", matchTag: "emotional_safety" },
      { text: "When I could be my weirdest, most unhinged self without feeling judged", matchTag: "unfiltered_self" },
      { text: "When we sat in total silence for hours and it felt completely comfortable", matchTag: "comfortable_silence" },
      { text: "When you stood up for me and supported me through a difficult challenge", matchTag: "fierce_loyalty" }
    ]
  },
  {
    category: "Jealousy & Security",
    prompt: "When someone outside our relationship tries to flirt with one of us:",
    options: [
      { text: "Shut it down politely and immediately make it clear I'm happily taken", matchTag: "instant_boundary" },
      { text: "Feel secretly flattered, but immediately tell you all the tea so we can laugh", matchTag: "tell_the_tea" },
      { text: "I'm so completely oblivious that I wouldn't even notice they were flirting", matchTag: "oblivious" },
      { text: "Grab your hand or give you a kiss right in front of them to claim territory", matchTag: "sweet_territorial" }
    ]
  }
];