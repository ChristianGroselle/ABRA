const router = require("express").Router();
const { User } = require("../models");
const { FavRecipes } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get('/discover', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('discover', {
    logged_in: req.session.logged_in, 
    user: req.session.user_id
  });
});

router.get('/myrecipes/', withAuth, async (req, res) => {
  try {
    const dbMyRecipesData = await FavRecipes.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    //const recipes = dbMyRecipesData.get({ plain: true });
    res.render('myrecipes', {
      recipes: dbMyRecipesData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/shared/', withAuth, async (req, res) => {
  try {
    const dbSharedData = await FavRecipes.findAll({
      where: {
        shared: 1,
      },
      order: [
        ['upvotes', 'DESC']
      ]
    });
    //const sharedRecipes = dbSharedData.get({ plain: true });
    res.render('shared', {
      recipes: dbSharedData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup");
});

module.exports = router;
