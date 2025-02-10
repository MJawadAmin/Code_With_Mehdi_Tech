import CardModel from "../model/cardModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const STATIC_EMAIL = "jjawadamn883@gmail.com";
const STATIC_PASSWORD = "Jawadamin12";
const SECRET_KEY = "abcdefghijklmno";

// ✅ Admin Login
export const loginadmin = (req, res) => {
    const { email, password } = req.body;

    if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
        // Generate JWT Token
        const token = jwt.sign({ role: "admin" }, SECRET_KEY, { expiresIn: "1h" });

        return res.json({ message: "Login Successful", token });
    } else {
        return res.status(401).json({ message: "Invalid email or password" });
    }
};

// ✅ Admin Logout
export const logoutadmin = (req, res) => {
    return res.json({ message: "Logout Successful" });
};

// ✅ Add Card
export const addcard = async (req, res) => {
    try {
      // Retrieve form data from req.body
      const {
        statename,
        statevalue,
        stateplace,
        statescale,
        stategarages,
        statesbedroom,
        statebatbrooms,
        statesalername,
        daybefore,
        stateprice,
      } = req.body;
  
      // Retrieve uploaded image file from req.file
      const stataimage = req.file ? `/storage/${req.file.filename}` : null; // File path after upload
  
      console.log("Form Data:", req.body);
      console.log("Uploaded File:", req.file);
  
      // Ensure all required fields are provided
      if (
        !statename ||
        !statevalue ||
        !stateplace ||
        !statescale ||
        !stategarages ||
        !statesbedroom ||
        !statebatbrooms ||
        !statesalername ||
        !daybefore ||
        !stateprice
      ) {
        return res.status(400).json({
          status: "failed",
          message: "All fields are required",
        });
      }
  
      // Create a new card using the form data and uploaded file
      const newCard = new CardModel({
        stataimage, // Corrected image field name
        statename,
        statevalue,
        stateplace,
        statescale,
        stategarages,
        statesbedroom,
        statebatbrooms,
        statesalername,
        daybefore,
        stateprice,
      });
  
      // Save the new card to the database
      await newCard.save();
  
      return res.status(201).json({
        status: "success",
        message: "Card created successfully",
        card: newCard, // Return created card data
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({
        status: "failed",
        message: "Server error",
        error: error.message, // Send detailed error response
      });
    }
  };
  
// ✅ Remove Card
export const removecard = async (req, res) => {
    try {
        console.log("Received DELETE request for ID:", req.params.id);

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: "failed", message: "Invalid Card ID" });
        }

        const deletedCard = await CardModel.findByIdAndDelete(id);
        if (!deletedCard) {
            return res.status(404).json({ status: "failed", message: "Card not found" });
        }

        return res.status(200).json({ status: "success", message: "Deleted successfully" });

    } catch (error) {
        console.error("Error deleting card:", error);
        return res.status(500).json({ status: "failed", message: "Internal server error" });
    }
};

// ✅ Update Card
export const updatecard = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: "failed", message: "Invalid Card ID" });
        }

        // Match field names with frontend payload
        const updatedFields = {
            statename: req.body.statename, // Changed from newstateName
            statevalue: req.body.statevalue,
            stateplace: req.body.stateplace,
            statescale: req.body.statescale,
            stategarages: req.body.stategarages,
            statesbedroom: req.body.statesbedroom,
            statebathrooms: req.body.statebathrooms,
            statesalername: req.body.statesalername,
            daybefore: req.body.daybefore,
            stateprice: req.body.stateprice,
            // Handle image from separate field or file
            stateimage: req.file 
                ? `/storage/${req.file.filename}`
                : req.body.stateimage // Get existing image from body
        };

        // Clean undefined values (preserve existing values)
        Object.keys(updatedFields).forEach(key => {
            if (updatedFields[key] === undefined) {
                delete updatedFields[key];
            }
        });

        const updatedCard = await CardModel.findByIdAndUpdate(
            id,
            { $set: updatedFields },
            { new: true, runValidators: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ status: "failed", message: "Card not found" });
        }

        return res.status(200).json({
            status: "success",
            message: "Card updated successfully",
            updatedCard,
        });
    } catch (error) {
        console.error("Error updating card:", error);
        return res.status(500).json({
            status: "failed",
            message: error.message || "Internal server error",
        });
    }
};

// ✅ Fetch Cards
export const fetchcards = async (req, res) => {
    try {
        const carddata = await CardModel.find();
        if (!carddata.length) {
            return res.status(404).json({
                status: "failed",
                message: "No cards found",
            });
        }

        return res.status(200).json({
            status: "success",
            carddata,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "failed",
            message: "Failed to fetch data",
        });
    }
};
