import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
            
    }
    async createAccount({email , password , name}){
        
        try {
            
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            
            if(userAccount)
            {
                // call another method
                return this.login({email , password})
            }
            else {
                return userAccount
            }
        } catch (error) {
            console.error("Error during account creation:", error);
            console.error("Error message:", error.message); // Log the error message
            console.error("Error code:", error.code); // Check if there's an error code
            console.error("Error response:", error.response); // Check the response if available
        }
    }
    async login({email , password})
    {
        try {
            return await this.account.createEmailPasswordSession(email , password);
        } catch (error) {
            console.log(error)
            
        }

    }

    async getCurrentUser()
    {
        try {
            
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite :: getCurrentuser :: error" , error)
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(error)
        }
    }
}
 
const authService = new AuthService();

export default authService