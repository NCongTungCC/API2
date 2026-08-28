import { DataTypes, Model } from 'sequelize';
import { database } from '../config/database.js';
import {
  IPittTransaction,
  IPittTransactionCreationAttributes,
} from './interfaces/IPittTransaction.js';

export interface PittTransaction extends IPittTransaction {}

export class PittTransaction extends Model<IPittTransaction, IPittTransactionCreationAttributes> {}

PittTransaction.init(
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
    charge_result: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    deal_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    account_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 't_pitt_transactions',
    timestamps: true,
    underscored: true,
  }
);
