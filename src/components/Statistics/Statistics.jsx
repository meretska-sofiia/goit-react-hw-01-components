import PropTypes from 'prop-types';
import {
  StatContainer,
  StatList,
  StatItem,
} from 'components/Statistics/Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <h2 className="title">{title}</h2>}
      <StatList>
        {stats.map(li => (
          <StatItem key={li.id} style={{ backgroundColor: `${li.color}` }}>
            <span>{li.label}</span>
            <span>{li.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Statistics;
