---
layout: post
date: '2026-07-27'
title: 'MEC Livros no KOReader: um plugin para ler no Kobo, Kindle e outros dispositivos'
description: 'Conheça o plugin não oficial que leva busca, empréstimos e leitura do MEC Livros ao KOReader, respeitando o modelo de acesso da plataforma.'
introduction: 'Um plugin não oficial para acessar o MEC Livros diretamente no KOReader, com busca, empréstimos, domínio público e leitura local.'
twitter_text: 'Criei um plugin não oficial para acessar o MEC Livros diretamente pelo KOReader em Kobo, Kindle e outros dispositivos.'
main-class: tech
color: '#2e7d6b'
tags:
  - koreader
  - kobo
  - kindle
  - livros
  - software livre
  - mec livros
---

Leitores como Kobo, Kindle e aparelhos Android com [KOReader](https://koreader.rocks/) são ótimos para leitura, mas nem sempre têm acesso direto aos catálogos brasileiros. Por isso criei um plugin não oficial para usar o [MEC Livros](https://meclivros.mec.gov.br/) dentro do KOReader.

O código está disponível em [github.com/luizcorreia/meclivros.koplugin](https://github.com/luizcorreia/meclivros.koplugin).

## O que o plugin faz

O plugin adiciona um menu **MEC Livros** às ferramentas do KOReader. Por ele, é possível:

- Buscar livros por título ou autor.
- Consultar os empréstimos ativos.
- Emprestar, renovar e devolver obras pelo dispositivo.
- Baixar a amostra de livros que exigem empréstimo.
- Baixar e abrir o livro completo quando há um empréstimo ativo.
- Pesquisar obras que a própria plataforma identifica como domínio público e lê-las sem empréstimo.

O resultado é uma experiência mais adequada a leitores de tinta eletrônica: a busca e a gestão do empréstimo acontecem no KOReader, e a obra é aberta no leitor que o usuário já conhece.

## Como a leitura funciona

O MEC Livros não oferece um botão de download de EPUB completo. A plataforma usa um manifesto de leitura no padrão Web Publication, associado ao ecossistema Readium. O plugin usa esse manifesto e os recursos autorizados para montar um EPUB local compatível com o KOReader.

Isso inclui os capítulos, imagens, fontes, metadados e sumário necessários para que o arquivo seja aberto normalmente no dispositivo. O processo acontece localmente e mostra o progresso durante o download.

## Empréstimo, amostra e domínio público

O plugin foi projetado para respeitar o modelo de acesso da plataforma:

- Para livros sujeitos a empréstimo, o arquivo completo só é obtido quando a conta possui empréstimo ativo daquele título.
- Sem empréstimo, o plugin oferece somente a amostra disponibilizada pela própria plataforma.
- Obras marcadas pelo MEC Livros como domínio público podem ser baixadas sem passar pelo fluxo de empréstimo.

Essa distinção é importante. O plugin não é uma ferramenta para burlar o catálogo ou redistribuir obras. Ele é uma interface alternativa para quem já tem acesso ao serviço e quer ler no próprio dispositivo.

## Instalação

1. Baixe ou clone o [repositório do projeto](https://github.com/luizcorreia/meclivros.koplugin).
2. Copie a pasta `meclivros.koplugin/` para `koreader/plugins/` no dispositivo.
3. Reinicie o KOReader.
4. Configure os tokens da sua sessão do MEC Livros conforme o README do projeto.

Depois disso, o menu do plugin aparece nas ferramentas do KOReader.

![Menu do plugin MEC Livros no KOReader](https://raw.githubusercontent.com/luizcorreia/meclivros.koplugin/main/screenshots/02_menu.png)

## Autenticação e privacidade

O login do MEC Livros é feito pelo `gov.br`, com mecanismos como captcha e autenticação em dois fatores. Por isso, o plugin não pede nem armazena usuário e senha. Ele usa os tokens que a plataforma emite depois do login normal no navegador.

Esses tokens são dados sensíveis: podem conter informações pessoais e permitem acesso à conta. O plugin os mantém apenas no dispositivo, em um arquivo de configuração que não deve ser versionado ou compartilhado. O README explica a configuração e os cuidados necessários.

## Limitações atuais

O projeto ainda é simples e tem limitações deliberadas. Não há paginação de resultados, favoritos, recomendações ou sincronização do progresso de leitura com a plataforma. Alguns livros também podem demorar para baixar, especialmente quando têm muitas imagens ou fontes incorporadas.

O plugin foi testado em um Kobo com KOReader, mas segue a estrutura padrão de plugins do projeto e pode funcionar em outros dispositivos compatíveis. Relatos de teste, correções e contribuições são bem-vindos no repositório.

## Um projeto independente

Este é um projeto independente, sem vínculo com o Ministério da Educação ou com o MEC Livros. A intenção é tornar uma biblioteca digital pública mais útil para pessoas que preferem ler em seus próprios aparelhos, mantendo o respeito às regras de acesso e empréstimo do serviço.

Se você usa KOReader e MEC Livros, experimente o plugin e conte como funcionou no seu dispositivo.
