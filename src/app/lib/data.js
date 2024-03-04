const textbooks = [
  {
    id: 1,
    title: "Thermodynamics",
    author: "Prof. Inasu A",
    publishedDate: "29-08-2021",
    semester: 6,
    subject: ["thermodynamics"], // can have more than one value for reference books
    filepath: "/textbooks/semester-6/thermodynamics/thermodynamics.pdf",
    image: {
      url: "/textbooks/semester-6/thermodynamics/cover/thermodynamics.jpg",
      width: 126,
      height: 165,
    },
    isReference: false,
    category: [""],
    pages: 195,
  },
  {
    id: 2,
    title: "Material Science",
    author: "Dr. P Sethumadhavan",
    publishedDate: "September 2, 2022",
    semester: 6,
    subject: ["material science"],
    filepath: "/textbooks/semester-6/material-science/material-science.pdf",
    image: {
      url: "/textbooks/semester-6/material-science/cover/material-science.jpg",
      width: 126,
      height: 165,
    },
  },
  {
    id: 3,
    title: "Relativistic Mechanics and Astrophysics",
    author: "Prof. Inasu CA",
    publishedDate: "August 29, 2021",
    semester: 6,
    subject: ["Relativistic Mechanics and astrophysics"],
    filepath: "/textbooks/semester-6/relativity/relativity.pdf",
    image: {
      url: "/textbooks/semester-6/relativity/cover/relativity.jpg",
      width: 126,
      height: 165,
    },
  },
];

export { textbooks };
