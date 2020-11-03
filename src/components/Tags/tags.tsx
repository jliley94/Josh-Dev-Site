import React from "react";
import './tags.scss';

export default function Tags(props) {
  
  return (
    <div className={`tags-block`}>
        {props.tags.map((tag, i) => {
            return (
                <div key={i} className={`tag-${tag.replace(' ', '_')}`}>{tag}</div>
            )
        })}
    </div>
  );
}
