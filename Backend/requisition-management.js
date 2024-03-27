const router = require('express').Router();
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
  // Submit requisition logic
  const { itemDescription, budgetAllocation, quantity } = req.body;
  const userId = req.user.id;

  const newRequisition = new Requisition({ itemDescription, budgetAllocation, quantity, userId });
  await newRequisition.save();

  res.json(newRequisition);
});

router.get('/', authMiddleware, async (req, res) => {
  // Get all requisitions logic
  const requisitions = await Requisition.find({ userId: req.user.id });
  res.json(requisitions);
});

module.exports = router;