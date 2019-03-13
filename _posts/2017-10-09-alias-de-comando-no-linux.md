---
published: true
title: Utilizando Alias para personalizar comandos no linux
layout: post
tags: [linux, ubuntu, terminal]
categories: [linux]
---
![alt text](http://www.coffeemonk.com/uploads/2009/04/linux-toolbox_alias.jpg "Comando alias")
<br>

Em uma coisa que temos que concordar, que o terminal do linux não é para qualquer um...

Imagine ter que digitar no terminal ```sudo apt install pacotexxx```para quem conhece ja o mundo linux isso é a coisa mais simples,mas para quem é um usuario que a cabou de sair das mãos da MS, pode parecer isso...
<br>
![alt text](https://media.tenor.com/images/a81fd3eadbd434a55deb09dd3dcb3ccc/tenor.gif "Hackerman")
<br>

O terminal do Linux existe para facilitar as coisas para o usuário.

Algo muito útil pro nosso dia-a-dia, são os Aliases do sistema. Pequenos “apelidos” que, corretamente configurados, nos ajudam na hora de digitar comandos enormes ou abreviar comandos que geralmente digitamos.

Configurando Aliases
===

Primeiramente criamos um novo arquivo no diretorio Home, para isso usarei o Gedit, mas fique a vontade a utilizar seu editor de texto que preferir(Editores de texto puro! ok?)

Com o editor aberto, vamos em **salvar como** escolhemos o diretorio **Home** e o nome do arquivo como ```.bash_aliases``` o ponto na frente do arquivo é muito importante, pois assim ele ficara oculto, então para exibir o arquivo é só apertar **Ctrl+h** e o sistema exibira todos os arquivos ".ocultos", aperte novamente e os arquivos voltaram a ser ocultos.

Sintaxe
===

Com oarquivo ainda aberto, podemos criar as nossas aliases, seguindo sempre a sintaxe:
```alias novocomando=’comando normal do sistema```

 
Ficando algo assim:

```alias atualizar=’sudo apt-get upgrade’```

Assim criando o apelido **atualizar** para chamar o comando sudo apt-get upgrade. Após a configuração do aliases, você pode atualizar o sistema com um simples atualizar no terminal.

O apelido dado a um comando fica a critério do próprio usuário. Apenas tenha o cuidado de não dar apelidos que sejam comandos existentes no bash.
