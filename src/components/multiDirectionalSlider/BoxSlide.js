import React from 'react';

export default class BoxSlide extends React.Component {
  render() {
    const currentSlideContent = this.props.content;
    const fallbackItem = {text: "Couldnt display item", textColor: "white", backColor: "red"}
    const currentSlideStyles = {
      color: (!!currentSlideContent) ? currentSlideContent.textColor : fallbackItem.textColor,
      backgroundColor: (!!currentSlideContent) ? currentSlideContent.backColor: fallbackItem.backColor,
      display: (this.props.direction === 0 || this.props.direction === 2) ? "grid" : "inline-block",
      float: (this.props.direction === 0 || this.props.direction === 2) ? "left" : "inherit"
    }

    return (
      <div className="box-slide" style={currentSlideStyles}>
        <p>{(!!currentSlideContent) ? currentSlideContent.text: fallbackItem.text}</p>
      </div>
    );
  }
}