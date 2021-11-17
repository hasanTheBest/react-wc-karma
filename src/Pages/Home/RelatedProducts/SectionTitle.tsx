import React from "react";

interface PropsType {
  title: string;
  description: string;
}

const SectionTitle = (props: PropsType) => {
  return (
    <div className="section-title">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default SectionTitle;
