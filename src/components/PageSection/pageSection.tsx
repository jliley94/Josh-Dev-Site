import * as React from 'react';
import './pageSection.scss';

export interface ISectionProps {
  size: SectionSize
  color: string
  background: string | null
  children: React.ReactNode
  padding?: string;
  navigationPoint?: number;
}

export enum SectionSize {
  Fill,
  Large,
  Medium,
  Small,
  X_Small,
  Wide
}
  
  export default class PageSection extends React.Component<ISectionProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {
        const navigationPoint = (this.props.navigationPoint) ? this.props.navigationPoint : '';
        const background = (this.props.background) ? this.props.background : 'transparent';
        const padding = (this.props.padding) ? this.props.padding : '20px';
        let size = (SectionSize[this.props.size]) ? SectionSize[this.props.size].toLowerCase() : "";

      return (
        <section className={`pf-section ${size.toLowerCase()}`} data-nav-point={navigationPoint} style={{ color: this.props.color, backgroundImage: background, backgroundColor: background, padding: padding }}>
            {this.props.children}
        </section>
      );
    }
  }