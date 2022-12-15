const router = require('express').Router();
const { FavRecipes } = require('../../models')
router.get('/', async (req, res) => {
    try {
    // Search the database for a user with an id that matches params
    const recipeData = await FavRecipes.findAll(req.params.id);
    console.log(recipeData)
    // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
    const recipe = recipeData.get({ plain: true });
    //res.render('user', user);
    res.status(200).text(recipe);
    } catch (err) {
        res.status(500).json(err);
    }
  });

  router.post("/", async (req, res) => {
    try {
      console.log("testing");
      console.log(req.session);
      console.log("testing 2");
      console.log(req.session.logged_in);
      console.log("testing 3");
      console.log(req.session.user_id);
      console.log("testing 4");
      const dbRecipeData = await FavRecipes.create({
        user_id: req.session.user_id,
        ed_id: req.body.edId,
        name: req.body.name,
        time: req.body.time,
        yield: req.body.yield,
        url: req.body.url,
        img: req.body.img,
      });
      // Set up sessions with a 'loggedIn' variable set to `true`
      //req.session.save(() => {
        //req.session.loggedIn = true;
  
        res.status(200).json(req.session);
      //});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  

module.exports = router;
