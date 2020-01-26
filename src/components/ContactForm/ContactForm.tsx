import * as React from "react";
import "./ContactForm.scss";

export interface IContactFormProps {

}
export interface IContactFormState {
  subjectVal: string;
  bodyVal: string;
  example: string;
}

export default class ContactForm extends React.Component<IContactFormProps, IContactFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      subjectVal: "",
      bodyVal: "",
      example: ""
    };
    this.handler = this.handler.bind(this);
    this.showExample = this.showExample.bind(this);
  }

  public componentDidMount() {
    setInterval(this.showExample, 2500);
  }

  public handler(e, state) {
    this.setState({ ...this.state, [state]: e.currentTarget.value });
    return e;
  }

  
  public showExample() {
    const examples = [
      "Feedback",
      "Question",
      "Work"
    ];
    const rand = Math.floor(Math.random() * examples.length);
    this.setState({...this.state, example: examples[rand]});
  }

  public render() {
    return (
      <form action={`mailto:jliley94@gmail.com?subject=${(this.state.subjectVal.length > 0) ? this.state.subjectVal : "Your portfolio site" }${(this.state.bodyVal.length > 0) ? "&body=" + this.state.bodyVal : ""}`} method="post" className={`contact-form`}>
        <input
          className="subject-box"
          type="text"
          placeholder={`subject, eg: ${this.state.example}`}
          value={this.state.subjectVal}
          onChange={(e) => this.handler(e, "subjectVal")}
        />
        <textarea
          rows={6}
          className="body-box"
          placeholder={`I would love to hear from you!`}
          value={this.state.bodyVal}
          onChange={(e) => this.handler(e, "bodyVal")}
        />
        <input type="submit" value="Send"/>
      </form>
    );
  }
}
