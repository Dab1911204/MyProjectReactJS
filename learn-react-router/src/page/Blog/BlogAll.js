import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function BlogAll(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    }, []);
    return(
        <>
            <h1>Trang tin tức</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default BlogAll;