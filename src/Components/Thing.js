import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styles from './Styles/ThingStyles';

export default class Thing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      newName: this.props.data.name,
      edit: false,
    };

    this.enableEdit = this.enableEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.removeThing = this.removeThing.bind(this);
  }

  onInputChange(e) {
    this.setState({ newName: e.target.value });
  }

  cancelEdit() {
    this.setState({
      edit: false,
      data: this.props.data,
    });
  }

  submitEdit() {
    const newThing = this.state.data;
    newThing.name = this.state.newName;

    this.props.editThing(newThing);
    this.setState({ newName: '', data: {} });
  }

  enableEdit() {
    this.setState({ edit: true });
  }

  removeThing(id) {
    this.props.removeThing(id);
  }

  render() {
    // this.props = data, editThing, removeThing
    const buttonSet = this.state.edit ?
    <div>
      <TextField
        hintText="Thing Name"
        floatingLabelText={this.state.newName}
        />
      <input onChange={e => this.onInputChange(e)} value={this.state.newName} />
      <RaisedButton label="Default">Hi</RaisedButton>
      <button onClick={this.submitEdit} type="submit">Submit</button>
      <button onClick={this.cancelEdit} type="submit">Cancel</button>
    </div>
    :
    <div>
      <TextField
        hintText="Thing Name"
        floatingLabelText={this.state.data.newName}
        />
      <RaisedButton label="Default" />
      <button onClick={this.enableEdit} type="buttom">Edit</button>
      <button onClick={() => this.removeThing(this.props.data._id)} type="buttom">Remove</button>
    </div>;

    return (
      <div>
        {buttonSet}
      </div>
    );
  }
}

Thing.propTypes = {
  data: PropTypes.object, //eslint-disable-line
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
};
