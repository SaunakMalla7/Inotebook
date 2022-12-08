const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('saunak malla');
});
module.exports = router;
