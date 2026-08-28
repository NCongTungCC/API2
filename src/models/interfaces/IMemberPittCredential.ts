import { CreationOptional } from 'sequelize';

export interface IMemberPittCredential {
  id: CreationOptional<number>;
  reward_member_id: number;
  pitt_customer_key: string;
  pitt_customer_secret: string;
  pitt_access_token: string | null;
  pitt_access_token_expire_at: Date | null;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export type IMemberPittCredentialCreationAttributes = Omit<
  IMemberPittCredential,
  'id' | 'created_at' | 'updated_at'
>;
