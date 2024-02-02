// Import access to database tables
const prisma = require("../services/prisma");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await prisma.users.findMany();

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await prisma.users.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        experiences: true,
        formations: true,
        loisirs: true,
        langues: true,
      },
    });

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const add = async (req, res, next) => {
  const { nom, prenom, mail, telephone, ville, photo, mdp } = req.body;
  try {
    // Fetch all items from the database
    const users = await prisma.users.create({
      data: {
        nom,
        prenom,
        mail,
        telephone,
        ville,
        photo,
        mdp,
      },
    });

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  add,
};
