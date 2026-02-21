"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LINKS } from "@/lib/constants";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden rounded-3xl border border-white/15 bg-hero-gradient p-6 md:p-10">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-indigo-400/35 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 right-0 h-52 w-52 rounded-full bg-cyan-300/25 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="mb-3 inline-flex items-center rounded-full border border-cyan-200/30 bg-cyan-200/10 px-3 py-1 text-xs font-medium text-cyan-100">
            Local-first bridge for Android + Mac
          </p>
          <h1 id="hero-title" className="text-balance text-3xl font-extrabold leading-tight text-white md:text-5xl">
            휴대폰 확인을 줄이고,
            <br />
            문자 흐름은 끊기지 않게.
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/78 md:text-lg">
            Tang!은 Android에서 올라오는 문자/수신 전화 알림을 Mac 메뉴바로 릴레이합니다.
            업무 중 시선을 흩트리지 않고, 필요한 알림만 빠르게 확인하세요.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="focus-ring group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(77,171,255,0.45)]"
              href={LINKS.macDownload}
              target="_blank"
              rel="noreferrer"
            >
              <span className="relative z-10">macOS 다운로드</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-5 text-sm font-semibold text-white/90 backdrop-blur-lg hover:bg-white/10"
              href={LINKS.androidApk}
              target="_blank"
              rel="noreferrer"
            >
              Android 다운로드
            </a>
            <a className="focus-ring text-sm font-medium text-cyan-200 hover:text-cyan-100" href={LINKS.releases} target="_blank" rel="noreferrer">
              Releases 확인
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">로컬 네트워크 우선 · 클라우드 필수 의존 없음 · 토큰 기반 페어링</p>
        </div>

        <div className="glass rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-white/55">Workflow preview</p>
          <div className="mt-3 space-y-3">
            <div className="rounded-xl border border-white/15 bg-black/20 p-3">
              <p className="text-sm font-semibold text-white">Android 알림 수신</p>
              <p className="mt-1 text-xs text-white/70">Samsung/Google Messages 알림 이벤트 감지</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/20 p-3">
              <p className="text-sm font-semibold text-white">Tang Local Relay</p>
              <p className="mt-1 text-xs text-white/70">동일 Wi-Fi에서 인증된 세션으로 전달</p>
            </div>
            <div className="rounded-xl border border-white/15 bg-black/20 p-3">
              <p className="text-sm font-semibold text-white">Mac 메뉴바 표시</p>
              <p className="mt-1 text-xs text-white/70">업무 흐름을 끊지 않고 즉시 확인</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
