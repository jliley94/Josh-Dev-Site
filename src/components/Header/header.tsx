import * as React from "react";
import { Link } from "gatsby";
import NavButton from "./navButton";
import "./header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

          <section>
            <nav>
              <NavButton name="About" link={1} />
              <NavButton name="Projects" link={2} />
              <NavButton name="Work" link={3} />
              <NavButton name="Skills" link={4} />
              <NavButton name="My Feed" link={5} />
            </nav>
          </section>

          <div className="pf-contact-icons">
            <div className="pf-icon-holder">
              <a href="https://www.linkedin.com/in/joshualiley/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a href="https://github.com/jliley94" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a href="mailTo:jliley94@gmail.com" target="_blank">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
