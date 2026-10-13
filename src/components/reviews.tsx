import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import henriquePhoto from "@/assets/review-henrique.png.asset.json";
import sandraPhoto from "@/assets/review-sandra.png.asset.json";
import amandaPhoto from "@/assets/review-amanda.png.asset.json";

const googleReviewsUrl = "https://www.google.com/maps?cid=12998677257205756637";

const reviews: { name: string; initials: string; stars: number; excerpt: boolean; text: string; photo?: string }[] = [
  { name: "Henrique Fernandes Ramires", initials: "HR", photo: henriquePhoto.url, stars: 5, excerpt: false, text: "Sou muito grato pelo carinho e cuidado que o Lar de Idosos Dona Vida tem com minha mãe e minha tia. Desde o início, me senti acolhido e seguro, sabendo que elas estão sendo tratadas com muito respeito, atenção e carinho. Toda a equipe é muito atenciosa e dedicada, o que nos sempre reconforta a cada visita." },
  { name: "Tamires Leal", initials: "TL", stars: 5, excerpt: false, text: "Adorei o local. Bem organizado, limpo e aconchegante. As meninas são atenciosas, simpáticas, o atendimento foi bem esclarecedor." },
  { name: "Sandra Regina Bernardo", initials: "SB", photo: sandraPhoto.url, stars: 5, excerpt: false, text: "Lugar bom obrigada limpo alimentação ótima qualidade cuidados com o paciente excelentes profissionais super recomendo." },
  { name: "Amanda Moreira", initials: "AM", photo: amandaPhoto.url, stars: 5, excerpt: false, text: "Recomendo demais .. a forma como tratam os idosos lá são como se eles fossem da família .. muitas atividades com eles. .. médico ... Nota 10 !!" },
  { name: "Alcidney Souza", initials: "AS", stars: 5, excerpt: false, text: "Residencial com ótima procedência 👏🏻👏🏻👏🏻👏🏻" },
  { name: "Ana Karolina", initials: "AK", stars: 5, excerpt: false, text: "Um Excelente Lugar , pessoas super amorosas , cuidadosas e muito atenciosas. ❤️" },
  { name: "Aline Silva", initials: "AS", stars: 5, excerpt: false, text: "Uma ótima casa.... Pessoas muito atenciosa e gentil um carinho e cuidado com paciente nota 10000" },
  { name: "Aguinaldo Brito", initials: "AB", stars: 5, excerpt: true, text: "Depois de muita procura, finalmente encontrei um lugar onde posso deixar minha sogra com tranquilidade e sem preocupações.\n\nA equipe é extremamente dedicada, atenciosa e carinhosa. É possível perceber o cuidado e o carinho com que tratam cada idoso, como se fossem membros da própria família." },
  { name: "Mayra Munhoz Soares", initials: "MS", stars: 5, excerpt: false, text: "Minha mãe está lá e adora, é super bem cuidada, as cuidadoras são muito atenciosas, pois minha mãe adora conversar. Super indico." },
];

export function Reviews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setPages(api.scrollSnapList().length);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => { api.off("select", update); api.off("reInit", update); };
  }, [api]);

  return <section id="depoimentos" className="section reviews-section"><div className="container-wide">
    <div className="section-heading"><div className="eyebrow">Confiança que vem das famílias</div><h2>Quem conhece, <em>sente o carinho.</em></h2><div className="rating"><strong>5,0</strong><span className="stars" aria-label="5 de 5 estrelas">{Array.from({ length: 5 }, (_, i) => <Star key={i} />)}</span><span>+15 avaliações no Google</span></div></div>
    <Carousel opts={{ align: "start", slidesToScroll: 1 }} setApi={setApi} aria-label="Depoimentos das famílias" className="reviews-carousel">
      <CarouselContent className="-ml-6 items-stretch">
        {reviews.map((review, index) => <CarouselItem key={review.name} className="pl-6 md:basis-1/2" aria-label={`${index + 1} de ${reviews.length}`}>
          <article className="review-card h-full">
            <span className="stars" aria-label={`${review.stars} de 5 estrelas`}>{Array.from({ length: review.stars }, (_, i) => <Star key={i} />)}</span>
            {review.text ? <blockquote className="whitespace-pre-line">“{review.text}”</blockquote> : <p className="review-no-comment">Avaliação sem comentário</p>}
            <div className="review-author"><span className="avatar shrink-0 overflow-hidden" aria-hidden="true">{review.photo ? <img src={review.photo} alt="" className="h-full w-full object-cover" loading="lazy" /> : review.initials}</span><div><strong>{review.name}</strong><small>{review.excerpt ? "Trecho de avaliação no Google" : "Avaliação no Google"}</small></div></div>
          </article>
        </CarouselItem>)}
      </CarouselContent>
      <div className="review-controls">
        <CarouselPrevious className="static translate-x-0 translate-y-0" aria-label="Avaliações anteriores" title="Avaliações anteriores" />
        <span className="review-page" aria-live="polite">{current + 1} / {pages}</span>
        <CarouselNext className="static translate-x-0 translate-y-0" aria-label="Próximas avaliações" title="Próximas avaliações" />
      </div>
    </Carousel>
    <div className="reviews-google"><Button asChild variant="link"><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">Ver todas as avaliações no Google</a></Button></div>
  </div></section>;
}