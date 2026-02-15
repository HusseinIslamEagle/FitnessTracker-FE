/* ===================================================== */
/* 💪 RESISTANCE PROGRAMS */
/* ===================================================== */

export const programs = [

  /* 1️⃣ ANTERIOR x POSTERIOR */
  {
    id: "anterior-posterior",
    title: "Anterior x Posterior",
    level: "6 Days High Frequency",
    days: [
      {
        name: "Day 1 – Anterior Upper",
        exercises: [
          { name: "Barbell Bench Press", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "DB Press" },
          { name: "Incline DB Press", sets: 3, reps: "8-10", rest: "90s", rpe: "8", alt: "Machine Press" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s", rpe: "8", alt: "Arnold Press" },
          { name: "Cable Chest Fly", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Pec Deck" },
          { name: "Triceps Pushdown", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Dips" }
        ]
      },
      {
        name: "Day 2 – Posterior Upper",
        exercises: [
          { name: "Barbell Row", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "Cable Row" },
          { name: "Pull Ups", sets: 4, reps: "8-10", rest: "90s", rpe: "8", alt: "Lat Pulldown" },
          { name: "Face Pull", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Rear Delt Fly" },
          { name: "Barbell Curl", sets: 3, reps: "10-12", rest: "60s", rpe: "8", alt: "EZ Curl" },
          { name: "Hammer Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Curl" }
        ]
      },
      {
        name: "Day 3 – Anterior Lower",
        exercises: [
          { name: "Front Squat", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "Hack Squat" },
          { name: "Leg Press", sets: 4, reps: "10", rest: "90s", rpe: "8", alt: "Goblet Squat" },
          { name: "Leg Extension", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Sissy Squat" },
          { name: "Walking Lunges", sets: 3, reps: "12", rest: "60s", rpe: "8", alt: "Split Squat" },
          { name: "Calf Raises", sets: 4, reps: "15-20", rest: "45s", rpe: "9", alt: "Seated Calf Raise" }
        ]
      },
      {
        name: "Day 4 – Posterior Lower",
        exercises: [
          { name: "Deadlift", sets: 4, reps: "4-6", rest: "150s", rpe: "8", alt: "Trap Bar DL" },
          { name: "Romanian Deadlift", sets: 4, reps: "8", rest: "120s", rpe: "8", alt: "Good Morning" },
          { name: "Hip Thrust", sets: 4, reps: "10", rest: "90s", rpe: "8", alt: "Glute Bridge" },
          { name: "Hamstring Curl", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Nordic Curl" },
          { name: "Cable Pull Through", sets: 3, reps: "15", rest: "60s", rpe: "9", alt: "Kettlebell Swing" }
        ]
      },
      {
        name: "Day 5 – Upper Volume",
        exercises: [
          { name: "Incline Bench", sets: 3, reps: "10-12", rest: "90s", rpe: "8", alt: "Machine Press" },
          { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "90s", rpe: "8", alt: "Pull Ups" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", rpe: "9", alt: "Cable Lateral" },
          { name: "Skull Crushers", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Overhead Extension" },
          { name: "Preacher Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Curl" }
        ]
      },
      {
        name: "Day 6 – Lower Volume",
        exercises: [
          { name: "Back Squat", sets: 3, reps: "10", rest: "90s", rpe: "8", alt: "Leg Press" },
          { name: "RDL", sets: 3, reps: "10-12", rest: "90s", rpe: "8", alt: "Hip Thrust" },
          { name: "Step Ups", sets: 3, reps: "12", rest: "60s", rpe: "8", alt: "Bulgarian Split Squat" },
          { name: "Leg Curl", sets: 3, reps: "15", rest: "60s", rpe: "9", alt: "Nordic Curl" },
          { name: "Calf Raises", sets: 4, reps: "20", rest: "45s", rpe: "9", alt: "Seated Calf" }
        ]
      }
    ]
  },

  /* 2️⃣ ARNOLD x UL (5 Days) */
  {
    id: "arnold-ul",
    title: "Arnold x U-L",
    level: "5 Days Hybrid",
    days: [
      {
        name: "Day 1 – Chest & Back",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "8", rest: "90s", rpe: "8", alt: "DB Press" },
          { name: "Pull Ups", sets: 4, reps: "8-10", rest: "90s", rpe: "8", alt: "Lat Pulldown" },
          { name: "Incline Fly", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Fly" },
          { name: "Barbell Row", sets: 3, reps: "8-10", rest: "90s", rpe: "8", alt: "Machine Row" },
          { name: "Straight Arm Pulldown", sets: 3, reps: "15", rest: "60s", rpe: "9", alt: "Cable Pullover" }
        ]
      },
      {
        name: "Day 2 – Shoulders & Arms",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "DB Press" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", rpe: "9", alt: "Cable Lateral" },
          { name: "Barbell Curl", sets: 3, reps: "10", rest: "60s", rpe: "8", alt: "EZ Curl" },
          { name: "Triceps Dips", sets: 3, reps: "10-12", rest: "60s", rpe: "8", alt: "Pushdown" },
          { name: "Hammer Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Curl" }
        ]
      },
      {
        name: "Day 3 – Shoulders & Arms",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "DB Press" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", rpe: "9", alt: "Cable Lateral" },
          { name: "Barbell Curl", sets: 3, reps: "10", rest: "60s", rpe: "8", alt: "EZ Curl" },
          { name: "Triceps Dips", sets: 3, reps: "10-12", rest: "60s", rpe: "8", alt: "Pushdown" },
          { name: "Hammer Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Curl" }
        ]
      },
      {
        name: "Day 4 – Shoulders & Arms",
        exercises: [
          { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "DB Press" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", rpe: "9", alt: "Cable Lateral" },
          { name: "Barbell Curl", sets: 3, reps: "10", rest: "60s", rpe: "8", alt: "EZ Curl" },
          { name: "Triceps Dips", sets: 3, reps: "10-12", rest: "60s", rpe: "8", alt: "Pushdown" },
          { name: "Hammer Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Cable Curl" }
        ]
      },
      {
        name: "Day 5 – Lower",
        exercises: [
          { name: "Back Squat", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "Leg Press" },
          { name: "RDL", sets: 4, reps: "8", rest: "90s", rpe: "8", alt: "Hip Thrust" },
          { name: "Leg Extension", sets: 3, reps: "15", rest: "60s", rpe: "9", alt: "Sissy Squat" },
          { name: "Ham Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", rpe: "9", alt: "Seated Calf" }
        ]
      }
    ]
  },

  /* 3️⃣ 3-Day Mass Builder */
  {
    id: "3day-mass",
    title: "The 3-Day Mass Builder",
    level: "3 Days",
    days: [
      {
        name: "Day 1 – Push",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "DB Press" },
          { name: "Overhead Press", sets: 4, reps: "8", rest: "90s", rpe: "8", alt: "Machine Press" },
          { name: "Dips", sets: 3, reps: "10-12", rest: "60s", rpe: "8", alt: "Pushdown" },
          { name: "Lateral Raises", sets: 3, reps: "15", rest: "45s", rpe: "9", alt: "Cable Lateral" },
          { name: "Triceps Extension", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "Skull Crushers" }
        ]
      },
      {
        name: "Day 2 – Pull",
        exercises: [
          { name: "Deadlift", sets: 4, reps: "5", rest: "150s", rpe: "8", alt: "Trap Bar DL" },
          { name: "Barbell Row", sets: 4, reps: "8", rest: "90s", rpe: "8", alt: "Cable Row" },
          { name: "Pull Ups", sets: 3, reps: "8-10", rest: "90s", rpe: "8", alt: "Lat Pulldown" },
          { name: "Barbell Curl", sets: 3, reps: "12", rest: "60s", rpe: "9", alt: "EZ Curl" },
          { name: "Face Pull", sets: 3, reps: "15", rest: "60s", rpe: "9", alt: "Rear Delt Fly" }
        ]
      },
      {
        name: "Day 3 – Legs",
        exercises: [
          { name: "Back Squat", sets: 4, reps: "6-8", rest: "120s", rpe: "8", alt: "Leg Press" },
          { name: "RDL", sets: 4, reps: "8", rest: "90s", rpe: "8", alt: "Hip Thrust" },
          { name: "Walking Lunges", sets: 3, reps: "12", rest: "60s", rpe: "8", alt: "Split Squat" },
          { name: "Leg Curl", sets: 3, reps: "12-15", rest: "60s", rpe: "9", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", rpe: "9", alt: "Seated Calf" }
        ]
      }
    ]
  },

  /* 4️⃣ MUSCLE MOMMIES – 4 Days */
  {
    id: "muscle-mommies",
    title: "Muscle Mommies",
    level: "4 Days",
    days: [
      {
        name: "Day 1 – Glutes Focus",
        exercises: [
          { name: "Barbell Hip Thrust", sets: 4, reps: "8-10", rest: "90s", alt: "Glute Bridge" },
          { name: "Bulgarian Split Squat", sets: 3, reps: "10", rest: "60s", alt: "Step Ups" },
          { name: "Cable Kickback", sets: 3, reps: "15", rest: "45s", alt: "Machine Kickback" },
          { name: "Leg Press (High Foot)", sets: 3, reps: "12", rest: "60s", alt: "Goblet Squat" },
          { name: "Seated Abduction", sets: 4, reps: "20", rest: "45s", alt: "Band Abduction" }
        ]
      },
      {
        name: "Day 2 – Upper Body",
        exercises: [
          { name: "Lat Pulldown", sets: 4, reps: "8-10", rest: "90s", alt: "Pull Ups" },
          { name: "Seated Row", sets: 3, reps: "10-12", rest: "60s", alt: "Cable Row" },
          { name: "DB Shoulder Press", sets: 3, reps: "10", rest: "60s", alt: "Machine Press" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", alt: "Cable Lateral" },
          { name: "Triceps Pushdown", sets: 3, reps: "12-15", rest: "60s", alt: "Dips" }
        ]
      },
      {
        name: "Day 3 – Lower Strength",
        exercises: [
          { name: "Back Squat", sets: 4, reps: "6-8", rest: "120s", alt: "Leg Press" },
          { name: "RDL", sets: 4, reps: "8", rest: "90s", alt: "Hip Thrust" },
          { name: "Walking Lunges", sets: 3, reps: "12", rest: "60s", alt: "Split Squat" },
          { name: "Leg Curl", sets: 3, reps: "15", rest: "60s", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", alt: "Seated Calf" }
        ]
      },
      {
        name: "Day 4 – Glute Volume",
        exercises: [
          { name: "Hip Thrust", sets: 4, reps: "12", rest: "60s", alt: "Glute Bridge" },
          { name: "Cable Kickback", sets: 4, reps: "15", rest: "45s", alt: "Band Kickback" },
          { name: "Smith Squat", sets: 3, reps: "12", rest: "60s", alt: "Goblet Squat" },
          { name: "Abduction Machine", sets: 4, reps: "20", rest: "45s", alt: "Band Walk" },
          { name: "Core Circuit", sets: 3, reps: "AMRAP", rest: "60s", alt: "Plank Hold" }
        ]
      }
    ]
  },

  /* 5️⃣ PUSH PULL LEGS x U-L – 5 Days */
  {
    id: "ppl-ul",
    title: "Push Pull Legs x Upper Lower",
    level: "5 Days",
    days: [
      {
        name: "Day 1 – Push",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "6-8", rest: "120s", alt: "DB Press" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s", alt: "Machine Press" },
          { name: "Incline DB Press", sets: 3, reps: "10", rest: "90s", alt: "Cable Fly" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", alt: "Cable Lateral" },
          { name: "Triceps Pushdown", sets: 3, reps: "12-15", rest: "60s", alt: "Dips" }
        ]
      },
      {
        name: "Day 2 – Pull",
        exercises: [
          { name: "Deadlift", sets: 4, reps: "5", rest: "150s", alt: "Trap Bar DL" },
          { name: "Barbell Row", sets: 4, reps: "8", rest: "90s", alt: "Cable Row" },
          { name: "Pull Ups", sets: 3, reps: "8-10", rest: "90s", alt: "Lat Pulldown" },
          { name: "Barbell Curl", sets: 3, reps: "12", rest: "60s", alt: "EZ Curl" },
          { name: "Face Pull", sets: 3, reps: "15", rest: "60s", alt: "Rear Delt Fly" }
        ]
      },
      {
        name: "Day 3 – Legs",
        exercises: [
          { name: "Back Squat", sets: 4, reps: "6-8", rest: "120s", alt: "Leg Press" },
          { name: "RDL", sets: 4, reps: "8", rest: "90s", alt: "Hip Thrust" },
          { name: "Walking Lunges", sets: 3, reps: "12", rest: "60s", alt: "Split Squat" },
          { name: "Leg Curl", sets: 3, reps: "12-15", rest: "60s", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", alt: "Seated Calf" }
        ]
      },
      {
        name: "Day 4 – Upper",
        exercises: [
          { name: "Incline Bench", sets: 4, reps: "8", rest: "90s", alt: "Machine Press" },
          { name: "Lat Pulldown", sets: 4, reps: "8-10", rest: "90s", alt: "Pull Ups" },
          { name: "Shoulder Press", sets: 3, reps: "10", rest: "60s", alt: "Arnold Press" },
          { name: "Cable Row", sets: 3, reps: "12", rest: "60s", alt: "Barbell Row" },
          { name: "Arms Finisher", sets: 3, reps: "AMRAP", rest: "60s", alt: "Superset" }
        ]
      },
      {
        name: "Day 5 – Lower",
        exercises: [
          { name: "Front Squat", sets: 4, reps: "6-8", rest: "120s", alt: "Hack Squat" },
          { name: "Hip Thrust", sets: 4, reps: "8-10", rest: "90s", alt: "Glute Bridge" },
          { name: "Leg Press", sets: 3, reps: "12", rest: "60s", alt: "Goblet Squat" },
          { name: "Ham Curl", sets: 3, reps: "15", rest: "60s", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", alt: "Seated Calf" }
        ]
      }
    ]
  },

  /* 6️⃣ ELITE STRENGTH FORMULA */
  {
    id: "elite-strength",
    title: "Elite Strength Formula",
    level: "4 Days Power",
    days: [
      {
        name: "Day 1 – Push",
        exercises: [
          { name: "Bench Press", sets: 4, reps: "6-8", rest: "120s", alt: "DB Press" },
          { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s", alt: "Machine Press" },
          { name: "Incline DB Press", sets: 3, reps: "10", rest: "90s", alt: "Cable Fly" },
          { name: "Lateral Raises", sets: 4, reps: "15", rest: "45s", alt: "Cable Lateral" },
          { name: "Triceps Pushdown", sets: 3, reps: "12-15", rest: "60s", alt: "Dips" }
        ]
      },
      {
        name: "Day 2 – Pull",
        exercises: [
          { name: "Deadlift", sets: 4, reps: "5", rest: "150s", alt: "Trap Bar DL" },
          { name: "Barbell Row", sets: 4, reps: "8", rest: "90s", alt: "Cable Row" },
          { name: "Pull Ups", sets: 3, reps: "8-10", rest: "90s", alt: "Lat Pulldown" },
          { name: "Barbell Curl", sets: 3, reps: "12", rest: "60s", alt: "EZ Curl" },
          { name: "Face Pull", sets: 3, reps: "15", rest: "60s", alt: "Rear Delt Fly" }
        ]
      },
      {
        name: "Day 3 – Legs",
        exercises: [
          { name: "Back Squat", sets: 4, reps: "6-8", rest: "120s", alt: "Leg Press" },
          { name: "RDL", sets: 4, reps: "8", rest: "90s", alt: "Hip Thrust" },
          { name: "Walking Lunges", sets: 3, reps: "12", rest: "60s", alt: "Split Squat" },
          { name: "Leg Curl", sets: 3, reps: "12-15", rest: "60s", alt: "Nordic Curl" },
          { name: "Calf Raise", sets: 4, reps: "20", rest: "45s", alt: "Seated Calf" }
        ]
      },
      {
        name: "Upper Power",
        exercises: [
          { name: "Bench Press", sets: 5, reps: "5", rest: "150s", rpe: "8", alt: "DB Press" },
          { name: "Weighted Pull Up", sets: 4, reps: "6", rest: "120s", rpe: "8", alt: "Lat Pulldown" },
          { name: "Overhead Press", sets: 4, reps: "6", rest: "120s", rpe: "8", alt: "Machine Press" },
          { name: "Barbell Curl", sets: 3, reps: "8", rest: "90s", rpe: "8", alt: "EZ Curl" },
          { name: "Close Grip Bench", sets: 3, reps: "8", rest: "90s", rpe: "8", alt: "Pushdown" }
        ]
      }
    ]
  }
];

/* ===================================================== */
/* 🫀 CARDIO WORKOUTS */
/* ===================================================== */

export const cardioWorkouts = [
  {
    name: "Treadmill Intervals",
    duration: "20 Minutes",
    intensity: "High",
    description: "30s sprint + 60s walk × 10 rounds"
  },
  {
    name: "StairMaster Climb",
    duration: "15 Minutes",
    intensity: "Moderate",
    description: "Steady climb pace with posture control"
  },
  {
    name: "HIIT Bike Sprints",
    duration: "15 Minutes",
    intensity: "Very High",
    description: "20s sprint + 40s slow pedal × 12"
  },
  {
    name: "Rowing Machine",
    duration: "2000m",
    intensity: "High",
    description: "Power focus with controlled strokes"
  },
  {
    name: "Battle Ropes",
    duration: "10 Minutes",
    intensity: "High",
    description: "30s waves + 30s rest"
  },
  {
    name: "Jump Rope",
    duration: "10–15 Minutes",
    intensity: "Moderate",
    description: "Fast tempo rounds"
  },
  {
    name: "Incline Walking",
    duration: "20–30 Minutes",
    intensity: "Low",
    description: "Fat burning steady pace"
  },
  {
    name: "Outdoor Sprint",
    duration: "10 Rounds",
    intensity: "Very High",
    description: "40m sprint + full rest"
  }
];