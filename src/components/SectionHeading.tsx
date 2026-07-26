import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal>
      <p className="label-mono flex items-center gap-3 text-accent">
        <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold md:text-5xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
