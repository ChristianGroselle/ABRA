const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/shared', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('sharedRecipes');
});

module.exports = router;