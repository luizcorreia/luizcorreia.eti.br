import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Luiz Gustavo Correia.
        Eu sou um analista, pesquisador e evangelista de novas tecnologias.
        Eu acredito que tecnologias criativas são indistinguíveis de obras de arte.
      </p>

      <p>
        Oito anos de experiência na área de desenvolvimento.
        Meu trabalho foi primeiramente voltado para o desenvolvimento desktop para sistemas Windows e/ou Linux.
      </p>
      <p>
        Hoje sou fullstack, desenvolvendo para web, mobile, microcontroladores e sistemas embarcados.

      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>Data Mining</li>
        <li>Amazon Cloud</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux / Flux</li>
        <li>NodeJS</li>
        <li>React-Native</li>
        <li>Git</li>
        <li>Python</li>
        <li>C/C++</li>
        <li>PostgreSQL - MySQL - MongoDB</li>
        <li>Edição de Vídeo</li>
        <li>Manipulação de Imagens</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
