import video from "../data/video.js";
import Title from "./Title.jsx";
import React, { useState } from "react";
import CommentsList from "./CommentsList.jsx";

function App() {
  console.log("Here's your data:", video);
  const [value, setValue] = useState(false);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title setValue={setValue} video={video} />
      <CommentsList showComments={value} video={video} />
    </div>
  );
}

export default App;
