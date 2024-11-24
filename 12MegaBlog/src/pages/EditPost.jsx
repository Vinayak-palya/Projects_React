import { useEffect, useState } from "react"
import React  from 'react'
import { PostForm , Container  } from "../components"
import { useNavigate, useParams } from "react-router-dom"
// import {service as appwriteService} from "../appwrite/config"
import  appwriteService from "../appwrite/config"

function EditPost() {
    const [post , setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()
    

    useEffect(()=>{
        if(slug){
          appwriteService.getPost(slug).then((post) => {
            if(post){
                setPosts(post)
            }
            
          })
        }
        else{
            navigate('/')
        }
    } , [slug , navigate ])
  return post ? (
    <div className="py-8">
        <Container>
            <PostForm post = {post}/>
        </Container>
    </div> 
  ): (null)
}

export default EditPost
