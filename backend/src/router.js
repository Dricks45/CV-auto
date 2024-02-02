const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import Controllers module for handling item-related operations
const usersControllers = require("./controllers/usersControllers");
const experiencesControllers = require("./controllers/experiencesControllers");
const formationsControllers = require("./controllers/formationsControllers");
const loisirsControllers = require("./controllers/loisirsControllers");
const languesControllers = require("./controllers/languesControllers");

// Route to users
router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.post("/users", usersControllers.add);

// Route to experiences
router.get("/experiences", experiencesControllers.browse);
router.get("/experiences/:id", experiencesControllers.read);
router.post("/experiences", experiencesControllers.add);

// Route to formations
router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);
router.post("/formations", formationsControllers.add);

// Route to loisirs
router.get("/loisirs", loisirsControllers.browse);
router.get("/loisirs/:id", loisirsControllers.read);
router.post("/loisirs", loisirsControllers.add);

// Route to langues
router.get("/langues", languesControllers.browse);
router.get("/langues/:id", languesControllers.read);
router.post("/langues", languesControllers.add);

/* ************************************************************************* */

module.exports = router;
