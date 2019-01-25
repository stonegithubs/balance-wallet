import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators'

export default class Transaction extends Model {
  static table = 'transactions'

  @field('hash') hash
  @field('timestamp') timestamp
}

