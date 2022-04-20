/*
  Warnings:

  - You are about to drop the column `movieInfo` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "movieInfo",
ADD COLUMN     "imDbRating" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "title" TEXT;
