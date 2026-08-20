import { Star } from "lucide-react";

export function TestimonialCard({
  quote,
  name,
  role,
  image,
}: {
  quote: string;
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
      <div>
        <div className="mb-4 flex gap-1 text-amber">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="italic leading-relaxed text-foreground/90">"{quote}"</p>
      </div>
      <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-5">
        <img
          src={image}
          alt={`Foto ${name}`}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
