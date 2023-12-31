import React from "react";
import { menu } from "../Data";
const Menu = () => {
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          vitam<span>inler</span>
        </h1>

        <div className="box-container">
          {menu.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>Testing</h3>
              <div className="price">
                270₺ <span>500₺</span>
              </div>
              <a href="#" className="btn">
                Sepete Ekle
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
