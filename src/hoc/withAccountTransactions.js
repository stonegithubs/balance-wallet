import { compose, withProps } from 'recompact';
import { createSelector } from 'reselect';
import withObservables from '@nozbe/with-observables';
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider';

const transactionsSelector = state => state.transactions;

const transactionsCountSelector = createSelector(
  [transactionsSelector],
  (transactions) => ({ transactionsCount: transactions.length }),
);

export default Component => withDatabase(withObservables([], ({ database }) => ({
      transactions: database.collections.get('transactions').query().observe(),
  }))(compose(
  withProps(transactionsCountSelector),
)(Component))

);
