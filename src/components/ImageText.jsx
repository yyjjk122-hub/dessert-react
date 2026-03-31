import React from "react";
import { imageTextData } from "../data/imageTextData";

const ImageText = () => {
  return (
    <section id="imgTextType" className="section">
      <h2 className="blind">이미지 텍스트 유형</h2>
      <div className="imgText_inner container">
        <div className="imgText_txt">
          <div className="small">{imageTextData.subtitle}</div>
          <h3 className="title">{imageTextData.title}</h3>
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
          <div className={`imgText_img ${recipe.className}`} key={recipe.id}>
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
