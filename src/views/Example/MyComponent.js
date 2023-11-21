import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { compileString } from "sass";
import ChildComponent from "./ChildComponents";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: "abcJob1", title: "Developer", salary: "500" },
            { id: "abcJob2", title: "Testers", salary: "400" },
            { id: "abcJob3", title: "Project managers", salary: "600" },
        ],
    };

    addNewJob = (job) => {
        //cach 1
        console.log(">>Check job from parent: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });
        //cach 2
        // let currrentJobs = this.state.arrJobs;
        // currrentJobs.push(job);
        // this.setState({
        //     arrJobs: currrentJobs,
        // });
    };
    /* 
    JSX => return block 
    <react.Fragment></react.Fragment> // <></>
    */

    render() {
        console.log(">> call render: ", this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent arrJobs={this.state.arrJobs} />
            </>
        );
    }
}

export default MyComponent;
