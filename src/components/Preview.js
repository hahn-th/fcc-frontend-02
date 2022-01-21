import React from 'react'
import { marked } from 'marked'

function Preview(props) {
    return (
        <div id="preview" className="w-90 h-100"
            dangerouslySetInnerHTML={{ __html: marked(props.content, {breaks: true}) }} />
    );
}

export default Preview;