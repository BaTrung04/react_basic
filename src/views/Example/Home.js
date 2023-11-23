import React from "react";
// dua ngdung ve trang chi dinh
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/background.jpg";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo");
        // }, 3000);
    }

    // HOC: higher order component
    render() {
        return (
            <>
                <div>Hello world from Homepage by Bá Trung</div>

                <div>
                    <img
                        src={logo}
                        style={{ objectFit: "cover", width: "700px" }}
                    />
                </div>
            </>
        );
    }
}

//export default withRouter(Home);
export default Color(Home);
