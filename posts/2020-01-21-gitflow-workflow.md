---
layout: post
date: '2020-01-21'
image: /assets/img/gitflow-workflow/poshgitflowversion.png
title: Gitflow Workflow
description: 'Git Flow uma ferramenta desenvolvida para melhorar o uso de repositórios Git.'
introduction: 'Git Flow uma ferramenta desenvolvida para melhorar o uso de repositórios Git.'
twitter_text: 'Git Flow uma ferramenta desenvolvida para melhorar o uso de repositórios Git.'
main-class: dev
color: '#7AAB13'
tags:
  - git
  - gitflow
  - blog
---

## Introdução

Uma dúvida muito comum a quem começa a usar o Git de maneira mais ativa é como organizar as branches, afinal, são muitos os problemas que um projeto pode enfrentar: De bugs urgentes que devem ser corrigidos, a criação de inúmeras features em conjunto com releases agrupando os deploys relativos a essas features. Mas..como organizar tudo? Pensando nisso é que foi criado o Git Flow, um modelo de organização de branches criado por Vincent Driessen que mais tarde se tornou uma excelente extensão ao Git, permitindo seu uso de forma fácil com qualquer repositório git

## Como funciona
![Master&Develop](/assets/img/gitflow-workflow/02.svg)

### Develop e Master Branches

Ao invés de uma simples *master* branch, esse workflow usa duas branches pra gravar o histórico do projeto.

A branch *master* guarda o histórico do release oficial, e a branch *develop* funciona como integração para as branches de features.
Também é conveniente taggear os commits no branch *master* com os números de versões.

O primeiro passo é criar a branch *develop*. O jeito mais simples é criar uma branch *develop* vazia localmente e fazer um push para o servidor.

```bash
  git branch develop
  git push -u origin develop
```
A branch *develop* conterá o histórico completo do projeto, enquanto a *master* conterá a versão resumida.
Quando trabalhando em equipe os outros desenvolvedores devem rastrear a branch *develop*.

## Feature branches

Cada nova feature(recurso) deverá ter sua própria branch, que podem ser enviadas ao repositório central para backup e colaboração.

Mas, em vez de serem branch de *master*, feature branches usam *develop* como pai. Quando a feature está completa é feito o merge com a branch *develop*. Features nunca devem interagir com a branch *master*.

![FeatureBranch](/assets/img/gitflow-workflow/03.svg)

Feature branches são geralmente criadas a partir do último commit de *develop*.

### Criando uma feature branch

```bash
  git checkout develop
  git checkout -b feature_branch
```
### Terminando uma feature branch

Quando o trabalho de desenvolvimento tiver terminado na feature, o próximo passo é
fazer o merge da feature_branch em *develop*.

```bash
  git checkout develop
  git merge --no-ff feature_branch
```
Perceba que usamos o --no-ff junto ao comando branch isso impede um fast-foward, porque queremos manter registro da feature branch.

Depois do merge podemos deletar a feature_branch.

```bash
  git branch -d feature_branch
```
## Release Branches

![releaseBranches](/assets/img/gitflow-workflow/04.svg)

Depois que *develop* estiver maduro o suficiente para um release ( ou uma data de release estiver se aproximando ), você criar uma release branch de *develop*. Criar esse branch inicia o próximo ciclo de lançamento, nenhuma feature poderá ser adicionada depois deste ponto - somente bug fixes, geração de documentação e outras tarefas relacionadas a liberação da versão. Quando a release branch estiver pronta é feito o merge na branch *master* e criada uma tag de versão. Além disso deve ser feito o merge da release branch também na *develop*.

Usar um branch dedicado para os releases permite que uma equipe aprimore o release atual, enquanto outra equipe continua trabalhando nos recursos dos próximos releases.

Uma nova release branch pode ser criada da seguinte forma.

```bash
  git checkout develop
  git checkout -b release/0.1.0
```
Quando a release estiver pronta se fará o merge na *master* e na *develop*, então a release branch será deletada.

É importante fazer o merge de volta em *develop*, pois atualizações críticas podem ter sido adicionadas a release branch e precisam estar acessíveis a novos recursos. Se sua organização enfatizar a revisão de código, este seria o local ideal para uma pull request.

Para concluir a release branch, use os seguintes métodos:

```bash
  git checkout master
  git merge release/0.1.0
  git checkout develop
  git merge release/0.1.0
  git branch -D release/0.1.0
```
## Hotfix Branches

![hotfixBranches](/assets/img/gitflow-workflow/05.svg)

Hotfix branch são usadas para corrigir problemas rapidamente na release de produção.
Hotfix branch são bem parecidas com as features branches e as release branches, exceto que são baseadas na branch *master*. Essa é a única branch que pode ser criada a partir da branch *master*.
Assim que a correção estiver completa, ela deverá ser mesclada na branch *master* e na branch *develop* ( ou na release branch atual) e *master* deverá ser marcada com um número de versão atualizado.

Uma hotfix branch pode ser criada usando os seguintes métodos:

```bash
  git checkout master
  git checkout -b hotfix_branch
```

Similar a release branch ao terminar a hotfix deverá ser mesclada a *master* e a *develop*;

```bash
  git checkout master
  git merge hotfix_branch
  git checkout develop
  git merge hotfix_branch
  git branch -D hotfix_branch
```

Dica: Existe um plugin para facilitar a criação e organização do seu repositório utilizando o fluxo do git-flow, se liga nesse plugin massa!

[Gitflow](https://github.com/nvie/gitflow)
