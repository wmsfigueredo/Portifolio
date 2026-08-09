import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#hero">
          Portfólio
        </a>
        <nav className="site-nav">
          <a href="#projects">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow">Portfólio pessoal</span>
            <h1>Design e desenvolvimento de projetos web que encantam e convertem.</h1>
            <p>
              Sou desenvolvedor front-end focado em criar experiências digitais elegantes,
              responsivas e intuitivas. Aqui você encontra projetos reais com tecnologia,
              criatividade e usabilidade.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Ver projetos
              </a>
              <a className="button secondary" href="#contato">
                Me chamar
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <span className="section-label">Destaque</span>
              <h2>Landing page para startup</h2>
              <p>
                Interface moderna com navegação rápida, copy clara e foco em conversão para
                apresentação de produto digital.
              </p>
              <div className="project-meta">
                <span className="project-tag">React</span>
                <span className="project-tag">Vite</span>
              </div>
              <a href="#projects" className="project-link">
                Ver detalhes
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head">
            <span className="section-label">Projetos</span>
            <h2>Trabalhos selecionados</h2>
            <p>
              Projetos construídos com foco em performance, acessibilidade e branding.
            </p>
          </div>

          <div className="cards grid-3">
            <article className="card">
              <div className="project-meta">
                <span className="project-tag">Interface</span>
              </div>
              <h3>Dashboard administrativo</h3>
              <p>
                Painel de controle para gestão de dados, métricas e workflow de equipe com
                visual clean e componentes reutilizáveis.
              </p>
              <a className="project-link" href="#contato">
                Solicitar orçamento
              </a>
            </article>

            <article className="card">
              <div className="project-meta">
                <span className="project-tag">E-commerce</span>
              </div>
              <h3>Loja online moderna</h3>
              <p>
                Experiência de compra fluida, filtros intuitivos e checkout otimizado para
                conversão em desktop e mobile.
              </p>
              <a className="project-link" href="#contato">
                Vamos conversar
              </a>
            </article>

            <article className="card">
              <div className="project-meta">
                <span className="project-tag">Marca</span>
              </div>
              <h3>Site institucional</h3>
              <p>
                Site one-page para apresentação de marca, serviços e cases com tipografia
                forte e storytelling visual.
              </p>
              <a className="project-link" href="#contato">
                Contato rápido
              </a>
            </article>
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="section-head">
            <span className="section-label">Sobre</span>
            <h2>Um pouco sobre mim</h2>
          </div>
          <div className="bio-grid">
            <div>
              <p>
                Trabalho com desenvolvimento web há alguns anos e gosto de unir bom design com
                código limpo. Meu foco é criar interfaces que funcionam bem em qualquer dispositivo
                e que ofereçam experiências reais aos usuários.
              </p>
              <p>
                Tenho experiência com React, TypeScript, Vite, animações CSS e práticas de
                acessibilidade. Busco sempre entregar projetos com detalhe visual e performance.
              </p>
            </div>
            <div className="stats-list">
              <div className="stat">
                <strong>+8</strong>
                <span>Projetos entregues</span>
              </div>
              <div className="stat">
                <strong>React</strong>
                <span>Aplicações modernas</span>
              </div>
              <div className="stat">
                <strong>UX</strong>
                <span>Foco na experiência</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="section-head">
            <span className="section-label">Contato</span>
            <h2>Pronto para começar?</h2>
            <p>
              Vamos transformar sua ideia em um projeto web elegante e funcional. Me envie uma mensagem
              e conversamos sobre o próximo passo.
            </p>
          </div>
          <a href="mailto:seunome@email.com" className="button primary">
            Enviar e-mail
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Portfólio. Desenvolvido com React e Vite.</p>
      </footer>
    </div>
  )
}

export default App
