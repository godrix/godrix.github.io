---
published: true
title: Acendendo Leds com Arduino ou melhor uma sinaleira!
layout: post
tags: [Arduino]
categories: [arduino]
---

<img src="https://i.imgur.com/68leh8W.png" width="80%" alt="Sinaleira com arduino">
<br>

Uma das coisas que comecei a fazer em 2017 foi brincar com eletronica, em especial o Arduino, sempre fui apaixonado por computação em geral, principalmente o computador em si, era incrivel aquele computador velho que meu tio deu em troca de uma divida pra minha mãe que agora era a minha super maquina de computação, um computador com um HD de 15GB, 256Mb de Ram e com direito a botão TURBO, ele ja era na epoca um branco amarelo, mas me divertia muito com o Paint... e depois com um jogo que era uma especia de RPG so com texto, foi nessas brincadeiras, que descobri que dentro das pastas do jogo existiam alguns arquivos ***.rb*** e dava pra edita-los...
![alt text](https://i.pinimg.com/originals/33/3d/ab/333dab27fbe13398f91413db364174cb.gif "Cabeça explodindo")
<br>
Com meus 12, 13 anos descobri o undo o mundo magico da programação e me apaixonava de vez pr computadores...

Um computador é formado pelas seguintes partes:

* Memória, que guarda informações;
* Dispositivos de entrada e saída de dados (teclado, mouse, monitor, etc);
* CPU, a Unidade de Processamento Central, que gerencia os dados e programas;
* Sistema Operacional

A computação antigamente ocupava salas inteiras, foi então que um belo dia a Intel, conseguiu colocar dentro de um unico chipe 2300 transistores, nasceu ai o 4004

A tecnologia foi evoluindo com o tempo, o microcontrolador foi pensado para realizar tarefas discretas de forma independente, confiável e segura. Você pode programar um microcontrolador para ler dados de sensores identificar a temperatura de um aquário, e se estiver muito baixa, acionar um aquecedor. Muito alta, aumenta a refrigeração. Permaneceu muito tempo fora da faixa aceitável, soa um alarme.

Por muito tempo, tempo demais microcontroladores foram propriedade de um grupo fechado, uma elite  de escolhidos. Eram caros, complicados de usar, não eram ferramenta de aprendizado. A plataforma comum de ensino era um microcontrolador com interpretador BASIC, custando na faixa de US$ 100,00. Inviável para qualquer estudante.
Um sujeito chamado Hernando Barragán criou como tese de mestrado uma plataforma chamada Wiring, um conjunto de IDEs, compiladores e hardware de suporte compatível com microcontroladores bem mais baratos. Outros três italianos pegaram a base do Wiring (era Open Source) e criaram uma versão compatível com o microcontrolador ATmega128. Hoje em sua versão básica o Arduino roda o ATmega328

O grande segredo do Arduino (que aliás ganhou esse nome em homenagem a um bar) se divide entre sua facilidade de uso e seu preço. Você acha o ATmega328 para vender no Mercado Livre por R$ 10,00. Um Arduino Uno R3 compatível completo acha-se no Brasil por R$ 42,00.

Junte a isso uma comunidade de hobbystas (me recuso a pagar de hipster usando “makers”) imensa, e um total apoio das empresas, e temos um ecossistema excelente. A Arduino disponibiliza uma IDE que é simples E poderosa. Imagine você, depois de anos emburrecendo as crianças com Javascript agora elas aprendem a programar em C/C++ no Arduino, e nem percebem.

Aliás, refazendo: o segredo, segredo mesmo é que o ATmega328 é muito amigável em termos de conexões externas, e a placa Arduino foi projetada pensando nisso. É extremamente simples acessar, tanto para ler quanto para escrever os pinos do chip.

Sinaleira com Arduino
===

![alt text](https://i.imgur.com/68leh8W.png "Sinaleira com arduino")
>Aqui vai o esquema de contagem, vamos precisar de 3 leds(Dãã), 3 resistores, eu usei um de 10k, jumpers, protoboard, arduino e MUSICA!

Agora vamos a programação, bem simples e intuitiva!

<script src="https://gist.github.com/godrix/f170713905d49e8186505ab349630eb9.js"></script>
