import { transactionsAddNewTransaction } from 'balance-common';
import { connect } from 'react-redux';
import { removeTransaction } from '../redux/transactionsToApprove';
import { updateTransactionCountNonce } from '../redux/nonce';

const mapStateToProps = ({
  walletconnect: { walletConnectors },
  nonce: { transactionCountNonce },
}) => ({
  walletConnectors,
  transactionCountNonce,
});

export default Component => connect(mapStateToProps, {
  transactionsAddNewTransaction,
  removeTransaction,
  updateTransactionCountNonce,
})(Component);
