import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Heart, HeartHandshake, ShieldCheck, Stethoscope, Leaf, MapPin, Instagram, Menu, X, BedDouble, Users, CalendarDays, Home, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reviews } from "@/components/reviews";
import { whatsappUrl, instagramUrl, instagramHandle, phoneDisplay, address, mapsUrl, openExternal } from "@/lib/contact";
import logo from "@/assets/recanto-logo.jpeg.asset.json";
import team from "@/assets/recanto-equipe.png.asset.json";
import fachada from "@/assets/recanto-fachada.png.asset.json";
import ambPatio from "@/assets/Foto-Ambientes-Recanto-Dona-Vida-1.jpeg.asset.json";
import quartos1 from "@/assets/quartos-aconchegantes-1.jpeg.asset.json";
import quartos2 from "@/assets/quartos-aconchegantes-2.jpeg.asset.json";
import ambJardim from "@/assets/Foto-Ambientes-Recanto-Dona-Vida-3.jpeg.asset.json";
import ambSala from "@/assets/Foto-Ambientes-Recanto-Dona-Vida-4.jpeg.asset.json";
import ambConvivencia from "@/assets/Foto-Ambientes-Recanto-Dona-Vida-5.jpeg.asset.json";
import ambRefeicoes from "@/assets/Foto-Ambientes-Recanto-Dona-Vida-6.jpeg.asset.json";
import quartoIndividualNovo from "@/assets/quarto-individual-novo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Recanto Dona Vida | Casa de repouso em São Paulo" },
    { name: "description", content: "Onde a vida é cuidada com carinho. Conheça o Recanto Dona Vida: casa de repouso em São Paulo com proprietárias enfermeiras e equipe experiente. Agende uma visita." },
    { property: "og:title", content: "Recanto Dona Vida | Onde a vida é cuidada com carinho" },
    { property: "og:description", content: "Um lar acolhedor para quem você ama. Conheça nossa equipe e converse conosco para agendar uma visita à nossa casa de repouso em São Paulo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 20.7l1.4-4.6A8.6 8.6 0 1 1 20.5 11.8Z"/><path d="M8.1 7.7c.3-.5.7-.5 1-.1l1 1.7c.2.4-.1.8-.6 1.3.6 1.3 1.6 2.3 3 2.9.5-.6.8-.9 1.2-.7l1.7.8c.5.3.5.8.2 1.2-.7 1-1.8 1-3 .5-2.6-1-4.6-3-5.3-5.2-.3-.9.2-1.8.8-2.4Z"/></svg>;
}
function Contact({ children, warm = false, className = "" }: { children: React.ReactNode; warm?: boolean; className?: string }) {
  return <Button asChild variant={warm ? "warm" : "care"} className={className}><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/>{children}<ArrowRight size={15}/></a></Button>;
}
const nav = [{ href: "#inicio", label: "Início" }, { href: "#sobre", label: "Sobre" }, { href: "#cuidados", label: "Cuidados" }, { href: "#equipe", label: "Equipe" }, { href: "#ambientes", label: "Estrutura" }, { href: "#depoimentos", label: "Depoimentos" }, { href: "#duvidas", label: "Dúvidas" }];
const questions = [
  { question: "Vocês recebem idosos com Alzheimer ou demência?", answer: "Sim. O cuidado com Alzheimer e demências é uma das nossas especialidades: rotina previsível, estímulo cognitivo, atenção redobrada com segurança e equipe treinada para as diferentes fases da doença. Foi justamente buscando esse cuidado que o Recanto nasceu." },
  { question: "Como faço para agendar uma visita?", answer: "É simples: fale com a gente pelo WhatsApp. Combinamos o melhor dia e horário, você conhece a casa, os quartos e as áreas de convivência, conversa com a equipe e tira todas as dúvidas antes de qualquer decisão." },
  { question: "O que está incluso no valor mensal?", answer: "O valor depende do grau de dependência do idoso e do tipo de acomodação. Ele inclui moradia, alimentação, cuidados de rotina, enfermagem e atividades. Envie a situação do seu familiar pelo WhatsApp e explicamos exatamente o que está incluído, sem surpresas." },
  { question: "Qual é o horário de visitas?", answer: "As visitas são agendadas para que o idoso mantenha a rotina de descanso e refeições. Basta combinar com a equipe pelo WhatsApp o horário que funcione melhor para a família." },
  { question: "Como funciona a adaptação nos primeiros dias?", answer: "Os primeiros dias são acompanhados de perto pela equipe: apresentamos a casa, respeitamos os horários e hábitos que o idoso já tinha e mantemos a família informada. A maioria se adapta em poucos dias, e as famílias podem visitar para acompanhar esse momento." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Every external link (WhatsApp, Instagram, mapa) opens outside any frame.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a[href^='http']") as HTMLAnchorElement | null;
      if (!a || a.origin === window.location.origin) return;
      e.preventDefault();
      openExternal(a.href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <>
    <header className="site-header">
      <div className="container-wide header-inner">
        <a className="brand" href="#inicio" aria-label="Recanto Dona Vida — início"><img src={logo.url} alt="Logotipo Recanto Dona Vida"/><span className="brand-name">Recanto Dona Vida<small>Casa de repouso para idosos</small></span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
        <Contact className="contact-button header-contact">Falar no WhatsApp</Contact>
        <Button variant="navigation" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</Button>
      </div>
      <nav className="compact-header-nav" aria-label="Seções do site">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegação celular">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<Contact>Agende uma visita</Contact></nav>}
    </header>
    <main>
      <section className="hero" id="inicio">
        <img className="hero-photo" src={fachada.url} alt="Fachada do Recanto Dona Vida com o nome da casa e as proprietárias" fetchPriority="high"/>
        <div className="container-wide hero-inner">
          <div className="eyebrow"><Leaf size={15}/> Um lar para quem você ama</div>
          <h1>Recanto<em>Dona Vida</em></h1>
          <p className="hero-copy">Cuidado que acolhe. Carinho que faz sentir em casa. Um novo capítulo de vida, com a atenção e a tranquilidade que sua família merece.</p>
          <Contact className="hero-cta">Venha conhecer nosso recanto</Contact>
          <div className="hero-note"><Heart size={13}/> Vamos conversar sobre quem você ama?</div>
        </div>
        <div className="hero-label"><Heart size={14}/> Conheça nossa casa, nossa família.</div>
      </section>
      <div className="trust-band"><div className="container-wide trust-inner">
        <div className="trust-item"><Stethoscope/><div><strong>Proprietárias enfermeiras</strong><span>Conhecimento e carinho lado a lado</span></div></div>
        <div className="trust-item"><ShieldCheck/><div><strong>Mais de 10 anos de experiência</strong><span>Uma equipe que conhece o cuidar</span></div></div>
        <div className="trust-item"><HeartHandshake/><div><strong>Acolhimento de verdade</strong><span>Cuidado com o olhar de uma família</span></div></div>
      </div></div>
      <section id="sobre" className="section container-wide about-grid">
        <div className="about-title"><div className="eyebrow">Bem-vindo ao nosso recanto</div><h2>Onde a vida é cuidada<br/><em>com carinho.</em></h2></div>
        <div className="about-copy"><p>Escolher um lar para quem você ama é uma decisão que pede confiança. No Recanto Dona Vida, acolhemos cada idoso com respeito à sua história, ao seu tempo e àquilo que o faz se sentir bem.</p><p>Somos uma Instituição de Longa Permanência para Idosos (ILPI), conduzida por proprietárias enfermeiras e uma equipe experiente. Aqui, o cuidado profissional se encontra com o afeto de um verdadeiro lar.</p><Button asChild variant="link" className="text-link p-0 h-auto"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Conheça de perto esse cuidado <ArrowRight size={16}/></a></Button></div>
      </section>
      <section id="cuidados" className="section care-section"><div className="container-wide">
        <div className="section-heading"><div className="eyebrow">Carinho em cada detalhe</div><h2>O bem-estar de quem você ama,<br/><em>no centro de tudo.</em></h2><p>Mais do que acolher, cuidar com presença, sensibilidade e respeito.</p></div>
        <div className="care-grid">
          <article className="care-card"><div className="care-icon"><Stethoscope size={24}/></div><h3>Cuidado com experiência</h3><p>Proprietárias enfermeiras formadas e funcionárias com mais de 10 anos de experiência no cuidado de idosos. Conhecimento que inspira confiança.</p></article>
          <article className="care-card"><div className="care-icon"><HeartHandshake size={24}/></div><h3>Atenção com afeto</h3><p>Um olhar atento para cada pessoa, acolhendo sua história e suas necessidades. Porque carinho, escuta e respeito também fazem parte do cuidar.</p></article>
          <article className="care-card"><div className="care-icon"><Leaf size={24}/></div><h3>Aconchego de um lar</h3><p>Um lugar para criar vínculos e se sentir pertencente. Valorizamos a proximidade com as famílias e o cuidado que gostaríamos para os nossos.</p></article>
          <article className="care-card"><div className="care-icon"><Home size={24}/></div><h3>Uma história de família</h3><p>Nosso recanto nasceu do desejo de acolher uma mãe com Alzheimer. Uma história que inspira o olhar sensível para cada idoso e sua família.</p></article>
          <article className="care-card"><div className="care-icon"><Users size={24}/></div><h3>Espaços para conviver</h3><p>Sala de estar, jardim e áreas de convivência compõem nossa casa. Ambientes para estar junto, criar vínculos e compartilhar momentos.</p></article>
          <article className="care-card"><div className="care-icon"><MessageCircle size={24}/></div><h3>Escuta para a família</h3><p>Uma decisão importante merece uma conversa acolhedora. Conte sobre quem você ama e tire suas dúvidas com nossa equipe.</p></article>
        </div>
      </div></section>
      <section id="ambientes" className="section gallery-section"><div className="container-wide">
        <div className="section-heading"><div className="eyebrow">Um lar feito de detalhes</div><h2>Cada canto do nosso <em>recanto.</em></h2><p>Espaços pensados para convivência, descanso e bem-estar. Venha conhecer pessoalmente.</p></div>
        <div className="gallery-grid">
          <figure className="gallery-item"><img src={ambPatio.url} loading="lazy" alt="Pátio externo com plantas e luzes acesas ao entardecer"/><figcaption>Pátio ao entardecer</figcaption></figure>
          <figure className="gallery-item"><img src={quartos1.url} loading="lazy" alt="Quarto compartilhado claro com três leitos, abajures e quadros de rosas"/><figcaption>Quartos aconchegantes</figcaption></figure>
          <figure className="gallery-item"><img src={ambJardim.url} loading="lazy" alt="Jardim gramado com mesa e piscina para dias de sol"/><figcaption>Jardim com piscina</figcaption></figure>
          <figure className="gallery-item"><img src={ambSala.url} loading="lazy" alt="Sala de estar com poltronas confortáveis"/><figcaption>Sala de estar</figcaption></figure>
          <figure className="gallery-item"><img src={ambConvivencia.url} loading="lazy" alt="Área coberta de convivência ao lado da piscina"/><figcaption>Área de convivência</figcaption></figure>
          <figure className="gallery-item"><img src={ambRefeicoes.url} loading="lazy" alt="Mesa de refeições na área coberta e jardim"/><figcaption>Refeições ao ar livre</figcaption></figure>
          <figure className="gallery-item"><img src={quartos2.url} loading="lazy" alt="Quarto compartilhado com dois leitos, abajures e quadros de flores"/><figcaption>Quartos compartilhados</figcaption></figure>
          <figure className="gallery-item"><img src={quartoIndividualNovo.url} loading="lazy" alt="Quarto individual claro com leito numerado e abajur aceso"/><figcaption>Quarto individual</figcaption></figure>
        </div>
        <div className="structure-grid">
          <article className="structure-card"><BedDouble/><h3>Quartos individuais e compartilhados</h3><p>Conheça as acomodações e consulte as opções disponíveis para seu familiar.</p></article>
          <article className="structure-card"><Leaf/><h3>Jardim e área externa</h3><p>Plantas, luz natural e espaços ao ar livre fazem parte do nosso recanto.</p></article>
          <article className="structure-card"><Users/><h3>Áreas de convivência</h3><p>Sala de estar e ambientes cobertos para compartilhar momentos em companhia.</p></article>
          <article className="structure-card"><CalendarDays/><h3>Conheça pessoalmente</h3><p>Combine uma visita para conhecer a casa e conversar sobre os cuidados e valores.</p></article>
        </div>
        <div className="gallery-cta"><Contact>Quero conhecer os ambientes</Contact></div>
      </div></section>
      <section id="equipe" className="section container-wide team-grid">
        <img className="team-photo" src={team.url} loading="lazy" alt="As cinco integrantes da equipe do Recanto Dona Vida juntas"/>
        <div className="team-copy"><div className="eyebrow">Quem cuida, cuida com o coração</div><h2>Uma equipe.<br/><em>Muitos gestos de amor.</em></h2><p>O Recanto Dona Vida nasceu de uma história muito pessoal: uma das proprietárias buscava um lugar onde sua mãe, que vive com Alzheimer, pudesse ser acolhida com todo o carinho e a atenção que merecia.</p><p>Desse desejo nasceu o nosso recanto. O cuidado pensado para uma mãe se estendeu a cada idoso que faz parte da nossa casa.</p><div className="team-quote">“O cuidado que queremos para a nossa família é o cuidado que oferecemos à sua.”</div><p>Nossas profissionais unem experiência e afeto para que cada pessoa seja vista, respeitada e acolhida como parte da família.</p><Contact className="contact-button">Converse com a nossa equipe</Contact></div>
      </section>
      <Reviews />
      <section id="duvidas" className="section faq-section"><div className="container-wide faq-layout"><div className="faq-heading"><div className="eyebrow">Uma decisão com mais tranquilidade</div><h2>Perguntas que merecem<br/><em>uma boa conversa.</em></h2><p>Respostas para as dúvidas das famílias.</p><Contact className="hero-cta">Tirar outra dúvida</Contact></div><div className="faq-list">{questions.map(item => <details key={item.question} className="faq-item"><summary>{item.question}<ChevronDown size={19}/></summary><p>{item.answer}</p></details>)}</div></div></section>
      <section id="visita" className="section visit-section"><div className="container-wide visit-inner"><div className="eyebrow"><Heart size={14}/> Estamos aqui para ouvir você</div><h2>Vamos conversar<br/>sobre o seu familiar?</h2><p>Conte um pouco sobre quem você ama. Vamos ouvir suas necessidades, esclarecer suas dúvidas e conversar sobre como o Recanto Dona Vida pode acolher sua família.</p><Contact className="hero-cta">Conversar sobre meu familiar</Contact><a className="visit-address" href={mapsUrl} target="_blank" rel="noopener noreferrer" title="Abrir no mapa"><MapPin size={15}/><span>Rua Campo Comprido, 33 · Vila Romero<br/>São Paulo – SP · <u>Ver no mapa</u></span></a></div></section>
    </main>
    <footer className="site-footer"><div className="container-wide">
      <div className="footer-grid">
        <div className="footer-about">
          <div className="footer-brand">Recanto <em>Dona Vida</em></div>
          <p className="footer-tagline">Onde a vida é cuidada com carinho. Casa de repouso familiar em São Paulo, com enfermeiras responsáveis e uma equipe experiente.</p>
          <div className="footer-rating"><span>10 avaliações no Google</span></div>
        </div>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <strong>Navegue pelo site</strong>
          {nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="footer-contact">
          <strong>Fale com a gente</strong>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="footer-icon"/> {phoneDisplay}</a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> {instagramHandle}</a>
          <a className="footer-address" href={mapsUrl} target="_blank" rel="noopener noreferrer" title="Abrir no mapa"><MapPin size={16}/> <span>{address}<br/><u>Como chegar (abrir no mapa)</u></span></a>
          <span className="footer-note">Visitas com agendamento prévio.<br/>São Paulo — SP</span>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Recanto Dona Vida · Todos os direitos reservados.</span><span>Feito com carinho em São Paulo.</span></div>
    </div></footer>
    <Button asChild variant="care" className="floating-whatsapp"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o Recanto Dona Vida pelo WhatsApp" title="Converse pelo WhatsApp"><WhatsAppIcon/></a></Button>
  </>;
}
