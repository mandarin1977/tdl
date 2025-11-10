# Firebase 소셜 로그인 설정 가이드

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 후 생성

## 2. 웹 앱 추가

1. Firebase 프로젝트 대시보드에서 "웹" 아이콘 클릭 (</>)
2. 앱 닉네임 입력
3. "Firebase Hosting도 설정" 체크 (선택사항)
4. "앱 등록" 클릭
5. Firebase 설정 정보 복사

## 3. Firebase 설정 정보 입력

`src/firebase/config.js` 파일을 열고 다음 정보를 실제 Firebase 설정으로 교체하세요:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",                    // 실제 API 키로 교체
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",  // 실제 도메인으로 교체
  projectId: "YOUR_PROJECT_ID",              // 실제 프로젝트 ID로 교체
  storageBucket: "YOUR_PROJECT_ID.appspot.com",   // 실제 스토리지 버킷으로 교체
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  // 실제 메시징 발신자 ID로 교체
  appId: "YOUR_APP_ID"                        // 실제 앱 ID로 교체
}
```

## 4. Authentication 설정

1. Firebase Console에서 "Authentication" 메뉴 클릭
2. "Sign-in method" 탭 클릭
3. "Google" 제공업체 활성화
   - "사용 설정" 토글 ON
   - 프로젝트 지원 이메일 선택
   - "저장" 클릭

## 5. Firestore Database 설정

1. Firebase Console에서 "Firestore Database" 메뉴 클릭
2. "데이터베이스 만들기" 클릭
3. "테스트 모드로 시작" 선택 (개발 중)
4. 위치 선택 (가장 가까운 지역)
5. "사용 설정" 클릭

## 6. 보안 규칙 설정 (프로덕션 모드 필수!)

프로덕션 모드로 시작한 경우, 반드시 보안 규칙을 설정해야 합니다.

### Firestore 보안 규칙 설정 방법:

1. Firebase Console에서 "Firestore Database" 메뉴 클릭
2. "규칙" 탭 클릭
3. 다음 규칙을 입력하고 "게시" 클릭:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // users 컬렉션: 인증된 사용자가 자신의 데이터만 읽고 쓸 수 있음
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // 다른 컬렉션이 있다면 여기에 추가
  }
}
```

**중요:** 프로덕션 모드에서는 보안 규칙 없이는 데이터를 읽거나 쓸 수 없습니다!

## 7. 사용 방법

### Google 로그인
- 로그인 화면에서 "Google로 로그인" 버튼 클릭
- Google 계정 선택
- 자동으로 사용자 데이터가 Firestore에 저장됨

### 기존 이메일/비밀번호 로그인
- 기존 방식 그대로 사용 가능
- localStorage에 저장됨

## 8. 추가 소셜 로그인 제공업체

다른 소셜 로그인(카카오, 네이버 등)을 추가하려면:

1. Firebase Console > Authentication > Sign-in method
2. 원하는 제공업체 활성화
3. `src/firebase/config.js`에 해당 제공업체 추가
4. `src/utils/firebaseAuth.js`에 로그인 함수 추가

## 주의사항

- Firebase 설정 정보는 절대 Git에 커밋하지 마세요
- `.env` 파일을 사용하여 환경 변수로 관리하는 것을 권장합니다
- 프로덕션 환경에서는 Firestore 보안 규칙을 반드시 설정하세요

