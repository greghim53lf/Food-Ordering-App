import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="shadow-md">
      <img
        src={hero}
        alt="hero"
        className="w-full max-h-[600px] object-contain"
      />
    </section>
  );
}
