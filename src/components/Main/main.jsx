import React from "react";
import s from "./main.module.css";

const Main = () => {
  const posts = [
    {
      id: 1,
      title: "Post1",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius  Repellendus ratione repudiandae quaerat cumque et odio quis qu",
    },
    {
      id: 2,
      title: "Post2",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius  Repellendus ratione repudiandae quaerat cumque et odio quis qu",
    },
    {
      id: 3,
      title: "Post3",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius  Repellendus ratione repudiandae quaerat cumque et odio quis qu",
    },
    {
      id: 4,
      title: "Post4",
      description:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius  Repellendus ratione repudiandae quaerat cumque et odio quis qu",
    },
  ];

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
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
