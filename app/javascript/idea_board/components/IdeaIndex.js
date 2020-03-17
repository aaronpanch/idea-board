import React from "react";

import IDEA_STUBS from "../idea_stubs";
import IdeaCard from "./IdeaCard";

const IdeaIndex = () => {
  return (
    <div>
      {IDEA_STUBS.map(({id, title, body}) => (
        <IdeaCard key={id} title={title} body={body}/>
      ))}
    </div>
  );
};

export default IdeaIndex;
