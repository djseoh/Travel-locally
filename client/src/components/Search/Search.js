import React from "react";
import "./Search.css";


class Search extends React.Component {
    _timeoutID;

    constructor(props) {
        super(props);
        this.state = {
            buttonToggled: false,
            inputToggled: false,
            // isManagingFocus: false
        };
        this.toggleSearch = this.toggleSearch.bind(this)
    }
    // change the state for expanding search bar
    toggleSearch() {
        let isButtonToggled = this.state.buttonToggled;
        let isInputToggled = this.state.inputToggled;
        this.setState ({
            buttonToggled: !isButtonToggled,
            inputToggled: !isInputToggled
        });
        // if (inputToggled == false) {
        //     return

        // }
    }
    render() {
        let buttonClass = (this.state.buttonToggled) ? 'close2 search': 'search';
        let inputClass = (this.state.inputToggled) ? 'searchSquare input': 'input';
        return (
        <form className="content">
            <input
                type="text" 
                name="input"
                className={inputClass}
                onBlur={this._onBlur}
                onFocus={this._onFocus} />
            <button
                type="reset"
                className={buttonClass}
                onClick={this.toggleSearch}></button>
        </form>
        )
    }
    // functions for blur/focus
}

export default Search;