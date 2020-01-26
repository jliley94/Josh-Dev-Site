import * as React from "react";
import { Link } from "gatsby";
import "./cornerButton.scss";

export interface ICornerButtonProps {
  text: string;
  link: string;
}

export default class NavButton extends React.Component<ICornerButtonProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="cb-container">
        <Link to={this.props.link} className="pf-back-button">
          <div className="cb-content">
            <svg viewBox="0 0 300 300">
              <path
                className="corner"
                d="M150 0, c25 25,75 75,150 150, v-150, Z"
              />
              Sorry, your browser does not support inline SVG.
            </svg>
            <div className="pf-button-text">{this.props.text}</div>
          </div>
        </Link>
      </div>
    );
  }
}
