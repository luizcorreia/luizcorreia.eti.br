---
layout: post
date: '2026-07-27'
image: /assets/img/2026-07-27-divulgacao-responsavel-mec-livros/icon.svg
title: 'Divulgação responsável: uma falha de autorização corrigida no MEC Livros'
description: 'Como um teste no MEC Livros levou à identificação, correção e prevenção de regressão de uma falha de autorização, sem expor usuários ou detalhes exploráveis.'
introduction: 'Um relato de divulgação responsável sobre uma falha de autorização corrigida no MEC Livros e as lições do processo.'
twitter_text: 'Uma falha de autorização no MEC Livros foi corrigida após divulgação responsável, com teste de regressão adicionado.'
main-class: security
color: '#c0392b'
tags:
  - segurança
  - divulgação responsável
  - segurança da informação
  - mec livros
---

Em julho de 2026, durante uma investigação técnica sobre o funcionamento da plataforma MEC Livros, identifiquei indícios de que o conteúdo integral de obras poderia ser acessado sem que o empréstimo correspondente estivesse ativo. O teste foi realizado somente com a minha própria conta, sem acesso a dados de terceiros, extração em massa ou redistribuição de conteúdo.

O caso terminou de forma positiva: o Ministério da Educação confirmou uma falha real, corrigiu-a em produção e adicionou uma verificação automática para evitar a reincidência.

Este texto registra o processo e as lições aprendidas. Não publico rotas, parâmetros, instruções de reprodução ou qualquer outro detalhe que pudesse facilitar abuso.

## A investigação e a correção de rumo

O MEC Livros usa uma arquitetura de leitura baseada em publicações web: o navegador recebe um manifesto e os recursos necessários para exibir o livro. Ao observar esse fluxo, encontrei uma rota que parecia entregar conteúdo mediante autenticação, mas sem exigir o empréstimo da obra.

Uma verificação posterior mostrou que o caminho inicialmente analisado estava protegido corretamente: sem empréstimo, ele fornecia apenas a amostra do livro. Registrei essa correção imediatamente e retirei a conclusão original. Essa etapa foi importante: uma resposta `200 OK` não prova, por si só, que o conteúdo entregue é integral ou que há uma vulnerabilidade.

Ainda assim, o relato chamou a atenção da equipe responsável para a hipótese mais ampla: a autorização precisava ser consistente em todas as rotas que servissem a leitura. A análise técnica do MEC encontrou uma rota irmã esquecida que permitia alcançar a leitura integral sem a checagem de autorização adequada.

## O retorno do MEC

A Secretaria de Educação Básica informou que a área técnica confirmou a situação, aplicou a correção em produção e incluiu uma verificação automática contra regressão. Segundo a resposta recebida, não houve exposição de dados de usuários.

O ponto relevante não é apenas a correção de uma rota específica. Sistemas web costumam ter vários caminhos para o mesmo recurso: APIs novas e antigas, proxies, integrações e rotas auxiliares. A proteção precisa estar no ponto que efetivamente entrega o recurso e precisa ser exercitada por testes que cubram todos esses caminhos.

## Lições do caso

### Validar antes de concluir

O primeiro caminho investigado parecia vulnerável, mas entregava uma amostra limitada. Revisar a hipótese, comparar o resultado com e sem o direito de acesso e corrigir publicamente a conclusão foram passos indispensáveis. Segurança não combina com certeza prematura.

### Autenticação não substitui autorização

Saber quem fez uma requisição é diferente de verificar se essa pessoa pode acessar um recurso específico. Um usuário autenticado ainda precisa ter direito àquela obra, naquele momento, conforme o modelo de empréstimo da plataforma.

### Rotas equivalentes precisam de controles equivalentes

Quando dois caminhos chegam ao mesmo conteúdo, ambos devem aplicar a mesma decisão de autorização. Centralizar essa decisão e mantê-la coberta por testes de regressão reduz a chance de uma rota auxiliar ficar para trás.

### Divulgação responsável funciona

O relato foi feito de boa-fé, com escopo limitado à minha própria conta e sem divulgação de detalhes operacionais antes da avaliação. A resposta do MEC foi objetiva: a equipe técnica investigou, corrigiu o problema e registrou uma proteção permanente contra a volta da falha.

## Encerramento

Não há providências adicionais pendentes da minha parte. O caso está corrigido, e este registro existe para documentar o processo e reforçar uma prática simples: segurança é tanto encontrar problemas quanto confirmar cuidadosamente o que foi encontrado, comunicar de modo responsável e dar espaço para a correção.

O Ministério da Educação agradeceu a divulgação responsável e o prazo concedido. Fico satisfeito que a investigação tenha resultado em uma correção concreta e em um teste automático para proteger usuários no futuro.
