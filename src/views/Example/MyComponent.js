import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { compileString } from "sass";

class MyComponent extends React.Component {
    state = {
        firstName: "",
        LastName: "",
    };
    /* 
    JSX => return block 
    <react.Fragment></react.Fragment> // <></>
    */
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    };
    handleChangeLastName = (event) => {
        this.setState({
            LastName: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault(); //ko tra lai website
        console.log(">>> check data input: ", this.state);
    };

    render() {
        console.log(">> call render: ", this.state);
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.LastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        );
    }
}

export default MyComponent;
