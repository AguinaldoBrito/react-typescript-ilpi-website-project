import type { MouseEvent } from "react";

const phone = "5511910950792";
const message = encodeURIComponent("Olá! Tenho interesse em conhecer o Recanto Dona Vida. Gostaria de saber mais sobre os cuidados, valores e agendar uma visita à casa de repouso.");
export const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

export function openWhatsApp(event: MouseEvent<HTMLAnchorElement>) {
  // Open outside the editor's frame: WhatsApp refuses embedded navigation.
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const destination = mobile ? whatsappUrl : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
  event.currentTarget.href = destination;
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  window.open(destination, "_blank", "noopener,noreferrer");
}
export const instagramUrl = "https://www.instagram.com/recantodonavida/";