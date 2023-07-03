import React from "react";
import SectionItems from "./SectionItems";

const Section = (props) => {
  const arr = props.baatyry;
  return (
    <div>
      {arr.map((item) => (
        <SectionItems key={item.id} character={item} />
      ))}
    </div>
  );
};

export default Section;
