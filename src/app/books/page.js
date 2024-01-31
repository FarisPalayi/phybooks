import Breadcrumb from "../components/shared/Breadcrumb";
import Lyrics from "./lyrics";

export default function Page() {
  const category = "Semester 5";

  return (
    <main className="main" style={{ gap: 60, padding: "0 5px" }}>
      <h1 style={{ marginTop: "76px" }}> {category} Textbooks</h1>
      <Breadcrumb />
      <Lyrics />
    </main>
  );
}
