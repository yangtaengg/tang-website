import { DOWNLOAD_META, LINKS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function DownloadSection() {
  return (
    <section id="download" aria-labelledby="download-title" className="scroll-mt-24">
      <Reveal>
        <h2 id="download-title" className="text-2xl font-bold text-white md:text-3xl">
          Download
        </h2>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Reveal className="glass rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-white">macOS</h3>
          <ul className="mt-3 space-y-1 text-sm text-white/75">
            <li>파일: {DOWNLOAD_META.mac.file}</li>
            <li>요구사항: {DOWNLOAD_META.mac.os}</li>
            <li>버전: {DOWNLOAD_META.mac.version}</li>
            <li>체크섬: {DOWNLOAD_META.mac.checksum}</li>
          </ul>
          <a
            href={LINKS.macDownload}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 text-sm font-semibold text-white"
          >
            macOS ZIP 다운로드
          </a>
          <p className="mt-2 text-xs text-white/55">서명되지 않은 빌드일 수 있으므로 릴리즈 안내를 함께 확인하세요.</p>
        </Reveal>

        <Reveal delay={0.06} className="glass rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-white">Android</h3>
          <ul className="mt-3 space-y-1 text-sm text-white/75">
            <li>파일: {DOWNLOAD_META.android.file}</li>
            <li>요구사항: {DOWNLOAD_META.android.os}</li>
            <li>버전: {DOWNLOAD_META.android.version}</li>
            <li>체크섬: {DOWNLOAD_META.android.checksum}</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={LINKS.androidPlay}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 items-center justify-center rounded-xl border border-white/30 bg-white/5 px-4 text-sm font-semibold text-white/90"
            >
              Play Store
            </a>
            <a
              href={LINKS.androidApk}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 text-sm font-semibold text-white"
            >
              APK 다운로드
            </a>
          </div>
          <p className="mt-2 text-xs text-white/55">Play 링크가 없을 때는 APK를 사용하세요. 설치 후 권한 설정을 확인해주세요.</p>
        </Reveal>
      </div>
    </section>
  );
}
