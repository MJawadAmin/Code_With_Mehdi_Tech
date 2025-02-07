
import CardModel from "../model/cardModel.js"
// Assuming your CardModel is here
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
  
  export const removecard = async (req, res) => {
    try {
        console.log("Received DELETE request for ID:", req.params.id); // Debug log

        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ status: "failed", message: "ID is missing" });
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




export const updatecard = async ( req, res) => {
    try{
        const {cardId, newstateName,
            newstatemage,
            newstatevalue,
            newstatePlace,
            newstateScale,
            newstateGarages,
            newstateBedrooms,
            newstateBathrooms,
            newstateSalerName,
            newdayBefore,
            newstateprice}=req.body;
        const card=await CardModel.findById(cardId);
        if(!card){
            return res.status(200).json({
                status: ' failed',
                message: 'Updation failed'
            })
        }
        else{
            card.statename= newstateName;
            agent.name= newname;
            agent.company= newcompany;
            agent.experience= newexperience;
            agent.number= newnumber;
            await agent.save();
            return res.status(200).json({
                status: 'succeed',
                message: 'Agent data updated succesfully'
            })
        }
    }catch(error){
        console.log(error)
        return res.json(200).json({
            status: 'failed',
            message:'Internal error'
        })

    }
}

export const fetchcards =async (req, res) => {
    try{
        const carddata= await CardModel.find();
        if(!carddata){
            return res.status(200).json({
                status : 'failed',
                message:'did not found'
            })
        }
        else{
            res.status(200).json({
                status: 'success', 
                carddata
            })
        }
    }catch(error){
        console.log(error)
        res.status(200).json({
            status: ' failed ',
            message:'did not fetched the data'
        })

    }
}