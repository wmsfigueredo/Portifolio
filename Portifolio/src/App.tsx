import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#sobre">Portfólio</a>
        <nav className="site-nav">
          <a href="#sobre">Sobre</a>
          <a href="#formacao">Formação</a>
          <a href="#programas">Programas & Projetos</a>
          <a href="#certificacoes">Certificações & Badges</a>
          <a href="#competencias">Competências</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>

        <section id="sobre" className="section about-section">
          <div className="profile-top">
            <div className="profile-circle">
              <img src="/WhatsApp%20Image%202026-08-09%20at%2012.12.53.jpeg" alt="Foto de perfil" />
            </div>
          </div>

          <div className="about-box hover-box">
            <span className="section-label">Sobre</span>
            <h1>Wellington Miguel</h1>
            <h2>Um pouco sobre mim</h2>
            <p>Estudo desenvolvimento web há alguns anos e gosto de unir bom design com código limpo. Meu foco é criar interfaces que funcionam bem em qualquer dispositivo e que ofereçam experiências reais aos usuários.</p>
            <p>Tenho experiência com React, TypeScript, Vite, animações CSS e práticas de acessibilidade. Busco sempre entregar projetos com detalhe visual e performance.</p>
            <p className="profile-meta">Localização • Disponível para projetos • Open to work</p>
            <a href="#contato" className="button secondary">Ver contato</a>
          </div>
        </section>

        <section id="formacao" className="section">
          <div className="section-head">
            <span className="section-label">Formação</span>
            <h2>Estudos e especializações</h2>
          </div>

          <div className="box-grid">
            <article className="info-card hover-box">
              <h3>Bootcamp Front-end</h3>
              <p>Curso intensivo em React, TypeScript e Vite focado em aplicações modernas e responsivas.</p>
            </article>
            <article className="info-card hover-box">
              <h3>Graduação em TI</h3>
              <p>Formação em tecnologia da informação com foco em desenvolvimento web e arquitetura de software.</p>
            </article>
            <article className="info-card hover-box">
              <h3>Especialização UX</h3>
              <p>Estudo de usabilidade, design centrado no usuário e boas práticas de interface.</p>
            </article>
          </div>
        </section>

        <section id="programas" className="section">
          <div className="section-head">
            <span className="section-label">Programas & Projetos</span>
            <h2>Ferramentas e entregas</h2>
          </div>

          <div className="box-grid">
            <article className="info-card hover-box">
              <h3>React & Vite</h3>
              <p>Desenvolvo aplicações SPA rápidas, modulares e fáceis de manter.</p>
            </article>
            <article className="info-card hover-box">
              <h3>Projetos Reais</h3>
              <p>Interfaces para startups, lojas online e dashboards administrativos.</p>
            </article>
            <article className="info-card hover-box">
              <h3>Automação e ferramentas</h3>
              <p>Uso Git, GitHub, VS Code e pipelines leves para desenvolvimento eficiente.</p>
            </article>
          </div>
        </section>

        <section id="certificacoes" className="section">
          <div className="section-head">
            <span className="section-label">Certificações & Badges</span>
            <h2>Reconhecimento profissional</h2>
          </div>

          <div className="box-grid">
            <article className="info-card hover-box">
              <h3>React</h3>
              <p>Certificado em desenvolvimento avançado de componentes e hooks.</p>
            </article>
            <article className="info-card hover-box">
              <h3>TypeScript</h3>
              <p>Badge em tipagem estática e arquitetura escalável de aplicações.</p>
            </article>
            <article className="info-card hover-box">
              <h3>Acessibilidade</h3>
              <p>Formação em práticas de acessibilidade e interfaces inclusivas.</p>
            </article>
          </div>
        </section>

        <section id="competencias" className="section">
          <div className="section-head">
            <span className="section-label">Competências</span>
            <h2>Habilidades técnicas</h2>
          </div>

          <div className="box-grid">
            <article className="info-card hover-box">
              <h3>HTML & CSS</h3>
              <p>Layouts responsivos, animações suaves e design moderno.</p>
            </article>
            <article className="info-card hover-box">
              <h3>JavaScript & TS</h3>
              <p>Domínio de lógica, APIs, estados e tipagem para aplicações robustas.</p>
            </article>
            <article className="info-card hover-box">
              <h3>UI / UX</h3>
              <p>Foco em experiência do usuário e fluxos que convertem.</p>
            </article>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="section-head">
            <span className="section-label">Contato</span>
            <h2>Pronto para começar?</h2>
            <p>Vamos transformar sua ideia em um projeto web elegante e funcional. Me envie uma mensagem e conversamos sobre o próximo passo.</p>
          </div>
          <a href="mailto:seunome@email.com" className="button primary">Enviar e-mail</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Portfólio. Desenvolvido com React e Vite.</p>
      </footer>
    </div>
  )
}

export default App
