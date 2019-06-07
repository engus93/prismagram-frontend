// Modules
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

// My Files List
import useInput from "../../Hooks/useInput";
import PostPresenter from "./PostPresenter";
import { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { TOGGLE_LIKE, ADD_COMMENT } from "./PostQueries";

// Render
const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  caption,
  location
}) => {
  // useState
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [currentItem, setCurrentItem] = useState(0);
  const [selfComments, setSelfComments] = useState([]);

  // Hooks
  const comment = useInput("");

  // Mutation
  const toggleLikeMutation = useMutation(TOGGLE_LIKE, {
    variables: { postId: id }
  });

  const addCommentMutation = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: comment.value }
  });

  /* Event */

  // Post Image Slide
  const slide = () => {
    const totalFiles = files.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useEffect(() => {
    slide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem]);

  // Add Comment Event
  const onKeyPress = async event => {
    const { which } = event;
    if (which === 13) {
      event.preventDefault();
      try {
        const {
          data: { addComment }
        } = await addCommentMutation();
        setSelfComments([...selfComments, addComment]);
        comment.setValue("");
      } catch {
        toast.error("Can't send comment");
      }
    }
  };

  /* Function */

  // toggleLike
  const toggleLike = () => {
    toggleLikeMutation();
    if (isLikedS === true) {
      setIsLiked(false);
      setLikeCount(likeCountS - 1);
    } else {
      setIsLiked(true);
      setLikeCount(likeCountS + 1);
    }
  };

  // Context
  return (
    <PostPresenter
      user={user}
      files={files}
      likeCount={likeCountS}
      location={location}
      caption={caption}
      isLiked={isLikedS}
      comments={comments}
      createdAt={createdAt}
      newComment={comment}
      setIsLiked={setIsLiked}
      setLikeCount={setLikeCount}
      currentItem={currentItem}
      toggleLike={toggleLike}
      onKeyPress={onKeyPress}
      selfComments={selfComments}
    />
  );
};

// PropTypes Structure
PostContainer.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  likeCount: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string,
  createdAt: PropTypes.string.isRequired
};

export default PostContainer;
