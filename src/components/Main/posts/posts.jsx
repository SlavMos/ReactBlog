import React from "react";
import s from "./posts.module.css";

const Posts = (props) => {
  return (
    <div key={props.item.id} className={s.posts}>
      <h2>{props.item.title}</h2>
      <p>{props.item.description}</p>
    </div>
  );
};

export default Posts;
