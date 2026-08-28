import { DataTypes, Model } from 'sequelize';
import { database } from '../config/database.js';
import {
  IMemberPittCredential,
  IMemberPittCredentialCreationAttributes,
} from './interfaces/IMemberPittCredential.js';

export interface MemberPittCredential extends IMemberPittCredential {}

export class MemberPittCredential extends Model<
  IMemberPittCredential,
  IMemberPittCredentialCreationAttributes
> {}

MemberPittCredential.init(
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    reward_member_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    pitt_customer_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pitt_customer_secret: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    pitt_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pitt_access_token_expire_at: {
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
    tableName: 't_member_pitt_credentials',
    timestamps: true,
    underscored: true,
  }
);
