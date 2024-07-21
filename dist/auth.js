const router = require("express").Router();
var passport = require("passport");
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.render("home");
    }
    else {
        res.status(403).json({ error: true, message: "Not Authorized" });
    }
});
router.get("/login/failed", (req, res) => {
    res.status(401).json({ error: true, message: "Log in failure" });
});
router.get("/google", passport.authenticate("google", { scope: ["email", "profile"] }));
router.get("/google/callback", passport.authenticate("google", {
    failureRedirect: "/login/failed",
}), (req, res) => {
    res.redirect("/home"); // redirect to home page after successful login
});
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});
module.exports = router;
