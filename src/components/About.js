import React from "react";
import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>hakkımızda</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>İthal ürünlerin kalitesi neden yüksek?</h3>
            <p>
            İthal ürünler, genellikle daha yüksek kalite standartlarına sahiptir. Kalite kontrol süreçleri ve üretim standartları ithal edilen ürünlerde daha sıkı yapılır. Ayrıca, bazı ülkelerde teknolojik ve endüstriyel gelişmeler, üstün malzeme kullanımı ve uzmanlık ithal ürünlerin kalitesini artırıyor. Bu nedenle, müşterilere sağlanan ithal ürünler genellikle yüksek kaliteli ve güvenilir olarak kabul edilir.
            </p>
            <p>
              Peki Türkiye'de bu sektörü,bu kaliteye nasıl taşıyabiliriz?
            </p>
            <a href="#" className="btn">
              Çalışmalarımız
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
              

export default About;
