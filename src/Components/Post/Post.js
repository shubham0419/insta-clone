import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.post}>
      <header>
        <img src={props.avtar} alt="avtar"/>
        <h4>{props.name}</h4>
      </header>
      <main>
        <img src={props.postImg} alt=""/>
      </main>
      <div>
        <h4>like</h4>
        <h4>comment</h4>
      </div>
    </div>
  );
};

export default Post;
