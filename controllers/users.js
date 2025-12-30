const User = require("../models/user.js");
const bcrypt = require('bcryptjs');

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        console.log("Signup attempt: username:", username, "email:", email, "password length:", password ? password.length : 0);
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ email, username, password: hashedPassword });
        const registeredUser = await newUser.save();
        console.log("User registered:", registeredUser.username);
        req.login(registeredUser, (err) => {
            if(err) {
                console.log("Login error:", err);
                req.flash("error", "Login failed after signup");
                return res.redirect("/signup");
            }
            req.flash("success", "Welcome to Wonderlust");
            res.redirect("/listings");
        });
    } catch(e) {
        console.log("Signup error:", e.message);
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
}

module.exports.login = async(req, res) => {
    console.log("Login successful for user:", req.user.username);
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
}