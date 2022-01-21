import Editor from './Editor';
import Preview from './Preview';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentFromEditor: placeholder
    }

    this.onContentChange = this.onContentChange.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  onContentChange(content) {
    this.setState({
      contentFromEditor: content
    });
  }

  render() {
    return (
      <div className="App container">
        
        <div className='row'>
        <div className='col-5'>
            <Editor initialValue={this.state.contentFromEditor} 
                    contentChanged={this.onContentChange} />
          </div>
          <div className='col-5'>
            <Preview content={this.state.contentFromEditor} />
          </div>
        </div>
      </div>
    );
}
}

export default App;




const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;