import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendsList } from 'components/FriendList/FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <FriendsList className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          friendName={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.shape) };

export default FriendList;
