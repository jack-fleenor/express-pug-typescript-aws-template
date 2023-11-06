import mongoose from 'mongoose';

const ExampleSchema = new mongoose.Schema({
  key: String,
});

const Example = new mongoose.Model('example', ExampleSchema);

module.exports = Example;
