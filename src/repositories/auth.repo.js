
import { User } from "../models/index.js";


export const authRepo = {
  async find() {
    return await User.find();
  },

  async findById(id) {
    return User.findOne({ _id: id });
  },
  async findByMail(email) {
    return User.findOne({ email: email });
  },

  async findByUsername(username) {

    return User.findOne({ username: username });
  },

  async updateById(id,obj) {
    return await User.findOneAndUpdate(
      { _id: id },
      { $set: obj },
      { returnOriginal: false }
    );
  },

  async deleteById(id) {
    return await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  },

  async create(obj) {
    return new User(obj).save();
  },




};
