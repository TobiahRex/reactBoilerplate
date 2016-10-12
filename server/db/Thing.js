import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const thingSchema = new mongoose.Schema({
  name: String,
});

const Thing = mongoose.model('Thing', thingSchema);
export default Thing;
