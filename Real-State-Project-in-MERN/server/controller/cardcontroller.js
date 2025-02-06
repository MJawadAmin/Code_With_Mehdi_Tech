
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

    // Create a new card using the form data and uploaded file
    const newCard = new CardModel({
      stataimage: stataimage,
      statename: statename,
      statevalue: statevalue,
      stateplace: stateplace,
      statescale: statescale,
      stategarages: stategarages,
      statesbedroom: statesbedroom,
      statebatbrooms: statebatbrooms,
      statesalername: statesalername,
      daybefore: daybefore,
      stateprice: stateprice,
    });

    // Save the new card to the database
    await newCard.save();

    return res.status(200).json({
      status: "success",
      message: "Created successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: "failed",
      message: "Server error",
    });
  }
};


export const removecard = async (req, res ) => {
    try{
        const {cardId}= req.body;
        const agent = await AgentModel.findById(cardId);
        if(!agent){
            return res.status(200).json({
                status: 'failed',
                message: 'agent not found'
            })
        }else{
            await AgentModel.findByIdAndDelete(cardId);
            return res.status(200).json({
                status:" success",
                message: 'deleted successfully'
            })
        }

    }catch(error){
        return res.status(200).json({
            status: 'failed',
            message: 'internal error'
    })
}}

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
            card.stateName= newstateName;
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