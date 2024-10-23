import { useEffect, useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from "prop-types";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
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
                    blog={blog}
                    handleAddToBookmark = {handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}>
                    </SingleBlog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;