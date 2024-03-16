import React from "react";
import s from "./main.module.css";
import { posts } from "../../shared/projectData";
import { PostsElements } from "../../shared/projectLogic";
import Posts from "./posts/posts";

const Main = () => {
  const blogPosts = posts.map((item) => {
    return <Posts key={item.id} item={item} />;
  });

  return (
    <div>
      <p>Blog</p>
      <div className={s.posts}>
        {blogPosts}
        <div className={s.button}>
          <button onClick={() => PostsElements(posts)}>
            Get amount of posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
