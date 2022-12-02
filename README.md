# FreeDSoft Frontend Assignment

![pokemon-search](https://user-images.githubusercontent.com/77032760/205301954-3775555b-6ab0-4802-a4c0-876d6f5d9851.gif)

## 로컬 실행 방법

```bash
$ cd pokemon-search
$ yarn
$ yarn dev
```

## 기술 스택

- TypeScript
- Next.js
- Emotion

## 주요 기능

### Search Form

- id로 포켓몬 검색
- axios로 데이터 fetch
- input validation: id를 입력하지 않았거나 현재 결과와 동일한 id 검색 시 fetch 막음
- 랜덤 포켓몬 검색: 사용자의 진입 장벽을 낮추고 호기심을 유발하기 위해 id를 입력하지 않아도 랜덤 검색 결과를 볼 수 있는 기능 추가

### Search Result

- 포켓몬 정보: 이름, id, 이미지, 타입
- 로딩 애니메이션: 포켓볼이 흔들리는 애니메이션 사용
- 에러 메시지: 존재하지 않거나 유효하지 않은 id로 검색 시 표시
