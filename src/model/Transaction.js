import { Model } from '@nozbe/watermelondb';

export default class Transaction extends Model {
  static table = 'transactions'
}

// TODO snake case, camelcase
@field('hash') hash
@field('timestamp') timestamp
