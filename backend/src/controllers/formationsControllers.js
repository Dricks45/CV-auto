// Import access to database tables
const prisma = require("../services/prisma");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const formations = await prisma.formations.findMany();

    // Respond with the items in JSON format
    res.json(formations);
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
    const formations = await prisma.formations.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    // Respond with the items in JSON format
    res.json(formations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  } finally {
    await prisma.$disconnect();
  }
};

const add = async (req, res, next) => {
  const { dated, datef, poste, desc, userId } = req.body;
  try {
    // Fetch all items from the database
    const formations = await prisma.formations.create({
      data: {
        dated,
        datef,
        poste,
        desc,
        users: { connect: { id: Number(userId) } },
      },
    });

    // Respond with the items in JSON format
    res.json(formations);
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
