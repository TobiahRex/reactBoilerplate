import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Actions from '../Redux/ThingRedux';
import ThingList from '../Components/ThingList';
import InputNewThing from '../Components/InputNewThing';

const Things = ({ createThing, editThing, removeThing, things }) => {
  const thingListProps = {
    editThing,
    removeThing,
    things
  };

  return (
    <div>
      <InputNewThing createThing={createThing} />
      <br />
      <ThingList {...thingListProps} />
    </div>
  )
};

Things.propTypes = {
  createThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  things: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
}

const mapStateToProps = state => ({ things: state.things });
const mapDispatchToProps = dispatch => ({
  createThing: thingName => dispatch(Actions.createThing(thingName)),
  removeThing: thingId => dispatch(Actions.removeThing(thingId)),
  editThing: thing => dispatch(Actions.editThing(thing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Things);
