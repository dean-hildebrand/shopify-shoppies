import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

function RemoveNominated() {
  return (
    <>
      <span className="add-nominated">Remove</span>
      <RemoveCircleIcon className="add-icon" color="danger" />
    </>
  );
}

export default RemoveNominated;
