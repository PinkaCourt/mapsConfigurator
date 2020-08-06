import React, {Component} from 'react';
/*
const Form = (props) =>
  <div>
    <label htmlFor={props.id}> {props.id} </label>
    <input type='text' id={props.id} name={props.id} value={props.value}></input>
    </div>

export default Form;
*/

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
          ip: '',
          port:'',
          user:'',
          pass:'',
      };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    }

  render() {
    return (
      <fieldset className="input">
        <legend>Данные сервера</legend>   
        <label> IP <input type='text' id='IP' name='IP' value={this.state.ip}></input></label>
        <label> PORT <input type='text' id='PORT' name='PORT' value={this.state.port}></input></label>
        <label> USER <input type='text' id='USER' name='USER' value={this.state.user}></input></label>
        <label>'PASS <input type='text' id='PASS' name='PASS' value={this.state.pass}></input></label>
        <button className="button" > maybe submit </button>
        </fieldset>
    );
  }
}

export default Form;