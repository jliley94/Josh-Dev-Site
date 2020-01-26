import * as React from "react";
import { Link } from "gatsby";
import NavButton from "./navButton";
import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialIcons from "../SocialIcons/SocialIcons";

export interface IHeaderProps {
  siteTitle: string;
  // children: React.ReactNode
}

export default class Header extends React.Component<IHeaderProps, {}> {
  public render() {
    return (
      <header className="pf-header">
        <div className="pf-header-zone">
          <h1>
            <Link className="pf-head-title" to="/">
              {this.props.siteTitle}
            </Link>
          </h1>

          <SocialIcons linkedIn={true} github={true} email={true} />

          <section>
            <nav>
              <NavButton name="About" link={1} />
              <NavButton name="Projects" link={2} />
              <NavButton name="Work" link={3} />
              <NavButton name="Skills" link={4} />
              <NavButton name="Contact" link={5} />
            </nav>
          </section>
        </div>
      </header>
    );
  }
}
