
const router = require("express").Router();
const { User } = require("../models");
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
  });
});

router.get('/myrecipes', withAuth, async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('myrecipes', {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;