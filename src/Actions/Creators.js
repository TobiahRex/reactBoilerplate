import actionList from './ActionList';

//  Add new actions in ActionList.js

const Actions = {};
actionList.forEach((el) => {
  const type = el[0];
  Actions[camelCaser(type)] = makeActionFunction(el);
});

export default Actions;


//  helper functions
function makeActionFunction(actArr) {
  const type = actArr[0];
  const argNames = actArr.splice(1);
  return (...args) => {
    const argObj = { type };
    args.forEach((el, ind) => {
      if (argNames[ind]) {
        argObj[argNames[ind]] = el;
      }
    });
    return argObj;
  };
}

function camelCaser(STR) {
  const strArr = STR.toLowerCase().split('');
  for (let i = 1, len = strArr.length; i < len; i += 1) {
    if (strArr[i - 1] === '_') {
      strArr[i - 1] = null;
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join('');
}
