import React from "react";
import s from "./main.module.css";
import { posts } from "../../shared/projectData";
import { PostsElements } from "../../shared/projectLogic";

const Main = () => {
  const blogPosts = posts.map((item) => {
    return (
      <div key={item.id} className={s.posts}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <div>
      <p>Blog</p>
      <div className={s.posts}>
        {blogPosts}
        <div className={s.button}>
          <button onClick={() => PostsElements(posts)}>
            Get amount of posts{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
