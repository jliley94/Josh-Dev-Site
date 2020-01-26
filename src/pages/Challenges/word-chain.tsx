import React from "react";
import { Link } from "gatsby";
import ReturnOnlyView from "../../components/Layouts/ReturnOnlyView";
import SEO from "../../components/seo";
import {
  FlexDirection,
  SectionType,
} from "../../components/PageSection/sectionBlock";
import SectionBlock from "../../components/PageSection/sectionBlock";
import PageSection from "../../components/PageSection/pageSection";
import { SectionSize } from "../../components/PageSection/pageSection";
import ChainDisplay from "../../components/Challenges/WordChain/chainDisplay";
import "../../../src/styles/global.scss";
import "../../components/Challenges/WordChain/WordChain.scss";
import { platform } from "os";
import { array, bool } from "prop-types";
import { link } from "fs";

export interface IChainPageProps {
  hasLoaded: boolean;
}

export interface IChainPageState {
  fromValue: string;
  toValue: string;
  searchLength: number;
  errorMessage: string;
  chainList: IChain[];
}

export interface IChain {
  name: string;
  letterChanged: number;
  parentIndex: number;
  //branch: number;
  completed: boolean;
}

export default class ChainPage extends React.Component<{}, IChainPageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fromValue: "",
      toValue: "",
      searchLength: 0,
      errorMessage: "",
      chainList: [],
    };
    this.validateClick = this.validateClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.runSequence = this.runSequence.bind(this);
    this.findMatch = this.findMatch.bind(this);
    this.checkIfWord = this.checkIfWord.bind(this);
    // this.getUnfinishedBranch = this.getUnfinishedBranch.bind(this);
  }

  public validateClick() {
    //validate
    if (this.state.fromValue.length == 0 || this.state.searchLength == 0) {
      this.setState({
        ...this.state,
        errorMessage: "You must fill in both inputs",
      });
      return;
    }
    if (this.state.fromValue.length !== this.state.searchLength) {
      this.setState({
        ...this.state,
        errorMessage: "Both words must be the same length",
      });
      return;
    }
    const self = this;
    const areWords = new Promise(function(resolve, reject) {
      self.checkIfWord([self.state.fromValue, self.state.toValue], resolve);
    });

    areWords.then((areWords: boolean[]) => {

      if (areWords.includes(false)) {
        self.setState({
          ...self.state,
          errorMessage: "Both words must be in the dictionary",
        });
        return;
      }

      self.setState({
        ...self.state,
        errorMessage: "",
        chainList: []
      });

      // set initial val in chain
      let chainList = this.state.chainList;
      chainList.push({
        name: self.state.fromValue,
        letterChanged: null,
        parentIndex: null,
        //branch: 0,
        completed: false,
      });
      this.setState({ ...this.state, chainList });

      //self.runSequence(self.state.fromValue, 0, 0, 0, chainList);
      self.findMatch(self.state.fromValue);
    });
  }

  public findMatch(word) {
    const currentWord = word;
    let newWords = this.state.toValue.split("").map((letter, i) => {
      const newWord = currentWord.substring(0, i) + this.state.toValue.charAt(i) + currentWord.substring(i + 1, this.state.searchLength);
      if (letter != currentWord.charAt(i) && !this.state.chainList.map(word => word.name).includes(newWord)) {
        return { name: newWord, letter: i };
      } 
      return null;
    }).filter(word => (word != null));
    
    console.log(newWords);
    if (newWords.map((word => word.name)).includes((this.state.toValue))) {
      console.log("found!");
      let currentChain = this.state.chainList;
      const newWord = newWords.find(word => (word.name == this.state.toValue));
      currentChain.push({ name: newWord.name, letterChanged: newWord.letter, parentIndex: this.checkIndex(currentWord), completed: true });
      this.setState({...this.state, chainList: currentChain });
      return;
    }
    const self = this;
    const areWords = new Promise(function(resolve, reject) {
      self.checkIfWord(newWords.map(word => word.name), resolve);
    });
    console.log(areWords)
    areWords.then((areWords: boolean[]) => {
      let currentChain = this.state.chainList;
      newWords.map((word, i) => {
        if (areWords[i]) {
          console.log(word.name)
          currentChain.push({ name: word.name, letterChanged: word.letter, parentIndex: this.checkIndex(currentWord), completed: false });
        }
      });

      currentChain[this.checkIndex(currentWord)].completed = true;

      this.setState({...this.state, chainList: currentChain });
      const nextWord = currentChain.find(word => (word.completed == false));
      if (nextWord != null) {
        this.findMatch(nextWord.name);
      } else {
        this.setState({...this.state,
          errorMessage: "Could not complete the chain",
        });
        console.log(currentChain);
        return;
      }
      
    });
  }

  public handleInput(e): void {
    const state = e.target.dataset.name;
    this.setState({
      ...this.state,
      [state]: e.target.value,
      searchLength: e.target.value.length,
    });
  }

  public checkIfWord(words: string[], callback: any): void {
    const wordString = words.join(" ");
    let response = [];
    fetch(
      `https://montanaflynn-spellcheck.p.rapidapi.com/check/?text=${wordString}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "montanaflynn-spellcheck.p.rapidapi.com",
          "x-rapidapi-key":
            "cd01166086msh281b3c65c38ee30p1dc5d2jsnea36a07c614e",
        },
      }
    )
      .then(response => {
        //console.log(response);
        response.json().then(data => {
          //console.log(data);
          if (Object.keys(data.corrections).length === 0 && data.corrections.constructor === Object) {
            callback(words.map(word => true));
          } else {
            callback(words.map(word => (!(data.corrections[word] != null))));
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // public runSequence(
  //   lastText: string,
  //   skip: number,
  //   branch: number,
  //   pId: number,
  //   chain: IChain[]
  // ) {
  //   let chainSequence = chain;
  //   let currentChain = lastText;
  //   let skipPos = skip;
  //   let currentBranch = branch;
  //   let parentId = pId;
  //   let id = this.checkIndex(lastText, chainSequence);

  //   const changePos = this.checkDiff(currentChain, this.state.toValue, skipPos);
  //   const newWord =
  //     currentChain.substring(0, changePos) +
  //     this.state.toValue.charAt(changePos) +
  //     currentChain.substring(changePos + 1, currentChain.length);

  //   const self = this;
  //   const isWord = new Promise(function(resolve, reject) {
  //     self.checkIfWord(newWord, resolve);
  //   });
  //   isWord.then(response => {
  //     if (response) {
  //       chainSequence.push({
  //         name: newWord,
  //         letterChanged: changePos,
  //         parentIndex: parentId,
  //         branch: currentBranch,
  //         completed: false,
  //       });
  //       currentChain = newWord;
  //       skipPos = 0;
  //       this.setState({ ...this.state, chainList: chainSequence });
  //       console.log("found match");
  //       if (newWord == this.state.toValue) return;
  //     } else {
  //       skipPos++;
  //       if (skipPos >= this.state.searchLength) {
  //         chainSequence[id].completed = true;
  //         this.setState({ ...this.state, chainList: chainSequence });
  //         const unfinishedChainData = this.getUnfinishedBranch(chainSequence);
  //         console.log({ unfinishedChainData });
  //         if (unfinishedChainData == null) {
  //           //out of options
  //           this.setState({
  //             ...this.state,
  //             errorMessage: "Could not complete the chain",
  //           });
  //           console.log(chainSequence);
  //           return;
  //         } else {
  //           currentBranch++;
  //           currentChain = unfinishedChainData.link.name;
  //           skipPos = unfinishedChainData.skip;
  //           parentId = unfinishedChainData.index;
  //           console.log("new branch");
  //         }
  //       }
  //     }
  //     console.log(
  //       `${id}: ${currentChain}`
  //     );
  //     this.runSequence(
  //       currentChain,
  //       skipPos,
  //       currentBranch,
  //       parentId,
  //       chainSequence
  //     );
  //   });
  // }

  public checkDiff(a, b, skip) {
    for (let i = skip; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) {
        return i;
      }
    }
  }

  public checkIndex(word: string): number {
    return this.state.chainList.findIndex(link => (link.name == word));
  }

  // public getUnfinishedBranch(chain: IChain[]) {
  //   // loop through confirmed links (skipping current -2)
  //   for (let i = chain.length - 2; i >= 0; i--) {
  //     if (!chain[i].completed) {
  //       const linksChildren = chain.filter(link => link.parentIndex == i);
  //       const lastCheckedLetter = Math.max(
  //         ...linksChildren.map(link => link.letterChanged)
  //       );

  //       if (lastCheckedLetter + 1 < this.state.searchLength) {
  //         //if theres unchecked letters
  //         return { link: chain[i], index: i, skip: lastCheckedLetter + 1 };
  //       }
  //     }
  //   }
  //   return null;
  // }

  public render() {
    return (
      <ReturnOnlyView>
        <SEO title="Code Challenge - Word Chain" />

        <SectionBlock
          direction={FlexDirection.Vertical}
          type={SectionType.Normal}
          background="#46b386"
        >
          {/* Section One: Input */}
          <PageSection
            size={SectionSize.Fill}
            color="#fff"
            background={null}
            padding="120px 0"
          >
            <div className="cc-container">
              <h1>Code Challenge</h1>
              <div>
                <input
                  type="text"
                  id="cc-from"
                  data-name="fromValue"
                  onChange={this.handleInput}
                  value={this.state.fromValue}
                />
                <input
                  type="text"
                  id="cc-to"
                  data-name="toValue"
                  onChange={this.handleInput}
                  value={this.state.toValue}
                />
              </div>
              <div className="container">
                <button id="chain-btn" onClick={this.validateClick}>
                  Chain
                </button>
              </div>
              {this.state.errorMessage.length > 0 && (
                <div id="cc-error">{this.state.errorMessage}</div>
              )}

              <ChainDisplay chain={this.state.chainList} />
            </div>
          </PageSection>
        </SectionBlock>
      </ReturnOnlyView>
    );
  }
}
