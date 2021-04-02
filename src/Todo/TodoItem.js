import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import "./Todo.css";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="li-item">
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
          className="input"
        />{" "}
        &nbsp;
        <b>{index + 1}</b> &nbsp;
        {todo.title}
      </span>
      <button className="btn" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
