import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function MultiDirectionalPopulator(props) {
  const defaultItems = [
    //List of possible slides which can be used
    {
      order: 0,
      text: "Hello,",
      textColor: "#FFFFFF",
      backColor: "#648312",
    },
    {
      order: 1,
      text: "This is a cool thing i made",
      textColor: "#6c4d08",
      backColor: "#f3c358",
    },
    {
      order: 2,
      text: "Hope you think this is neat",
      textColor: "#1c1a3b",
      backColor: "#8164bc",
    },
    {
      order: 3,
      text: "These placeholders can slide in from 4 directions",
      textColor: "#FFFFFF",
      backColor: "#58d6f3",
    },
    {
      order: 4,
      text: "I've been randomly selected form the list of placeholders",
      textColor: "#600722",
      backColor: "#E15E15",
    }
  ];
  const [sliderItems, setSliderItems] = useState((props.items.length == 0) ? defaultItems: props.items);
  props.setItems(sliderItems);

  function handleUpdate(id, event) {
    console.log(id, event.target.value);
    let changedItems = sliderItems.slice();
    changedItems[id][event.target.name] = event.target.value;
    setSliderItems(changedItems);
    props.setItems(changedItems);
  }

  function addItem() {
    setSliderItems(sliderItems.concat({text: "New Slide", textColor: "#000000", backColor: "#ffffff"}));
    props.setItems(sliderItems);
  }

  function deleteItem(id) {
    let changedItems = sliderItems.slice();
    changedItems.splice(id, 1)
    setSliderItems(changedItems);
    props.setItems(changedItems);
  }

  return (
    <div className={`input-menu`}>
        <div className="menuTitle">Slide Settings</div>
        { sliderItems.map((item, i) => (
          <div key={i} className={`slide-input`}>
            <input type="text" name="text" value={item.text} onChange={(e) => handleUpdate(i, e)} />
            <input type="color" name="textColor" value={item.textColor} onChange={(e) => handleUpdate(i, e)}/>
            <input type="color" name="backColor" value={item.backColor} onChange={(e) => handleUpdate(i, e)}/>
            {(sliderItems.length > 2) &&
              <div className="delete-item button" onClick={() => deleteItem(i)}><FontAwesomeIcon icon="trash-alt" style={ { fontSize: "1rem" } }/></div>
            }
          </div>
        ))}
        <div className="add-item button" onClick={() => addItem()}><FontAwesomeIcon icon="plus-square" style={ { fontSize: "1.5rem" } }/></div>
    </div>
  );
}

