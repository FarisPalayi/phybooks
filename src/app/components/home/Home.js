import SemesterGrid from "./SemesterGrid";
// import styles from "../../styles/components/Main.module.scss";
import Intro from "./Intro.js";
import Subject from "./Subject.js";
import CatalogLink from "../shared/CatalogLink";
import Toast from "../shared/Toast";

export default function Main() {
  return (
    <main className="container">
      <div className="main home">
        <Intro />
        <SemesterGrid />
        <Subject />
        <CatalogLink />
        {/* <Toast /> */}
      </div>
    </main>
  );
}
