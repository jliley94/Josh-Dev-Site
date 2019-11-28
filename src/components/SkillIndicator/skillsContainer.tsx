import * as React from "react";
//import "./skillsContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import SearchBox from "../Search/Search";
import PageSection from "../PageSection/pageSection"
import SkillIndicator from "./skillIndicator";
import { SkillIconType, SkillCategory } from "./skills.modules";
import { skills } from "./skills"
import { SectionSize } from "../PageSection/pageSection"
export interface ISkillsContainerState {
  searchQuery: string;
}

export default class SkillsContainer extends React.Component< {}, ISkillsContainerState > {
  constructor(props: any) {
    super(props);
    this.state = {
        searchQuery: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  public handleSearch(e) {
    this.setState({ ...this.state, searchQuery: e.currentTarget.value });
    return e;
  }

  public displayGroup(data ,group: SkillCategory) {
      const containerShow = (data.filter(skill => (skill.category == group && skill.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))).length < 1) ? "hidden" : "show";
      return (
          <div className={`pf-skill-group ${containerShow}`}> 
            <h3>{SkillCategory[group].replace(/[\_]/gi, ' ')}</h3>
            { data.filter(skill => (skill.category == group)).map((skill, i) => {
                let icon;   
                const show = (skill.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())) ? "show" : "hidden";
                switch (skill.iconType) {
                    case SkillIconType.Brand:   
                        icon = ["fab", skill.icon ];
                        break;
                    default:
                        icon = skill.icon
                } 
                return <SkillIndicator key={i} icon={icon} name={skill.name} progress={skill.progress} extraClasses={[show]} />
                })
            }
        </div>
      );
  }
  public render() {
    const remainingSkills = skills.filter(skill => (this.state.searchQuery.length > 0) ? skill.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) : true);
    const frontEnd = skills.filter(skill => (skill.category === SkillCategory.Front_End_Languages));
    const backEnd = skills.filter(skill => (skill.category === SkillCategory.Other_Programming_Language));
    const other = skills.filter(skill => (skill.category === SkillCategory.Other));

    return (
      <div>
        <SearchBox searchQuery={this.state.searchQuery} handler={this.handleSearch} />

        <PageSection
          size={SectionSize.Fill}
          color="#FFF"
          background="transparent"
        >
            { (remainingSkills.length < 1 ) &&
                <div>Sorry, couldn't find anything called: <b>{ this.state.searchQuery }</b></div>
            }
            <div className={`pf-skill-container`}>
                {this.displayGroup(skills, SkillCategory.Front_End_Languages)}
                {this.displayGroup(skills, SkillCategory.Other_Programming_Language)}
                {this.displayGroup(skills, SkillCategory.Other)}
            </div>
        </PageSection>
      </div>
  );
  }
}
