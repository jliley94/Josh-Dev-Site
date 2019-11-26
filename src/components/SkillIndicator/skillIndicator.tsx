import * as React from 'react';
import './skillIndicator.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SkillCategory, SkillIconType } from "./skills.modules";

export interface ISkillIndicatorProps {
  icon: any,
  name: string,
  progress: number,
  show?: boolean
}
export interface ISkillsProps extends ISkillIndicatorProps {
    iconType: SkillIconType,
    category: SkillCategory
  }
  
  export default class SkillIndicator extends React.Component<ISkillIndicatorProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {
      var showStateClass = (this.props.show) ? "show" : "hidden";
      return (
        <div className={`skill-indicator ${showStateClass}`}>
            <FontAwesomeIcon icon={this.props.icon} />
            <div className="si-name">
                { this.props.name }
            </div>
            <div className="si-progress">
              <div className={`si-progress-bar prog-${this.props.progress}`}></div>
            </div>
        </div>
      );
  }
}