import actionList from './ActionList';

//  Add new actions in ActionList.js

const Types = {};
actionList.forEach((el) => {
  const type = el[0];
  Types[type] = type;
});

export default Types;
