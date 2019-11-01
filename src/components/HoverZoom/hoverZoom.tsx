import * as React from 'react';
import './hoverZoom.scss';

export interface IHoverZoomProps {
  background: string
  children: React.ReactNode
  padding?: string;
}
  
  export default class HoverZoom extends React.Component<IHoverZoomProps, {}> {
  
    constructor(props: any) {
      super(props);
    }
  
    public render() {

        const padding = (this.props.padding) ? this.props.padding : '0';

      return (
        <div className={`pf-hover-zoom`} style={{ backgroundImage: this.props.background, padding: padding }}>
            {this.props.children}
        </div>
      );
    }
  }