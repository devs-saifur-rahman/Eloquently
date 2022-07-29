import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, children }) => {
    const handleClick = (e, author) => { console.log(e); console.log(author); };
    return (
        <div>
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
            <button onClick={(e) => handleClick(e, author)}>Read more!</button>
        </div>
    )
}



Article.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    children: PropTypes.node
}
export default Article