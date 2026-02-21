export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-5 py-12 text-white md:px-8">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-3 text-sm text-white/70">Last updated: 2026-02-21</p>

      <section className="glass mt-8 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">요약</h2>
        <p className="mt-3 leading-7 text-white/80">
          Tang!은 Android 알림 내용을 Mac 메뉴바로 중계하기 위해 필요한 최소 정보만 사용합니다.
          기본 동작은 로컬 네트워크 환경을 기준으로 하며, 서비스 제공을 위해 필수적인 권한 외 데이터 수집을 지향하지 않습니다.
        </p>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">수집/처리되는 정보</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Android 알림 접근 권한을 통해 전달되는 문자 알림 데이터</li>
          <li>기기 페어링을 위한 토큰/연결 정보</li>
          <li>앱 동작 안정화를 위한 최소 상태 정보</li>
        </ul>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">권한 사용 목적</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Notification Access: 문자/수신 전화 알림 릴레이</li>
          <li>SEND_SMS(선택): 페어링된 수신자에게 답장 전송</li>
          <li>배터리 최적화 예외(선택): 백그라운드 연결 안정성</li>
        </ul>
      </section>

      <section className="glass mt-5 rounded-2xl p-6">
        <h2 className="text-xl font-semibold">문의</h2>
        <p className="mt-3 text-white/80">
          개인정보 및 데이터 처리 문의: <a className="underline" href="mailto:contact@example.com">contact@example.com</a>
        </p>
      </section>
    </main>
  );
}
