import * as React from "react"
import { Link } from "gatsby"
import NavButton from "./navButton"
import "./header.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface INavButtonProps {
  siteTitle: string
  // children: React.ReactNode
}

export default class Header extends React.Component<INavButtonProps, {}> {
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
              <NavButton name="About" link="/about/" />
              <NavButton name="Projects" link="/projects/" />
              <NavButton name="Work" link="/work/" />
              <NavButton name="Skills" link="/skills/" />
              <NavButton name="My Feed" link="/feed/" />
            </nav>
          </section>

          <div className="pf-contact-icons">
            <div>
              <FontAwesomeIcon icon="envelope" />
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
          </div>
        </div>
      </header>
    )
  }
}
