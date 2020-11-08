import React, { useState, useEffect, useRef } from "react";
import './timeLine.scss';

export default function TimeLine(props) {
    const [activeElement, setActive] = useState(0);
    const activeRef = useRef(activeElement);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeRef.current < props.children.length) {
                setActive(activeElement => activeElement + 1);
            } else {    
                setActive(0);
            }
          }, 2000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);

    useEffect(
        () => { activeRef.current = activeElement },
        [activeElement]
    )
  
  return (
    <div className={`time-line`}>
        {props.children.map((child, i) => {
            return ([
                (i != 0 && i < props.children.length) &&
                    <div key={i-0.5} className="timeline-items">•</div>
                ,
                <div key={i} className={`timeline-items ${(i == activeElement) ? "active" : ""}`}>{child}</div>
            ])
        })}
    </div>
  );
}
