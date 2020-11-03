import * as React from 'react';
import './pageSection.scss';

export interface ISectionBlockProps {
  direction: FlexDirection;
  background: string | null;
  type: SectionType;
  children: React.ReactNode;
}

export interface ISectionBlockState {
  width: number;
}

export enum FlexDirection {
  Horizontal,
  Vertical,
}


export enum SectionType {
  Normal,
  Expandable,
  Spaced,
  Reverse
}
  
  export default class SectionBlock extends React.Component<ISectionBlockProps, ISectionBlockState> {
  
    constructor(props: any) {
      super(props);
      this.state = {
        width: 0
      }
    }

    componentDidMount() {
      this.updateDimensions();
      window.addEventListener('resize', this.updateDimensions);
    }

    updateDimensions = () => {
      this.setState({ width: window.innerWidth });
    };
  
    public render() {
        let type = SectionType[this.props.type].toLowerCase() || "";
        const background = (this.props.background) ? this.props.background : "none";
        const direction = (this.props.direction === FlexDirection.Horizontal) ? "horizontal" : "vertical";
        const smallScreen = 1000;
      return (
        <div className={`pf-section-block ${direction} ${type}`} style={{ background: background }}>
          {(this.props.type == SectionType.Reverse && this.state.width <= smallScreen) ?
            React.Children.map(this.props.children, Child => {
              return Child
            }).reverse()
            :
            this.props.children
          }
      </div>
      );
    }
  }