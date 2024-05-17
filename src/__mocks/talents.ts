const positions = [
  { id: 1, name: "Scrum Master" },
  { id: 2, name: "Analyst" },
  { id: 3, name: "Web Front-End Developer" },
  { id: 4, name: "Web Back-End Developer" },
  { id: 5, name: "Android Developer" },
  { id: 6, name: "Quality Assurance" },
  { id: 7, name: "UI/UX Designer" },
];

const skills = [{ id: 1, name: "" }];

const talents = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://mm.feb.uncen.ac.id/wp-content/uploads/2016/01/tutor-8.jpg",
    experience: "5",
    is_available: false,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
  {
    id: "2",
    name: "John Lennon",
    avatar:
      "https://www.azcentral.com/gcdn/-mm-/ae811a38ccb7ca7681c5cd9edc7e0bae36516e06/c=261-0-2174-2550/local/-/media/2015/10/08/Phoenix/Phoenix/635799268539755113-ae-lennon09e.jpg",
    experience: "3",
    is_available: true,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
  {
    id: "3",
    name: "John Mayer",
    avatar:
      "https://yt3.googleusercontent.com/tPeUXcL2NgQno2FEYOqrrH1qQX2e8tCfC9QolJJQPTcVcZio1BbRMq2Gu1o9IkjK1tbB035T=s900-c-k-c0x00ffffff-no-rj",
    experience: "5",
    is_available: true,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
  {
    id: "4",
    name: "John Whore",
    avatar:
      "https://johnzeratsky.com/wp-content/uploads/2019/07/JohnZeratsky_web-8510-1.jpg",
    experience: "4",
    is_available: false,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
  {
    id: "5",
    name: "John Cena",
    avatar:
      "https://deadline.com/wp-content/uploads/2024/01/john-cena-wwe-retiring.jpg?w=1024",
    experience: "5",
    is_available: true,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
  {
    id: "6",
    name: "John Page",
    avatar:
      "https://cdn.britannica.com/41/218341-050-51D8903F/American-actor-John-Krasinski-2020.jpg",
    experience: "7",
    is_available: true,
    positions: [
      {
        id: 3,
        name: "Web Front-End Developer",
      },
      {
        id: 5,
        name: "Android Developer",
      },
    ],
    skills: [
      {
        skillId: "idskill1",
        skillName: "JavaScript",
      },
      {
        skillId: "idskill2",
        skillName: "TypeScript",
      },
    ],
  },
];

export { talents, positions };
