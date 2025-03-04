import React , {useState , useEffect} from 'react'
import {Container , PostCard} from "../components"
import appwriteService from "../appwrite/config"

function AllPosts() {
    const [posts,setPosts] = useState([])

    // useEffect(()=>{} , [])



    // appwriteService.getPost([]).then((posts)=>{
    //     if(posts){
    //         setPosts(posts.documents)
    //     }
    // })
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPost([]);
                if (response) {
                    setPosts(response.documents);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts(); // Call the fetch function
    }, []); // Run only once on component mount

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key = {post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
      
    </div>
  )
}

export default AllPosts
