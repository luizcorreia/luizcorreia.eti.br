---
title: "Solucionando um labirinto usando transformação morfológica"
date: "2015-07-12"
layout: post
image: /assets/img/willian-justen-de-vasconcellos-q1tvymwgwpw-unsplash.jpg
description: 'Solucionando um labirinto usando transformação morfológica com EmguCV.'
introduction: 'Solucionando um labirinto usando transformação morfológica com EmguCV.'
twitter_text: 'Solucionando um labirinto usando transformação morfológica com EmguCV.'
main-class: dev
color: '#7AAB13'
tags:
  - cursos
  - blog
---

Neste post vou mostrar como resolver um labirinto usando transformação morfológica, e como bônus você pode aprender o básico de processamento de imagens usando o [EmguCV](http://www.emgu.com/) .

O código funciona para "labirintos perfeitos", são labirintos que tem somente um caminho de um ponto ao outro, sem seções, sem caminhos circulares e sem áreas abertas.

Para gerar os labirintos eu usei essa ferramenta online [maze generator](http://mazegenerator.net/). Imagem para os testes:

![ImageGenerator](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/ImageGenerator.png)

Abrindo a imagem:

Image<Bgr, Byte> src = new Image<Bgr, byte>("ImageGenerator.png");

Convertendo a imagem para binário

Image<Gray, Byte> bw = src.Convert<Gray, Byte>();
bw = bw.ThresholdBinaryInv(new Gray(10), new Gray(255));

![maze-binary](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-binary.png)

Note que estamos usando um threashold invertido para obter a imagem binária. Isso nos dará uma imagem onde as paredes serão brancas ao invés de pretas.

Encontrando as paredes obtendo os contornos,

VectorOfVectorOfPoint contours = new VectorOfVectorOfPoint();
IOutputArray hirarchy;
CvInvoke.FindContours(bw.Mat, contours, new Mat(), Emgu.CV.CvEnum.RetrType.External, Emgu.CV.CvEnum.ChainApproxMethod.ChainApproxNone);
if (contours.Size != 2)
{
    // "Labirinto perfeito" precisa ter duas paredes
    Console.WriteLine("Este não é um labirinto perfeito");
    return;
}

Estamos assumindo que este é um labirinto perfeito que tem somente duas paredes. Pegamos a primeira parede,

Image<Gray, Byte> path = new Image<Gray, byte>(src.Size);
CvInvoke.DrawContours(path,contours,0,new MCvScalar(255,255,255),0,LineType.FourConnected);

![maze-first-wall](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-first-wall.png)

Para aqueles que conhecem pouco de morfologia segue um ótimo texto: [Morfologia Matemática para imagens em tons de cinza](https://sofaltatestar.wordpress.com/2010/01/06/morfologia-matematica-para-imagens-em-tons-de-cinza/).

Dilatamos a parede em alguns pixels.

//Tente usar diferentes valores
path = path.Dilate(10);

![maze-dilate](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-dilate.png)

Erode a mesma quantidade de pixes

Image<Gray, Byte> path\_erode = path.Erode(10);

![maze-erode](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-erode.png)

Agora temos a imagem "dilatada" e "erodida" conseguimos a solução subtraindo uma da outra.

path = path\_erode.AbsDiff(path);

![maze-absdiff](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-absdiff.png)

Desenharemos a solução em vermelho na imagem de resultado.

var channels = src.Split();
channels\[0\] &= ~path;
channels\[1\] &= ~path;
channels\[2\] |= path;

VectorOfMat c = new VectorOfMat();
c.Push(channels\[0\]);
c.Push(channels\[1\]);
c.Push(channels\[2\]);

Image<Bgr, Byte> dst = new Image<Bgr, byte>(src.Size);
 CvInvoke.Merge(c,dst);

![Solução do labirinto](/assets/img/solucionando-um-labirinto-usando-transformacao-morfologica/maze-dst-img.png)
