---
title: "Git warning: Pulling without specifying how to reconcile divergent branches is discouraged"
date: "2020-10-07"
layout: post
image: /assets/img/2020-10-07-git-warning-pulling-without-specifying-how-to-reconcile-divergent-branches-is-discouraged/git_pull.jpg
description: 'Git quer que escolhamos como ele deve lidar com a situação em que nosso branch remoto (por exemplo origin/develop) está fora de sincronia com nosso branch local ( develop).'
introduction: 'Git quer que escolhamos como ele deve lidar com a situação em que nosso branch remoto (por exemplo origin/develop) está fora de sincronia com nosso branch local ( develop).'
twitter_text: 'Git warning: Pulling without specifying how to reconcile divergent branches is discouraged'
main-class: dev
color: '#df6e21'
tags:
  - dev
  - git
  - github
  - md
---

A partir da versão *2.27.0* do Git a  execução do comando `git pull` exibirá a seguinte mensagem, a menos que a configuração do Git inclua certas configurações.

```bash
warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.
```

## Explicação curta

Git quer que escolhamos como ele deve lidar com a situação em que nosso branch remoto (por exemplo *origin/develop*) está fora de sincronia com nosso branch local (*develop*). Muitas pessoas (inclusive eu) acham que a maneira padrão com que o Git lidava com essa situação era ótima, entretanto, mudar o comportamento padrão é uma melhora significativa. O Git facilitou a modificação do comportamento e adicionou esta tela para lembrá-lo de que você pode querer alterar o padrão.

## Correção resumida

O *short fix* é, queremos mudar o comportamento padrão e podemos fazer isso executando o seguinte na linha de comando.

```bash
  git config --global pull.ff only
```
Isso adicionará uma linha ao arquivo de configuração global do Git para usar a “melhor” abordagem ao usar `git pull`.


Isso adicionará uma linha ao seu arquivo de configuração Git global para usar a “melhor” abordagem ao usar git pull.

## O problema que estamos resolvendo

Ao trabalhar com o Git, você tem sua branch local em seu computador (por exemplo develop) e sua branch remota (por exemplo origin/develop). Seu branch remoto normalmente vive em algum lugar como o GitHub [GitHub](https://github.com/).
Você gostaria de ter os mesmos commits em seu branch local e em seu branch remoto.

```bash
develop    origin/develop

cem32k     cem32k
b4d2o1     b4d2o1
abc123     abc123
```

### Outra pessoa adiciona um commit

Quando outra pessoa usa `git push` para adicionar seu commit em *origin/develop* (por exemplo zyx911), ficamos fora de sincronia.

```bash
develop    origin/develop

           zyx911
cem32k     cem32k
b4d2o1     b4d2o1
abc123     abc123
```

A boa notícia é que podemos colocar as coisas de volta em sincronia executando `git pull`. Nesse caso, é óbvio para o Git que, adicionando zyx911 aos nossos commits, estaremos em sincronia. Isso é chamado de *fast-forward merge*.

O comando que adicionamos acima ( `git config --global pull.ff only`) define isso como o único tipo de mesclagem que o Git deve fazer, a menos que digamos explicitamente o contrário.

### Ambos Adicionam commits

Imagine a situação onde alguém adiciona um commit ao branch remoto (por exemplo, *zyx911* é adicionado *origin/develop*) e ao mesmo tempo adicionamos um commit ao nosso branch local (por exemplo, adicionamos *dg34mpa* develop).

```bash
develop    origin/develop

dg34mp     zyx911
cem32k     cem32k
b4d2o1     b4d2o1
abc123     abc123
```

Agora, quando executamos `git pull` o Git diz: **"Uau, espere! Não posso adicionar o commit _zyx911_ ao nosso branch local porque há um commit extra em nosso branch local que não existe no branch remoto!"**

## Existem três maneiras de lidar com a situação

### Criar um Merge Commit

Este é o comportamento padrão histórico. Git cria um novo commit (por exemplo _3649fc_) que é pai de ambos _dg34mp_ e _zyx911_. _Merge commits_ são uma ferramenta extremamente útil no Git, no entanto, eles também trazem complexidade, e é por isso que a maioria concorda que o Git não deve criar um merge commit sem que o usuário o solicite explicitamente.

Além disso, como estamos mesclando estes para diferentes commits, este é um momento comum para ter conflitos de mesclagem.

```bash
    develop       origin/develop

    3649fc
dg34mp  zyx911    zyx911
    cem32k        cem32k
    b4d2o1        b4d2o1
    abc123        abc123
```
### Rebase nos nossos commits locais

Rebasing é uma ideia importante do Git que merece uma postagem inteira, mas em linhas gerais:

Rebasing pega nosso commit local ( dg34mp) e remove-o temporariamente de nosso branch local, o que o torna fácil um _fast-forward merge_.

```bash
develop    origin/develop

zyx911     zyx911
cem32k     cem32k
b4d2o1     b4d2o1
abc123     abc123
```

então nosso commit ( _dg34mp_) é adicionado de volta ao nosso branch local

```bash
develop         origin/develop

40931 (dg34mp)
zyx911          zyx911
cem32k          cem32k
b4d2o1          b4d2o1
abc123          abc123
```

entretanto, como o hash do commit ( *dg34mp* ) é baseado não apenas em nossas mudanças, mas em todas as mudanças antes dele, o hash do commit muda (aqui para _40931_). Este também é um momento em que os conflitos de mesclagem são comuns.

### Não faça nada por padrão

Já que criar um conflito de mesclagem e rebasing têm suas próprias complexidades, não queremos que o Git faça isso por padrão. É por isso que definimos o _fast-forward only_ com `git config --global pull.ff`. Contanto que estejamos apenas fazendo pull de novos commits, _git pull_ funciona bem, mas se as coisas saírem de sincronia receberemos a mensagem

```bash
fatal: Not possible to fast-forward, aborting.
```

Então podemos dizer explicitamente ao Git para criar um commit de merge

```bash
git pull --merge
```
ou fazer rebase das nossas mudanças
```bash
git pull --rebase
```


## Configuração Global do Git
Quando o executamos, `git config --global pull.ff` ele adiciona o seguinte

```bash
[pull]
        ff = only
```

à nossa [configuração global do Git](https://www.git-scm.com/docs/git-config), normalmente encontrada em `~/.gitconfig`.

