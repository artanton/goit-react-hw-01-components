import {
  Ava,
  ProfileWrapper,
  PersonWrapper,
  StatsList,
  StatItem,
  PersonName,
} from './Profile.styled';

export const ProfileCard = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <ProfileWrapper>
      <PersonWrapper>
        <Ava src={avatar} alt={username} />
        <PersonName>{username}</PersonName>
        <p>@{tag}</p>
        <p>{location}</p>
      </PersonWrapper>

      <StatsList>
        <StatItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <span>{views}</span>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatItem>
      </StatsList>
    </ProfileWrapper>
  );
};
