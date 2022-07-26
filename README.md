# Nomadcoders 왕초보를 위한 React Native 101 study

> 참고
> [snack.expo.dev](https://snack.expo.dev/)
> web, ipad 등에서 앱을 개발하고, 직접 simulate 할 수 있는 site.

## 1. React-Native의 작동방식

<pre>
버튼이 눌렸을 때, OS(native)가 JavaScript에게 버튼이 눌렸음을 전달.(event)
JavaScript는 event를 받고, 어떤 일을 해달라고 OS(native)에게 전달.(event)
JS는 개발자들이 운영체제를 상대로 메세지를 주고 받기 위해 사용하는 레이어일 뿐

그렇기 때문에 React Native는 Java, xcode와 같은 언어가 필요하다.
</pre>

# 2. Expo setup

Expo는 앱 전체를 컴파일하지 않아도, JS코드를 바로 전송시켜 코드를 미리보기 할 수 있도록 도와준다.<br>
(Java, xcode등이 없어도 됨!)
[doc.expo.dev](https://docs.expo.dev/)

<pre>
Requirement
    node js(LTS)
</pre>
<hr />

1. expo-cli 설치

```
npm install --global expo-cli
```

명령어를 통해 expo-cli 설치
mac os 사용자는 watchman 추가 설치 필요 [wtachman](https://facebook.github.io/watchman/docs/install#buildinstall)

```
$ brew update
$ brew install watchman
```

<hr />

2. Expo 앱 설치
   앱스토어에서 Expo 앱을 설치 및 로그인

> in Android: Expo  
> in IOS: Expo Go

<hr />

3. initialize Expo project

```
expo init my-app
```

> option: blank(첫번째) 선택

<hr />

4. app 실행
   Expo project 폴더로 이동하여 명령어 입력.

```
npm start
```

> Expo login

```
expo login
```

> Username/Email Address & Password 입력 시 앱과 연동 가능.

# 3. study

[React Native](https://reactnative.dev/)
React Native의 Component, API가 많이 줄어들은 상태이다.<br>
React Native의 공식 문서에도 community package를 사용하라고 권고.

## Component VS APIs

Component: 화면에 렌더링 할 항목(View, Text, ...)<br>
API: JavaScript code. JS코드가 운영체제와 소통하는 것(Vibration)<br>

<br>
추가적으로, ayncStorage처럼 deprecated된 기능은 커뮤니티에 의존한 package를 사요할 수 밖에 없다.<br>
**이에 Expo에서 꼭 필요한 component, API를 개발했고, 이것이 Expo SDK이다.**

```
Recap
1. React Native팀은 RN를 빠르게 만드는 것에 집중하기 위해 서비스 제공 부분을 축소시켰다.
2. 따라서 community에서 필요한 package를 받아서 사용해야 하는데, 많은 package가 있고, 몇몇은 버그나 업데이트가 없는 package들도 있다.
3. 이에 Expo에서는 우리가 필요한 package를 만들었고, 좋은 품질의 지원이 가능하다.
```
