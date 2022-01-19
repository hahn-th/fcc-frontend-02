const { Component } = require("react/cjs/react.production.min");

class Preview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parsedContent: "parsed text"
        }
    }

    render() {
        return (
            <div id="preview" className="h-full resize-none">
                <div id="preview" className="bg-white w-full h-full rounded-xl border-solid border-2 border-slate-400 focus:border-slate-600 p-2">
                    {this.state.parsedContent}
                </div>
            </div>
        );
    }
}

export default Preview;