import { useEffect, useState } from "react";

function Slider() {
  const images = [
    "https://www.tomshardware.fr/content/uploads/sites/3/2023/10/Meilleurs-PC-gaming-de-bureau-credit-unsplash-1200x798.jpg",
    "https://gameover.fr/wp-content/uploads/2024/01/meilleur-pc-gamer.jpg",
    "https://assetsio.reedpopcdn.com/g502x_f9QuuM8.jpeg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",

    "https://nzxt.com/assets/cms/34299/1646885555-lift-collection-hero.png?auto=format&bg=FFFFFF&fit=max&h=460&w=900",
  ];
  const firstindex = 0;
  const lasindex = images.length - 1;

  const [carrent, setCarrent] = useState(firstindex);

  const styleSliderContainer = {
    position: "relative",
    width: "50vw",
    height: "70vh",
    borderRadius: "10px",
    background: "red",
    overflow: "hidden",
    margin: "auto",
  };

  const image = {
    position: "relative",
    width: "50vw",
    height: "70vh",
  };

  const styleSlider = {
    position: "relative",
    display: "flex",
    width: "200vw",
    height: "70vh",
    borderRadius: "10px",
    background: "red",
    transform: `translateX(${carrent * -50}vw)`,
    transition: "all 0.5s ease",
  };

  function increase(e) {
    if (carrent == lasindex) {
      setCarrent(0);
    } else {
      setCarrent(carrent + 1);
    }
  }

  function decrease(e) {
    if (carrent == firstindex) {
      setCarrent(lasindex);
    } else {
      setCarrent(carrent - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      increase();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [carrent]);

  return (
    <>
      <div className="-container" style={styleSliderContainer}>
        <div className="sliderslider" style={styleSlider}>
          <img src={images[0]} style={image} alt="" />
          <img src={images[1]} style={image} alt="" />

          <img src={images[2]} style={image} alt="" />
          <img src={images[3]} style={image} alt="" />
          {/* {images.map((img)=>{
        <img  src={img}/>
    })} */}
        </div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "whitesmoke",
            position: "absolute",
            left: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={decrease}
        >
          {" "}
          ↢
        </div>
        <div
          className="arrow"
          style={{
            fontSize: "3rem",
            color: "white",
            position: "absolute",
            right: "50px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
          onClick={increase}
        >
          {" "}
          ↣
        </div>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          color:"red",
          zIndex: "999",
        }}
      >
        {images.map((e, index) => (
          <div
            key={index}
            style={{ fontSize: "5rem", cursor: "pointer" }}
            onClick={() => setCarrent(index)}
          >
            .
          </div>
        ))}
      </div>
      </div>
     
    </>
  );
}

export default Slider;
