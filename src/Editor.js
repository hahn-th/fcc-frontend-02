const { Component } = require("react/cjs/react.production.min");

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <div className="h-full resize-none">
                <textarea id="editor" className="bg-white w-full h-full rounded-xl border-solid border-2 border-slate-400 focus:border-slate-600 p-2 ">
                    {this.state.text}
                </textarea>
            </div>
        );
    }
}

export default Editor;