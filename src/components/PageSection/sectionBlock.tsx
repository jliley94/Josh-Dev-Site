import * as React from 'react';
import './pageSection.scss';

export interface ISectionBlockProps {
  direction: FlexDirection
  background: string | null
  children: React.ReactNode
}

export enum FlexDirection {
  Horizontal,
  Vertical,
}
  
  export default class SectionBlock extends React.Component<ISectionBlockProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {
  
        const background = (this.props.background) ? this.props.background : "none";
        const direction = (this.props.direction === FlexDirection.Horizontal) ? "horizontal" : "vertical";

      return (
        <div className={`pf-section-block ${direction}`} style={{ background: background }}>
          {this.props.children}
      </div>
      );
    }
  }