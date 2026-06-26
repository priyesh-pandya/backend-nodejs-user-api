import User from "../models/user.js";

export const createUser = async (req,res) => {

    console.log('Create user contorller..');

    try{
       const {name,email} = req.body;
       const newUser = new User({name,email});
       await newUser.save();
       res.status(201).json({ message: 'User added successfully!', user: newUser });
    }
    catch(error) {
        res.status(500).json({ error: error.message });
    }
}
//export default createUser;

export const showUsers = async (req,res) => {
    try {
        console.log("ShowUser...");  
        const users = await User.find();
        res.status(200).json(users);
        //const user = new User();
        //res.status(200).json(user.find());  
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUser = async (req,res) => {
    try {
        console.log("DeleteUser...");  
        const {id} = req.params;// get id
        const deleteUser = await User.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json({error: "Invalid data found"});
        }
        res.status(200).json({message: "Record deleted successfully", user:deleteUser.email});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const showUserById = async (req,res) => {
    console.log("Calling getUserById..");
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        if(!user){
            res.status(404).json({error:"Record not found"});
        }

        res.status(200).json({message: "Record found successfully", user:user});    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUser = async (req,res) =>{
    console.log("Calling updateUser..");
    try {
        
        const {id} = req.params;
        const {name,email} = req.body;

        const updateUsr = await User.findByIdAndUpdate(
            {_id:id},
            {name,email},
            {new:true}
        );

        if (!updateUsr) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updateUsr });

    } catch (error) {
      res.status(500).json({error:error.message});  
    }
}

export const searchUsers = async (req,res) =>{
    console.log("search user .....");
    try {
        const {q} = req.query;// keywword from query
        //case insensitive search using regex
        const users = await User.find({
            $or: [
                {name: {$regex: q, $options: "i"}},
                {email: {$regex: q, $options: "i"}}
            ]
        });

        if(users.length ===0){
            return res.status(404).json({message:"No record found"});
        }

        res.status(200).json(users);

    } catch (error) {
         res.status(500).json({error:error.message});
    }
}