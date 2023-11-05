import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  export const StatCard = styled.div`
  min-width: 80px;
  background-color: ${getRandomHexColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  gap: 10px;
  `