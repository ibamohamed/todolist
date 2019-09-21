import React, { Component } from "react";
import "./Task.css";
import { calculateDueFormat } from "../../../helpers/date";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }
  submit = e => {
    e.preventDefault();
    this.props.UpdateNote({
      id: this.props.task._id,
      inputTask: {
        title: e.target[0].value,
        description: e.target[1].value,
        date_created: e.target[2].value,
        status: e.target[3].value
      }
    });
    this.setState({editMode: false});
  };

  dateChangedHandler = event => {
    this.props.task.date_created = event.target.value;
  };

  render() {
    if (this.state.editMode) {
      return (
        <li>
          <a href="#">
            <form onSubmit={this.submit}>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                required
                defaultValue={this.props.task.title}
                onChange={(e) => this.props.task.title = e.target.value}
              />
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                required
                defaultValue={this.props.task.description}
                onChange={(e) => this.props.task.description = e.target.value}
              />

              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date_created"
                type="date"
                required
                defaultValue={this.props.task.date_created}
                onChange={this.dateChangedHandler}
              />
              <label htmlFor="status">Status</label>
              <input id="status" type="checkbox" value={this.props.task.status} />
              <div className="actions">
                <button onClick={() => this.setState({ editMode: false })}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </a>
        </li>
      );
    } else {
      return (
        <li>
          <a href="#">
            <h2>
              <span>{this.props.task.title}</span>
              <input
              id={this.props.task._id}
                type="checkbox"
                checked={this.props.task.status}
                onClick={() =>
                  this.props.MarkNote({
                    id: this.props.task._id,
                    status: !this.props.task.status
                  })
                }
              ></input>
            </h2>
            <p>{this.props.task.description}</p>
            <p>
             {calculateDueFormat(this.props.task.date_created)}
            </p>
            <div className="actions">
              <button onClick={() => this.setState({ editMode: true })}>
                Edit
              </button>
              <button
                onClick={() => this.props.DeleteNote(this.props.task._id)}
              >
                Delete
              </button>
            </div>
          </a>
        </li>
      );
    }
  }
}

export default Task;
