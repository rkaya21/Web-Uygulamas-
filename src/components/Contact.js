import React from "react";

const İletişim = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>bize</span> ulaşın
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59912.28420180021!2d28.9783589!3d41.0082376!3m2!1i1024!2i768!4f13.1!4m3!3e2!4m0!4m0!5e0!3m2!1sen!2str!4v1633364807635"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>iletişime geçin</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="ad" />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="e-posta" />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="telefon numarası" />
            </div>
            <input type="submit" value="şimdi iletişime geçin" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default İletişim;
