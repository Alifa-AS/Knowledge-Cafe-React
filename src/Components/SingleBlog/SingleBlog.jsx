import PropTypes from 'prop-types';
const SingleBlog = ({blog}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                   <img className='w-14' src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                   </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags}</p>
        </div>
    );
};

SingleBlog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default SingleBlog;