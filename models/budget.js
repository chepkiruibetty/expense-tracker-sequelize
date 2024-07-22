// models/budget.js
module.exports = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
      budget_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'user_id'
        }
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'category_id'
        }
      },
      amount: DataTypes.FLOAT,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      timestamps: false
    });
    return Budget;
  };
  