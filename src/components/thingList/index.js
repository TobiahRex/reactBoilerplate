import React from 'react';
import PropTypes from 'prop-types';
import Thing from '../thing/';
import SnackBar from '../snackbar/';

const ThingList = ({ fetching, removeThing, editThing, things, apiStatus }) => {
  const eachThing = things.map((thing) => {
    const PROPS = {
      fetching,
      editThing,
      removeThing,
      apiStatus,
      data: thing,
    };
    return (
      <div key={new Buffer(thing.name, 'utf8').toString('base64')}>
        <Thing {...PROPS} />
      </div>);
  });

  return (
    <div>
      {eachThing}
      <SnackBar apiStatus={apiStatus} />
    </div>
  );
};
ThingList.propTypes = {
  fetching: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  things: PropTypes.arrayOf(PropTypes.any),
  apiStatus: PropTypes.objectOf(PropTypes.any),
};
export default ThingList;
