const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Trade = sequelize.define(
	'trade',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		type: DataTypes.TEXT,
		user_id: DataTypes.NUMBER,
		symbol: DataTypes.TEXT,
		shares: DataTypes.NUMBER,
		price: DataTypes.NUMBER,
		timestamp: DataTypes.BIGINT,
	},
	{ timestamps: false }
);

module.exports = Trade;
