import React, { useEffect, useRef } from "react";
import { imageData } from "../data/imageData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Image = (props) => {
  const imageInnerRef = useRef(null);
  const imageRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.5,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,

        duration: 1,
        stagger: 0.1,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: imageInnerRef.current,
          start: "top 80%",
        },
      },
    );
  });

  return (
    <section id="imageType" className="section">
      <h1 className="blind">{props.title}</h1>
      <h2>프리미어 케이크와 디저트를 만나보세요</h2>
      <p>유러피언 디저트의 본질을 추구한 고급 원재료와 차별화된 레시피</p>
      <div className="image_inner container" ref={{ imageInnerRef }}>
        {imageData.map((image, index) => (
          <article className={`image ${image.className}`} key={image.id} ref={(el) => (imageRef.current[index] = el)}>
            <h3 className="image_title">{image.title}</h3>
            <p className="image_desc">{image.desc}</p>
            <p className={`image_btn ${image.btnClass}`}>자세히 보기</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Image;
