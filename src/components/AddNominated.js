import React from "react";
import "../css/AddNominated.css";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

function AddNominated() {
  return (
    <div className="add-btn">
      <span className="add-nominated">Nominate</span>
      <Button>
        <AddIcon className="add-icon" color="primary" />
      </Button>
    </div>
  );
}

export default AddNominated;
