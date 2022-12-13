const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});

router.get('/discover', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('discover');
});

router.get('/my', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('myrecipes');
});



module.exports = router;