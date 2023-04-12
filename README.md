# 바닐라 자바스크립트 복습 및 연습용 클론코딩


강의 제목 : 바닐라 JS로 크롬 앱 만들기<br>
강의 url : https://nomadcoders.co/javascript-for-beginners <br>
강의 내용 : HTML, CSS, JAVASCRIPT를 이용한 Momentum Chrome 어플 클론코딩 <br>

---

# [강의와 다른 점] 

### 강의 내용에는 나오지 않았지만 본인이 구현하고 싶었던 요소들을 직접 서치하고 학습하여 수정 및 적용
<br>

0. 강의에서는 기본적인 바닐라 자바스크립트 기능 구현에만 초점을 두고 디자인적인 css 내용은 나오지 않음
<br>$\to$ 가독성과 디자인 요소를 고려해 css 수정 및 삽입

1. 강의는 명언을 직접 array로 입력
<br>$\to$ 명언을 불러오는 api ( https://dummyjson.com/quotes ) 를 호출해 html에 적용


2. 강의는 배경화면 이미지를 직접 프로젝트 내에 저장하여 불러옴
<br>$\to$ unsplash api로 배경화면 이미지를 호출하여 배경화면으로 지정<br>

3. 강의내용 그대로 코드를 작성하면 todo input에 빈값이 들어갔을때 유효성 테스트를 하지 않고 null값이 그대로 todo 요소로 들어가게 됨
<br>$\to$ validateForm()을 추가해 유효성 검사를 하게 함 

&nbsp;&nbsp;&nbsp;(3번에서 개선해야 할 점)<br>
* required 속성이 적용되지 않음<br>
* 빈칸으로 엔터를 누르면 null값이 입력되지는 않지만 경고창이 없음 
<br>- (alert창 말고 다른 방법을 사용하기 위해 서치해보는 중)
