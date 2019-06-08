// Modules
import React from "react";

// My Files List
import Button from "../Button";

// Render
export default ({ isFollowing, onClick }) => (
  <Button text={isFollowing ? "UnFollow" : "Follow"} onClick={onClick} />
);
