import * as React from "react";
import PageSection, { SectionSize } from "../PageSection/pageSection";
import SectionBlock, { FlexDirection, SectionType } from "../PageSection/sectionBlock";
import "./ScriptArea.scss";
export interface IScriptAreaProps {
  defaultScript: string;
  children: React.ReactNode;
}
export interface IScriptAreaState {
  codeText: string;
}

export default class ScriptArea extends React.Component<
  IScriptAreaProps,
  IScriptAreaState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      codeText: this.props.defaultScript,
    };
  }

  private handleChange(e) {
    console.log(e.currentTarget.value);
    this.setState({ ...this.state, codeText: e.currentTarget.value });
  }

  private isJsonValid(jsonString) {
    try {
        JSON.parse(jsonString);
    } catch (e) {
        return false;
    }
    return true;
}
  public render() {
    
    return (
      <SectionBlock
        direction={FlexDirection.Horizontal}
        type={SectionType.Normal}
        background={null}
      >
        <PageSection size={SectionSize.Wide} color="#ddd" background={null}>
          {/* {this.props.children} */}
          {this.props.children}
        </PageSection>
        <PageSection size={SectionSize.Wide} color="#ddd" background="#112244">
          <h4>Multi-Directional Slider</h4>
          <p>
            I made a simple content slider which can transition out in 4
            directions. Use the JSON object bellow to change the content.
          </p>
          <textarea className="script-area" onChange={e => this.handleChange(e)} value={this.state.codeText}>
          </textarea>
        </PageSection>
      </SectionBlock>
    );
  }
}
