import * as React from "react";
import "./search.scss";

export interface ISearchProps {
  handler: (e) => {};
  searchQuery: string;
}
export interface ISearchState {
  searchQuery: string;
  example: string;
}

export default class SkillIndicator extends React.Component<ISearchProps, ISearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchQuery: "",
      example: ""
    };
    this.showExample = this.showExample.bind(this);
  }

  public componentDidMount() {
    setInterval(this.showExample, 2000);
  }

  public showExample() {
    const examples = [
      "JQuery",
      "React",
      "SASS",
      "PHP",
      "NPM"
    ];
    const rand = Math.floor(Math.random() * examples.length);
    this.setState({...this.state, example: examples[rand]});
  }

  public render() {
    return (
      <div className={`search-bar`}>
        <input
          className="search-box"
          type="text"
          placeholder={`Search my skills, eg: ${this.state.example}`}
          value={this.props.searchQuery}
          onChange={this.props.handler}
        />
      </div>
    );
  }
}
