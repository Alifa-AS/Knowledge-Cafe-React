import PropTypes from "prop-types";

const SingleBookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-50 p-4 m-4 rounded-xl">
            <h3 className="text-xl text-center">{title}</h3>
        </div>
    );
};

SingleBookmark.propTypes = {
    bookmark: PropTypes.object
}

export default SingleBookmark;