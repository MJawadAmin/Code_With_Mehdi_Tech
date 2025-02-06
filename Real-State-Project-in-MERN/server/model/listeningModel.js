import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
    stateName: String,
    image: String,
    statevalue: String,
    statePlac: String,
    stateScale: String,
    stateGarages: String,
    stateBedrooms: String,
    stateBathrooms: String,
    stateSalerName: String,
    dayBefore: String,
    stateprice: String,
});

const ListingModel = mongoose.model("Listing", listingSchema);
export default ListingModel;
