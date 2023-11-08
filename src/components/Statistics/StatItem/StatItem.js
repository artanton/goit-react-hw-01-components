import { StatCard } from './StatItemStyled';

export const StatItem = ({ item }) => {
  return (
    <StatCard>
      <span>{item.label}</span>
      <span>{item.percentage}</span>
    </StatCard>
  );
};
