import React from "react";

const ProductImageDescription = () => {
  const productText = {
    title: "Faded SkyBlu Denim Jeans",
    price: 149.99,
    description: `Mill Oil is an innovative oil filled radiator with the most modern
        technology. If you are looking for something that can make your interior
        look awesome, and at the same time give you the pleasant warm feeling
        during the winter.`,
    metaList: [{ Category: "Household" }, { Availlibility: "In Stock" }],
  };
  return (
    <>
      <h3>{productText.title}</h3>
      <h2>${productText.price}</h2>
      <ul className="list">
        {productText.metaList.map((obj, i) => {
          const [key, value] = Object.entries(obj)[0];
          return (
            <li key={i}>
              <a className={i === 0 ? "active" : ""} href="#">
                <span>{key}</span> : {value}
              </a>
            </li>
          );
        })}
      </ul>
      <p>{productText.description}</p>
    </>
  );
};

export default ProductImageDescription;
