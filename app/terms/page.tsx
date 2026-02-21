export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 text-white md:px-8">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-3 text-sm text-white/70">Last updated: 2026-02-21</p>

      <section className="glass mt-8 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">서비스 개요</h2>
        <p className="mt-3 leading-7 text-white/80">
          Tang!은 Android의 문자/수신 전화 알림을 Mac 메뉴바로 중계하는 로컬 우선 브릿지 앱입니다.
          서비스는 현행 기능 범위 내에서 제공되며, 기능/호환성은 버전 업데이트에 따라 변경될 수 있습니다.
        </p>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">사용자 책임</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>기기 권한 설정 및 네트워크 환경(동일 Wi-Fi) 확인</li>
          <li>APK 직접 설치 시 보안 설정 변경에 대한 책임</li>
          <li>관련 법령 및 기기 정책을 준수한 사용</li>
        </ul>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">면책</h2>
        <p className="mt-3 leading-7 text-white/80">
          네트워크 상태, OS 정책, 기기 제조사 제한 등 외부 요인으로 인해 일부 기능이 제한될 수 있습니다.
          사용자는 중요 데이터에 대해 별도 백업/확인 절차를 유지해야 합니다.
        </p>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">문의</h2>
        <p className="mt-3 text-white/80">
          약관 관련 문의: <a className="underline" href="mailto:contact@example.com">contact@example.com</a>
        </p>
      </section>
    </main>
  );
}
