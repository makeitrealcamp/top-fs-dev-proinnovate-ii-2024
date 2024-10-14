-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "description" TEXT,
ALTER COLUMN "dueDate" DROP NOT NULL;
