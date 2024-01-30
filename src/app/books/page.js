import Breadcrumb from "../components/Breadcrumb";

export default function Page() {
  const category = "Semester VI";

  return (
    <main>
      <h1 style={{ marginTop: "76px" }}> {category} Textbooks</h1>
      <Breadcrumb />
    </main>
  );
}
