import React from "react";
import { blog } from "../Data";

const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          <span>bloglarımız</span>
        </h1>

        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <div className="image">
                <img src={item.img} alt="" />
              </div>
              <div className="content">
                <a href="#" className="title">
                  checknutrition olarak anlatacağız.
                </a>
                <span>yazar: recep / 25 Aralık 2023</span>
                <p>
                Sağlıkla şaka olmaz, her anı sağlıkla yaşa!
                </p>
                <a href="#" className="btn">
                  devamını oku
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
