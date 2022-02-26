import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack, onClickDelete } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <p className="list-row-title">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
