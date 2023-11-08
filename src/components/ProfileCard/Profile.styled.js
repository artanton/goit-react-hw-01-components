import styled from 'styled-components';
import 'modern-normalize';

export const Ava = styled.img`
  border-radius: 50%;
  width: 200px;
`;

export const ProfileWrapper = styled.div`
  width: 400px;
  border: 1px solid ${p => p.theme.colors.borderGray};
  margin: 20px 0;

  background-color: ${p => p.theme.colors.darkGray};
  border-radius: ${p => p.theme.borderRad.norm};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const PersonWrapper = styled.div`
  font-size: 24px;

  padding: 20px 0px;
  border-top-left-radius: ${p => p.theme.borderRad.norm};
  border-top-right-radius: ${p => p.theme.borderRad.norm};

  background-color: ${p => p.theme.colors.lightGray};

  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  list-style: none;
`;

export const PersonName = styled.p`
  font-weight: bold;
  font-size: 36px;
`;

export const StatsList = styled.ul`
  font-size: 20px;
  padding: 10px 0px;

  display: flex;
  justify-content: space-evenly;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
