import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import "../css/RemoveNominated.css";
import { Button } from "@material-ui/core";

function RemoveNominated() {
  return (
    <div className="remove-btn">
      <span className="add-nominated">Remove</span>
      <Button onClick="disable">
        <RemoveCircleIcon className="add-icon" color="secondary" />
      </Button>
    </div>
  );
}

export default RemoveNominated;
