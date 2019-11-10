import * as React from "react";
import "./carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ICarouselProps {
  startingSlide: number;

  children: React.ReactNode;
}

export interface ICarouselState {
  activeSlide: number;
  xPositionOffset: number;
}

export default class Carousel extends React.Component<
  ICarouselProps,
  ICarouselState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeSlide: this.props.startingSlide || 0,
      xPositionOffset: 0,
    };
    this.handleSlideChange = this.handleSlideChange.bind(this);
  }

  public componentDidMount() {
    console.log("x:", this.props.children);
    this.handleSlideChange(this.props.startingSlide);
  }

  public handleSlideChange(slideTo) {
    const newSlide = parseInt(
      slideTo
    );
    const screenMiddle = window.innerWidth / 2;
    const matchingSlide = document.querySelector(
      `.pf-carousel-slides li[data-index="${newSlide.toString()}"]`
    );
    const spaceBefore = this.getPreviousElementWidth(matchingSlide);
    const elementMidpoint = matchingSlide.offsetWidth / 2;
    const newXPos = spaceBefore + elementMidpoint;
    console.log(newXPos);
    this.setState({
      ...this.state,
      activeSlide: newSlide,
      xPositionOffset: -spaceBefore + screenMiddle - elementMidpoint,
    });
  }

  public getPreviousElementWidth(element) {
    let offset = 0;
    let previousElement = element.previousSibling;
    while (previousElement != null) {
      offset += previousElement.offsetWidth;
      previousElement = previousElement.previousSibling;
    }
    return offset;
  }

  public render() {
    const children = this.props.children;
    return (
      <div className={`pf-carousel-container`}>
        <div>
          <ul className="pf-carousel-buttons">
            <li data-index={this.state.activeSlide - 1}>
              {this.state.activeSlide != 0 ? (
                <a onClick={(e) => this.handleSlideChange(this.state.activeSlide - 1)}>
                    <FontAwesomeIcon icon="chevron-circle-left" />
                </a>
              ) : (
                <FontAwesomeIcon className="disabled" icon="chevron-circle-right" />
              )}
            </li>
            {React.Children.map(children, (element, i) => {
              return (
                <li key={i} data-index={i}>
                  <a onClick={(e) => this.handleSlideChange(i)}>
                    <FontAwesomeIcon icon={ (this.state.activeSlide == i) ? ["fas", "circle"] : ["far", "circle"] } />
                  </a>
                </li>
              );
            })}
            <li data-index={this.state.activeSlide + 1}>
              {this.state.activeSlide + 1 != children.length ? (
                <a onClick={(e) => this.handleSlideChange(this.state.activeSlide + 1)}>
                    <FontAwesomeIcon icon="chevron-circle-right" />
                </a>
              ) : (
                <FontAwesomeIcon className="disabled" icon="chevron-circle-right" />
              )}
            </li>
          </ul>
        </div>
        <div>
          <ul
            className="pf-carousel-slides"
            style={{ transform: `translateX(${this.state.xPositionOffset}px)` }}
          >
            {React.Children.map(children, (element, i) => {
              return (
                <li
                  key={i}
                  data-index={i}
                  className={this.state.activeSlide == i ? "active" : ""}
                >
                  {element}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
