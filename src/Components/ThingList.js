import React, { PropTypes } from 'react';
import Thing from './Thing';
import uuid from 'uuid';

const ThingList = ({ removeThing, editThing, things }) => {

  const eachThing = things.map((thing) => (
      <div key={uuid()}>
        <Thing data={thing} editThing={editThing} removeThing={removeThing} />
      </div>
    )
  );

  return (
    <div>
      {eachThing}
    </div>
  )
}

ThingList.propTypes = {
  removeThing: PropTypes.func.isRequired,
  editThing: PropTypes.func.isRequired,
  things: PropTypes.array.isRequired, // eslint-disable-line
}

export default ThingList;
