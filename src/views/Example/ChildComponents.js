import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import { compileString } from "sass";

class ChildComponent extends React.Component {
    render() {
        console.log(">> check props: ", this.props);
        //let name = this.props.name;
        //let age = this.props.age;

        let { name, age, address, arrJobs } = this.props;
        return (
            <>
                <div className="job-lists">
                    {arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}

export default ChildComponent;
