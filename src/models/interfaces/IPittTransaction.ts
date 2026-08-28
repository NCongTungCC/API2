import { CreationOptional } from 'sequelize';

export interface IPittTransaction {
  id: CreationOptional<number>;
  reward_member_id: number;
  charge_result: number;
  amount: number;
  deal_type: number;
  account_method: number;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export type IPittTransactionCreationAttributes = Omit<
  IPittTransaction,
  'id' | 'created_at' | 'updated_at'
>;
