import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>Photo</p>
        <div>
          <h1>PEDRO UZIEL BARRITA LICEA</h1>
          <h3>SOFTWARE ENGINEER</h3>
        </div>
      </div>

      <div>
        <h2>ABOUT ME</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et vitae
          earum, molestiae tempora assumenda quod maxime magni doloribus nam,
          veniam porro eius explicabo molestias! Inventore numquam excepturi
          earum omnis dolorem!
        </p>
      </div>

      <div>
        <h1>SKILLS</h1>
        <div>
          <h4>All</h4>
          <h4>Frontend</h4>
          <h4>Backend</h4>
          <h4>Database</h4>
          <h4>Deployment</h4>
        </div>
        <div>
          <p>cubitos</p>
          <p>cubitos</p>
          <p>cubitos</p>
        </div>
      </div>

      <div>
        <h1>EXPERIENCE</h1>
        <div>
          <p>Timeline</p>
        </div>
      </div>
    </main>
  );
}
