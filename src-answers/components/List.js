import React from "react";

function List(props) {
  const { propTask } = props;
  return (
    <div>
      <li>Swoop</li>
      <li>Is</li>
      <li>The</li>
      <li>Best!</li>
      <li>{propTask}</li>
    </div>
  );
}

export default List;
