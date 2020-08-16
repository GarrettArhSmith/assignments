import React from "react"

import postList from '../postList'
import BlogPost from './BlogPost'

function BlogList() {
    return(
        <div className="blogList">
            {postList.map(post => <BlogPost title={post.title} subTitle={post.subTitle} author={post.author} date={post.date}/>)}
            <div className="buttonContainer"><button>OLDER POSTS →</button></div>
            <hr className="lastHr"/>
        </div>
    )
}

export default BlogList