import React from "react";
import "./App.css";
import storeFactory from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import initialState from "./initialState";
import TaskList from "./components/container/TaskList";
import AddTask from "./components/container/AddTask";
const store = storeFactory(initialState);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={() => <TaskList tasks={[]} />} />
        <Route path="/addtask" exact component={() => <AddTask />} />
      </Router>
    </Provider>
  );
}

export default App;
