import Users from "../modal/userModal.js"

export const getRegisteredUsers =async(req,res)=>{
try {
  
    const users = await Users.find()
     if(users.length == 0){
        return res.status(400).json({ message: "No Users Found" });
    }

    return res.status(200).json({message:"Users fetched Successful",UsersList:users})
} catch (error) {
    return res.status(500).json({ message: error });
    
}
}

export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const user = await Users.findById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  export const editUser = async (req, res) => {
    try {
      const {username,phone,profession } = req.body;
      
      const { id } = req.params;
      const user = await Users.findById(id);
      
      if(!user) {
          return res.status(404).json({ message: "User not found" });
        }
  
  
        const updatedUser = await Users.findByIdAndUpdate(
       id,
          { username,phone,profession },
          { new: true }
        )
  
      return res.status(200).json({ user: updatedUser ,message:"User Edited"});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  };

  export const deleteUser = async(req,res)=>{
    try {
        const {id} = req.params
    console.log(id)

    const removeUser = await Users.findByIdAndDelete(id)
    if(!removeUser){
      return res.status(400).json({ message: "User not found" });

    }
    return res.status(200).json({message:"User Deleted"})
    } catch (error) {
      return res.status(400).json({ message: error });
        
    }
  }