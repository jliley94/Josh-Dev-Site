import * as React from 'react';
import './skillIndicator.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillCategory, SkillIconType } from "./skills.modules";
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import DisplayImage from '../ImageDisplay';

export interface ISkillIndicatorProps {
  icon: any,
  iconType: SkillIconType
  name: string,
  progress?: number,
  extraClasses?: string[]
}
export interface ISkillIndicatorState {
  additionalClasses: string[]
}
  
  export default class SkillIndicator extends React.Component<ISkillIndicatorProps, ISkillIndicatorState> {
  
    constructor(props: any) {
      super(props);
      this.state = {
        additionalClasses: []
      }
      this.removeElement = this.removeElement.bind(this);
    }

    private removeElement(e) {
      console.log(e.propertyName);
      if (e.propertyName === 'opacity') {
        if (this.props.extraClasses.includes("hidden")) {
          console.log("remove...");
          let updatedClasses = this.state.additionalClasses;
          updatedClasses.push("removed");
          this.setState({...this.state, additionalClasses: updatedClasses});
        } else {
          // console.log("add...");
          let updatedClasses = this.state.additionalClasses;
          updatedClasses = updatedClasses.filter(className => (className != "removed"));
          this.setState({...this.state, additionalClasses: updatedClasses});
        }
      }
    }
  
    public render() {
      const allClasses = (this.props.extraClasses) ? this.props.extraClasses.concat(this.state.additionalClasses) : this.state.additionalClasses;
      return (
        <div className={`skill-indicator ${allClasses.join(" ")}`} onTransitionEnd={(e) => this.removeElement(e)}>
            {(this.props.iconType == SkillIconType.Fabric) ?
              <FontAwesomeIcon icon={this.props.icon} />
              :
              (this.props.iconType == SkillIconType.Image) ?
              <DisplayImage imageName={this.props.icon} />
              :
              <FontAwesomeIcon icon={this.props.icon} />
            }
            <div className="si-name">
                { this.props.name }
            </div>
            { (this.props.progress) &&
              <div className="si-progress">
                <div className={`si-progress-bar prog-${this.props.progress}`}></div>
              </div>
            }
        </div>
      );
  }
}