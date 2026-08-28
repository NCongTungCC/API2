import { CreationOptional } from 'sequelize';

export interface IMember {
  id: CreationOptional<number>;
  reward_member_id: number;
  member_name: string;
  member_rank: number;
  point_balance: number;
  total_purchase_amount: unknown;
  purchase_history: unknown | null;
  e_receipt_fg: boolean;
  pitt_status: number | null;
  pitt_device_group_id: string | null;
  pitt_device_id: string | null;
  pitt_account_method: number | null;
  matsuya_customer_number: number | null;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export type IMemberCreationAttributes = Omit<IMember, 'id' | 'created_at' | 'updated_at'>;
