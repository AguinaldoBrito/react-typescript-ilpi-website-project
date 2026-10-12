<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the institutional website as one index route with anchored sections; the content is a single continuous visit-to-contact journey.
- Keep contact destinations and the prefilled message centralized in one browser-safe module; all contact buttons must use the same destination.
- Open every external link (WhatsApp wa.me, Instagram, Google Maps) through openExternal in a new top-level tab, falling back to top-window navigation; these sites refuse to load inside frames such as the editor preview.
- Use native details/summary for the anchored FAQ section; this provides accessible disclosure without a client-only dependency.
- Use uploaded asset pointers for brand and team photography, and only publish testimonials transcribed from supplied evidence; this preserves authentic identity and avoids fabricated social proof.
- Keep testimonial cards in the dedicated Reviews component using the existing Embla carousel, with manual navigation and no autoplay; this preserves readable, accessible reviews across screen sizes.
