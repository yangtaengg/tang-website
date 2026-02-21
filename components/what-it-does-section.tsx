import { Reveal } from "@/components/reveal";

export function WhatItDoesSection() {
  return (
    <section id="what" aria-labelledby="what-title" className="scroll-mt-24">
      <Reveal>
        <h2 id="what-title" className="text-2xl font-bold text-white md:text-3xl">
          What it does
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-white/75 md:text-lg">
          Android에서 발생한 문자/수신 전화 알림을 감지하고,
          로컬 네트워크 브릿지로 Mac 메뉴바 앱에 전달합니다.
          중요한 알림 맥락을 놓치지 않되, 휴대폰을 자주 들어 확인할 필요를 줄입니다.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-6">
        <div className="glass rounded-2xl p-4 md:p-6" role="img" aria-label="Tang UI preview placeholder">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-white/15 bg-black/20 p-4">
              <p className="text-xs text-white/55">Android</p>
              <div className="mt-3 space-y-2">
                <div className="h-10 rounded-lg bg-white/10" />
                <div className="h-10 rounded-lg bg-white/10" />
                <div className="h-10 rounded-lg bg-white/10" />
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/20 p-4">
              <p className="text-xs text-white/55">macOS Menu Bar</p>
              <div className="mt-3 space-y-2">
                <div className="h-8 rounded-lg bg-cyan-200/20" />
                <div className="h-8 rounded-lg bg-white/10" />
                <div className="h-8 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
