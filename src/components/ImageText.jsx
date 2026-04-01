import React from "react";
import { imageTextData } from "../data/imageTextData";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageText = (props) => {
  AOS.init();

  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">{props.title}</h2>
      <div className="imgText_inner container">
        <div className="imgText_txt">
          <div className="small">{imageTextData.subtitle}</div>
          <h3 className={`title ${props.color}`}>{imageTextData.title}</h3>
          <div className="desc">{imageTextData.desc}</div>
          <ul className="list">
            {imageTextData.lists.map((list, index) => (
              <li key={index}>
                <a href="#">{list}</a>
              </li>
            ))}
          </ul>
        </div>
        {imageTextData.recipes.map((recipe) => (
          <div
            className={`imgText_img ${recipe.className}`}
            key={recipe.id}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <a href="#" className={recipe.btnclass}>
              {recipe.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
