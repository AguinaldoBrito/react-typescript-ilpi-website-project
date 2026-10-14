# Recanto Dona Vida — Site Institucional

Site institucional responsivo para uma ILPI (Instituição de Longa Permanência para Idosos) em São Paulo, com foco em conversão via WhatsApp, SEO e acessibilidade.

**Em produção:** [recantodonavida.com](https://www.recantodonavida.com)

## Stack

- **React 19** + **TypeScript**
- **TanStack Start v1** (SSR/SSG, roteamento baseado em arquivos, server functions)
- **Vite 7** como bundler
- **Tailwind CSS v4** (tokens semânticos via CSS nativo, sem `tailwind.config.js`)
- **shadcn/ui** + **Lucide** (componentes e ícones)
- **Embla Carousel** (carrossel de depoimentos com navegação manual)
- **Vitest** (testes)

## Decisões de arquitetura

- **Rota única com seções ancoradas** — o conteúdo é uma jornada contínua (boas-vindas → sobre → cuidados → ambientes → equipe → depoimentos → FAQ → contato), com navegação por âncoras no header.
- **Contatos centralizados** — todos os destinos (WhatsApp, Instagram, Google Maps) e a mensagem pré-preenchida vivem em `src/lib/contact.ts`; qualquer botão de contato usa a mesma fonte.
- **Links externos com fallback** — `openExternal` abre em nova aba top-level com fallback de navegação, contornando bloqueios de iframe em previews.
- **FAQ acessível sem dependência** — `details/summary` nativo, sem componente client-only.
- **Galeria com lightbox** — fotos clicáveis expandem em tela cheia, com navegação por setas, teclado (Esc/setas) e clique fora para fechar.
- **Depoimentos reais** — carrossel Embla manual (sem autoplay), apenas avaliações transcritas de evidências fornecidas pelo cliente.
- **Head metadata por rota** — título, descrição, Open Graph e Twitter Cards configurados via `head()` do TanStack Router.

## Rodando localmente

```sh
npm i
npm run dev
```

## Testes

```sh
npx vitest run
```

---

Projeto construído com [Lovable](https://lovable.dev).
