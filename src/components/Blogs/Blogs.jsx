import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    console.log(blogs);

    useEffect(() => {
        fetch('Blogs.json')
        .then(response => response.json()
        .then(data => setBlogs(data)))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;