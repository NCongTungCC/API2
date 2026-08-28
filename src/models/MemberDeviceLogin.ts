import { DataTypes, Model } from 'sequelize';
import { database } from '../config/database.js';
import {
  IMemberDeviceLogin,
  IMemberDeviceLoginCreationAttributes,
} from './interfaces/IMemberDeviceLogin.js';

export interface MemberDeviceLogin extends IMemberDeviceLogin {}

export class MemberDeviceLogin extends Model<
  IMemberDeviceLogin,
  IMemberDeviceLoginCreationAttributes
> {}

MemberDeviceLogin.init(
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
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    first_login_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    last_login_at: {
      type: DataTypes.DATE,
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
    tableName: 't_member_device_logins',
    timestamps: true,
    underscored: true,
  }
);
