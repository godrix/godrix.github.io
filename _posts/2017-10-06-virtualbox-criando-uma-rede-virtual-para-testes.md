---
published: true
title: Criando uma rede virtual para testes de redes e servidores [PARTE 1/6]
layout: post
tags: [virtualbox, redes]
categories: [redes]
---
![alt text](http://lh4.ggpht.com/_iDvWufT87hE/S87nUVbojyI/AAAAAAAAFfU/AfNJdyXMz-M/w1200-h630-p-k-no-nu/netvirtual.jpg "Virtualbox")
<br>

Máquinas Virtuais têm propósitos diferentes, mas sem dúvida são indispensáveis na hora que queremos criar um ambiente de desenvolvimento ou de testes, o fato, que toda sua configuração pode ser simplesmente refeita com um clique, tira o peso de cometer algum erro e comprometer todo o seu sistema operacional.

O que vamos precisar?
===

+ VirtualBox

+ .iso do Ubuntu Server(Utilizar LTS)

+ Software PuTTY


Virtualizando o Ubuntu Server
===
Após fazer o Download do Ubuntu Server no site oficial da [Canonical](https://www.ubuntu.com/download/server), abra o virtualbox e cria uma nova máquina, com configurações para sistema operacional linux ou ubuntu, cria a instalação normalmente como de qualquer outro sistema operacional, como o Ubuntu Server não utiliza a interface gráfica unity, o tamanho de sua iso fica por volta de 850mb, e por isso a instalação deve ser rapida.

Configurando o Ubuntu Server por meio de SSH
===
Primeiro temos que descobrir qual é o ip do nosso servidor, podemos utilizar o comando ```ip a```, Logo em seguida será listado todas as placas de rede e seus IPS.

Agora precisamos configurar o servidor SSH no Ubuntu server, para isso usamos o comando ```apt get -y install openssh-server && apt get -y install openssh-client```<br>
Depois da instalação das duas bibliotecas, vamos alterar algumas configurações do ubuntu server, utilizando o comando ```vim /etc/shh/sshd_config``` o vim abrirá o arquivo que contém as configurações, vamos alterar ```PermitRootLogin probit-password``` para ```PermitRootLogin yes```

Reinicie o serviço com o comando ```systenctl restart ssh```

PuTTY
===

Digite o IP do servidor, porta 22, usuario e senha...
![alt text](https://media.tenor.com/images/99ea8a97df366a4c6f26b5e99a9a7c45/tenor.gif "Voila!")
<br>Pronto você vai ter acesso ao seu servidor por meio do PuTTY


