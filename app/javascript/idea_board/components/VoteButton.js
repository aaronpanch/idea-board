import React from "react";
import { Button } from "reactstrap";

const VoteButton = ({ count, onClick, voted }) => (
  <Button
    color={voted ? "secondary" : "primary"}
    onClick={onClick}
    disabled={voted}
  >
    <span className="mr-2">
      {voted
        ? (<ion-icon name="checkmark" />)
        : (<ion-icon name="thumbs-up" />)
      }
    </span>
    {count}
  </Button>
);

export default VoteButton;
