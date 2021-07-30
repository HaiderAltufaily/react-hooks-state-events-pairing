import React from "react";
import Comment from "./Comment";
import { useState } from "react";
import Buttons from "./Buttons";
function CommentsList({ video, showComments }) {
  const comments = video.comments;

  return showComments ? (
    <div>
      <h2> {comments.length} Comments </h2> <br />
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment user={comment.user} comment={comment.comment} />
          </div>
        );
      })}
    </div>
  ) : null;
}

export default CommentsList;
