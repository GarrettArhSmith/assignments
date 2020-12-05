import React, { useState } from 'react';

function CommentForm(props) {
    const [textArea, setTextArea] = useState("")

    function handleChange(e) {
        const { value } = e.target
        setTextArea(value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(textArea)
        setTextArea("")
    }

    return (
        <form onSubmit={handleSubmit}>
          <textarea 
            name="comment" 
            value={textArea}
            onChange={handleChange}
            placeholder="Type your comment..."
            className="commentTextArea"
          >
          </textarea>
          <button>Submit</button>
        </form>
    );
}

export default CommentForm;