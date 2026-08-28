const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      't_merchant_pitt_tokens',
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
      }
    );

    await queryInterface.addConstraint('t_merchant_pitt_tokens', {
      fields: ['merchant_id'],
      type: 'unique',
      name: 'uq_t_merchant_pitt_tokens_merchant_id',
    });
    await queryInterface.addIndex('t_merchant_pitt_tokens', ['m_access_token_expire_at'], {
      name: 'i_t_merchant_pitt_tokens_m_access_token_expire_at',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('t_merchant_pitt_tokens');
  },
};
