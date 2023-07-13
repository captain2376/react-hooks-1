import React ,{useEffect, useState} from 'react'
import axios from 'axios'
export const DataFetching = () => {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idfrombuttonclick,setIdFromButtonClick]=useState(1)
    const [error,setError]=useState('')
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
            setError(error)
        })
    },[idfrombuttonclick])
    const handleClick=()=>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
             <button onClick={handleClick}>Fetch Posts</button>
           <div> {post.title}</div>
            {/* List of Posts
            <ul>
                {
                posts.length>0?posts.map(post=>(<li key={post.id}>{post.title}</li>)):null
                } 
                {
                    error?'Something went wrong':null
                }
            </ul> */}
        </div>
    )
}
