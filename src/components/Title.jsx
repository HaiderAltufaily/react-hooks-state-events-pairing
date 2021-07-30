import React, { useState } from "react";
import Buttons from "./Buttons";

function Title({ video, setValue }) {
  function handleUpVotes() {
    setVotes((votes) => votes + 1);
  }
  function handleDownVotes() {
    setDownVotes((downVotes) => downVotes + 1);
  }
  const [votes, setVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);
  const [show, setShow] = useState(true);
  const btnName = show ? "Show Comments" : "Hide Comments";
  function handleComments() {
    setShow(!show);
    setValue(show);
  }
  return (
    <div>
      <h1>{video.title}</h1>
      <p>
        {" "}
        {video.views} Views | Uploaded {video.createdAt}{" "}
      </p>
      <Buttons
        handleUpVotes={handleUpVotes}
        handleDownVotes={handleDownVotes}
        setVotes={setVotes}
        setDownVotes={setDownVotes}
        votes={votes}
        downVotes={downVotes}
        video={video}
      />
      <button onClick={handleComments}>{btnName}</button>
      <hr />
    </div>
  );
}

export default Title;
