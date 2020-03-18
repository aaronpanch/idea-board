import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import VoteButton from "./VoteButton";

const IdeaCard = ({ id, title, body, votes }) => {
  return (
    <Card className="my-3 flex-row" >
      <VoteButton count={votes.length} onclick={() => {}} voted={true}></VoteButton>
      <CardBody>
        <CardTitle>
          <Link to={`/ideas/${id}`}>{title}</Link>
        </CardTitle>
        <CardText>{body}</CardText>
      </CardBody>
    </Card>
  );
};

IdeaCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  votes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired
    })
  ).isRequired
};

export default IdeaCard;
