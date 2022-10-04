import PropTypes from 'prop-types';
import {
  FriendsItem,
  Status,
} from 'components/FriendListItem/FriendListItem.styled';

const FriendListItem = ({ avatar, friendName, isOnline }) => {
  return (
    <FriendsItem>
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{friendName}</p>
    </FriendsItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
