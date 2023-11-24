# Atividade Desenho Canvas - BEN 10 
Esse projeto segue instruções passadas em aula, para fins de estudo, conhecimento e prática! Utilizamos JavaScript para realizar o desenho escolhido. 

**Desenho:** Massa Cinzenta, desenho animado BEN 10

- Esse trabalho foi criado em dupla (Jun/2023) com o propóstio de aprendizagem! E está sendo totalmente atualizado por Letícia da Lapa.

## Autores
**Criadores:** Letícia da Lapa e Yuri Telis Garcia

**Cursando:** ETEC Professor Basilídes de Godoy - Ensino Médio Integrado ao Curso Técnico de Programação de Jogos Digitais. 2ºA/2023

**Orientadora:** Aline Firmino Brito

## Imagem do Projeto 
![image](https://github.com/LehLapa/Atv.Desenho-Canvas/assets/128638269/1f8b053b-4f00-4559-97db-81014db6db34)

##
# Desenvolvimento - Início/Criação

#### Criação do arquivo HTML
    - Criação de arquivo HTML com especificação de idioma para o português
    - Cabeçalho do HTML
        1. Criação de título da página
        2. Definição do viewport do HTML com o comando (meta name="viewport")
        3. Definição de meta (charset) permitindo a leitura de caracteres epeciais
        4. Descrição do projeto com título e data com o comando (meta name="description")
        5. Link para arquivo CSS com o comando (link rel)
    - Finalização do cabeçalho
    - Corpo do HTML
        1. Criação de (h1) com título da página
        2. Comando (canvas) com id "canvas"
        3. Script conectando o Javascript no HTML
    - Finalização do corpo
    - Finalização de arquivo HTML
##
#### Criação de arquivo CSS
    - Definição da cor de fundo da página para branco
        1. Alinhamento do texto centralizado
        2. Definição do tamanho da fonte para  15 pixels
        3. Definição da cor do texto para preto
        4. Definição da cor do fundo do h1 para verde usanod RGB
    - Finalização de arquivo CSS
##
#### Criação de arquivo JS
    - Definição da constante canvas com getElementById
        1. beginPath e quadraticCurveTo fazem a cabeça do Eco (personagem escolhido)
        2. O segundo beginPath e o lineTo fazem a linha no meio do rosto do personagem
        3. O terceiro beginPath e os lineTo fazem a boca do Eco
        4. O quarto beginPath e os lineTo fazem o olho esquerdo do Eco
        5. O quinto beginPath e os lineTo fazem o olho direito do personagem
    - Finalização de arquivo JS
##
# Scripts 
Esclarecendo Scripts utilizados no trabalho.

#### Cabeça
![cabeca](https://github.com/LehLapa/Atv.Desenho-Canvas/assets/128638269/03ba19f1-3fe3-40c0-a85f-0e8192e85ee0)
- **moveTo** move o ponto inicial de um novo sub-caminho *(sub-path)* para as coordenadas *(x, y)*.
- **quadraticCurveTo** adiciona uma Curva de Bézier quadrática ao caminho. São exigidos dois pontos. O primeiro ponto é um ponto de controle e o segundo é o ponto final.
##
#### Olhos
![olhos](https://github.com/LehLapa/Atv.Desenho-Canvas/assets/128638269/e375a6b1-aac4-451f-a69e-0b3c71fee32c)
- **moveTo** move o ponto inicial de um novo sub-caminho *(sub-path)* para as coordenadas *(x, y)*.
- **lineTo** conecta o último ponto do sub-caminho *(sub-path)* para as coordenadas *x, y,* através de uma linha (mas na realidade não a desenha).
##
#### Boca e Contorno
![linha e boca](https://github.com/LehLapa/Atv.Desenho-Canvas/assets/128638269/3b3936c7-100d-475b-a31b-7e8e80ada05e)

![cantos boca](https://github.com/LehLapa/Atv.Desenho-Canvas/assets/128638269/3d8808ba-6fa0-4d85-8688-ab1960be7f0d)

- **moveTo** move o ponto inicial de um novo sub-caminho *(sub-path)* para as coordenadas *(x, y)*.
- **lineTo** conecta o último ponto do sub-caminho *(sub-path)* para as coordenadas *x, y,* através de uma linha (mas na realidade não a desenha).
##




