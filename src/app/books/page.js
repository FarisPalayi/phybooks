import Breadcrumb from "../components/shared/Breadcrumb";
import Lyrics from "./lyrics";
import BookCard from "../components/books/BookCard";
import styles from "../styles/components/Books.module.scss";

const placeholderBooks = [
  {
    id: 1,
    title: "Electronics",
    author: "Prof. Inasu CA",
    published: "August 29, 2021",
    image: {
      url: "/images/book-cover.png",
      width: 126,
      height: 165,
    },
    chapters: [
      {
        title: "Transistors and Diodes",
        pdf: "/chapters/chapter-1.pdf",
      },
      {
        title: "Semiconductors",
        pdf: "/chapters/chapter-2.pdf",
      },
      {
        title: "Integrated Circuits",
        pdf: "/chapters/chapter-3.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Material Science",
    author: "Dr. P Sethumadhavan",
    published: "September 2, 2022",
    image: {
      url: "/images/book-cover-material-science.jpg",
      width: 126,
      height: 165,
    },
    chapters: [
      {
        title: "Transistors and Diodes",
        pdf: "/chapters/chapter-1.pdf",
      },
      {
        title: "Semiconductors",
        pdf: "/chapters/chapter-2.pdf",
      },
      {
        title: "Integrated Circuits",
        pdf: "/chapters/chapter-3.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Electronics",
    author: "Prof. Inasu CA",
    published: "August 29, 2021",
    image: {
      url: "/images/book-cover.png",
      width: 126,
      height: 165,
    },
    chapters: [
      {
        title: "Transistors and Diodes",
        pdf: "/chapters/chapter-1.pdf",
      },
      {
        title: "Semiconductors",
        pdf: "/chapters/chapter-2.pdf",
      },
      {
        title: "Integrated Circuits",
        pdf: "/chapters/chapter-3.pdf",
      },
    ],
  },
];

export default function Page() {
  const category = "Semester 5";

  return (
    <main className={`main ${styles.books}`}>
      <h1 className={styles.books__header}> {category} Textbooks</h1>
      <Breadcrumb variant="Secondary" />
      <section
        style={{
          display: "flex",
          gap: "80px",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {placeholderBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </section>
      <Lyrics />
    </main>
  );
}
