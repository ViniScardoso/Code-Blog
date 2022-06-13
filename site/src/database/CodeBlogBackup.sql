-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: codeblog
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

create database CodeBlog;
use CodeBlog;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descricao` varchar(600) DEFAULT NULL,
  `linguagem` varchar(45) DEFAULT NULL,
  `fkUsuario` int DEFAULT NULL,
  PRIMARY KEY (`idPost`),
  KEY `fkUsuario` (`fkUsuario`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`fkUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (10001,'Dúvida sobre o uso do For','Olá pessoal, me chamo Vinícius e estou tendo dificuldades em usar o for em javascript, creio que ainda não entendi o conceito em sua totalidade','javascript',1001),(10002,'Problemas na importação de bibliotecas ','Olá pessoal, ontem estava desenvolvendo um código que necessitava do uso da biblioteca random, porém quando eu rodo meu programa aparece o seguinte erro: var_num is not defined.\n','python',1001),(10003,'While infinito','Bom dia pessoal, comecei a aprender laço de repetição while ontem e resolvi elaborar um algoritmo que fizesse uso do mesmo, porém quando eu rodo meu programa ele crasha, alguém poderia me explicar o pq? segue o código:\n\nint x = 15\n\nwhile(x < 18){\n  System.out.println(\"você não tem permissão para entrar\")\n}','java',1002);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resposta`
--

DROP TABLE IF EXISTS `resposta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resposta` (
  `idResposta` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(600) DEFAULT NULL,
  `fkPost` int DEFAULT NULL,
  `fkUsuario` int DEFAULT NULL,
  PRIMARY KEY (`idResposta`),
  KEY `fkPost` (`fkPost`),
  KEY `fkUsuario` (`fkUsuario`),
  CONSTRAINT `resposta_ibfk_1` FOREIGN KEY (`fkPost`) REFERENCES `post` (`idPost`),
  CONSTRAINT `resposta_ibfk_2` FOREIGN KEY (`fkUsuario`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resposta`
--

LOCK TABLES `resposta` WRITE;
/*!40000 ALTER TABLE `resposta` DISABLE KEYS */;
INSERT INTO `resposta` VALUES (1,'Olá vinicius, provavelmente seu erro não está importação das bibliotecas e sim na referenciação de uma das suas variáveis, verifique se realmente existe uma variável chamda var_num em seu programa. Abraços !!!',10002,1002);
/*!40000 ALTER TABLE `resposta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `lingPreferida` varchar(45) DEFAULT NULL,
  `imgPerfil` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1001,'Vinicius Cardoso','vinicius@email.com','12345678','Escolher linguagem','../assets/imgPerfil/user.png'),(1002,'Marco Hover','marco.hover@email.com','12345678','Escolher linguagem','../assets/imgPerfil/user.png');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'codeblog'
--

--
-- Dumping routines for database 'codeblog'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-13  8:54:23
