import AgentModel from "../model/agentModel.js";
import multer from "multer";
import path from "path";

// Configure Multer storage
export const addAgent = async (req, res) => {
    try {
      // Retrieve form data from req.body
      const {
      name , company, number, experience
      } = req.body;
  
      // Retrieve uploaded image file from req.file
      const photo = req.file ? `/storage/${req.file.filename}` : null; // File path after upload
  
      console.log("Form Data:", req.body);
      console.log("Uploaded File:", req.file);
  
      // Ensure all required fields are provided
      if (
        !name  ||
        !company||
        !company ||
        !number ||
        !experience
      ) {
        return res.status(400).json({
          status: "failed",
          message: "All fields are required",
        });
      }
  
      // Create a new card using the form data and uploaded file
      const newCard = new CardModel({
        photo, // Corrected image field name
        name,
        company,
        number,
        experience,
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

// Remove an agent
export const removeAgent = async (req, res) => {
    try {
        const { agentId } = req.body;
        const agent = await AgentModel.findById(agentId);

        if (!agent) {
            return res.status(404).json({
                status: "failed",
                message: "Agent not found"
            });
        }

        await AgentModel.findByIdAndDelete(agentId);
        return res.status(200).json({
            status: "success",
            message: "Agent deleted successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "failed",
            message: "Internal error"
        });
    }
};

// Update an agent with a new photo
export const updateAgent = async (req, res) => {
    try {
        upload.single("newphoto")(req, res, async function (err) {
            if (err) {
                return res.status(500).json({ status: "failed", message: "File upload error" });
            }

            const { agentId, newname, newcompany, newnumber, newexperience } = req.body;
            const newphoto = req.file ? req.file.filename : null;

            const agent = await AgentModel.findById(agentId);
            if (!agent) {
                return res.status(404).json({
                    status: "failed",
                    message: "Agent not found"
                });
            }

            agent.name = newname;
            agent.company = newcompany;
            agent.number = newnumber;
            agent.experience = newexperience;
            if (newphoto) agent.photo = newphoto;

            await agent.save();
            return res.status(200).json({
                status: "success",
                message: "Agent updated successfully",
                agent
            });
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: "failed",
            message: "Internal error"
        });
    }
};

// Fetch all agents
export const fetchAgents = async (req, res) => {
    try {
        const agentdata = await AgentModel.find();
        if (!agentdata.length) {
            return res.status(404).json({
                status: "failed",
                message: "No agents found"
            });
        }
        res.status(200).json({
            status: "success",
            agentdata
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: "Could not fetch the data"
        });
    }
};
