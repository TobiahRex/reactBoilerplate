import React, { PropTypes, Component } from 'react';
import uuid from 'uuid';
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

  submitGroup() {
    const PROPS = {
      tf: {
        id: uuid(),
        onChange: e => this.onInputChange(e),
        value: this.state.newName,
      },
      rb1: {
        onClick: this.submitEdit,
        type: "submit",
        label: "Submit",
        style: styles.lftMargin,
        primary: true,
      },
      rb2: {
        onClick: this.cancelEdit,
        type: "button",
        label: "Cancel",
        style: styles.btnMargin,
        secondary: true,
      },
    };

    return (
      <div>
        <TextField {...PROPS.tf} />
        <RaisedButton {...PROPS.rb1} />
        <RaisedButton {...PROPS.rb2} />
      </div>
    );
  }

  editGroup() {
    const PROPS = {
      tf: {
        id: uuid(),
        value: this.state.data.name,
        disabled: true,
      },
      rb1: {
        onClick: this.enableEdit,
        type: "button",
        label: "Edit",
        style: styles.lftMargin,
        primary: true,
      },
      rb2: {
        onClick: () => this.props.removeThing(this.props.data._id),
        type: "button",
        label: "Remove",
        style: styles.btnMargin,
        secondary: true,
      },
    };

    return (
      <div>
        <TextField {...PROPS.tf} />
        <RaisedButton {...PROPS.rb1} />
        <RaisedButton {...PROPS.rb2} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.edit ? this.submitGroup() : this.editGroup()}
      </div>
    );
  }
}


Thing.propTypes = {
  data: PropTypes.object, //eslint-disable-line
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
};
