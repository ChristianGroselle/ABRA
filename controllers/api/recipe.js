const router = require('express').Router();
const { Recipe } = require('../../models')
router.get('/:id', async (req, res) => {
    try {
    // Search the database for a user with an id that matches params
    const userData = await Recipe.findByPk(req.params.id);
    console.log(userData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const user = userData.get({ plain: true });
    res.render('user', user);
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;
