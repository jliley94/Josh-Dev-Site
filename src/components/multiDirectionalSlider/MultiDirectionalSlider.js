import React from "react";
import BoxSlide from "./BoxSlide";
import "./MultiDirectionalSlider.scss";

export default class MultiDirectionalSlider extends React.Component {
  constructor(props) {
    super(props);
    const startingDirection = Math.round(Math.random() * 3);
    this.state = {
      list: [
        {
          order: 0,
          text: "Hello,",
          textColor: "#FFF",
          backColor: "#648312",
        }
      ],
      coordAdjustment: { x: 0, y: 0 },
      currentIndex: 0,
      direction: startingDirection,
      transitionBackwards: "unset"
    };
    this.slideTransition = this.slideTransition.bind(this);
    this.resetBox = this.resetBox.bind(this);
    this.backwardsSlideTransition = this.backwardsSlideTransition.bind(this);
    
    this.aspectRatio = { x: 200, y: 200 };
    this.axisMeasure = {x : "px", y : "px"}
    this.slideChangeInterval = 4000;
    this.transitionTime = 2000;
    this.waitTime = 50;
    const defaultItems = [
      //List of possible slides which can be used
      {
        order: 0,
        text: "Hello,",
        textColor: "#FFF",
        backColor: "#648312",
      },
      {
        order: 1,
        text: "This is a cool thing i made",
        textColor: "#6c4d08",
        backColor: "#f3c358",
      }
    ];
    this.availableItems = (this.props.items.length == 0) ? defaultItems: this.props.items;
  }
  componentDidMount() {
    this.interval = setInterval(this.slideTransition, this.slideChangeInterval);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.transitionBackwards === "now") {
      // if moving backwards and has just updated from changes in slideTransition()
      setTimeout(this.backwardsSlideTransition, this.waitTime);
    }
  }

  componentWillUnmount() {
    // Clear the interval right before component unmounts
    clearInterval(this.interval);
  }

  nonRepeatingRandom(current) {
    // create a random number which doesnt match the current number
    const maxNo = this.availableItems.length - 1;
    let newRand = Math.round(Math.random() * maxNo);
    while (current === newRand) {
      newRand = Math.round(Math.random() * maxNo);
    }
    return newRand;
  }

  slideTransition() {
    //do slide transition
    const rand = this.nonRepeatingRandom(this.state.currentIndex);
    let adjustedX = 0;
    let adjustedY = 0;
    let newList = this.state.list;

    switch(this.state.direction) {
      case 0: //left
        newList.push(this.availableItems[rand]);
        adjustedX = -this.aspectRatio.x;
        break;
      case 1: //up
        newList.push(this.availableItems[rand]);
        adjustedY = -this.aspectRatio.y;
        break;
      case 2: //right
        newList.unshift(this.availableItems[rand]);
        adjustedX = -this.aspectRatio.x;
        break;
      case 3: //down
        newList.unshift(this.availableItems[rand]);
        adjustedY = -this.aspectRatio.y;
        break;
    }
    
    const newIndex = this.state.list.length - 1;
    
    let newCoords = { x: (newIndex * adjustedX) + this.axisMeasure.x, y: (newIndex * adjustedY) + this.axisMeasure.y};
    
    console.log(this.state.direction, newCoords);

    this.setState({ ...this.state, list: newList, coordAdjustment: newCoords, currentIndex: rand, transitionBackwards: (this.state.direction > 1) ? "now" : "unset" });
    console.log("Transitioned");
    this.waitForReset();
  }

  resetBox() {
    let newList = this.state.list;
    if (newList.length > 1) {
      if (this.state.direction > 1) {
        newList.pop();
      } else {  
        newList.shift();
      }
    }
    const newCoords = { x: 0, y: 0};
    
    const randDirection = Math.round(Math.random() * 3); //left or up
    
    // update from props
    this.availableItems = this.props.items;
    this.setState({ ...this.state, list: newList, coordAdjustment: newCoords, direction: randDirection });
    console.log("reset")
  }

  backwardsSlideTransition() {
    const newCoords = { x: 0, y: 0};
    
    this.setState({ ...this.state, coordAdjustment: newCoords, transitionBackwards: "off" });
    console.log("Transitioned backwards")
    
    // this.waitForReset();
  }

  waitForReset() {
    console.log("waiting for reset");
    setTimeout(this.resetBox, (this.transitionTime + this.waitTime));
  }

  render() {
    const deckStyle = {
      transform: `translate(${this.state.coordAdjustment.x}, ${this.state.coordAdjustment.y})`,
      width: (this.state.direction === 0 || this.state.direction === 2) ? `${this.aspectRatio.x * 2 + this.axisMeasure.x}` : `${this.aspectRatio.x + this.axisMeasure.x}`, //double the width if 2 slides on the same row
      transition: ((this.state.direction < 2 && this.state.list.length > 1) || (this.state.transitionBackwards === "off" )) ? "transform 2s ease-in" : ""
    }


    return (
      <div className="mds-box" //onClick={this.slideTransition} 
      //onTransitionEnd={this.resetBox}
      >
        <div className={`slide-deck`} style={deckStyle}>
          { this.state.list.map((slide, i) => (
            <BoxSlide 
            key={i} 
            content={slide} 
            direction={this.state.direction}
              />
          ))}
        </div>
      </div>
    );
  }
}
