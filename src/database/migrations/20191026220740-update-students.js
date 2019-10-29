module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn('students', 'idade', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('students', 'peso', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.addColumn('students', 'altura', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('students', 'idade', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.removeColumn('students', 'peso', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
      queryInterface.removeColumn('students', 'altura', {
        type: Sequelize.STRING,
        allowNull: false,
      }),
    ];
  },
};

/**
 *  idade: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      peso: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      altura: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
 */
