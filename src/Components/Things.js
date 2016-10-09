import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/ThingRedux';
import ThingList from './ThingList';
import OneFieldForm from './OneFieldForm';

const Things = ({ createThing, editThing, removeThing, things }) => {
  const thingProps = {
    editThing,
    removeThing,
    things,
  };
  const formProps = { createThing };

  /* NOTE: createThing does not work ?
  Changed the prop on OnField form to "createThing" from "handleSubmit" -
  If submiting a creating a new thing does not work, start troubleshooting here.
  */

  return (<div>
    <ThingList {...thingProps} />
    <OneFieldForm {...formProps} buttonText="Add" required />
  </div>);
};

const mapStateToProps = state => ({ things: state.things });

const mapDispatchToProps = dispatch => ({
  removeThing: thingId => dispatch(Actions.removeThing(thingId)),
  createThing: thingName => dispatch(Actions.createThing(thingName)),
  editThing: newThing => dispatch(Actions.editThing(newThing)),
});

Things.propTypes = {
  createThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  things: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Things);
