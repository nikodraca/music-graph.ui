export const authUser = () => {
  var clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  var redirectUri = process.env.REACT_APP_REDIRECT_URI;
  var scope = 'user-read-private user-read-email user-top-read user-follow-read';
  var url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
    clientId
  )}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  window.location = url;
};
