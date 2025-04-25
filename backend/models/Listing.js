const { connectMongoose } = require('../connect');
const collectionName = process.env.DB_COLL_NAME;
const { Schema, model } = require('mongoose');

const listingSchema = new Schema({
    company: String,
    title: String,
    skills: String,
    job_type: String
  });

class ListingClass {
    static async createNew(listing) {
        try {
        const newListing = await Listing.create(listing);
        return newListing;
        }
        catch (e) {
        console.error(e);
        return {_id: -1}
        }
    }
    static async readAll() {
        try {
        const results = await Listing.find();
        return results;
        }
        catch (e) {
        console.error(e);
        return [];
        }
    }
    // static async update(messageId, messageUpdate) {
    //     try {
    //     const result = await Message.updateOne({_id: messageId}, messageUpdate);
    //     return result;
    //     }
    //     catch (e) {
    //     console.error(e);
    //     return {
    //         modifiedCount: 0,
    //         acknowledged: false
    //     }
    //     }
    // }
    // static async delete(messageId) {
    //     try {
    //     const result = await Message.deleteOne({_id: messageId});
    //     return result;
    //     }
    //     catch (e) {
    //     console.error(e);
    //     return {deletedCount: 0};
    //     }
    // }
}

listingSchema.loadClass(ListingClass);
const Listing = model('Listing', listingSchema, collectionName);
module.exports = Listing;