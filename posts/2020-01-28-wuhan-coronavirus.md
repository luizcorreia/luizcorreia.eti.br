---
title: "Mapeando os casos do Wuhan Coronavirus"
date: "2020-01-28"
layout: post
image: /assets/img/2020-01-28-wuhan-coronavirus/2020-01-28_23-29.jpg
description: 'Mapeando os casos do Wuhan Coronavirus'
introduction: 'Mapeando os casos do Wuhan Coronavirus'
twitter_text: 'Mapeando os casos do Wuhan Coronavirus'
main-class: bi
color: '#df6e21'
tags:
  - word
  - blog
  - BI
  - Empresa
---

## Introdução

Em 31 de dezembro de 2019, a Organização Mundial da Saúde (OMS) foi informada de um surto de "pneumonia de causa desconhecida" detectada na cidade de Wuhan, província de Hubei, China - a sétima maior cidade da China, com 11 milhões de habitantes.

Em 23 de janeiro, existem mais de 800 casos confirmados globalmente, incluindo casos em pelo menos 20 regiões na China e nove países / territórios.
Os primeiros indivíduos infectados relatados, alguns dos quais apresentaram sintomas desde 8 de dezembro, foram encontrados entre os vendedores ambulantes do mercado de frutos do mar da China Meridional de Wuhan.
Posteriormente, o mercado foi fechado em 1º de janeiro. O vírus causador do surto foi rapidamente determinado como um novo coronavírus.

Em 10 de janeiro, o sequenciamento genético determinou que seria o novo coronavírus Wuhan, ou seja, 2019-nCoV, um betacoronavírus, relacionado ao vírus da Síndrome Respiratória do Oriente Médio (MERS-CoV) e ao vírus da Síndrome Respiratória Aguda Grave (SARSCoV).
No entanto, a mortalidade e a transmissibilidade do 2019-nCoV ainda são desconhecidas e provavelmente variam daquelas dos coronavírus mencionados anteriormente.
Sabe-se que os viajantes infectados (principalmente aéreos) são responsáveis ​​pela introdução do vírus fora de Wuhan.

Em 13 de janeiro, a Tailândia relatou o primeiro caso internacional fora da China, enquanto os primeiros casos na China, mas fora de Wuhan, foram registrados em 19 de janeiro, em Guangdong e Pequim.

Em 20 de janeiro, a Comissão Nacional de Saúde da China (NHC) confirmou que o coronavírus pode ser transmitido entre humanos.
No mesmo dia, infecções humanas por 2019-nCoV também foram confirmadas no Japão e na Coréia do Sul, e no dia seguinte foram detectados casos nos EUA e em Taiwan em viajantes retornando de Wuhan.

Em 21 de janeiro, várias províncias da China também estavam registrando novos casos e a infecção foi confirmada em 15 profissionais de saúde, com seis mortes relatadas. Casos de viagem adicionais foram confirmados em Hong Kong, Macau, Cingapura e Vietnã.

Em 22 de janeiro, um comitê de emergência da OMS se reuniu para discutir se o surto deve ser classificado como uma emergência de saúde pública de interesse internacional (PHEIC) sob os Regulamentos Internacionais de Saúde, mas estava inicialmente indeciso devido à falta de informações antes de decidir contra a declaração.

De preocupação imediata é o risco de transmissão adicional resultante de altos volumes de viagens e reuniões de massa em comemoração ao Ano Novo Chinês em 24 de janeiro. Na tentativa de mitigar a transmissão local na China, estratégias sem precedentes de controle de surtos foram implementadas em (inicialmente) três cidades.

Em 23 de janeiro de 2020, Wuhan suspendeu todos os transportes públicos e viagens aéreas (dentro e fora da cidade), colocando todos os 11 milhões de habitantes da cidade em quarentena.

Em 24 de janeiro, Huanggang e Ezhou, cidades adjacentes a Wuhan, também serão colocadas em quarentena semelhante, com mais cidades na China agora seguindo o exemplo. Além disso, muitas cidades cancelaram as celebrações do Ano Novo Chinês.

Como Wuhan é um importante centro de transporte aéreo na China central, várias medidas foram tomadas em escala global para mitigar a expansão internacional. A triagem direcionada para o aeroporto de passageiros que viajam de Wuhan foi iniciada em 1º de janeiro em Hong Kong e Macau. Taiwan, Cingapura e Tailândia começam a rastrear os passageiros que chegam no dia 3 de janeiro. Nos EUA, o CDC começou a triagem de passageiros nos vôos diretos e de conexão de Wuhan para os três principais portos de entrada no dia 17 de janeiro de 2020. Em 23 de janeiro, o CDC dos EUA elevou seu aviso de viagem para Wuhan, na China, ao mais alto dos três níveis. Outros países do Pacífico e da Ásia, incluindo Malásia, Sri Lanka, Bangladesh e Índia, também estão realizando exames de passageiros direcionados nos aeroportos.

## Painel GIS

Em resposta a essa emergência de saúde pública em andamento, desenvolvi um painel on-line  para visualizar e rastrear os casos relatados em uma escala de tempo diária;

Os dados do caso visualizados são coletados de várias fontes, incluindo [OMS](https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports), [CDC dos EUA](https://www.cdc.gov/coronavirus/2019-ncov/index.html), China ECDC (CCDC), [NHC](http://www.chinacdc.cn/en/) e [DXY](https://3g.dxy.cn/newh5/view/pneumonia?scene=2&clicktime=1579582238&enterid=1579582238&from=singlemessage&isappinstalled=0). O DXY é um site chinês que agrega relatórios de situação do NHC e do CCDC local quase em tempo real, fornecendo estimativas de casos regionais mais atuais do que as organizações de relatórios em nível nacional são capazes e é, portanto, usado para todos os casos da China continental relatados em nosso painel ( confirmadas,  recuperadas, mortes). Os casos dos EUA (confirmados, recuperados, mortes) são retirados do CDC dos EUA e todos os outros dados de casos de países (suspeitos e confirmados) são coletados dos departamentos regionais de saúde correspondentes. O painel visa fornecer ao público uma compreensão da situação do surto à medida que ela se desenrola, com fontes de dados transparentes.


<iframe width="870" height="652" src="https://luizc.us.qlikcloud.com/single/?appid=4e074e31-998d-4128-b235-ed61d5df3488&sheet=77155c98-2272-452c-9beb-37f5d74fd13d&lang=pt-BR&theme=card&opt=ctxmenu,currsel" style="border:none;width:100%;height:100%;"></iframe>
