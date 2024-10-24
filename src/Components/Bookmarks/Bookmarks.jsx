import PropTypes from "prop-types";
import SingleBookmark from '../Bookmarks/SingleBookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 ml-4 mt-2 pt-2">
            <div>
                <h3 className="text-2xl border-2 border-violet-700 bg-violet-200 rounded-xl p-5 mx-2">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center border-2 mx-4 rounded-xl py-4">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark, idx) => <SingleBookmark key={idx} 
                    bookmark={bookmark}></SingleBookmark> )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;