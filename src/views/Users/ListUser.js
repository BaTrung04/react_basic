import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        ListUser: [],
    };
    // cach 1 es5-6 su dung promise
    // componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //         console.log(">>check res:", res.data.data);
    //     });
    // }

    // cach 2
    async componentDidMount() {
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : [],
        });
    }

    handleViewDataUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
    };

    render() {
        let { ListUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">Fetch all list users</div>
                <div className="list-user-content">
                    {ListUser &&
                        ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div
                                    className="child"
                                    key={item.id}
                                    onClick={() =>
                                        this.handleViewDataUser(item)
                                    }
                                >
                                    {index + 1} - {item.first_name}{" "}
                                    {item.last_name}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default withRouter(ListUser);
