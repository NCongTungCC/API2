const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      't_member_pitt_credentials',
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
      }
    );

    await queryInterface.addIndex('t_member_pitt_credentials', ['reward_member_id'], {
      name: 'i_t_member_pitt_credentials_reward_member_id',
    });
    await queryInterface.addConstraint('t_member_pitt_credentials', {
      fields: ['reward_member_id'],
      type: 'foreign key',
      name: 'fk_t_member_pitt_credentials_t_members',
      references: {
        table: 't_members',
        field: 'reward_member_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('t_member_pitt_credentials');
  },
};
