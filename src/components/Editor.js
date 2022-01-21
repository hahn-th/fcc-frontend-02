import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.contentChanged(e.target.value);
  }

  render() {
    return (
      <textarea 
          id="editor" 
          onChange={this.onChange}
          className="form-control w-100 h-100" 
          value={this.props.initialValue} />
          
    );
  }
  
}


export default Editor;