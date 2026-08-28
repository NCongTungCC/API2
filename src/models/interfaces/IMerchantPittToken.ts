import { CreationOptional } from 'sequelize';

export interface IMerchantPittToken {
  id: CreationOptional<number>;
  merchant_id: string;
  m_access_token: string | null;
  m_access_token_expire_at: Date | null;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export type IMerchantPittTokenCreationAttributes = Omit<
  IMerchantPittToken,
  'id' | 'created_at' | 'updated_at'
>;
