import { useEffect, useState } from "react"
import styles from "./posts.module.css"

const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => data)
}

function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLOading] = useState(false)
    const [error, setError] = useState(false)

    const handleGetPosts = () => {
        setIsLOading(true)
        getPosts().then(data => setPosts(data), () => setError(true))
            .then(() => setIsLOading(false))
    }

    useEffect(() => {
        handleGetPosts()
    }, [])


    return (
        <div className={styles.postsContainer}>
            <h2>Posts</h2>
            {
                posts.length > 0 && posts.map(post => {
                    return <div key={post.id}> {post.id}::  {post.title} </div>
                })
            }
            {isLoading && <span>Loading...</span>}
            {error && <span>Ooops, try later</span>}
        </div>
    )
}

export default Posts