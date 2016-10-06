import React, { PropTypes } from 'react';

class OneFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({
      value: '',
    });
  }

  render() {
    //  built-in support for cancel button
    const cancelButton = this.props.handleCancel ?
      (<button onClick={this.props.handleCancel}>
        {this.props.cancelText || 'Cancel'}
      </button>)
      : <span />;

    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          value={this.state.value}
          type="text"
          onChange={this.onInputChange}
          required={this.props.required}
        />
        <button type="submit">
          {this.props.buttonText}
        </button>
        {cancelButton}
      </form>
    );
  }
}

OneFieldForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleCancel: PropTypes.func,
  cancelText: PropTypes.string,
  defaultValue: PropTypes.string,
  required: PropTypes.bool,
};

export default OneFieldForm;
