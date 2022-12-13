const router = require('express').Router();
const User = require('../../models/User');

router.get('/:id', async (req, res) => {
    try {
    // Search the database for a user with an id that matches params
    const userData = await User.findByPk(req.params.id);
    console.log(userData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const user = userData.get({ plain: true });
    res.render('user', user);
    } catch (err) {
        res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
        .then((newUser) => {
          // Send the newly created row as a JSON object
          res.json(newUser);
        })
        .catch((err) => {
          res.json(err);
        });
});

  module.exports = router;
