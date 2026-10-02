import { person } from "@/content/site";

const src = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${person.photo}`;

/** Round crop of the portrait, centred on the face. */
export function Avatar({ size = 44, className = "" }: { size?: number; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={person.name}
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover object-[50%_38%] ring-2 ring-paper ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/** Full portrait, 4:5. */
export function Portrait({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${person.name}, ${person.role}`}
      width={640}
      height={800}
      loading="lazy"
      className={`aspect-[4/5] w-full rounded-3xl object-cover ${className}`}
    />
  );
}
