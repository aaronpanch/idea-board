import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const IdeaCard = ({ id, title, body }) => {
  return (
    <Card className="my-3">
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
  body: PropTypes.string.isRequired
};

export default IdeaCard;
