const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      't_pitt_transactions',
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
      }
    );

    await queryInterface.addIndex('t_pitt_transactions', ['reward_member_id'], {
      name: 'i_t_pitt_transactions_reward_member_id',
    });
    await queryInterface.addConstraint('t_pitt_transactions', {
      fields: ['reward_member_id'],
      type: 'foreign key',
      name: 'fk_t_pitt_transactions_t_members',
      references: {
        table: 't_members',
        field: 'reward_member_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('t_pitt_transactions');
  },
};
