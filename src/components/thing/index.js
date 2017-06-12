import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField, RaisedButton } from 'material-ui';
import uuid from 'uuid';
import styles from './assets/thingStyles';

const { func, objectOf, shape, string, any } = PropTypes;

export default class Thing extends Component {
  static propTypes = {
    fetching: func.isRequired,
    data: shape({
      _id: string,
      name: string,
    }),
    editThing: func.isRequired,
    removeThing: func.isRequired,
    apiStatus: objectOf(any),
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      newName: this.props.data.name,
      edit: false,
      apiSuccess: this.props.apiStatus.success || false,
    };
  }

  submitEdit = () => {
    const newThing = this.state.data;
    newThing.name = this.state.newName;

    this.props.fetching();
    this.props.editThing(newThing);
    this.setState({ newName: '', data: {} });
  }

  submitGroup = () => {
    const PROPS = {
      tf: {
        id: uuid(),
        onChange: e => this.setState({ newName: e.target.value }),
        value: this.state.newName,
      },
      rb1: {
        onClick: this.submitEdit,
        type: 'submit',
        label: 'Submit',
        style: styles.lftMargin,
        primary: true,
      },
      rb2: {
        onClick: () => this.setState({
          edit: false,
          data: this.props.data,
        }),
        type: 'button',
        label: 'Cancel',
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

  editGroup = () => {
    const PROPS = {
      tf: {
        id: uuid(),
        value: this.state.data.name,
        disabled: true,
      },
      rb1: {
        onClick: () => this.setState({ edit: true }),
        type: 'button',
        label: 'Edit',
        style: styles.lftMargin,
        primary: true,
      },
      rb2: {
        onClick: () => {
          this.props.fetching();
          this.props.removeThing(this.props.data._id);
        },
        type: 'button',
        label: 'Remove',
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
