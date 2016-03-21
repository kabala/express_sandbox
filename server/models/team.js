import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  code: String,
  name: String,
  urlImage: String,
  votes: {type: Number, default:0}
});

mongoose.model('Team', TeamSchema);