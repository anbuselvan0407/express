-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: SchoolDB
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `SchoolDB`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `SchoolDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `SchoolDB`;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `std_Id` int DEFAULT NULL,
  `std_marks` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (2,447),(3,452),(4,320),(5,499),(6,352),(20,247),(21,457),(22,452),(22,320),(7,499),(6,352),(20,247);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `grade` int NOT NULL,
  `subject` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'thomas',10,'english'),(3,'Albert',10,'Science'),(4,'sulthan',10,'Social');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `grade` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (2,'venki',19,'10th'),(3,'devdu',9,'10th'),(4,'John Smith',16,'10th'),(5,'sharu',16,'10th'),(6,'anbu',17,'10th'),(14,'Ravi',17,'10th'),(16,'devi',16,'10th'),(17,'vijay',18,'10th'),(18,'spider',16,'10th'),(19,'rashik',19,'10th'),(20,'rashik',19,'10th'),(21,'amir',18,'10th'),(22,'James',16,'10th'),(23,'rahul',16,'10th'),(24,'harley',16,'10th'),(25,'raja',17,'10th'),(26,'deva',16,'10th'),(27,'shewag',16,'10th'),(28,'dhoni',16,'10th'),(29,'rohit',16,'10th'),(30,'test',12,'10th'),(31,'prasad',16,'10th'),(32,'deepak',15,'10th'),(33,'thor',19,'9th'),(34,'Tony',16,'8'),(35,'Tony',16,'8'),(36,'joker',17,'10th'),(37,'loki',14,'9th');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'student',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Anbu','anbu@email.com','$2b$10$VeHdeAtNbEGmMpenNB7M9.rpcgllWv5/6Y99hChluqNZAYvFkGt1y','admin'),(2,'sharu','sharu@email.com','$2b$10$L1AEq6Yu9n0iGSnvMkwD.OJFkO6e1krwWLJMMDU2yeaIUATkCYp/m','student'),(3,'Nirmaldas','nirmal@email.com','$2b$10$I1v5P3c0o.8GRtqyxxOK6e2NSC27XBBA9NY.UNM2tTDe724Jz0BFW','student'),(4,'Anbuselvan','anbuselvan@gmail.com','$2b$10$NHPEmrKTrtS.y37q9pLlrOkj4XwazdSDmCbmh4jaFP1jbaihJCQhe','student'),(5,'pranesh','praneshwaran@gmail.com','$2b$10$h2VYFsp/4dAf5cmcUqKzz.v.Bvh2SAsOHVX1Z4PBktQ2oCtJh.Z6e','student'),(6,'hello','hello123@email.com','$2b$10$oLYDOFgt.a1TEwrS13QDzOfgu8VeawDEGW.d4tEZvqNDh.apwnp3C','student'),(7,'hiiii','hii123@gmail.com','$2b$10$Y7tB6hLrObd7oiULMRN1n.dspquwAzQ7L5ljx9Nq3Z5/sHIWEG/H2','student'),(8,'hiii','hi123@gmail.com','$2b$10$OvHyyZ/yNMRQUzYRsufOk.NRcugi6/SN.5qJy0ywUeG4ME1.mKy9G','student'),(9,'hii','h123@gmail.com','$2b$10$wYLHt/58ClZ8Ctf8oLAug.kX6eRztT3MVehPSHDsVtQW//7pm08By','student'),(10,'helloooo','helloooo123@email.com','$2b$10$kEVJLTto5ihzm7XeQib1Yeck22KmFJ7cf39XtV1/2t7zQ/pEz4zXq','student'),(11,'vijaysethu','sedhupathi@gmail.com','$2b$10$c4fjMCpcajvINqLhETmwseOeftGaTLLKEUDC/HklIjtxcJRI/TT/i','student'),(12,'Test','safa@gmail.com','$2b$10$YjmqrHn0LC/5eRcw.a2Eqe8unKm2dM1r598kThf5pwZNEqyiFMlIO','student'),(13,'leodhas','leo0407@gmail.com','$2b$10$aM8G79.cbY3EytFBNeC2M.ILGUCvJ3PElueWEW05m3HduQNJwXAG6','student'),(14,'test','test@mailinator.com','$2b$10$WeGU2LHT64O4XUDhaR04LuneEo9rJoJYyrO.COnn31bR1G8MiPV92','student'),(15,'spiderman','spidy@email.com','$2b$10$/EtUnzz7NmAKHICl6feBxuETtim0imPRtZP6Nd0G9R4XCM673hWe.','student'),(16,'batman','batman@email.com','$2b$10$jSABFXikrubkZ5yf52JEOudRU07sfwdeE8bDirNSrU5eAvIh.ry3.','student'),(17,'thor','thor@email.com','$2b$10$Xa20/9ilIkmIzZZkx/5J8OTItLPNVAubLqvNV3ICshK5VbJZLRcIi','student'),(18,'kuMAr','kumar@email.com','$2b$10$LJebDlhhK3CL9xA9rEoeIOdjlj9IPYNG6fkAp4xp4vwCX3/2klBUS','student'),(19,'rajkumar','rajkumar@email.com','$2b$10$JjhSH8mJamjhNKSn.AiJYO8W4Q6FKQbEe0UoruzWv9SNufo0/cTLi','staff');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-01 20:03:02
