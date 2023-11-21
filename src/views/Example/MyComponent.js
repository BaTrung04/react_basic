import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { compileString } from "sass";

class MyComponent extends React.Component {
    state = {
        name: "",
        channel: "Hoc react",
    };
    /* 
    JSX => return block 
    <react.Fragment></react.Fragment> // <></>
    */
    handleOnChangeName = (event) => {
        //merge
        this.setState({
            name: event.target.value,
        });
    };

    handleClickButton = () => {
        alert("Click me");
    };

    render() {
        console.log(">> call render: ", this.state);
        return (
            <>
                <div className="first">
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    hello my Component , My name is {this.state.name}
                </div>
                <div className="second">
                    My youtube channel : {this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>
                        Click me
                    </button>
                </div>
            </>
        );
    }
}

export default MyComponent;
