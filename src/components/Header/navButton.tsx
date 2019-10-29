import * as React from 'react';
import { Link } from "gatsby"

export interface INavButtonProps {
    name: string,
    link: string | number
    // children: React.ReactNode
  }
  
  export default class NavButton extends React.Component<INavButtonProps, {}> {

    constructor(props: any) {
      super(props);
      this.onClickHandler = this.onClickHandler.bind(this);
    }

    public onClickHandler(e) {
      const navDestination = e.currentTarget.getAttribute('data-id');
      const target = document.querySelector(`main .pf-section[data-nav-point="${navDestination}"]`);
      target.scrollIntoView({behavior: "smooth", block: "start"});
    }

    public render() {
  
      return (
        <a className="pf-navLink" data-id={this.props.link} onClick={this.onClickHandler}>
          <div className="pf-navButton">
            <div>{this.props.name}</div>
          </div>
        </a>
      );
    }
  }