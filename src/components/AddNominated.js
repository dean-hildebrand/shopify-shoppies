import React from "react";
import "../css/AddNominated.css";
import AddIcon from "@material-ui/icons/Add";

function AddNominated() {
  return (
    <>
      <span className="add-nominated">Nominate</span>
      <AddIcon  className="add-icon" color="primary"/>
    </>
  );
}

export default AddNominated;
