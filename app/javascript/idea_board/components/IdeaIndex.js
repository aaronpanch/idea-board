import React from "react";

import ideas from "../sample_ideas";

import IdeaCard from "./IdeaCard";

const IdeaIndex = () => {
  return (
    <div>
      {ideas.map(idea => (
        <IdeaCard key={idea.id} {...idea} />
      ))}
    </div>
  );
};

export default IdeaIndex;
