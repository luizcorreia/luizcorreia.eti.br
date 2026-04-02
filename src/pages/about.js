import React from 'react'

import Layout from '../components/Layout/'
import SEO from '../components/Seo'
import SocialLinks from '../components/SocialLinks'

import { MainContent } from '../styles/base'

const AboutPage = () => (
  <Layout>
    <MainContent>
      <h1>Sobre mim</h1>
      <p>
        Meu nome é Luiz Gustavo Correia. Sou Arquiteto de Soluções com foco em
        segurança da informação e privacidade digital. Acredito que tecnologia
        deve empoderar as pessoas — e não ser usada contra elas.
      </p>

      <p>
        Ao longo de mais de uma década de carreira, passei pelo desenvolvimento
        de software, sistemas embarcados e arquitetura de soluções em nuvem.
        Hoje me dedico a projetar sistemas seguros, escaláveis e que respeitam
        a privacidade dos usuários por padrão.
      </p>

      <p>
        Sou autor do livro{' '}
        <a
          href="https://a.co/d/01UkJJyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Introdução à Privacidade Digital
        </a>
        , um guia prático sobre como proteger seus dados e sua autonomia no
        mundo conectado — sem abrir mão da vida digital.
      </p>

      <h2>Áreas de atuação</h2>

      <ul>
        <li>Arquitetura de Soluções em Nuvem (AWS)</li>
        <li>Segurança da Informação</li>
        <li>Privacidade Digital e conformidade com LGPD/GDPR</li>
        <li>Design de sistemas distribuídos e resilientes</li>
        <li>DevSecOps</li>
        <li>Sistemas embarcados e IoT</li>
      </ul>

      <h2>Habilidades técnicas</h2>

      <ul>
        <li>Cloud: AWS, arquiteturas serverless e microsserviços</li>
        <li>Linguagens: JavaScript/TypeScript, Python, Go, C/C++</li>
        <li>Segurança: threat modeling, OWASP, criptografia aplicada</li>
        <li>Privacidade: LGPD, GDPR, Privacy by Design</li>
        <li>Bancos de dados: PostgreSQL, MongoDB, DynamoDB</li>
        <li>Infraestrutura: Terraform, Docker, Kubernetes</li>
        <li>Git, TDD e integração contínua</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode me encontrar nas redes sociais abaixo ou pelo e-mail{' '}
        <a href="mailto:luiz@luizcorreia.eti.br">luiz@luizcorreia.eti.br</a>.
      </p>

      <SocialLinks hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage

export function Head() {
  return (
    <SEO
      title="Sobre mim"
      description="Arquiteto de soluções com foco em segurança e privacidade digital. Autor do livro Introdução à Privacidade Digital."
    />
  )
}
