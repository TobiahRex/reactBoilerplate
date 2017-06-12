import localForage from 'localforage';

const reduxLocalForage = localForage.createInstance({
  name: 'ReactBoilerplate',
  storeName: 'ReactBoilerplate-redux-persist',
  description: 'Contains persisted values for redux store.',
});

export default reduxLocalForage;
