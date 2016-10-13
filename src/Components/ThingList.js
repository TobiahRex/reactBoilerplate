import React, { PropTypes } from 'react';
import uuid from 'uuid';
import Thing from './Thing';

const ThingList = ({ fetching, removeThing, editThing, things }) => {
  const eachThing = things.map((thing) => {
    const PROPS = {
      fetching,
      editThing,
      removeThing,
      data: thing,
    };

    return (<div key={uuid()}><Thing {...PROPS} /></div>);
  });

  return (
    <div>
      {eachThing}
    </div>
  );
};

ThingList.propTypes = {
  fetching: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  things: PropTypes.array.isRequired, // eslint-disable-line
};

export default ThingList;
