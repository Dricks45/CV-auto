const { PrismaClient } = require("@prisma/client");

const options = {
  errorFormat: "pretty",
  log: ["query"],
};

const prisma = new PrismaClient(options);

module.exports = prisma;
