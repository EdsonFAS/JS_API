CREATE DATABASE `tarefas_db`;
USE `tarefas_db`;

CREATE TABLE `tarefas` (
  `id_tarefa` int(11) NOT NULL AUTO_INCREMENT,
  `descricao_tarefa` text NOT NULL,
  `data_tarefa` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `feito_tarefa` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_tarefa`)
);



INSERT INTO `tarefas` (`descricao_tarefa`) VALUES ("Estudo de API - PART 1"), ("Estudo de API - PART 2"), ("Estudo de API - PART 3");
UPDATE tarefas SET feito_tar = TRUE WHERE id_tar = 1;
SELECT * FROM tarefas_db.tarefas;
