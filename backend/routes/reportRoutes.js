const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');
const { authMiddleware } = require('../middleware/authMiddleware');

// Get monthly report
router.get('/monthly', authMiddleware, async (req, res) => {
  try {
    const { month, year } = req.query;
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const expenses = await Expense.find({
      userId: req.user.id,
      date: { $gte: startDate, $lte: endDate }
    }).populate('category');

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const byCategory = {};

    expenses.forEach(e => {
      byCategory[e.category.name] = (byCategory[e.category.name] || 0) + e.amount;
    });

    res.json({
      month,
      year,
      totalExpenses: expenses.length,
      totalAmount: total,
      byCategory,
      expenses
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get yearly report
router.get('/yearly', authMiddleware, async (req, res) => {
  try {
    const { year } = req.query;
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const expenses = await Expense.find({
      userId: req.user.id,
      date: { $gte: startDate, $lte: endDate }
    }).populate('category');

    const byMonth = {};
    expenses.forEach(e => {
      const month = new Date(e.date).getMonth() + 1;
      byMonth[month] = (byMonth[month] || 0) + e.amount;
    });

    res.json({
      year,
      totalAmount: expenses.reduce((sum, e) => sum + e.amount, 0),
      byMonth,
      totalExpenses: expenses.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export data
router.get('/export', authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id })
      .populate('category')
      .populate('accountId');

    res.json({
      format: 'json',
      data: expenses,
      timestamp: new Date()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;