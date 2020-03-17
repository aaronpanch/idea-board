import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const IdeaCard = ({ title, body }) => (
  <Card className="my-3">
    <CardBody>
      <CardTitle>{ title }</CardTitle>
      <CardText>{ body }</CardText>
    </CardBody>
  </Card>
);

export default IdeaCard;
