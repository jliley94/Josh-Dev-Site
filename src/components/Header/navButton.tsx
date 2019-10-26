import * as React from 'react';
import { Link } from "gatsby"

export interface INavButtonProps {
    name: string,
    link: string
    // children: React.ReactNode
  }
  
  export default class NavButton extends React.Component<INavButtonProps, {}> {
    
    public render() {
  
      return (
        <Link className="pf-navLink" to={this.props.link}>
          <div className="pf-navButton">
            {this.props.name}
          </div>
        </Link>
      );
    }
  }