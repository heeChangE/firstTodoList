import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 38px;
  padding-right: 38px;
  padding-bottom: 24px;
  //border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #bbc4ef;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  const undoneTasks = todos.filter((todo) => !todo.done);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  });

  const dateString = time.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = time.toLocaleDateString("ko-KR", { weekday: "long" });
  const korTime = time.toLocaleTimeString("ko-KR", {
    hour: "numeric",
    minute: "numeric",
  });

  // function init() {
  //   setInterval(today, 1000);
  // }

  // init();

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">
        {dayName} {korTime}
      </div>
      <div className="tasks-left">할 일이 {undoneTasks.length}개 남았어요!</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
