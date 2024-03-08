const textbooks = [
  {
    id: 1,
    title: "Thermodynamics",
    author: "Dr. P. Sethumadhavan",
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
    isReference: false,
    category: [""],
    pages: 195,
  },
  {
    id: 3,
    title: "Relativistic Mechanics and Astrophysics",
    author: "Dr. P. Sethumadhavan",
    publishedDate: "August 29, 2021",
    semester: 6,
    subject: ["Relativistic Mechanics and astrophysics"],
    filepath: "/textbooks/semester-6/relativity/relativity.pdf",
    image: {
      url: "/textbooks/semester-6/relativity/cover/relativity.jpg",
      width: 126,
      height: 165,
    },
    isReference: false,
    category: [""],
    pages: 195,
  },
  {
    id: 4,
    title: "Nuclear Physics and Particle Physics",
    author: "Dr. P. Sethumadhavan",
    publishedDate: "August 29, 2021",
    semester: 6,
    subject: ["Nuclear Physics and Particle Physics"],
    filepath: "/textbooks/semester-6/nuclear-physics/nuclear-physics.pdf",
    image: {
      url: "/textbooks/semester-6/nuclear-physics/cover/nuclear-physics.jpg",
      width: 126,
      height: 165,
    },
    isReference: false,
    category: [""],
    pages: 195,
  },
  {
    id: 5,
    title: "Statistical Physics Solid State Physics And Photonics",
    author: "Dr. P. Sethumadhavan",
    publishedDate: "August 29, 2021",
    semester: 6,
    subject: ["Statistical Physics Solid State Physics And Photonics"],
    filepath:
      "/textbooks/semester-6/statistical-physics/statistical-physics.pdf",
    image: {
      url: "/textbooks/semester-6/statistical-physics/cover/statistical-physics.jpg",
      width: 126,
      height: 165,
    },
    isReference: false,
    category: [""],
    pages: 195,
  },
];

function getBooksBySubject(books, subject) {
  return books.filter((book) => book.subject.includes(subject.toLowerCase()));
}

const booksBySubject = getBooksBySubject(
  textbooks,
  decodeURIComponent(
    
  )
);

console.log(booksBySubject);
