import { Association } from 'sequelize';
import { Member } from './Member.js';
import { MemberDeviceLogin } from './MemberDeviceLogin.js';
import { MemberPittCredential } from './MemberPittCredential.js';
import { MerchantPittToken } from './MerchantPittToken.js';
import { PittTransaction } from './PittTransaction.js';

Member.hasMany(MemberDeviceLogin, {
  foreignKey: 'reward_member_id',
  sourceKey: 'reward_member_id',
  as: 'deviceLogins',
});
MemberDeviceLogin.belongsTo(Member, {
  foreignKey: 'reward_member_id',
  targetKey: 'reward_member_id',
  as: 'member',
});

Member.hasMany(MemberPittCredential, {
  foreignKey: 'reward_member_id',
  sourceKey: 'reward_member_id',
  as: 'pittCredentials',
});
MemberPittCredential.belongsTo(Member, {
  foreignKey: 'reward_member_id',
  targetKey: 'reward_member_id',
  as: 'member',
});

Member.hasMany(PittTransaction, {
  foreignKey: 'reward_member_id',
  sourceKey: 'reward_member_id',
  as: 'pittTransactions',
});
PittTransaction.belongsTo(Member, {
  foreignKey: 'reward_member_id',
  targetKey: 'reward_member_id',
  as: 'member',
});

export {
  Association,
  Member,
  MemberDeviceLogin,
  MemberPittCredential,
  MerchantPittToken,
  PittTransaction,
};
