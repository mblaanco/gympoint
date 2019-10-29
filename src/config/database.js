// yarn add pg pg-hstore
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true, // padroniza os nomes das tabelas com underscore
    underscoredAll: true,
  },
};
