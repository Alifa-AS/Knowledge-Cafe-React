import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";


const Blogs = () => {
    const[blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <SingleBlog key={blog.id} 
                    blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blogs;