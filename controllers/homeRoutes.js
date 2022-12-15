const router = require("express").Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  try {
    res.render("homepage", {
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

router.get("/discover", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("discover");
});

router.get("/myrecipes", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("myrecipes");
});

router.get("/signup", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("signup");
});

module.exports = router;
