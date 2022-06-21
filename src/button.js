import React from "react";

class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Please click me!",
            clickCount: 0
        };
    }
    //method update count
    updateCount() {
        this.setState((prevState, props) =>{ // đối tượng pre để lưu lại
            return {
                clickCount: prevState.clickCount + 1,
                text: "Clikced"
            };
        });
    }

    render() {
        return (
        <button onClick={() => this.updateCount()}>
            {this.state.text}: {this.state.clickCount}
        </button>
        );
    }
}

export default MyButton;