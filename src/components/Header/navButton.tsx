import * as React from 'react';
import { Link } from "gatsby"

export interface INavButtonProps {
    name: string,
    link: string
    // children: React.ReactNode
  }
  
  export default class NavButton extends React.Component<INavButtonProps, {}> {

    constructor(props: any) {
      super(props);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

    public onClickHandler() {
      console.log(this);
    }

    public render() {
  
      return (
        <a className="pf-navLink"  onClick={this.onClickHandler}>
          <div className="pf-navButton">
            <div>{this.props.name}</div>
          </div>
        </a>
      );
    }
  }