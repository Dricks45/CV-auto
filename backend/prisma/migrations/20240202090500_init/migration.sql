-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NULL,
    `mail` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `mdp` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Users_mail_key`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Experiences` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dated` VARCHAR(191) NOT NULL,
    `datef` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dated` VARCHAR(191) NOT NULL,
    `datef` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Loisirs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Langues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pays` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Experiences` ADD CONSTRAINT `Experiences_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Formations` ADD CONSTRAINT `Formations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Loisirs` ADD CONSTRAINT `Loisirs_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Langues` ADD CONSTRAINT `Langues_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
