import * as React from 'react';
import './pageSection.scss';

export interface ISectionProps {
  size: string
  color: string
  background: string | null
  children: React.ReactNode
  padding?: string;
}
  
  export default class PageSection extends React.Component<ISectionProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {
  
        const backgroundImg = (this.props.background) ? this.props.background : "transparent";
        const padding = (this.props.padding) ? this.props.padding : "20px";

      return (
        <section className={`pf-section ${this.props.size}`} style={{ color: this.props.color, background: backgroundImg, padding: padding }}>
            {this.props.children}
        </section>
      );
    }
  }