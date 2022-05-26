const express = require('express');
const { type } = require('os');
const router = express.Router();
const TradeModel = require('../models/trades');

router.post('/', (req, res) => {
	TradeModel.create(req.body)
		.then(trade => {
			res.status(201).json(trade);
		})
		.catch(err => {
			res.json(err);
		});
});

router.get('/', (req, res) => {
	const { type, user_id } = req.query;

	if (type && user_id) {
		TradeModel.findAll({
			where: {
				type,
				user_id,
			},
		})
			.then(trades => {
				res.status(200).json(trades);
			})
			.catch(err => {
				res.json(err);
			});
	}

	if (type && !user_id) {
		TradeModel.findAll({
			where: {
				type,
			},
		})
			.then(trades => {
				res.status(200).json(trades);
			})
			.catch(err => {
				res.json(err);
			});
	}

	if (!type && user_id) {
		TradeModel.findAll({
			where: {
				user_id,
			},
		})
			.then(trades => {
				res.status(200).json(trades);
			})
			.catch(err => {
				res.json(err);
			});
	}

	if (!type && !user_id) {
		TradeModel.findAll()
			.then(trades => {
				res.status(200).json(trades);
			})
			.catch(err => {
				res.json(err);
			});
	}
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	const trade = await TradeModel.findOne({
		where: {
			id,
		},
	});

	if (trade) {
		res.status(200).json(trade);
	} else {
		res.status(404).send('ID not found');
	}
});

router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const trade = await TradeModel.findOne({
		where: {
			id,
		},
	});

	if (trade) {
		res.status(405).json(trade);
	} else {
		res.status(404).send('ID not found');
	}
});

router.patch('/:id', async (req, res) => {
	const { id } = req.params;

	const trade = await TradeModel.findOne({
		where: {
			id,
		},
	});

	if (trade) {
		res.status(405).json(trade);
	} else {
		res.status(404).send('ID not found');
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	const trade = await TradeModel.findOne({
		where: {
			id,
		},
	});

	if (trade) {
		res.status(405).json(trade);
	} else {
		res.status(404).send('ID not found');
	}
});

module.exports = router;
