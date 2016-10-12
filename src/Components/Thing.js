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
    this.submitGroup = this.submitGroup.bind(this);
    this.editGroup = this.editGroup.bind(this);
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

  submitGroup() {
    return (
      <span>
        <TextField
          onChange={e => this.onInputChange(e)}
          value={this.state.newName}
        />
        <RaisedButton label="Default">Hi</RaisedButton>
        <RaisedButton
          onClick={this.submitEdit}
          type="submit"
          label="Submit"
        />
        <RaisedButton
          onClick={this.cancelEdit}
          type="submit"
          label="Cancel"
        />
      </span>
    )
  }

  editGroup() {
    return (
      <span>
        <TextField
          value={this.state.data.name}
          onChange={e => this.onInputChange(e)}
        />
        <RaisedButton
          onClick={this.enableEdit}
          type="buttom"
          label="Edit"
        />
        <RaisedButton
          onClick={() => this.removeThing(this.props.data._id)}
          type="buttom"
          label="Remove"
        />
      </span>
    )
  }

  render() {
    // this.props = data, editThing, removeThing
    const buttonSet = this.state.edit ? this.submitGroup() : this.editGroup();
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
