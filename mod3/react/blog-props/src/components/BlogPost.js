import React from "react"

function BlogPost(props) {
    return(
        <div className="blogPost">
            <a href="#">
                <h2 className="postTitle">{props.title}</h2>
                <h3 className="postSubTitle">{props.subTitle}</h3>
            </a>
            <p className="postMeta">Posted by <a href="#">{props.author}</a> on {props.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost