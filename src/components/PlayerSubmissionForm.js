import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adjective1: '',
      noun1: '',
      adverb: '',
      verb: '',
      adjective2: '',
      noun2: ''
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState(this.initialState);
    
    const submission = `The ${this.state.adjective1} ${this.state.noun1} ${this.state.adverb}
     ${this.state.verb} ${this.state.adjective2} ${this.state.noun2}.`;
    this.props.addLineCallback(submission)
 
  this.setState ({
    adjective1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adjective2: '',
    noun2: ''
  });
}

  isInputInvalid = (input) => {
    if (input === ""){
      return "PlayerSubmissionForm__input--invalid"
    }
  }    

  render() {
    if (this.props.render === true) {
      return <div></div>
    }
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.handleOnSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example

            }
            <div>
              <input
                className = { this.isInputInvalid(this.state.adjective1) }
                placeholder="adjective"
                name="adjective1"
                type="text"
                value={this.state.adjective1}
                onChange={this.handleInput}/>
            </div>
            <div>
              <input
                className={this.isInputInvalid(this.state.noun1)}
                placeholder="noun"
                name="noun1"
                type="text"
                value={this.state.noun1} 
                onChange={this.handleInput}/>
            </div>
            <div>
              <input
                className={this.isInputInvalid(this.state.adverb)}
                placeholder="adverb"
                name="adverb"
                type="text"
                value={this.state.adverb} 
                onChange={this.handleInput}/>
            </div>
            <div>
              <input
                className={this.isInputInvalid(this.state.verb)}
                placeholder="verb"
                name="verb"
                type="text"
                value={this.state.verb} 
                onChange={this.handleInput}/>
            </div>
            <div>
              <input
                className={this.isInputInvalid(this.state.adjective2)}
                placeholder="adjective"
                name="adjective2"
                type="text"
                value={this.state.adjective2} 
                onChange={this.handleInput}/>
            </div>
            <div>
              <input
                className={this.isInputInvalid(this.state.noun2)}
                placeholder="noun"
                name="noun2"
                type="text"
                value={this.state.noun2} 
                onChange={this.handleInput}/>
            </div>
          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}


export default PlayerSubmissionForm;
