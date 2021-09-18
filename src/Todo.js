import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.task };
  }

  handleDelete = () => {
    this.props.deleteTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleComplete = () => {
    this.props.completeTodo(this.props.id);
  };

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              placeholder={this.props.task}
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm}>
              <i class="fas fa-pen"></i>
            </button>
            <button onClick={this.handleComplete}>
              <i class="fas fa-check"></i>
            </button>
            <button onClick={this.handleDelete}>
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;
