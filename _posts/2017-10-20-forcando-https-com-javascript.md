---
published: true
title: Forçando HTTPS com Javascript
layout: post
tags: [JS, JavaScript, HTTPS]
categories: [Programação Web]
---
![alt text](https://blog.enium.com.br/wp-content/uploads/2017/06/Motivos-para-usar-HTTPS-em-seu-site-Wordpress.png "HTPP para HTTPS")
<br>
Você já usa um Certificado de Segurança SSL no seu site? Se a resposta é não, saiba que está na hora de dar prioridade para esse assunto. A adição do HTTPS para sites e lojas virtuais torna-se cada vez mais uma necessidade.

Além da maior relevância para SEO (que o Google anunciou em uma das últimas atualizações do seu algoritmo), o HTTPS antes do nome do seu domínio torna-se cada vez mais uma exigência do mercado – já que o protocolo garante mais segurança para os dados que circulam na web colocando nele uma camada a mais de proteção.

Você deve sempre forçar o usuario a utilizar o HTTPS no lugar do HTTP, o seu servidor não deve nem disponibilizar o HTTP, mas se não tiver como, algumas medidas podem ser feitas, como em PHP ou em JS, no caso desse exemplo, claro, se o usuario desabilitar o JavaScript, não vai adiantar muito, o ideal seria ter varias modos de forçar o https.

>então vamos ao script

<script src="https://gist.github.com/godrix/32f01734bd300f10f82ed59db593921a.js"></script>