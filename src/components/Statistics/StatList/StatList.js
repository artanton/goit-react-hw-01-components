import { StatItem } from '../StatItem/StatItem';
import { StatSection, StatTable } from './StatListStyled';

// import PropTypes from 'prop-types';

export const StatList = ({ title, data }) => {
  return (
    <StatSection>
      {data.length > 0 && <h2>{title}</h2>}
      <StatTable>
        {data.map(item => {
          return (
            <li key={item.id}>
              <StatItem item={item} />
            </li>
          );
        })}
      </StatTable>
    </StatSection>
  );
};

