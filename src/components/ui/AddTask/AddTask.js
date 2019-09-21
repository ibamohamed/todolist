import React, { Component } from "react";
import "./AddTask.css";
import Header from ".././/Header/Header";
class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      date_created: "",
      status: false
    };
  }

  submit = e => {
    e.preventDefault();
    this.props.AddNote({
      title: e.target[0].value,
      description: e.target[1].value,
      date_created: e.target[2].value,
      status: e.target[3].value
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        <div className="task">
          <form onSubmit={this.submit}>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              required
              defaultValue={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              required
              defaultValue={this.state.description}
              onChange={e => this.setState({ description: e.target.value })}
            />

            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date_created"
              type="date"
              required
              defaultValue={this.state.date_created}
              onChange={this.dateChangedHandler}
            />
            <label htmlFor="status">Status</label>
            <input
              id="status"
              type="checkbox"
              value={this.state.status}
              onChange={e => this.setState({ status: e.target.value })}
            />
            <div className="actions">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTask;
