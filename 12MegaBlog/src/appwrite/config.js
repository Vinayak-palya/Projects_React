import conf from "../conf/conf.js";
import { Client, ID, Databases , Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async createPost({title , slug , content , featuredImage , status , userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseId , conf.appwriteCollectionId , slug , 
                {
                    title , content , featuredImage , status , userId
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async updatePost(slug , {title , content , featuredImage , status} ){
        try {
            return await this.databases.updateDocument(conf.appwriteDataBaseId 
                , conf.appwriteCollectionId , slug , {
                    title , content , featuredImage , status
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDataBaseId 
                , conf.appwriteCollectionId , 
                slug)

                return true
        } catch (error) {
            console.log(error)
          return false  
        }
    }

    async getPost(slug)
    {
        try {
            console.log(conf.appwriteDataBaseId ,
                conf.appwriteCollectionId ,
                 slug )
            return await this.databases.getDocument(conf.appwriteDataBaseId ,
                 conf.appwriteCollectionId ,
                  slug )
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status" , "active")]){
        try {
            return await this .databases.listDocuments(conf.appwriteDataBaseId , conf.appwriteCollectionId , queries)
        } catch (error) {
            console.log(error)
            return false
        }
    }

    //  upload files

    async uploadFile(file)
    {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId , ID.unique() , file)
        } catch (error) {
            console.log(error)
            return false
        }
    }
    async deleteFile(fileID)
    {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId , fileID)
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    getFilePreview(fileID)
    {
        console.log(this.bucket.getFilePreview(conf.appwriteBucketId , fileID))
        return this.bucket.getFilePreview(conf.appwriteBucketId , fileID)
    }
}

const service = new Service()
export default service