import styled from 'styled-components';

const getColor = props => {
  return props.$isOnline ? 'green' : 'red';
};

export const Marker = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 12px;
  background-color: ${getColor};
`;

export const FriendCard = styled.div`
  font-size: 28px;
  width: 400px;
  padding: 12px;

  margin-bottom: 10px;
  background-color: ${p => p.theme.colors.darkGray};
  border-radius: ${p => p.theme.borderRad.norm};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid ${p => p.theme.colors.borderGray};

  display: flex;
  gap: 20px;
  align-items: center;
`;

