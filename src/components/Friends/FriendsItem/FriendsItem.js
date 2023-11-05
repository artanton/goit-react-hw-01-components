import { FriendCard, Marker } from "./FriendsItem.Styled";


export const FriendItem = ({ pal: { avatar, name, isOnline } }) => {
    return (
      <FriendCard>
        <Marker $isOnline={isOnline}> {isOnline}</Marker>
        <img  src={avatar} alt={name} width="50px" />
        <p >{name}</p>
      </FriendCard>
    );
  };
