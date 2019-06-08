// Modules
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

// My Files List
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";

// Styled Component
const Card = styled.div`
  ${props => props.theme.whiteBox}
  display:flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

// Render
const UserCard = ({ id, username, isFollowing, url, isSelf }) => (
  <Card>
    <EAvatar url={url}>
      <ELink to={`/${username}`}>
        <FatText text={username} />
      </ELink>
      {!isSelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
    </EAvatar>
  </Card>
);

// PropTypes Structure
UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default UserCard;
