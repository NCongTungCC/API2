const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      't_member_device_logins',
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
      }
    );

    await queryInterface.addIndex('t_member_device_logins', ['reward_member_id'], {
      name: 'i_t_member_device_logins_reward_member_id',
    });
    await queryInterface.addConstraint('t_member_device_logins', {
      fields: ['reward_member_id', 'device_id'],
      type: 'unique',
      name: 'uq_t_member_device_logins_reward_member_id_device_id',
    });
    await queryInterface.addConstraint('t_member_device_logins', {
      fields: ['reward_member_id'],
      type: 'foreign key',
      name: 'fk_t_member_device_logins_t_members',
      references: {
        table: 't_members',
        field: 'reward_member_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('t_member_device_logins');
  },
};
