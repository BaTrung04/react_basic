import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import DetailUser from "./Users/DetailUser";

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import ListUser from "./Users/ListUser";

/**
 * 2 components: class component / function component (function/ arrow)
 * JSX
 */

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Switch>
                        <Route exact path="/" className="active">
                            <Home />
                        </Route>
                        <Route path="/todo">
                            <ListTodo />
                        </Route>
                        <Route path="/about">
                            <MyComponent />
                        </Route>
                        <Route path="/user" exact>
                            <ListUser />
                        </Route>
                        <Route path="/user/:id">
                            <DetailUser />
                        </Route>
                    </Switch>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        </BrowserRouter>
    );
}

export default App;
