export const LINKS = {
  // TODO: replace with actual macOS ZIP or DMG URL
  macDownload: "https://example.com/download/macos.zip",
  // TODO: replace with actual Play Store URL
  androidPlay: "https://example.com/play-store-link",
  // TODO: replace with actual APK URL
  androidApk: "https://example.com/download/android.apk",
  // TODO: replace with actual releases/changelog URLs
  releases: "https://example.com/releases/latest",
  changelog: "https://example.com/releases",
  // TODO: replace with actual contact email
  contact: "mailto:contact@example.com",
  // TODO: replace with actual repository URL
  github: "https://example.com/github",
  privacy: "/privacy",
  terms: "/terms"
};

export const DOWNLOAD_META = {
  mac: {
    file: "Tang-macOS.zip",
    os: "macOS 13+",
    version: "v0.1.x",
    checksum: "SHA256: <release checksum>"
  },
  android: {
    file: "app-debug.apk",
    os: "Android 10+",
    version: "v0.1.x",
    checksum: "SHA256: <release checksum>"
  }
};

export const BENEFITS = [
  {
    title: "5초 안에 확인",
    body: "휴대폰을 들지 않고, Mac 메뉴바에서 문자 알림을 빠르게 확인합니다.",
    icon: "zap"
  },
  {
    title: "로컬 우선",
    body: "같은 Wi-Fi 내 로컬 네트워크 브릿지로 동작합니다. 클라우드 의존을 최소화합니다.",
    icon: "network"
  },
  {
    title: "가벼운 설치",
    body: "macOS 앱 + Android 앱 설치 후 QR 또는 코드 페어링으로 바로 시작합니다.",
    icon: "feather"
  },
  {
    title: "안전한 연결",
    body: "토큰 기반 페어링 흐름으로 연결 대상을 명확히 관리합니다.",
    icon: "shield"
  }
] as const;

export const STEPS = [
  {
    title: "Install",
    body: "Mac에서 Tang! 메뉴바 앱을 실행하고 Android 앱을 설치합니다."
  },
  {
    title: "Pair",
    body: "QR 스캔 또는 6자리 코드로 기기를 연결하고 알림 접근 권한을 허용합니다."
  },
  {
    title: "Receive",
    body: "업무 중에도 문자/수신 전화 알림 흐름을 Mac에서 끊김 없이 이어갑니다."
  }
] as const;

export const FAQS = [
  {
    q: "같은 Wi-Fi에 있어야 하나요?",
    a: "네. 기본 동작은 동일 로컬 네트워크(같은 Wi-Fi) 환경을 기준으로 합니다."
  },
  {
    q: "백그라운드에서도 동작하나요?",
    a: "알림 접근 권한과 배터리 최적화 예외 설정이 올바르면 안정적으로 동작합니다."
  },
  {
    q: "권한이 왜 필요한가요?",
    a: "Android 알림 내용을 읽어 Mac에 중계하기 위해 Notification Access 권한이 필요합니다."
  },
  {
    q: "macOS에서 ‘손상됨/열 수 없음’ 경고가 떠요.",
    a: "서명되지 않은 ZIP 배포인 경우 보안 격리 해제가 필요할 수 있습니다. 릴리즈 안내의 터미널 명령을 따라주세요."
  },
  {
    q: "업데이트는 어디서 받나요?",
    a: "GitHub Releases에서 최신 macOS ZIP, Android APK, 변경 내역을 확인할 수 있습니다."
  },
  {
    q: "APK 직접 설치 시 주의할 점이 있나요?",
    a: "기기 보안 설정에서 알 수 없는 앱 설치 허용이 필요할 수 있으며, 설치 후에는 권한을 다시 점검하세요."
  }
] as const;
