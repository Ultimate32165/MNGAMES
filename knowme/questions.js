// questions.js
// Topics: 'travelling', 'food', 'cute', 'love', 'anger', 'silly', 'spicy', 'unhinged', 'habits', 'memories', 'hypothetical'
// type: 'text' (both write) or 'mcq' (both choose from options)

const QUESTION_BANK = [
  // ==================== FOOD ====================
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
  {
    topic: "food",
    type: "mcq",
    prompt: "If {NAME} had to eat only one cuisine for the rest of their life, what would it be?",
    options: ["Italian (Pasta, Pizza)", "Asian (Sushi, Ramen, Dumplings)", "Spicy Street Food / Desi / Tacos", "Classic Burgers & Fries"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What is one food or ingredient that {NAME} absolutely refuses to eat?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "How does {NAME} handle spice levels in food?",
    options: ["Can handle ghost peppers with a straight face", "Loves medium heat with lots of flavor", "Tolerates mild spice only", "Milk and tears at the slightest black pepper"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "If {NAME} cooked a romantic dinner for you, what would they make best?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "When ordering takeout together, what role does {NAME} usually play?",
    options: ["Says 'anything is fine' then rejects 4 options", "Spends 40 minutes reviewing menus", "Orders the exact same favorite meal every time", "Takes charge and orders for both of you"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What is {NAME}'s weirdest guilty-pleasure food combination?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "What is {NAME}'s philosophy on sharing food off their plate?",
    options: ["Happy to share everything equally", "Offers you a bite first, then guards the rest", "Takes from your plate but guards their own", "Joey Tribbiani rule: does NOT share food"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What dessert makes {NAME} lose all self-control and finish the entire portion?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "If {NAME} is handed a menu with 50 items, how do they decide?",
    options: ["Asks the server for their top recommendation", "Picks whatever they saw someone else eating", "Panics and picks the most familiar comfort dish", "Studies it like a final exam for 15 minutes"]
  },
  {
    topic: "food",
    type: "text",
    prompt: "What meal cooked by you does {NAME} genuinely rave about the most?"
  },
  {
    topic: "food",
    type: "mcq",
    prompt: "What is {NAME}'s stance on breakfast?",
    options: ["Full hot spread with eggs, toast, and pancakes", "Grab-and-go iced coffee and vibes only", "Skipping completely until a massive lunch", "Leftover dinner pizza cold from the fridge"]
  },

  // ==================== TRAVELLING ====================
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
  {
    topic: "travelling",
    type: "text",
    prompt: "What is the one item {NAME} could never travel without?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "How does {NAME} behave at the airport before a flight?",
    options: ["Demands being there 3.5 hours early", "Casually glides to the gate right before boarding", "Anxiously clutches boarding pass and passports the whole time", "Gets distracted shopping in duty-free"]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "What was the funniest or most chaotic travel mishap you and {NAME} experienced?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "During a long road trip, what is {NAME}'s primary role?",
    options: ["The dedicated driver locked in on the road", "The hype DJ in charge of playlists", "The navigator who still gets turned around", "The passenger who falls asleep within 15 minutes"]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "Which country or city does {NAME} talk about visiting the most?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "How does {NAME} pack for a short 3-day weekend trip?",
    options: ["One light carry-on or backpack", "A massive suitcase packed with 9 backup outfits", "Leaves packing to the final 20 minutes before departure", "Meticulously uses packing cubes and checklists"]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "What souvenir is {NAME} most likely to hunt down in a new city?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "When exploring a new foreign city, what is {NAME}'s priority on morning one?",
    options: ["Wander aimlessly until finding a hidden local bakery", "Hit the top-rated landmark before crowds show up", "Sleep until noon and enjoy hotel room service", "Hunt down a scenic vantage point for photos"]
  },
  {
    topic: "travelling",
    type: "text",
    prompt: "What is {NAME}'s biggest travel-related anxiety or pet peeve?"
  },
  {
    topic: "travelling",
    type: "mcq",
    prompt: "If you get lost in an unfamiliar city, how does {NAME} handle it?",
    options: ["Takes it as a romantic detour and enjoys wandering", "Stares intensely at Google Maps in dead silence", "Immediately stops a local to ask for directions", "Playfully blames you for leading the way"]
  },

  // ==================== LOVE ====================
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
  {
    topic: "love",
    type: "mcq",
    prompt: "When did {NAME} realize they were completely head-over-heels for you?",
    options: ["Within the first couple of dates", "During a late-night deep talk", "When you did a small, thoughtful gesture", "It was a slow burn that suddenly hit all at once"]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What is one physical feature of yours that {NAME} stares at the most?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "How does {NAME} show affection when words fail?",
    options: ["A tight, silent bear hug", "Bringing you food or making a drink", "Gentle forehead or cheek kisses", "Hovering nearby just to share the same space"]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What is a promise or future dream that {NAME} holds closest to their heart?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "What makes {NAME} feel instantly cherished by you?",
    options: ["Remembering a tiny detail they mentioned weeks ago", "A spontaneous forehead kiss in public", "Checking in on them during a hectic workday", "Planning a surprise date without asking them to decide"]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What song makes {NAME} immediately think of your relationship?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "What is {NAME}'s favorite stage of a romantic date?",
    options: ["Getting ready and the butterflies beforehand", "The dinner and laughing across the table", "The quiet drive or stroll afterward", "Cuddling together at home once you're back"]
  },
  {
    topic: "love",
    type: "text",
    prompt: "What is one thing about you that {NAME} brags about to everyone else?"
  },
  {
    topic: "love",
    type: "mcq",
    prompt: "How does {NAME} react when you whisper something deeply romantic out of nowhere?",
    options: ["Melts completely and pulls you in for a kiss", "Gets super shy and tries to hide their blushing face", "Grins smugly like 'I know you love me'", "Repeats it back with even softer words"]
  },

  // ==================== CUTE ====================
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
  {
    topic: "cute",
    type: "text",
    prompt: "What is the face or expression {NAME} makes when they are genuinely proud of themselves?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "What does {NAME} look like when they wake up in the morning?",
    options: ["A cozy, sleepy burrito wrapped in blankets", "Disheveled hair and wandering around like a zombie", "Instantly energetic and awake", "Grumbling and hitting the pillow for 10 more minutes"]
  },
  {
    topic: "cute",
    type: "text",
    prompt: "What made-up pet name or silly sound does {NAME} use when talking to you?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "How does {NAME} react when they receive an unexpected, genuine compliment?",
    options: ["Blushes instantly and looks away shyly", "Smiles proudly and agrees jokingly", "Gets flustered and tries to change the subject", "Demands you repeat it three more times"]
  },
  {
    topic: "cute",
    type: "text",
    prompt: "Describe the way {NAME} laughs when something is truly, uncontrollably hilarious."
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "What is {NAME}'s coziest outfit of choice at home?",
    options: ["An oversized hoodie that probably belongs to you", "Matching pajama set", "Soft sweatpants and an old worn-out t-shirt", "Fluffy socks and a massive bathrobe"]
  },
  {
    topic: "cute",
    type: "text",
    prompt: "What does {NAME} do when they think you aren't looking at them?"
  },
  {
    topic: "cute",
    type: "mcq",
    prompt: "What happens when {NAME} is exhausted but stubbornly refuses to go to sleep?",
    options: ["Starts rambling incoherent, silly thoughts", "Leans their entire body weight against you", "Denies being tired while eyes literally close", "Gets super clingy and cuddly"]
  },

  // ==================== ANGER / PET PEEVES ====================
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
  {
    topic: "anger",
    type: "text",
    prompt: "What is something you do that drives {NAME} mildly crazy?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "When {NAME} is genuinely pissed off, how do they handle it?",
    options: ["Needs total silence and physical space to cool down", "Wants to confront and vent right this second", "Cleans or organizes aggressively while sighing", "Gives the cold shoulder until approached gently"]
  },
  {
    topic: "anger",
    type: "text",
    prompt: "What is the fastest way to get {NAME} back into a good mood when they're angry?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "What traffic or driving scenario triggers {NAME}'s road rage fastest?",
    options: ["People not using turn signals", "Tailgaters driving right behind them", "Slow drivers lingering in the fast lane", "People staring at their phones at a green light"]
  },
  {
    topic: "anger",
    type: "text",
    prompt: "What petty argument between the two of you still comes up as a joke?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "How does {NAME} react when an argument is proven wrong by facts?",
    options: ["Accepts it gracefully and laughs", "Doubles down with playful stubbornness", "Changes the subject like nothing happened", "Pouts and claims they meant something else"]
  },
  {
    topic: "anger",
    type: "text",
    prompt: "What is the dead-giveaway physical cue that {NAME} is secretly irritated?"
  },
  {
    topic: "anger",
    type: "mcq",
    prompt: "When {NAME} receives bad customer service, what do they do?",
    options: ["Says absolutely nothing and vents in the car afterward", "Politely yet firmly addresses the manager", "Lets you handle the interaction completely", "Leaves a brutal, detailed 1-star review online"]
  },

  // ==================== SILLY ====================
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
  },
  {
    topic: "silly",
    type: "text",
    prompt: "What is the weirdest talent or bizarre party trick {NAME} possesses?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "If {NAME} suddenly had to survive a zombie apocalypse, how long would they last?",
    options: ["Dead within the first 10 minutes looking for their phone", "Survives a couple of weeks through sheer luck", "Becomes the ruthless camp leader within a month", "Accidentally befriends a zombie"]
  },
  {
    topic: "silly",
    type: "text",
    prompt: "What dance move or goofy gesture does {NAME} pull out to make you burst out laughing?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "What is {NAME} most likely to trip over while walking?",
    options: ["Their own two feet on completely flat ground", "A rug or door frame corner", "A random pet lying on the floor", "Nothing at all—air itself"]
  },
  {
    topic: "silly",
    type: "text",
    prompt: "What is a ridiculous, unhinged conspiracy theory {NAME} half-believes?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "What happens when {NAME} tries to assemble flat-pack IKEA furniture?",
    options: ["Meticulously sorts every screw and finishes smoothly", "Skips instructions, builds it backwards, and has 5 screws left", "Gets frustrated after step 3 and leaves it on the floor", "Hands the allen wrench to you and provides moral support"]
  },
  {
    topic: "silly",
    type: "text",
    prompt: "If {NAME} were arrested with zero context, what would friends assume they did?"
  },
  {
    topic: "silly",
    type: "mcq",
    prompt: "What song makes {NAME} lose all dignity and start singing off-key at maximum volume?",
    options: ["2000s Pop / Boyband anthems", "Dramatic Disney movie ballads", "Cheesy 80s rock classics", "Modern rap tracks they barely know the lyrics to"]
  },

  // ==================== SPICY ====================
  {
    topic: "spicy",
    type: "text",
    prompt: "What outfit or style worn by you turns {NAME} on the quickest?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "Where is {NAME}'s absolute most sensitive tickle / goosebump spot?",
    options: ["The side of the neck and earlobes", "The lower back and hips", "The collarbone and chest", "The thighs and waist"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is a seductive gesture or flirty move that makes {NAME} weak in the knees?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What vibe does {NAME} prefer when things turn intimate?",
    options: ["Slow, passionate, romantic, and eye-contact heavy", "Spontaneous, teasing, and playful", "Feisty, bold, and taking charge", "Cozy, quiet, and wrapped in blankets"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is {NAME}'s favorite type of kiss (slow and deep, teasing pecks, neck kisses, etc.)?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What kind of spicy flirty behavior catches {NAME} off guard the most?",
    options: ["A whispered secret or suggestive comment in public", "A sudden pull by the waist into a passionate kiss", "A suggestive text or photo sent during a normal workday", "Tracing fingertips along their back or leg under the table"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is one spicy fantasy or playful scenario {NAME} would love to try?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "Who is usually the bolder initiator when sparks start flying?",
    options: ["{NAME} makes the first bold move", "You are definitely the initiator", "It is an unspoken mutual shift in energy", "A playful back-and-forth tease before anyone commits"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What scent, perfume, or cologne on you drives {NAME} crazy?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What is {NAME}'s preferred lighting and atmosphere for intimacy?",
    options: ["Pitch black darkness with zero distractions", "Warm amber lighting or scented candles flickering", "Natural morning sunlight streaming through the blinds", "The soft glow of a movie playing in the background"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is the flirtiest thing {NAME} has ever done or said to you?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What is {NAME}'s reaction when you tease them without letting them touch?",
    options: ["Pouts adorably and begs playfully", "Takes charge and pins you down", "Feigns indifference but gives in within seconds", "Starts plotting their sweet revenge"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What exact physical touch or whisper instantly gives {NAME} full-body chills?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "Which kiss placement drives {NAME} wildest?",
    options: ["Biting or kissing along the jawline and neck", "Slow, teasing lips that barely brush together", "Kissing down the collarbone and shoulders", "Passionate, breath-stealing deep kisses with hands in hair"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "If you two were locked in a bedroom for an entire rainy weekend, what spicy mischief happens first?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "How does {NAME} prefer power dynamics behind closed doors?",
    options: ["Taking total control and calling the shots", "Completely surrendering control and being taken care of", "A competitive tug-of-war where you fight for dominance", "Soft, gentle, completely balanced give-and-take"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is {NAME}'s favorite spot to be kissed or touched when you're cuddling in bed?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What's {NAME}'s secret weakness when you're alone in an elevator or secluded spot?",
    options: ["Being pinned against the wall for a quick deep kiss", "Hands sliding under shirts or around waists", "A whispered tease about what's happening when you get home", "Stealing a quick, dangerous touch right before doors open"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What spicy confession has {NAME} made that caught you completely by surprise?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What clothing choice on you makes it impossible for {NAME} to keep their hands to themselves?",
    options: ["Tight-fitting jeans or tailored pants", "Only wearing an oversized t-shirt/hoodie with bare legs", "A sharp formal suit or stunning backless dress", "Silk loungewear or minimal sleepwear"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is a tease or habit you have that makes {NAME} want to drag you straight into the bedroom?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "When waking up together on a lazy Sunday morning, what is {NAME}'s preference?",
    options: ["Immediate sleepy, warm morning intimacy before talking", "Making coffee first, then returning to bed for hours", "Gentle back rubs that slowly turn passionate", "Staying tangled in sheets talking and kissing softly"]
  },

  // ==================== UNHINGED ====================
  {
    topic: "unhinged",
    type: "text",
    prompt: "If {NAME} had to hide a dead body, who is the first person they would call to help?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "If {NAME} suddenly won $50 million, what is their most unhinged first purchase?",
    options: ["An absurdly oversized medieval castle with a moat", "A fleet of useless luxury cars or super-boats", "A private zoo with exotic animals", "Disappearing off the face of the Earth into a secret bunker"]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What is the most chaotic, unhinged impulse purchase {NAME} has ever made?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "If {NAME} were a supervillain, what would their petty villain origin story be?",
    options: ["Their favorite takeout spot messed up their order once", "Someone walked too slowly in front of them on the sidewalk", "Their phone charger stopped working at a specific angle", "Someone woke them up from a glorious nap"]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What intrusive thought does {NAME} regularly say out loud?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "If {NAME} could legally commit one harmless petty crime, what would it be?",
    options: ["Stealing every cute stray dog or cat they see", "Slapping people who talk loudly on speakerphone", "Sneaking into high-end events without an invite", "Slashing the prices on their favorite online shopping cart"]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What is {NAME}'s absolute most chaotic late-night internet rabbit hole?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "What would {NAME} do if an alien landed in the backyard tonight?",
    options: ["Try to feed it snacks and pet it", "Panic, scream, and push you forward first", "Start interrogating it about universal secrets", "Take a selfie with it to hard-launch on Instagram"]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "What is the weirdest hill {NAME} is completely prepared to die on?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "How does {NAME} handle seeing a terrifying giant insect in the bathroom?",
    options: ["Screams, bolts out of the room, and leaves the door shut forever", "Traps it bravely under a cup and waits for you to dispose of it", "Attacks it with a shoe like a berserker warrior", "Gently escorts it outside like a Disney princess"]
  },
  {
    topic: "unhinged",
    type: "text",
    prompt: "If {NAME} were caught on live television during a breaking news story, what chaotic thing would they be doing?"
  },
  {
    topic: "unhinged",
    type: "mcq",
    prompt: "What would {NAME} do if they found out ghosts were 100% real and haunting your living room?",
    options: ["Try to charge the ghost rent or assign it chores", "Burn sage, scream, and sell the house by midnight", "Befriend it and ask it about historic gossip", "Use the ghost as an excuse to avoid social plans"]
  },

  // ==================== HABITS & DAILY LIFE ====================
  {
    topic: "habits",
    type: "text",
    prompt: "What is {NAME}'s exact morning routine before they can function like a human?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "What is the state of {NAME}'s phone battery at any given moment?",
    options: ["Always above 80%, super prepared", "Hovering dangerously between 3% and 12%", "Dead; currently looking for a charger", "Constantly plugged into a power bank"]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What is a weird quirk {NAME} has when watching television or movies?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "How does {NAME} manage unread messages or notifications?",
    options: ["0 unread, inbox zero perfectionist", "Over 2,000 unread emails and 40 unread texts", "Reads the preview banner but leaves it unread on purpose", "Replies within 4 seconds or 4 business weeks, no in-between"]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What chore does {NAME} absolutely despise doing the most?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "What is {NAME}'s sleep position of choice?",
    options: ["Spread out like a starfish taking over the whole bed", "Curled into a tight fetal ball", "Hugging a pillow like a lifeline", "Stiff as a board on their back"]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What is something {NAME} always misplaces or loses around the house?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "When {NAME} says 'I'll be ready in 5 minutes', what does that actually mean?",
    options: ["Literally 5 minutes, they are ready at the door", "About 15 to 20 minutes minimum", "They haven't even gotten into the shower yet", "It means check back in an hour"]
  },
  {
    topic: "habits",
    type: "text",
    prompt: "What is {NAME}'s signature habit when scrolling through social media in bed?"
  },
  {
    topic: "habits",
    type: "mcq",
    prompt: "What does {NAME}'s side of the bedroom look like most days?",
    options: ["Spotless and orderly like an upscale hotel", "The iconic 'chair with clothes that aren't dirty or clean'", "Organized chaos where only they know where things are", "A cozy nest of blankets, cups, and charging wires"]
  },

  // ==================== MEMORIES ====================
  {
    topic: "memories",
    type: "text",
    prompt: "What was the very first movie or show you two watched together?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "Where was your very first kiss with {NAME}?",
    options: ["In a car parked somewhere quiet", "Outside under the streetlights or stars", "At home on the couch", "In a crowded place where you sneaked away"]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What was {NAME} wearing on your official first date?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What was the biggest hurdle or funny challenge during the early days of dating?",
    options: ["Awkwardly trying to impress each other's friends/family", "Figuring out who pays or where to eat", "Over-analyzing every single text message", "Hiding embarrassing habits from each other"]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What is a gift you gave {NAME} that made them genuinely emotional?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What was the first big adventure or trip you two took together?",
    options: ["A spontaneous day road trip to a nearby town", "A cozy weekend getaway retreat", "A major flight to a new city/country", "Camping or a beach day under the sun"]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What is an inside joke between you two that nobody else would understand?"
  },
  {
    topic: "memories",
    type: "mcq",
    prompt: "What was the moment you saw {NAME} laugh so hard they couldn't breathe?",
    options: ["When one of you had an embarrassing public fumble", "During a chaotic board or video game session", "Watching a ridiculous meme or movie clip late at night", "When a serious situation turned completely ridiculous"]
  },
  {
    topic: "memories",
    type: "text",
    prompt: "What place or street always triggers instant nostalgia of your early romance?"
  },

  // ==================== HYPOTHETICAL ====================
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} could swap lives with any fictional character for a week, who would it be?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If you two were stuck on a deserted island together, what would {NAME} be in charge of?",
    options: ["Building the shelter and making tools", "Foraging for coconuts, fruits, and food", "Sitting on the sand complaining about the heat and sand", "Building a giant SOS fire signal"]
  },
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} had to open a small business tomorrow, what kind of shop would it be?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} could master one superpower instantly, which one would they pick?",
    options: ["Teleportation (instant travel anywhere)", "Mind reading (knowing what everyone thinks)", "Time manipulation (pause or rewind moments)", "Invisibility (spying and sneaking around)"]
  },
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} were guaranteed to succeed, what crazy dream career would they pursue?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} found an envelope with $10,000 cash on the sidewalk, what is step one?",
    options: ["Try to find whose it is or turn it in", "Deposit it straight into savings with zero hesitation", "Book flights for a dream vacation immediately", "Go on a massive reckless shopping spree"]
  },
  {
    topic: "hypothetical",
    type: "text",
    prompt: "If {NAME} could erase one embarrassing memory from your brain forever, what would it be?"
  },
  {
    topic: "hypothetical",
    type: "mcq",
    prompt: "If {NAME} woke up tomorrow with the ability to hear your thoughts for 24 hours, what would they hear most?",
    options: ["Endless thoughts about how attractive and amazing they are", "A chaotic radio station of random songs and memes", "Constant internal debates about what to eat next", "Worrying about daily tasks and to-do lists"]
  },


  // ==================== SPICY (ADDITIONS) ====================
  {
    topic: "spicy",
    type: "text",
    prompt: "What is {NAME}'s favorite spot on their body to be kissed softly and repeatedly?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What turns {NAME} on faster than anything else?",
    options: ["Deep eye contact with a slow, confident smirk", "A low, raspy whisper directly against their ear", "Fingers gripping their waist or tangled in their hair", "A sudden, breathless pull in for a passionate kiss"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is a bold, sensual outfit or lingerie look {NAME} secretly wants to see you wear?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "When things start heating up, what pace does {NAME} crave most?",
    options: ["Slow, agonizing tease that builds up forever", "Intense, urgent, and unable to wait another second", "Playful wrestling and teasing before getting serious", "Deep, slow, and intensely emotional connection"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "Where is the boldest or most adventurous place {NAME} has ever fantasized about hooking up?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What kind of sound from you drives {NAME} completely over the edge?",
    options: ["Soft whimpers and gasps", "A low, breathy moan right against their skin", "Whispering their name in a raspy voice", "Telling them exactly how good they feel"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is {NAME}'s absolute biggest turn-off or mood-killer in the bedroom?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What touch under the table in a crowded restaurant would make {NAME} lose their mind?",
    options: ["A hand slowly sliding up the inner thigh", "Fingers tracing light patterns on their lower back", "Interlocking fingers and kissing their knuckles while holding eye contact", "Kicking off shoes and playing footsie under the tablecloth"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is {NAME}'s favorite position or dynamic when the lights go down?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "How does {NAME} prefer their hair to be handled when making out?",
    options: ["Fingers gently running through it softly", "A firm, commanding grip pulling their head back slightly", "Messing it up playfully", "Hands cupping their cheeks and jawline instead"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What dirty or flirty line whispered in the dark makes {NAME} completely melt?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What is {NAME}'s favorite part of your body to touch, trace, or kiss?",
    options: ["Lips, jawline, and neck", "Waist, hips, and stomach", "Chest, shoulders, and back", "Thighs and legs"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is one spicy boundary or scenario {NAME} was once shy about, but now secretly loves?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What is {NAME}'s stance on leaving marks (hickeys, scratches, or bites)?",
    options: ["Obsessed with leaving and receiving them everywhere", "Only in discreet, hidden spots nobody else can see", "Playful biting during the moment, but no visible marks", "Strictly gentle—zero marks allowed"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "If {NAME} had total control over you for one full hour in the bedroom, what are they doing first?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "What is {NAME}'s favorite aftercare vibe once everything is said and done?",
    options: ["Sweaty, skin-to-skin cuddles completely wrapped together", "Taking a warm shower together to wash off", "Getting snacks and drinks immediately while laughing in bed", "Falling straight asleep tangled in the sheets"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What tease or subtle move do you do in public that makes {NAME} want to rush home instantly?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "Which spontaneous scenario sounds most thrilling to {NAME}?",
    options: ["Sneaking into a hotel bathroom or balcony during a party", "Pulling over on a deserted, dark country road in the car", "A rainy afternoon in bed with phones completely turned off", "A steamy shower session that turns into a full workout"]
  },
  {
    topic: "spicy",
    type: "text",
    prompt: "What is the most explicit or scandalous text {NAME} has ever sent you?"
  },
  {
    topic: "spicy",
    type: "mcq",
    prompt: "When {NAME} is in the mood, how do they drop hints?",
    options: ["Direct and blunt: tells you straight to your face", "Heavy physical cues: lingering kisses, wandering hands, body presses", "Suggestive, witty banter loaded with double entendres", "Walking out of the bathroom wearing next to nothing"]
  }
];