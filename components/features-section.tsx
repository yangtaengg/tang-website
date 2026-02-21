import { BENEFITS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

function Icon({ name }: { name: (typeof BENEFITS)[number]["icon"] }) {
  if (name === "zap") {
    return <span aria-hidden="true">⚡</span>;
  }
  if (name === "network") {
    return <span aria-hidden="true">🌐</span>;
  }
  if (name === "feather") {
    return <span aria-hidden="true">🪶</span>;
  }
  return <span aria-hidden="true">🛡️</span>;
}

export function FeaturesSection() {
  return (
    <section id="benefits" aria-labelledby="benefits-title" className="scroll-mt-24">
      <Reveal>
        <h2 id="benefits-title" className="text-2xl font-bold text-white md:text-3xl">
          Key benefits
        </h2>
      </Reveal>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {BENEFITS.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.06} className="glass rounded-2xl p-5">
            <p className="text-xl" aria-hidden="true">
              <Icon name={item.icon} />
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
