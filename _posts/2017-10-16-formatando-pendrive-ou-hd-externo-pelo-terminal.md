---
published: true
title: Formatando pendrive ou HD Externo pelo terminal
layout: post
tags: [linux, ubuntu, terminal]
categories: [linux]
---
![alt text](https://ubacode.files.wordpress.com/2016/02/usb-penguin.jpg "Formatando Pendrive pelo terminal")
<br>

No Linux existem vários métodos e aplicações que podem nos ajudar com esta tarefa, incluindo o mais popular de todos: o GParted.

Porém, ele pode ser um pouco pesado para uma tarefa simples, como formatar um disco USB. O método que vamos usar pode ser aplicado em qualquer distribuição Linux, porque ele usa o pacote mkfs, que é presente em todas as distribuições.

A primeira coisa a fazer para começar a formatação é identificar onde está localizado o dispositivo USB, executando o comando ```df``` no terminal. Isto irá mostrar uma saída como esta:

![alt text](https://i.imgur.com/5JrNqJW.png "Tela do terminal retornando o comando df")
<br>

Neste caso, qvamos formatar o pendrive que está localizado em /dev/sdb1 (pode mudar dependendo do seu sistema). Antes de iniciar o processo de formatação, devemos desmontar o dispositivo USB. Para isso, e para as etapas seguintes,  precisaremos de permissões de administrador, usando o sudo ou acessando como root.

Para desmontar o disposotivo USB use o seguinte comando:

```umount /dev/sdb1```

Para iniciar o processo de formatação do dispositivo USB como um sistema de arquivos FAT32, execute o seguinte comando no Terminal:

```sudo mkfs.vfat -n pendrive /dev/sdb1```

Onde ```vfat``` é formato que nosso disco terá ",-n pendrive" é o nome ou o rótulo dado ao dispositivo e, ```/dev/sdb1``` é a localização que pode variar. Os formatos que podemos usar no mkfs são os seguintes:

|               |               |           |
| ------------- |:-------------:| ---------:|
|mkfs.btrfs     |mkfs.ext3      |mkfs.msdos |
|mkfs.cramfs    |mkfs.ext4      |mkfs.ntfs  |
|mkfs.ext2      |mkfs.ext4dev   |mkfs.vfat  |

No final, podemos remontar a memória USB executando o seguinte comando no Terminal:

```mount -a```