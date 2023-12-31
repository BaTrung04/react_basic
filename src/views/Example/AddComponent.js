import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    };
    handleChangeTitlejob = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault(); //ko tra lai website
        if (!this.state.title || !this.state.salary) {
            toast.success("Submit success!!");
            return;
        }
        console.log(">>> check data input: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary,
        });

        this.setState({
            title: "",
            salary: "",
        });
    };

    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label>
                <br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeTitlejob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label>
                <br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                />
                <br />
                <input
                    type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        );
    }
}

export default AddComponent;
