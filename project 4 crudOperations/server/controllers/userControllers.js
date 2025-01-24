// export const createUser = async (req, res) => {
//     try {
//         const { name, age, phoneNo, address, bloodGroup, symptoms } = req.body;
//         const newUser = new UserModel({
//             name : name ,
//             age : age ,
//             phoneNo: phoneNo,
//             address: address,
//             bloodGroup: bloodGroup,
//             sypmtoms: symptoms
//         });
//         await newUser.save();
//         return res.status(200).json({
//             status: 'success',
//             message: 'User added succesfully!'
//         })
//     } catch (error) {
//         console.log('Internal Server Error', error);
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }
// export const fetchUsers = async (req, res) => {
//     try {
//         const users = await UserModel.find();
//         if (!users) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'No user found in database!'
//             })
//         } else {
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'Users fetched succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error', error);
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal server error'
//         })
//     }
// }
// export const removeUser = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const user = await UserModel.findById(userId);
//         if (!user) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found in database!'
//             })
//         } else {
//             await UserModel.findByIdAndDelete(userId);
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'Users deleted succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error!')
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }
// export const updateUser = async (req, res) => {
//     try {
//         const { userId, newName, newEmail, newPassword } = req.body;
//         const user = await UserModel.findById(userId);
//         if (!user) {
//             return res.status(200).json({
//                 status: 'failed',
//                 message: 'User not found in database!'
//             })
//         } else {
//             user.name = newName;
//             user.email = newEmail;
//             user.password = newPassword;
//             await user.save();
//             return res.status(200).json({
//                 status: 'success',
//                 message: 'User Updated succesfully!'
//             })
//         }
//     } catch (error) {
//         console.log('Internal Server Error');
//         return res.status(200).json({
//             status: 'failed',
//             message: 'Internal Server Error'
//         })
//     }
// }


import UserModel from '../models/userModels.js'

export const createUser = async(req , res )=>{
    try {
        const patientData =  new UserModel(req.body)
        if (!patientData){
           return  res.status(404).json({
                status: "failed ",
                message : "Server issue user not found"
            })
        }
        const savedData = await patientData.save()
        res.status(200).json(savedData) 

        
    } catch (error) {
        res.status(500).json({error : error})
        
    }
}
export const getAll = async(req , res)=>{
    try { 
         const userData= await UserModel.find()
        
        if(!userData){
            res.status(404).json({
                status: "Data did not found"
            })
        }
         res.status(200).json({
            status:"Success", userData
        })
        } catch (error) {
        res.send(500).json({
            status: "failed ",
            messaeg : " Not fethed the data", error
        })
        
    }
}
export const getOne= async (req , res)=>{
    try {
        const id = req.params.id
        const userExist= await UserModel.findById(id)
        if(!userExist){
            res.send(404).json({status:"404"})
        }
        res.status(200).json({status: "Find", userExist})
        
    } catch (error) {
        res.send(500).json({
            status: "failed ",
            messaeg : " Not fethed the data", error
        })
    }
}
//                There was the errors which is solved in below API
// export const updateData= async (req , res )=>{
//     try {
//         const id = req.params.id;
//         const userexist= await UserModel.findById(id);
//         if(!userexist){
//            {return missed}    res.status(404).json({msg:"User Id not found"})
//         }
//         const updatedData= await {should be find in userModel not in userExist} Userexist.findByIdAndUpdate
// (id, req.body,{new :true})
//         {return missed}        res.status(200).json({updatedData})
//          } catch (error) {
//         {return missed}      res.status(500).json({err: error})
//           } 
//         }
        export const updateData = async (req, res) => {
            try {
                const id = req.params.id; // Define `id`
                const userexist = await UserModel.findById(id); // Find the user by ID
                if (!userexist) {
                    return res.status(404).json({ msg: "User ID not found" }); // Return if user doesn't exist
                }
        
                // Update the user data
                const updatedData = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        
                return res.status(200).json({ updatedData }); // Return the updated data
            } catch (error) {
                return res.status(500).json({ err: error.message }); // Handle errors properly
            }
        };

     // { Simple }
     export const deletData= async (req, res)=>{
        try {
            const id= req.params.id;
            const userExist= await UserModel.findById(id);  
            if(!userExist){
                return res.status(404).json({
                    message : "User did not find"
                })
            }  const deletedData= await UserModel.findByIdAndDelete(id , req.body, {new: true})
            return res.status(200).json({messaeg:"Data deleted Successfully ",deletData})
        }
        catch(error){

            res.status(500).json({err : error})
        }
       }
    // {same deleted api}
    // export const deletData = async (req, res) => {
    //     try {
    //         const id = req.params.id;
    
    //         // Check if the user exists
    //         const userExist = await UserModel.findById(id);
    //         if (!userExist) {
    //             return res.status(404).json({
    //                 message: "User not found"
    //             });
    //         }
    
    //         // Delete the user
    //         const deletedData = await UserModel.findByIdAndDelete(id);
    
    //         // Respond with success
    //         return res.status(200).json({
    //             message: "Data deleted successfully",
    //             deletedData
    //         });
    //     } catch (error) {
    //         // Handle errors
    //         return res.status(500).json({ err: error.message });
    //     }
    // };
    
        