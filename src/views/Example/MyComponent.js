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
        // setState cap nhat lai state xong re-render
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        });

        //cach 2
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        // this.setState({
        //     arrJobs: currentJobs,
        // });
    };

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter((item) => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs,
        });
    };
    /* 
    JSX => return block 
    <react.Fragment></react.Fragment> // <></>
    // props : property truyen du lieu react
    */

    render() {
        console.log(">> call render: ", this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;
