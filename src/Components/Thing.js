import React, { PropTypes, Component } from 'react';

export default class Thing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data,
      newData: this.props.data,
      edit: false,
    }

    this.endableEdit = this.enableEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  enableEdit() {
    this.setState({ edit: true });
  }

  submitEdit() {
    this.props.editThing(this.state.newData);
    this.setState({ newData: '', data: '' });
  }

  cancelEdit() {
    this.setState({
      edit: false,
      data: this.props.data
    });
  }

  onInputChange(e) {
    this.setState({ newData: e.target.value });
  }

  // this.props = data, editThing, removeThing
  return (
    <div>
      {
        this.state.edit
        ?
        <input onChange={(e) => onInputChange(e)} value={this.state.newData}/>
        <button submitThing={this.submitEdit} type="submit">Submit</button>
        <button cancelEdit={this.cancelEdit} type="submit">Cancel</button>
        :
        <span>{this.state.data}</span>
        <button onClick={this.enableEdit} type="buttom">Edit</button>
        <button removeThing={removeThing(data.id)} type="buttom">Remove</button>
      }
    </div>
  )
}

Thing.propTypes = {
  data: PropTypes.object, //eslint-disable-line
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
}

export default Thing;
