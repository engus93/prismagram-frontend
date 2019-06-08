// Modules
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// My Files List
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

// Styled Component
const Card = styled.div``;

// Render
const UserCard = ({ username, isFollowing, url, isSelf }) => (
  <Card>
    <Avatar url={url}>
      <FatText text={username} />
      {!isSelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
    </Avatar>
  </Card>
);

// PropTypes Structure
UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
