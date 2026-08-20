import { Star, User } from "lucide-react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image?: string;
  rating?: number;
};

export function TestimonialCard({ quote, name, role, image, rating = 5 }: Testimonial) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
      <div>
        <div className="mb-4 flex gap-1 text-amber">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-30"}`} />
          ))}
        </div>
        <p className="italic leading-relaxed text-foreground/90">"{quote}"</p>
      </div>
      <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-5">
        {image ? (
          <img
            src={image}
            alt={`Foto ${name}`}
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coffee/10 text-coffee">
            <User className="h-5 w-5" />
          </div>
        )}
        <div className="min-w-0">
          <h4 className="truncate font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
