import { DataTypes, Model } from 'sequelize';
import { database } from '../config/database.js';
import { IMember, IMemberCreationAttributes } from './interfaces/IMember.js';

export interface Member extends IMember {}

export class Member extends Model<IMember, IMemberCreationAttributes> {}

Member.init(
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
      unique: true,
    },
    member_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    member_rank: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    point_balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_purchase_amount: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    purchase_history: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    e_receipt_fg: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    pitt_status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    pitt_device_group_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pitt_device_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pitt_account_method: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    matsuya_customer_number: {
      type: DataTypes.INTEGER,
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
    tableName: 't_members',
    timestamps: true,
    underscored: true,
  }
);
