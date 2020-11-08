import React, { useState } from "react";
import MultiDirectionalSlider from './MultiDirectionalSlider';
import MultiDirectionalPopulator from './MultiDirectionalPopulator';
import "./MDSContainer.scss";

export default function MDSContainer(props) {
    const [slideItems, setSlideItems] = useState([]);

  return (
    <div className={`mds-container`}>
        <MultiDirectionalSlider items={slideItems}/>  

        <MultiDirectionalPopulator items={slideItems} setItems={setSlideItems} />
    </div>
  );
}
