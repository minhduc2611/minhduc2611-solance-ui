import styles from "../styles/Home.module.css";

const homeStyle = {
  helloWorld: "text-3xl font-bold underline text-blue-900",
  helloWorldHeader: "flex justify-items-center",
};
export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={homeStyle.helloWorldHeader}>
          <h1 className={homeStyle.helloWorld}>Hello world!!</h1>
        </div>
      </main>
    </div>
  );
}
