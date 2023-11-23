import React from "react";
// dua ngdung ve trang chi dinh
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/background.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push("/todo");
        // }, 3000);
    }

    // HOC: higher order component

    handleDeleteUser = (user) => {
        console.log(">>check user delete:", user);
        this.props.deleteUserRedux(user);
    };
    handleCreateUser = () => {
        this.props.addUserRedux();
    };
    render() {
        console.log(">>check props: ", this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello world from Homepage by Bá Trung</div>

                <div>
                    <img src={logo} style={{objectFit: "cover",width: "300px",marginTop: "10px",}}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} &nbsp;
                                    <span onClick={() =>this.handleDeleteUser(item)}>X</span>
                                </div>
                            );
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        );
    }
}
// truyen du lieu giua react vs redux
// state la du lieu cua redux
const mapStateTopProps = (state) => {
    return { dataRedux: state.users };
};

//
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) =>dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "CREATE_USER" }),
    };
};

//export default withRouter(Home);
export default connect(mapStateTopProps, mapDispatchToProps)(Color(Home));
