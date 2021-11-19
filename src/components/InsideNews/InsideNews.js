import React from "react";
import styles from "./InsideNews.module.css";
import testImage from "../../images/testimage.jpg";
import { NewsListContext } from "../../context/NewsListContext";
import { useContext } from "react";

export default function InsideNews() {
  const { clickedInformation } = useContext(NewsListContext);
  return (
    <article className={styles.newsArticle}>
      <div className={`container ${styles.newsContainer}`}>
        <div className={styles.firstContentContainer}>
          <h1 className={styles.newsTitle}>{clickedInformation.title}</h1>
          <span>{clickedInformation.author}</span>
          <p>{clickedInformation.description}</p>
        </div>
        <div className={styles.bottomDiv}>
          <img className={styles.newsImage} src={clickedInformation.imageUrl} />
          <p className={styles.newsContent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus aut, consequatur quod saepe mollitia animi, libero
            inventore quam nesciunt labore porro est doloribus, dolores numquam.
            Quisquam sunt quos quam error. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Blanditiis libero harum, unde officia,
            cupiditate temporibus voluptatibus rem delectus non necessitatibus
            autem suscipit! Adipisci, velit ipsum laborum at explicabo
            reiciendis expedita!
          </p>
          <p className={styles.newsContent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus aut, consequatur quod saepe mollitia animi, libero
            inventore quam nesciunt labore porro est doloribus, dolores numquam.
            Quisquam sunt quos quam error. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Blanditiis libero harum, unde officia,
            cupiditate temporibus voluptatibus rem delectus non necessitatibus
            autem suscipit! Adipisci, velit ipsum laborum at explicabo
            reiciendis expedita!
          </p>
          <p className={styles.newsContent}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus aut, consequatur quod saepe mollitia animi, libero
            inventore quam nesciunt labore porro est doloribus, dolores numquam.
            Quisquam sunt quos quam error. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Blanditiis libero harum, unde officia,
            cupiditate temporibus voluptatibus rem delectus non necessitatibus
            autem suscipit! Adipisci, velit ipsum laborum at explicabo
            reiciendis expedita!
          </p>
        </div>
      </div>
    </article>
  );
}
