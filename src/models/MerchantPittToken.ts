import { DataTypes, Model } from 'sequelize';
import { database } from '../config/database.js';
import {
  IMerchantPittToken,
  IMerchantPittTokenCreationAttributes,
} from './interfaces/IMerchantPittToken.js';

export interface MerchantPittToken extends IMerchantPittToken {}

export class MerchantPittToken extends Model<
  IMerchantPittToken,
  IMerchantPittTokenCreationAttributes
> {}

MerchantPittToken.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    merchant_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    m_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    m_access_token_expire_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: database,
    tableName: 't_merchant_pitt_tokens',
    timestamps: true,
    underscored: true,
  }
);
