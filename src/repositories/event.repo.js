
import { Event } from "../models/index.js";


export const eventRepo = {
  async find() {
    return await Event.find();
  },

  async findById(id) {
    return Event.findOne({ _id: id });
  },
  async findByUserId(userId) {
    return await Event.find({ user: userId });
  },

  async updateById(id,obj) {
    return await Event.findOneAndUpdate(
      { _id: id },
      { $set: obj },
      { returnOriginal: false }
    );
  },

  async deleteById(id) {
    return await Event.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  },

  async create(obj) {
    return new Event(obj).save();
  },




};
