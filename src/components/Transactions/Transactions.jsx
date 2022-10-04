import PropTypes from 'prop-types';
import {
  TableTransaction,
  TableHeader,
  TableRow,
  TableBody,
} from 'components/Transactions/Transactions.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <thead>
        <TableRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableBody>{item.type}</TableBody>
            <TableBody>{item.amount}</TableBody>
            <TableBody>{item.currency}</TableBody>
          </TableRow>
        ))}
      </tbody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = { items: PropTypes.arrayOf(PropTypes.shape) };

export default TransactionHistory;
