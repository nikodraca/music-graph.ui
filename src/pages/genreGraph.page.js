import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import GenreGraph from '../components/genreGraph.component';
import actions from '../actions';
import Loader from '../components/loader.component';
import ErrorMessage from '../components/errorMessage.component';
import { ChevronDown } from 'react-feather';

const UserHeader = styled.div`
  display: flex;
  width: 99%;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: white;
  padding: 0.5%;
  justify-content: space-between;

  @media (max-width: 641px) {
    width: 94%;
    padding: 3%;
  }
`;

const UserDisplayNameHeader = styled.h4`
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: black;
  margin: 0;
`;

const UserProfilePicture = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const PlaceHolderIcon = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 4%;
  background-color: #919098;
`;

const Title = styled.h3`
  font-family: 'Muli', sans-serif;
  font-weight: 700;
  color: black;
  margin: 0;
`;

const OptionsDropdown = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  padding: 1% 2%;
  margin-top: 50px;
  margin-right: 5px;
  border-radius: 5px;
  font-family: 'Muli', sans-serif;

  @media (max-width: 641px) {
    margin-top: 70px;
  }
`;

const DropdownItem = styled.div`
  font-family: 'Muli', sans-serif;
  font-size: 14px;
  margin-bottom: 5%;
  cursor: pointer;
`;

const GenreGraphPage = ({ actions, artistGraph, user, match, errorMessage }) => {
  const [showLogout, setShowLogout] = useState(false);
  const history = useHistory();
  const { spotifyUserId } = match.params;
  const authedUserId = localStorage.getItem('spotifyUserId');

  useEffect(() => {
    if (spotifyUserId && (!user || !artistGraph)) {
      actions.fetchSpotifyData({ spotifyUserId });
    }
  }, [spotifyUserId, actions, user, artistGraph]);

  if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;
  if (!artistGraph || !user) return <Loader />;

  const userData = user.toJS();

  // update url if coming from auth
  if (!spotifyUserId) {
    history.push(`/graph/${userData.id}`);
  }

  return (
    <div>
      <UserHeader>
        <Title>Music Graph</Title>
        <UserDisplayNameHeader>{userData.displayName}</UserDisplayNameHeader>
        <div
          onClick={() => {
            if (spotifyUserId === authedUserId) {
              setShowLogout(!showLogout);
            }
          }}
        >
          {userData.profilePicture ? <UserProfilePicture src={userData.profilePicture} /> : <PlaceHolderIcon />}
          {spotifyUserId === authedUserId && <ChevronDown />}
        </div>
      </UserHeader>
      {showLogout && (
        <OptionsDropdown>
          {/* <DropdownItem>Share</DropdownItem> TODO: figure out what share will do */}
          <DropdownItem
            onClick={() => {
              actions.logOut();
              history.push(`/`);
            }}
          >
            Log Out
          </DropdownItem>
        </OptionsDropdown>
      )}
      <GenreGraph artistGraph={artistGraph} style />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    accessToken: state.get('accessToken'),
    artistGraph: state.get('artistGraph'),
    user: state.get('user'),
    errorMessage: state.get('errorMessage')
  };
}; //eslint-disable-line
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}); //eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(GenreGraphPage);
