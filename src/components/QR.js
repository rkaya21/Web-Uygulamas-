//HATA ALIYORUM

import React, { useRef, useEffect, useState } from 'react';

function QR() {
  const video = useRef(null);
  const canvas = useRef(null);
  const [barcode, setBarcode] = useState(null);
  const [basket, setBasket] = useState([]);

  const openCam = () => {
    navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } })
      .then(stream => {
        video.current.srcObject = stream;
        video.current.play();

        const ctx = canvas.current.getContext('2d');
        const barcodeDetector = new window.BarcodeDetector({ formats: ['qr_code', 'ean_13'] });

        const intervalId = setInterval(() => {
          canvas.current.width = video.current.videoWidth;
          canvas.current.height = video.current.videoHeight;
          ctx.drawImage(video.current, 0, 0, video.current.videoWidth, video.current.videoHeight);

          barcodeDetector.detect(canvas.current)
            .then(([data]) => {
              if (data) {
                setBarcode(data.rawValue);
              }
            })
            .catch(err => {
              console.log(err);
            });
        }, 100);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (barcode) {
      fetch(`http://localhost/php-barcode/api.php?barcode=${barcode}`)
        .then(res => res.json())
        .then(data => {
          if (data) {
            setBasket([...basket, data]);
          } else {
            alert('Bu ürün bulunamadı!');
          }
        })
        .catch(error => console.error('API request error:', error));
    }
  }, [barcode, basket]);

  return (
    <>
      <button onClick={openCam}>Kamerayı Aç</button>
      <div>
        <video ref={video} autoPlay muted hidden />
        <canvas ref={canvas} />
      </div>
      {barcode && (
        <div>
          Bulunan barkod: {barcode}
        </div>
      )}
      {basket.map(item => (
        <div key={item.product}>
          {item.product} <br />
          {item.price} <br />
          <img src={item.image} alt={item.product} style={{ width: 100, height: 100 }} />
        </div>
      ))}
    </>
  );
}

export default QR;
