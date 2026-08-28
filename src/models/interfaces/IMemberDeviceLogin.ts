import { CreationOptional } from 'sequelize';

export interface IMemberDeviceLogin {
  id: CreationOptional<number>;
  reward_member_id: number;
  device_id: string;
  first_login_at: Date;
  last_login_at: Date;
  created_at: CreationOptional<Date>;
  updated_at: CreationOptional<Date>;
}

export type IMemberDeviceLoginCreationAttributes = Omit<
  IMemberDeviceLogin,
  'id' | 'created_at' | 'updated_at'
>;
