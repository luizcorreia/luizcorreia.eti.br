#/bin/bash
#By Luiz Correia https://luizcorreia.com.br
#Versão 0.1
#Script que converte várias imagens de forma eficiente para uso online.
#É necessário ImageMagick para funcionar.
#Execute esse script no diretório onde as imagens estão.

EXT_ORIGINAL="*.jpg" 
EXT_EXPORTADA=".jpg"
DESTINO="Convertidas"
TAMANHO=$N

CODEC_ORIGINAL="*.MOV" #Codec dos vídeos a serem convertidos
CODEC_DAVINCI=".mov" #Codec aceito  pelo Davinci Resolvi no Linux
DESTINO="convertidas" #Destino dos arquivos pós conversão

if [ $# -lt 1 ]; then
    read -p "Entre com a aresta maior:" TAMANHO
else
    $TAMANHO=$N1
fi


   


mkdir $DESTINO

for f in $EXT_ORIGINAL; do convert "$f"  -filter Triangle -define filter:support=2 -thumbnail $TAMANHO -unsharp 0.25x0.25+8+0.065 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB -strip "$DESTINO/${f%.*}$EXT_EXPORTADA"; done

exit
