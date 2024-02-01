const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers module for handling item-related operations
const usersControllers = require("./controllers/usersControllers");
const experiences = require("./controllers/experiencesControllers");
const formations = require("./controllers/formationsControllers");
const loisirs = require("./controllers/loisirsControllers");
const langues = require("./controllers/languesControllers");

// Route to get
router.get("/users", usersControllers.browse);
router.get("/experiences", experiences.browse);
router.get("/formations", formations.browse);
router.get("/loisirs", loisirs.browse);
router.get("/langues", langues.browse);

/* ************************************************************************* */

module.exports = router;
