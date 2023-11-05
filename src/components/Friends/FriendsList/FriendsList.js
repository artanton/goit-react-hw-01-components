import { FriendItem } from "../FriendsItem/FriendsItem";


export const FriendsList = ({ friends}) => {
    return (
      <section>
      <ul>
        {friends.map(friend => {
          return (
            <li key={friend.id}>
              <FriendItem pal={friend} />
            </li>
          );
        })}
      </ul>
      </section>
    );
  };
  
  