// Import
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// My Files List
import Loader from "../../Components/Loader";
import FatText from "../../Components/FatText";
import UserCard from "../../Components/UserCard";

// Styled Component
const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const Section = styled.div``;

// Render
const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <FatText text="Search for something" />
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text="No Users Found" />
          ) : (
            data.searchUser.map(user => (
              <UserCard
                username={user.username}
                isFollowing={user.isFollowing}
                url={user.url}
                isSelf={user.isSelf}
              />
            ))
          )}
        </Section>
        <Section>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.searchPost.map(post => null)
          )}
        </Section>
      </Wrapper>
    );
  }
};

// PropTypes Structure
SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool
};

export default SearchPresenter;
