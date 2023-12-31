import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="#home">Ana Sayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#menu">Vitaminler</a>
          <a href="#products">Ürünler</a>
          <a href="#review">Değerlendirmeler</a>
          <a href="#contact">İletişim</a>
          <a href="#blogs">Bloglar</a>
        </div>
        <div class="credit">
          created by <span>Recep Enes Kaya</span> | Tüm hakları saklıdır.
        </div>
      </section>
    </>
  );
};

export default Footer;
