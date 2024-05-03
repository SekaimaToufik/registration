const UserModel = require("../model/user.model")


class UserService{
    static async registrationUser(email,password){
        try {
            const createuser = new UserModel({email,password});
            return await createuser.save();
        } catch (err) {
            
        }
    }
}