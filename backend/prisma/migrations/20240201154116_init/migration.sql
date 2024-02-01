-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NULL,
    `mail` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `mdp` VARCHAR(191) NOT NULL,
    `experiencesId` INTEGER NOT NULL,
    `formationId` INTEGER NOT NULL,
    `loisirsId` INTEGER NOT NULL,
    `languesId` INTEGER NOT NULL,

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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Formations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dated` VARCHAR(191) NOT NULL,
    `datef` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Loisirs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Langues` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pays` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_experiencesId_fkey` FOREIGN KEY (`experiencesId`) REFERENCES `Experiences`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_formationId_fkey` FOREIGN KEY (`formationId`) REFERENCES `Formations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_loisirsId_fkey` FOREIGN KEY (`loisirsId`) REFERENCES `Loisirs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_languesId_fkey` FOREIGN KEY (`languesId`) REFERENCES `Langues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
