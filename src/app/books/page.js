import Breadcrumb from "../components/Breadcrumb";

export default function Page() {
  const category = "Semester VI";

  return (
    <main className="main" style={{ gap: 60 }}>
      <h1 style={{ marginTop: "76px" }}> {category} Textbooks</h1>
      <Breadcrumb />
      <div>
        <p style={{ marginBottom: 30 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores
          deleniti sint earum architecto totam libero facilis esse fuga nisi,
          assumenda autem porro harum impedit dolorum tempora consequuntur
          excepturi? Tempore totam corporis iusto libero sapiente? Hic pariatur
          harum necessitatibus. Porro ipsam nostrum
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores
          deleniti sint earum architecto totam libero facilis esse fuga nisi,
          assumenda autem porro harum impedit dolorum tempora consequuntur
          excepturi? Tempore totam corporis iusto libero sapiente? Hic pariatur
          harum necessitatibus. Porro ipsam nostrum earum ullam libero
          doloremque culpa accusantium
        </p>
      </div>
    </main>
  );
}
