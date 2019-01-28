import { assign } from 'lodash';
import { Model } from '@nozbe/watermelondb';
import { action, field, json, nochange } from '@nozbe/watermelondb/decorators';

const sanitizeJson = (input) => input;

export default class Transaction extends Model {
  static table = 'transactions';

  @json('asset', sanitizeJson) asset;
  @nochange @field('error') error;
  @nochange @field('from') from;
  @field('hash') hash;
  @json('native', sanitizeJson) native;
  @field('pending') pending;
  @field('timestamp') timestamp;
  @nochange @field('to') to;
  @json('txfee', sanitizeJson) txFee;
  @json('value', sanitizeJson) value;

  @action async addTransaction(transaction) {
    return await this.create(transaction => {
      assign(transaction, txn);
    })
  }

  @action async addTransactions(transactions) {
    const actions = transactions.map((txn) => this.prepareCreate(transaction => {
      assign(transaction, txn);
    }));
    await this.batch(...actions)
  }
}

