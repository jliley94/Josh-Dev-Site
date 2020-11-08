import * as React from "react";
import "./SocialIcons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISocialIconsProps {
  linkedIn: boolean;
  github: boolean;
  email: boolean;
  size?: string;
}

export default class SocialIcons extends React.Component<
  ISocialIconsProps,
  {}
> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const iconStyle = {
      fontSize: (this.props.size) ? this.props.size : "2.5rem"
    };

    return (
      <div className="pf-contact-icons">
        <div className="pf-icon-holder">
          {(this.props.linkedIn) &&
          <a href="https://www.linkedin.com/in/joshualiley/" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} style={ iconStyle }/>
          </a>
          }
          {(this.props.github) &&
          <a href="https://github.com/jliley94" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} style={ iconStyle }/>
          </a>
          }
          {(this.props.email) &&
          <a
            href="mailTo:jliley94@gmail.com?subject=RE: Your portfolio site"
            target="_blank"
          >
            <FontAwesomeIcon icon="envelope" style={ iconStyle }/>
          </a>
          }
        </div>
      </div>
    );
  }
}
