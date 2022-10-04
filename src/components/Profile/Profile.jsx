import PropTypes from 'prop-types';
import {
  ProfileContainer,
  DescriptionContainer,
  ProfileAvatar,
  ProfileName,
  ProfileUserData,
  StatsList,
  StatsItem,
} from 'components/Profile/Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <ProfileAvatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileUserData>@{tag}</ProfileUserData>
        <ProfileUserData>{location}</ProfileUserData>
      </DescriptionContainer>

      <StatsList>
        <StatsItem>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Profile;
