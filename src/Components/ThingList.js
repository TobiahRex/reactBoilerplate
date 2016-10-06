import React, { PropTypes } from 'react';
import Thing from './Thing';

const ThingList = ({ things, editThing, removeThing }) => {
  const thingElements = things.map((el, ind) => (
    <div key={ind}>
      <Thing data={el} removeThing={removeThing} editThing={editThing} />
    </div>
  ));

  return (
    <div>
      {thingElements}
    </div>
  );
};

ThingList.propTypes = {
  editThing: PropTypes.func.isRequired,
  removeThing: PropTypes.func.isRequired,
  things: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ThingList;
