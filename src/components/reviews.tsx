import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const googleReviewsUrl = "https://www.google.com/maps?cid=12998677257205756637";

const reviews = [
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
    <div className="section-heading"><div className="eyebrow">Confiança que vem das famílias</div><h2>Quem conhece, <em>sente o carinho.</em></h2><div className="rating"><span>10 avaliações no Google</span></div></div>
    <Carousel opts={{ align: "start", slidesToScroll: 1 }} setApi={setApi} aria-label="Depoimentos das famílias" className="reviews-carousel">
      <CarouselContent className="-ml-6 items-stretch">
        {reviews.map((review, index) => <CarouselItem key={review.name} className="pl-6 md:basis-1/2" aria-label={`${index + 1} de ${reviews.length}`}>
          <article className="review-card h-full">
            <span className="stars" aria-label={`${review.stars} de 5 estrelas`}>{Array.from({ length: review.stars }, (_, i) => <Star key={i} />)}</span>
            <blockquote className="whitespace-pre-line">“{review.text}”</blockquote>
            <div className="review-author"><span className="avatar shrink-0" aria-hidden="true">{review.initials}</span><div><strong>{review.name}</strong><small>{review.excerpt ? "Trecho de avaliação no Google" : "Avaliação no Google"}</small></div></div>
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