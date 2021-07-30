import React, { useState } from "react";

function Buttons({ votes, downVotes, handleDownVotes, handleUpVotes }) {
  return (
    <div>
      <button onClick={handleUpVotes}> {votes}👍 </button>
      <button onClick={handleDownVotes}> {downVotes}👎 </button>
    </div>
  );
}

export default Buttons;
