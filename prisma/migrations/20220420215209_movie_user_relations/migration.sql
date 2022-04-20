/*
  Warnings:

  - You are about to drop the column `imDbRating` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Movie` table. All the data in the column will be lost.
  - Added the required column `movieInfo` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "imDbRating",
DROP COLUMN "image",
DROP COLUMN "title",
ADD COLUMN     "movieInfo" TEXT NOT NULL;
