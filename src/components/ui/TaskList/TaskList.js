import React, { Component } from "react";
import "./TaskList.css";
import Task from "../../container/Task";
import Header from ".././/Header/Header";
class TaskList extends Component {
  async componentDidMount() {
    await this.props.getData();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <ul id="myUL">
          {this.props.tasks &&
            this.props.tasks.tasks &&
            this.props.tasks.tasks.map((task, i) => (
              <Task key={i} task={task}></Task>
            ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
