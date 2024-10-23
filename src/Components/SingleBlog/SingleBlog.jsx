import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";


const SingleBlog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between'>
                <div className='flex mb-4'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    {/* blog content show here */}
                    <button onClick={() => handleAddToBookmark(blog)} 
                    className='ml-2 text-red-600 '><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags}</p>
        </div>
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default SingleBlog;