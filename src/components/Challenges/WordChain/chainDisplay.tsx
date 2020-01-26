import React from "react";
import "../../../../src/styles/global.scss"
import "./WordChain.scss";
import { IChain } from "../../../pages/Challenges/word-chain";

export interface IChainPageProps {
  chain: IChain[];
}

export default class ChainPage extends React.Component<IChainPageProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="cc-results">
          { this.props.chain.map((word, i) => {
              if (word.letterChanged != null) {
                return <div key={i} data-parent={word.parentIndex}>
                  {word.name.substring(0, word.letterChanged)}
                  <span className="changedLetter">
                    {word.name.charAt(word.letterChanged)}
                  </span>
                  {word.name.substring(word.letterChanged + 1, word.name.length)}
                  </div>;
              } else {
                return <div key={i} data-parent={word.parentIndex}>{word.name}</div>
              }
          })
          }
      </div>
    );
  }
}
