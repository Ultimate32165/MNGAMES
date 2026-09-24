// love-match/scenarios.js
// Curated relationship scenarios and perspective questions

const LOVE_MATCH_SCENARIOS = [
  {
    category: "Conflict & Harmony",
    prompt: "If we hit a point during an argument where things start feeling heated:",
    options: [
      { text: "Call a 10-minute timeout so we can reset before emotions take over", matchTag: "timeout_reset" },
      { text: "Reach out to hold your hand so we remember we are a team first", matchTag: "physical_anchor" },
      { text: "Write out bullet points so we focus on facts instead of hurt feelings", matchTag: "logical_breakdown" },
      { text: "Take a deep breath together and let whoever is hurting speak first", matchTag: "empathy_first" }
    ]
  },
  {
    category: "Romance & Connection",
    prompt: "Which unexpected everyday gesture makes your heart skip a beat?",
    options: [
      { text: "Waking up to find my phone charged and my favorite warm drink ready", matchTag: "thoughtful_acts" },
      { text: "A random text in the middle of a chaotic day saying 'I'm thinking of you'", matchTag: "surprise_text" },
      { text: "Pulling me in close by the waist while standing in a busy crowd", matchTag: "spontaneous_touch" },
      { text: "Noticing and complimenting a subtle change in my outfit or mood", matchTag: "attentive_eye" }
    ]
  },
  {
    category: "Daily Life",
    prompt: "Our perfect lazy Saturday afternoon together looks like:",
    options: [
      { text: "Napping together in a sunbeam with a soft breeze coming through the window", matchTag: "sunbeam_nap" },
      { text: "Hopping between cozy bakeries and bookstores with zero destination in mind", matchTag: "cafe_wanderer" },
      { text: "Cleaning the house top-to-bottom with a loud upbeat soundtrack, then collapsing", matchTag: "power_clean" },
      { text: "Setting up blankets on the living room rug and playing video games or puzzles", matchTag: "floor_camp" }
    ]
  },
  {
    category: "Stress & Comfort",
    prompt: "When you walk through the door completely drained from a terrible day:",
    options: [
      { text: "Draw me a warm bath or hand me fuzzy socks and leave me quiet for an hour", matchTag: "solitude_recharge" },
      { text: "Give me the longest, tightest hug without asking questions until I sigh", matchTag: "silent_shelter" },
      { text: "Hand me my favorite comfort snack and let me rant about every single annoyance", matchTag: "rant_session" },
      { text: "Put on our favorite comfort movie, tuck me in under a blanket, and be near me", matchTag: "distraction_nest" }
    ]
  },
  {
    category: "Future & Dreams",
    prompt: "When visualizing our dream living space 5 to 10 years from now, what is essential?",
    options: [
      { text: "A massive open balcony or garden with potted plants and room to watch sunsets", matchTag: "balcony_sanctuary" },
      { text: "A gigantic kitchen island where we can cook, bake, and host friends seamlessly", matchTag: "culinary_hub" },
      { text: "A dedicated creative studio/office filled with our tech, books, and art projects", matchTag: "creative_haven" },
      { text: "A cozy tucked-away attic or library loft with floor-to-ceiling bookshelves", matchTag: "quiet_retreat" }
    ]
  },
  {
    category: "Social Life",
    prompt: "We are walking into a crowded room filled with new acquaintances. What's our dynamic?",
    options: [
      { text: "Hold hands and tackle the room together as an inseparable duo", matchTag: "dynamic_pair" },
      { text: "Split up to chat freely, occasionally catching each other's eye across the room", matchTag: "autonomous_charm" },
      { text: "Stick by the snack table together and observe everyone while sharing quiet jokes", matchTag: "snack_corner_critics" },
      { text: "Give each other a secret 45-minute countdown signal before making our graceful exit", matchTag: "stealth_departure" }
    ]
  },
  {
    category: "Memories & Milestones",
    prompt: "Years from now, how do you want us to look back on our journey together?",
    options: [
      { text: "Through a carefully organized album filled with polaroids, ticket stubs, and notes", matchTag: "physical_scrapbook" },
      { text: "By telling wild, hilarious stories of the times things went completely off-script", matchTag: "chaotic_tales" },
      { text: "By revisiting the exact humble street bench or cafe where our story first started", matchTag: "nostalgic_pilgrimage" },
      { text: "Through personal traditions and rituals we invented that only make sense to us", matchTag: "custom_rituals" }
    ]
  },
  {
    category: "Surprises & Gifts",
    prompt: "What kind of surprise makes you feel deeply understood on a personal level?",
    options: [
      { text: "A custom playlist curated around songs that remind you of specific moments we shared", matchTag: "curated_audio" },
      { text: "A book or tool directly related to a new hobby I've been silently wanting to explore", matchTag: "hobby_catalyst" },
      { text: "Planning an entire secret outing where I don't have to make a single decision all day", matchTag: "decision_free_date" },
      { text: "Bringing home that one specific dessert or dish I offhandedly mentioned craving days ago", matchTag: "craving_memory" }
    ]
  },
  {
    category: "Communication",
    prompt: "When we need to discuss something serious or slightly uncomfortable:",
    options: [
      { text: "Let's go on a quiet walk together side-by-side so eye contact isn't intimidating", matchTag: "side_by_side_walk" },
      { text: "Sit down face-to-face over a warm cup of tea with zero screens in the room", matchTag: "focused_tea_chat" },
      { text: "Give a heads-up first: 'Can we chat tonight about something on my mind?' so no one is ambushed", matchTag: "gentle_heads_up" },
      { text: "Write out thoughts in a thoughtful message first, followed by an in-person conversation", matchTag: "written_intro" }
    ]
  },
  {
    category: "Adventures & Travel",
    prompt: "We just landed in a brand-new country we've never visited before. What happens first?",
    options: [
      { text: "Drop bags at the stay and immediately find the busiest, most chaotic alleyway eatery", matchTag: "street_flavor_rush" },
      { text: "Check into a pristine room, take a refreshing shower, and enjoy a long slow balcony rest", matchTag: "hotel_recharge" },
      { text: "Pull up our curated pins and hit the key architectural landmarks before dusk", matchTag: "landmark_chaser" },
      { text: "Wander down random side streets with no GPS to see what unusual spots we stumble into", matchTag: "unscripted_drift" }
    ]
  },
  {
    category: "Food & Cravings",
    prompt: "It's midnight, both of us are wide awake, and our stomachs start rumbling:",
    options: [
      { text: "Whip up elevated instant ramen with soft eggs, scallions, and extra chili oil", matchTag: "custom_ramen" },
      { text: "Raid the fridge to build a chaotic grilled cheese or toastie using whatever is left", matchTag: "pantry_toastie" },
      { text: "Order late-night crispy fried snacks or sweet bubble tea for delivery", matchTag: "midnight_takeout" },
      { text: "Sneak into the kitchen for a quiet spoonful of hazelnut spread or cold ice cream", matchTag: "sweet_stealth" }
    ]
  },
  {
    category: "Money & Lifestyle",
    prompt: "When we evaluate our finances, which philosophy feels most aligned with us?",
    options: [
      { text: "Live frugally on everyday things so we can splurge without guilt on travel and memories", matchTag: "experience_splurge" },
      { text: "Invest heavily in our daily sanctuary—mattress, workspace, coffee, and home comforts", matchTag: "comfort_investment" },
      { text: "Build a rock-solid emergency buffer and retirement foundation before splurging on extras", matchTag: "security_first" },
      { text: "Maintain balanced budgets with dedicated 'fun money' wallets each person spends freely", matchTag: "fun_money_split" }
    ]
  },
  {
    category: "Personal Space & Growth",
    prompt: "When both of us are having dedicated solo creative or study time:",
    options: [
      { text: "Sit at opposite ends of the same desk, wearing headphones but tapping feet occasionally", matchTag: "parallel_anchor" },
      { text: "Be in separate rooms with closed doors, catching up during deliberate coffee breaks", matchTag: "deep_focus_zones" },
      { text: "Trade funny links or progress screenshots across the room via chat throughout the session", matchTag: "virtual_whisper" },
      { text: "One works while the other brings a steady supply of snacks, water, and warm head pats", matchTag: "station_supporter" }
    ]
  },
  {
    category: "Affection & Chemistry",
    prompt: "Which form of non-verbal chemistry feels most magnetic between us?",
    options: [
      { text: "A knowing smirk and locked eye contact across a room packed with people", matchTag: "secret_glance" },
      { text: "Absentmindedly tracing patterns on each other's hands or arms while chatting", matchTag: "mindless_tracing" },
      { text: "Resting your head on my shoulder while listening to music on a bus or train ride", matchTag: "shoulder_lean" },
      { text: "Playful hip bumps and elbow nudges whenever we walk beside each other", matchTag: "playful_nudge" }
    ]
  },
  {
    category: "Home & Cozy Living",
    prompt: "What is the single most essential ingredient for our living room vibe?",
    options: [
      { text: "A massive, deep couch drowned in oversized textured throw pillows and faux fur throws", matchTag: "cloud_sofa" },
      { text: "Warm 2700K ambient lamps and hidden fairy/LED light strips with no harsh ceiling lights", matchTag: "golden_glow" },
      { text: "A high-end sound system softly playing lo-fi, acoustic jazz, or ambient rain in the background", matchTag: "soundscape" },
      { text: "A sprawling coffee table packed with board games, sketchpads, and current reads", matchTag: "living_canvas" }
    ]
  },
  {
    category: "Spontaneity & Chaos",
    prompt: "It's an ordinary weekday evening and suddenly there's a heavy downpour outside:",
    options: [
      { text: "Drop what we are doing, grab jackets, and run outside to walk in the empty rain", matchTag: "rain_dash" },
      { text: "Dim every light in the house, light candles, and listen to the thunder roll in", matchTag: "storm_gothic" },
      { text: "Set up the kitchen stove to simmer spicy stew or hot chocolate while watching the window", matchTag: "storm_kitchen" },
      { text: "Turn on moody video games or a spooky series with all blankets pulled up to our chins", matchTag: "spooky_nest" }
    ]
  },
  {
    category: "Support & Teamwork",
    prompt: "When one of us is preparing for an intimidating deadline or major hurdle:",
    options: [
      { text: "Take over all cooking, dishwashing, and errand duties completely so they can zone in", matchTag: "logistics_shield" },
      { text: "Sit down to drill questions, review work, or help brainstorm solutions together", matchTag: "co_strategist" },
      { text: "Be the emotional cheerleader reminding them of how capable and brilliant they are", matchTag: "unwavering_hype" },
      { text: "Enforce scheduled breaks with water, stretches, and mandatory 5-minute cuddle breathers", matchTag: "wellness_enforcer" }
    ]
  },
  {
    category: "Entertainment & Play",
    prompt: "When it comes to gaming or friendly competition between us:",
    options: [
      { text: "Cooperative multiplayer games where we succeed or wipe out as a single unit", matchTag: "coop_crusade" },
      { text: "Competitive 1-on-1 matches where trash talk is permitted and victory is glorious", matchTag: "rivalry_fun" },
      { text: "Story-heavy narrative games where one holds the controller and both make dialogue choices", matchTag: "narrative_duo" },
      { text: "Casual party and trivia games where winning doesn't matter as long as we're crying laughing", matchTag: "comedy_match" }
    ]
  },
  {
    category: "Morning & Routines",
    prompt: "When our morning alarm goes off on a normal busy morning:",
    options: [
      { text: "One gets up promptly to start the kettle and hot water while the other stretches awake", matchTag: "relay_wake" },
      { text: "Hit snooze twice and spend those 15 minutes glued together half-asleep under the covers", matchTag: "snooze_cuddle" },
      { text: "Pop out of bed energetically, throw the curtains wide, and turn on morning tunes", matchTag: "sunny_momentum" },
      { text: "Quiet, peaceful transition: gentle kisses, low lighting, and whispered morning greetings", matchTag: "gentle_whispers" }
    ]
  },
  {
    category: "Growth & Long-Term Vision",
    prompt: "What will prove that our partnership has succeeded as the decades pass?",
    options: [
      { text: "That we grew into better, wiser individuals without ever holding each other back", matchTag: "mutual_elevation" },
      { text: "That our home remains an unbreakable safe haven regardless of what happens outside", matchTag: "unshakable_sanctuary" },
      { text: "That we still find each other hilarious, fascinating, and attractive at 80 years old", matchTag: "ageless_spark" },
      { text: "That we created a rich legacy of warmth, shared experiences, and kindness for those around us", matchTag: "shared_legacy" }
    ]
  },
  {
    category: "Bedtime & Slumber",
    prompt: "What is the final ritual right before we officially turn off the lights?",
    options: [
      { text: "Trading our top high point and low point of the day in a soft whisper", matchTag: "rose_and_thorn" },
      { text: "Sharing three completely unhinged videos or memes we found throughout the day", matchTag: "pillow_laughs" },
      { text: "A forehead kiss, a tight squeeze, and an automatic 'I love you, goodnight'", matchTag: "bedtime_blessing" },
      { text: "Setting our phones on 'Do Not Disturb' across the room and holding hands across the mattress", matchTag: "unplugged_peace" }
    ]
  }
];