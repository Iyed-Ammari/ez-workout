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
    bodyPart:"upper legs",
equipment:"barbell",
gifUrl:"/assets/Barbell-Deadlift.gif",
id:"0032",
name:"barbell deadlift",
target:"glutes",
secondaryMuscles:
["hamstrings",
"lower back"],
instructions:
["Stand with your feet shoulder-width apart and the barbell on the ground in front of you.",
"Bend your knees and hinge at the hips to lower your torso and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
"Keep your back straight and chest lifted as you drive through your heels to lift the barbell off the ground, extending your hips and knees.",
"As you stand up straight, squeeze your glutes and keep your core engaged.",
"Lower the barbell back down to the ground by bending at the hips and knees, keeping your back straight.",
"Repeat for the desired number of repetitions.",]
  },
  {
    bodyPart:"back",
equipment:"cable",
gifUrl:"/assets/Cable-Straight-Arm-Pulldown.gif",
id:"0237",
name:"cable straight arm pulldown (with rope)",
target:"lats",
secondaryMuscles:
["biceps",
"forearms"],
instructions:
["Attach a rope to the cable machine at the highest setting.",
"Stand facing the machine with your feet shoulder-width apart.",
"Grasp the rope with both hands, palms facing down.",
"Extend your arms fully in front of you, keeping your elbows slightly bent.",
"Engage your lats and slowly pull the rope down towards your thighs, keeping your arms straight.",
"Pause for a moment at the bottom, then slowly release the tension and return to the starting position.",
"Repeat for the desired number of repetitions.",]
  },
  {
    bodyPart:"back",
equipment:"leverage machine",
gifUrl:"/assets/Front-Pulldown.gif",
id:"0579",
name:"lever front pulldown",
target:"lats",
secondaryMuscles:
["biceps",
"rhomboids",
"rear deltoids"],
instructions:
["Adjust the seat height and position yourself on the machine with your knees under the pads and your feet flat on the ground."
,"Grasp the handles with an overhand grip, slightly wider than shoulder-width apart."
,"Sit upright with your chest lifted and your shoulders back, maintaining a slight arch in your lower back."
,"Engage your lats and pull the handles down towards your chest, squeezing your shoulder blades together."
,"Pause for a moment at the bottom of the movement, then slowly release the handles back to the starting position."
,"Repeat for the desired number of repetitions."]
  },
];


export const notFoundData =[ {
  bodyPart: "not found",
  equipment: "not found",
  gifUrl: "/assets/error.gif",
  id: "0000",
  name: "not found",
  target: "not found",
  secondaryMuscles: ["not found"],
  instructions: ["not found"],
}];

export default exercisesData;
