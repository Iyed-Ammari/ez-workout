export const bodyPartList = [
  "all",
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist"
]

const exercisesData = [
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "/assets/Incline-Barbell-Row.gif",
    id: "0049",
    name: "barbell incline row",
    target: "upper back",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Set up an incline bench at a 45-degree angle.",
      "Lie face down on the bench with your chest against the pad and your feet flat on the ground.",
      "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
      "Keep your back straight and your core engaged.",
      "Pull the barbell towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "barbell",
    gifUrl: "/assets/Barbell-Bent-Over-Row.gif",
    id: "0027",
    name: "barbell bent over row",
    target: "upper back",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Stand with your feet shoulder-width apart and knees slightly bent.",
      "Bend forward at the hips while keeping your back straight and chest up.",
      "Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Pull the barbell towards your lower chest by retracting your shoulder blades and squeezing your back muscles.",
      "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "upper legs back",
    equipment: "barbell",
    gifUrl: "/assets/Barbell-Deadlift.gif",
    id: "0032",
    name: "barbell deadlift",
    target: "glutes",
    secondaryMuscles: ["hamstrings", "lower back"],
    instructions: [
      "Stand with your feet shoulder-width apart and the barbell on the ground in front of you.",
      "Bend your knees and hinge at the hips to lower your torso and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Keep your back straight and chest lifted as you drive through your heels to lift the barbell off the ground, extending your hips and knees.",
      "As you stand up straight, squeeze your glutes and keep your core engaged.",
      "Lower the barbell back down to the ground by bending at the hips and knees, keeping your back straight.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "/assets/Cable-Straight-Arm-Pulldown.gif",
    id: "0237",
    name: "cable straight arm pulldown (with rope)",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Attach a rope to the cable machine at the highest setting.",
      "Stand facing the machine with your feet shoulder-width apart.",
      "Grasp the rope with both hands, palms facing down.",
      "Extend your arms fully in front of you, keeping your elbows slightly bent.",
      "Engage your lats and slowly pull the rope down towards your thighs, keeping your arms straight.",
      "Pause for a moment at the bottom, then slowly release the tension and return to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "/assets/Front-Pulldown.gif",
    id: "0579",
    name: "lever front pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids", "rear deltoids"],
    instructions: [
      "Adjust the seat height and position yourself on the machine with your knees under the pads and your feet flat on the ground.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Sit upright with your chest lifted and your shoulders back, maintaining a slight arch in your lower back.",
      "Engage your lats and pull the handles down towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the bottom of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "dumbbell",
    gifUrl: "/assets/Incline-Reverse-Grip-Dumbbell-Row-One-Arm.gif",
    id: "1330",
    name: "dumbbell reverse grip incline bench one arm row",
    target: "upper back",
    secondaryMuscles: ["biceps", "shoulders"],
    instructions: [
      "Set up an incline bench at a 45-degree angle.",
      "Place a dumbbell on the floor next to the bench.",
      "Stand facing the bench with your feet shoulder-width apart.",
      "Bend at the waist and place your left knee and left hand on the bench for support.",
      "Pick up the dumbbell with your right hand using a reverse grip (palm facing down).",
      "Keep your back straight and your core engaged.",
      "Pull the dumbbell up towards your chest, keeping your elbow close to your body.",
      "Squeeze your back muscles at the top of the movement.",
      "Lower the dumbbell back down to the starting position in a controlled manner.",
      "Repeat for the desired number of repetitions.",
      "Switch sides and repeat the exercise with your left arm.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "/assets/Lat-Pulldown.gif",
    id: "2330",
    name: "lat pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "rhomboids", "rear deltoids"],
    instructions: [
      "Start by attaching a wide handle bar to the cable.",
      "Sit on the lat pulldown machine with your feet flat on the ground and your knees firmly pressed against the pad. Your thighs should be parallel to the ground.",
      "Grab the bar with both hands, making sure your palms are facing away from you and your grip is wider than shoulder-width apart.",
      "While keeping your back straight and your chest up, pull the bar down towards your chest by contracting your back muscles. Your elbows should point downwards and stay close to your body.",
      "Pause for a second when the bar reaches your chest, and then slowly release it back up to the starting position, extending your arms fully.",
      "Repeat for the desired number of reps.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "/assets/Lever-T-bar-Row.gif",
    id: "0606",
    name: "lever t bar row",
    target: "upper back",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Adjust the seat height and footplate position to ensure proper alignment.",
      "Sit on the machine with your chest against the pad and your feet flat on the footplate.",
      "Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.",
      "Keep your back straight and engage your core.",
      "Pull the handles towards your torso, squeezing your shoulder blades together.",
      "Pause for a moment at the peak contraction, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    "bodyPart": "back",
    "equipment": "cable",
    "gifUrl": "/assets/Cable-Seated-Row.gif",
    "id": "0861",
    "name": "cable seated row",
    "target": "upper back",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Sit on the cable row machine with your feet flat on the footrests and your knees slightly bent.",
      "Grasp the handles with an overhand grip, keeping your back straight and your shoulders relaxed.",
      "Pull the handles towards your body, squeezing your shoulder blades together.",
      "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "back",
    "equipment": "body weight",
    "gifUrl": "/assets/Pull-Up.gif",
    "id": "0651",
    "name": "pull up (neutral grip)",
    "target": "lats",
    "secondaryMuscles": [
      "biceps",
      "forearms"
    ],
    "instructions": [
      "Hang from a pull-up bar with a neutral grip (palms facing each other) and your arms fully extended.",
      "Engage your core and squeeze your shoulder blades together.",
      "Pull your body up towards the bar by bending your elbows and driving your elbows down towards your hips.",
      "Continue pulling until your chin is above the bar.",
      "Pause for a moment at the top, then slowly lower your body back down to the starting position with control.",
      "Repeat for the desired number of repetitions."
    ]
  },
  /**************************************/
  {
    "bodyPart": "chest",
    "equipment": "barbell",
    "gifUrl": "/assets/Barbell-Bench-Press.gif",
    "id": "0025",
    "name": "barbell bench press",
    "target": "pectorals",
    "secondaryMuscles": [
      "triceps",
      "shoulders"
    ],
    "instructions": [
      "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
      "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
      "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
      "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
      "Pause for a moment when the barbell touches your chest.",
      "Push the barbell back up to the starting position by extending your arms.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "body weight",
    "gifUrl": "/assets/Chest-Dips.gif",
    "id": "0251",
    "name": "chest dip",
    "target": "pectorals",
    "secondaryMuscles": [
      "triceps",
      "shoulders"
    ],
    "instructions": [
      "Position yourself on parallel bars with your arms fully extended and your body straight.",
      "Lower your body by bending your elbows until your shoulders are below your elbows.",
      "Push yourself back up to the starting position by straightening your arms.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "leverage machine",
    "gifUrl": "/assets/Decline-Chest-Press-Machine.gif",
    "id": "1300",
    "name": "lever decline chest press",
    "target": "pectorals",
    "secondaryMuscles": [
      "triceps",
      "shoulders"
    ],
    "instructions": [
      "Adjust the seat height and backrest of the leverage machine to a comfortable position.",
      "Sit on the machine with your back against the backrest and your feet flat on the floor.",
      "Grasp the handles with an overhand grip and position your hands slightly wider than shoulder-width apart.",
      "Push the handles forward and away from your body until your arms are fully extended.",
      "Slowly lower the handles back towards your chest, keeping your elbows slightly bent.",
      "Pause for a moment at the bottom, then push the handles back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "cable",
    "gifUrl": "/assets/High-Cable-Crossover.gif",
    "id": "1269",
    "name": "cable standing up straight crossovers",
    "target": "pectorals",
    "secondaryMuscles": [
      "deltoids",
      "triceps"
    ],
    "instructions": [
      "Stand in the middle of a cable machine with your feet shoulder-width apart.",
      "Hold the handles of the cables with your palms facing down and your arms extended straight out to the sides.",
      "Keeping your arms straight, bring your hands together in front of your body, crossing them over each other.",
      "Pause for a moment, then slowly return to the starting position, keeping your arms extended.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "barbell",
    "gifUrl": "/assets/Incline-Barbell-Bench-Press.gif",
    "id": "0047",
    "name": "barbell incline bench press",
    "target": "pectorals",
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ],
    "instructions": [
      "Set up an incline bench at a 45-degree angle.",
      "Lie down on the bench with your feet flat on the ground.",
      "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart.",
      "Unrack the barbell and lower it slowly towards your chest, keeping your elbows at a 45-degree angle.",
      "Pause for a moment at the bottom, then push the barbell back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Incline-dumbbell-Fly.gif",
    "id": "0319",
    "name": "dumbbell incline fly",
    "target": "pectorals",
    "secondaryMuscles": [
      "shoulders"
    ],
    "instructions": [
      "Set an incline bench to a 45-degree angle.",
      "Sit on the bench with a dumbbell in each hand, palms facing each other.",
      "Lie back on the bench and press the dumbbells up to the starting position, directly above your chest.",
      "Lower the dumbbells out to the sides in a wide arc until you feel a stretch in your chest.",
      "Pause for a moment, then squeeze your chest muscles to bring the dumbbells back up to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Incline-Dumbbell-Press-On-Exercise-Ball.gif",
    "id": "1293",
    "name": "dumbbell press on exercise ball",
    "target": "pectorals",
    "secondaryMuscles": [
      "shoulders",
      "triceps"
    ],
    "instructions": [
      "Sit on an exercise ball with your feet flat on the ground and dumbbells in each hand, resting on your thighs.",
      "Slowly walk your feet forward, rolling the exercise ball until your lower back is supported on the ball and your knees are at a 90-degree angle.",
      "Raise the dumbbells to shoulder height, palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "leverage machine",
    "gifUrl": "/assets/Lever-Chest-Press.gif",
    "id": "0576",
    "name": "lever chest press",
    "target": "pectorals",
    "secondaryMuscles": [
      "triceps",
      "shoulders"
    ],
    "instructions": [
      "Adjust the seat height and position yourself on the machine with your back flat against the pad.",
      "Grasp the handles with an overhand grip and position your elbows at a 90-degree angle.",
      "Push the handles forward until your arms are fully extended, exhaling during the movement.",
      "Pause briefly at the end of the movement, then slowly return to the starting position, inhaling as you do so.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "chest",
    "equipment": "leverage machine",
    "gifUrl": "/assets/Pec-Deck-Fly.gif",
    "id": "0596",
    "name": "lever seated fly",
    "target": "pectorals",
    "secondaryMuscles": [
      "deltoids",
      "trapezius"
    ],
    "instructions": [
      "Adjust the seat height and position yourself on the machine with your back against the pad.",
      "Grasp the handles with a pronated grip and keep your elbows slightly bent.",
      "Exhale and push the handles forward, bringing them together in front of your chest.",
      "Pause for a moment, squeezing your chest muscles.",
      "Inhale and slowly return to the starting position, allowing your chest muscles to stretch.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Standing-Dumbbell-Overhead-Press.gif",
    "id": "0405",
    "name": "dumbbell seated shoulder press",
    "target": "delts",
    "secondaryMuscles": [
      "triceps",
      "upper back"
    ],
    "instructions": [
      "Sit on a bench with a dumbbell in each hand, resting on your thighs.",
      "Raise the dumbbells to shoulder height, palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the dumbbells back to shoulder height.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "/assets/Dumbbell-Lateral-Raise.gif",
    "id": "0977",
    "name": "band front lateral raise",
    "target": "delts",
    "secondaryMuscles": [
      "traps",
      "upper back"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart and hold the band in front of your thighs with your palms facing down.",
      "Keep your arms straight and lift the band up in front of you until your arms are parallel to the ground.",
      "Pause for a moment at the top, then slowly lower the band back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "smith machine",
    "gifUrl": "/assets/Smith-Machine-Shoulder-Press.gif",
    "id": "0766",
    "name": "smith shoulder press",
    "target": "delts",
    "secondaryMuscles": [
      "triceps",
      "upper back"
    ],
    "instructions": [
      "Adjust the seat height and position yourself on the smith machine with your feet shoulder-width apart.",
      "Grasp the bar with an overhand grip, slightly wider than shoulder-width apart.",
      "Lift the bar off the rack and position it at shoulder level, with your elbows bent and palms facing forward.",
      "Press the bar upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the bar back down to shoulder level.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "cable",
    "gifUrl": "/assets/one-arm-Cable-Lateral-Raise.gif",
    "id": "0178",
    "name": "cable lateral raise",
    "target": "delts",
    "secondaryMuscles": [
      "traps",
      "triceps"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart and grasp the cable handles with an overhand grip.",
      "Keep your arms straight and your core engaged.",
      "Raise your arms out to the sides until they are parallel to the floor.",
      "Pause for a moment at the top, then slowly lower your arms back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Seated-Rear-Lateral-Dumbbell-Raise.gif",
    "id": "0396",
    "name": "dumbbell seated lateral raise",
    "target": "delts",
    "secondaryMuscles": [
      "traps",
      "upper back"
    ],
    "instructions": [
      "Sit on a bench with your feet flat on the ground and a dumbbell in each hand, resting on your thighs.",
      "Keep your back straight and core engaged.",
      "Raise the dumbbells to your sides with a slight bend in your elbows, until your arms are parallel to the ground.",
      "Pause for a moment at the top, then slowly lower the dumbbells back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Standing-Dumbbell-Overhead-Press.gif",
    "id": "0426",
    "name": "dumbbell standing overhead press",
    "target": "delts",
    "secondaryMuscles": [
      "triceps",
      "upper back"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand at shoulder level with your palms facing forward.",
      "Press the dumbbells upward until your arms are fully extended overhead.",
      "Pause for a moment at the top, then slowly lower the dumbbells back down to shoulder level.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "cable",
    "gifUrl": "/assets/Two-Arm-Cable-Front-Raise.gif",
    "id": "0162",
    "name": "cable front raise",
    "target": "delts",
    "secondaryMuscles": [
      "triceps",
      "forearms"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart and grasp the cable handle with an overhand grip.",
      "Keep your back straight and your core engaged.",
      "Raise the cable handle in front of you, keeping your arms straight and your palms facing down.",
      "Continue lifting until your arms are parallel to the floor.",
      "Pause for a moment at the top, then slowly lower the cable handle back to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "dumbbell",
    "gifUrl": "/assets/Two-Arm-Dumbbell-Front-Raise.gif",
    "id": "0310",
    "name": "dumbbell front raise",
    "target": "delts",
    "secondaryMuscles": [
      "biceps",
      "trapezius"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing your thighs.",
      "Keeping your arms straight, exhale and lift the dumbbells in front of you until they are at shoulder level.",
      "Pause for a moment at the top, then inhale and slowly lower the dumbbells back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "barbell",
    "gifUrl": "/assets/Dumbbell-Upright-Row.gif",
    "id": "0120",
    "name": "barbell upright row",
    "target": "delts",
    "secondaryMuscles": [
      "traps",
      "biceps"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart and hold a barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
      "Let the barbell hang in front of your thighs, arms fully extended.",
      "Keeping your back straight and core engaged, exhale and lift the barbell straight up towards your chin, leading with your elbows.",
      "Pause for a moment at the top, then inhale and slowly lower the barbell back down to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
  {
    "bodyPart": "shoulders",
    "equipment": "band",
    "gifUrl": "/assets/Half-Kneeling-High-Cable-Row-Rope.gif",
    "id": "1022",
    "name": "band standing rear delt row",
    "target": "delts",
    "secondaryMuscles": [
      "trapezius",
      "rhomboids",
      "biceps"
    ],
    "instructions": [
      "Stand with your feet shoulder-width apart and place the band under your feet.",
      "Hold the band handles with your palms facing each other and your arms extended in front of you.",
      "Bend your knees slightly and hinge forward at the hips, keeping your back straight.",
      "Pull the band towards your chest, squeezing your shoulder blades together.",
      "Pause for a moment at the top, then slowly release the tension and return to the starting position.",
      "Repeat for the desired number of repetitions."
    ]
  },
];

export const notFoundData = [
  {
    bodyPart: "not found",
    equipment: "not found",
    gifUrl: "/assets/error.gif",
    id: "0000",
    name: "not found",
    target: "not found",
    secondaryMuscles: ["not found"],
    instructions: ["not found"],
  },
];

export const users = [
  {
    id: '1',
    firstName: 'iyed',
    lastName: 'ammari',
    age: '20',
    pw: '1234',
    email: 'iyediyedammari@gmail.com',
    type: 'admin',
    status: 'active'
  },
  {
    id: '2',
    firstName: 'khalil',
    lastName: 'ben mabrouk',
    age: '21',
    pw: '1234',
    email: 'narberal@gmail.com',
    type: 'user',
    status: 'active'
  },
  {
    id: '3',
    firstName: 'souhail',
    lastName: 'gana',
    age: '21',
    pw: '1234',
    email: 'sou@gmail.com',
    type: 'user',
    status: 'active'
  },
  {
    id: '4',
    firstName: 'mohamed',
    lastName: 'ben mohamed',
    age: '21',
    pw: '1234',
    email: 'med@gmail.com',
    type: 'admin',
    status: 'inactive',
  },
]

export default exercisesData;
