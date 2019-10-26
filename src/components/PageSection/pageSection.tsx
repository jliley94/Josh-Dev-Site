import * as React from 'react';
import './pageSection.scss';

export interface ISectionProps {
    size: string,
    color: string;
    background: string | null
    children: React.ReactNode
  }
  
  export default class PageSection extends React.Component<ISectionProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {
  
        const backgroundImg = (this.props.background) ? this.props.background : "none";

      return (
        <section className={`pf-section ${this.props.size}`} style={{ color: this.props.color, background: backgroundImg }}>
            {this.props.children}
        </section>
      );
    }
  }