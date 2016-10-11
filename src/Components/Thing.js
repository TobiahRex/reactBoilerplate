import React, { PropTypes, Component } from 'react';

export default class Thing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      newName: this.props.data.name,
      edit: false,
    };

    this.endableEdit = this.enableEdit.bind(this);
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
    const { newThing } = this.state.data;
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
    console.log('this.props.data: ', this.props.data);
    // this.props = data, editThing, removeThing
    const buttonSet = this.state.edit ?
      <div>
        <input onChange={e => this.onInputChange(e)} value={this.state.newName} />
        <button submitThing={this.submitEdit} type="submit">Submit</button>
        <button cancelEdit={this.cancelEdit} type="submit">Cancel</button>
      </div>
    :
      <div>
        <span>{this.state.data.name}: </span>
        <button onClick={this.enableEdit} type="buttom">Edit</button>
        <button onClick={() => this.removeThing(this.props.data.id)} type="buttom">Remove</button>
      </div>;

    return (
      <span>
        {buttonSet}
      </span>
    );
  }
}

Thing.propTypes = {
  data: PropTypes.object, //eslint-disable-line
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
};
