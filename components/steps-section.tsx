import { STEPS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function StepsSection() {
  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-24">
      <Reveal>
        <h2 id="how-title" className="text-2xl font-bold text-white md:text-3xl">
          How it works
        </h2>
      </Reveal>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {STEPS.map((step, idx) => (
          <Reveal key={step.title} delay={idx * 0.08} className="glass rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-200/90">Step {idx + 1}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{step.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-4 rounded-xl border border-amber-100/25 bg-amber-100/10 px-4 py-3 text-sm text-amber-50/90">
        APK 직접 설치를 선택하는 경우, Android 보안 설정에서 알 수 없는 앱 설치 허용이 필요할 수 있습니다.
      </Reveal>
    </section>
  );
}
