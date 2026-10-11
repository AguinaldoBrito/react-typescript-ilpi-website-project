const phone = "5511910950792";
const message = encodeURIComponent("Olá! Vim pelo site do Recanto Dona Vida e gostaria de saber mais sobre as vagas e agendar uma visita.");
// wa.me opens the WhatsApp app on mobile and WhatsApp Web on desktop,
// always in a new top-level tab (target="_blank" on the anchors), which
// avoids the frame-blocking response of api.whatsapp.com/web.whatsapp.com.
export const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
export const instagramUrl = "https://www.instagram.com/recantodonavida/";
export const instagramHandle = "@recantodonavida";
export const phoneDisplay = "(11) 91095-0792";
export const address = "R. Campo Comprido, 33 — Vila Romero, São Paulo/SP · CEP 02469-120";
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Rua Campo Comprido, 33, Vila Romero, São Paulo - SP, 02469-120")}`;

// Opens an external site (WhatsApp, Instagram, Maps) outside any embedding
// frame. WhatsApp/Instagram/Google refuse to load inside frames, so we try a
// new top-level tab first and fall back to navigating the top window.
export function openExternal(url: string) {
  const win = window.open(url, "_blank");
  if (win) { try { win.opener = null; } catch { /* ignore */ } return; }
  try { if (window.top && window.top !== window) { window.top.location.href = url; return; } } catch { /* cross-origin top */ }
  window.location.href = url;
}
