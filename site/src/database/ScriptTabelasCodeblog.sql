create database CodeBlog;
use CodeBlog;

create table Usuario(
  idUsuario int primary key auto_increment,
  nome varchar(45),
  email varchar(45),
  senha varchar(45),
  lingPreferida varchar(45),
  imgPerfil varchar(50)
)auto_increment = 1001;


create table Post(
  idPost int primary key auto_increment,
  titulo varchar(45),
  descricao varchar(600),
  linguagem varchar(45),
  fkUsuario int,
  foreign key(fkUsuario) references Usuario(idUsuario)
)auto_increment = 10001;
  
  
create table Resposta(
  idResposta int primary key auto_increment,
  descricao varchar(600),
  fkPost int,
  foreign key(fkPost) references Post(idPost)
);

