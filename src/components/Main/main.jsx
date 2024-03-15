import React from "react";
import s from "./main.module.css";

const Main = () => {
  return (
    <div>
      <p>Blog</p>
      <div className={s.posts}>
        <div className={s.posts}>
          <h2>post1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius!
            Repellendus ratione repudiandae quaerat cumque et odio quis quo
            culpa dolor ipsam, sit expedita provident, iste impedit architecto
            hic laboriosam.
          </p>
        </div>
        <div className={s.posts}>
          <h2>post2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius!
            Repellendus ratione repudiandae quaerat cumque et odio quis quo
            culpa dolor ipsam, sit expedita provident, iste impedit architecto
            hic laboriosam.
          </p>
        </div>
        <div className={s.posts}>
          <h2>post3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius!
            Repellendus ratione repudiandae quaerat cumque et odio quis quo
            culpa dolor ipsam, sit expedita provident, iste impedit architecto
            hic laboriosam.
          </p>
        </div>
        <div className={s.posts}>
          <h2>post4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eius!
            Repellendus ratione repudiandae quaerat cumque et odio quis quo
            culpa dolor ipsam, sit expedita provident, iste impedit architecto
            hic laboriosam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
