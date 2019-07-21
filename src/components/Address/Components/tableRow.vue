<template>	// 주소창 tablerow 템플릿
	<div class="row__container">	// class 이름을 row__container 준다.
		<div	// div문법시작
			:class="{'first-row': flag==='first', 'add-row': flag==='add'}"	// first-row는 first, add-row는 add
			class="row__content"	//	class는 row__content
			v-if="inputData.type==='person'">	// v-if는 inputData type이 person인 경우
			<!-- index part -->	// index part html 주석
			<div	// div 열
				class="row__content__index"	// class는 row__content__index
				v-if="index === 0">	// v-if는 index이 0인 경우
				No.	//No.
			</div>	// div 닫기
			<div	// div 열기
				class="row__content__index"	// 클래스 이름 row__content__index
				v-else>	// v-else 디렉티브 사용 index이 0이 아닌 경우
				{{ index }}	// index 속성값
			</div>	// div 닫기
			<!-- index part end -->	// index part end html 주석

			<!-- content part -->	// contemt part html 주석
			<div	// div 열기
				v-if="flag==='default' || flag==='first'"	// v-if 사용하여 조건부 블록 작성
				class="row__content__name">	// class 이름을 row__content__name로 줌.
				{{ inputData.data.name }}	// inputData.data.name 속성값 표시
			</div>	// div 닫기
			<div	// div 열기
				v-if="flag==='add'"	// v-if는 flag가 add인 경우
				class="row__content__name">	// class 이름은 row__content__name
				<input type="text" v-model="name" placeholder="JEFF">	// input type는 text, v-model은 name, input 요소에 JEFF글자 표시
			</div>	//div 닫기

			<div	// div 열기
				v-if="flag==='default' || flag==='first'"	// v-if는 flag가 default 또는 flag가 first인 경우
				class="row__content__email">	//class 이름은 row__content__email
				{{ inputData.data.email }}	// inputData.data.email 속성값
			</div>	// div 닫기
			<div	// div 열기
				v-if="flag==='add'"	// v-if는 flag가 add인 경우
				class="row__content__email">	// class 이름은 row__content__email
				<input type="text" v-model="email" placeholder="asdf@bcsdlab.com">	// 텍스트 입력 위 한 줄의 입력 필드 정의 v-model은 email, sadf@bcsdlab.com 화면 표시
			</div> // div 닫기


			<div	// div 열기
				v-if="flag==='default' || flag==='first'"	//	v-if 사용하여 조건부 블록 작성
				class="row__content__gender">	// 성별 나타내는 row
				{{ inputData.data.gender }}	// inputData.data.gender 속성값
			</div>	// div 닫기
			<div	// div 열기
				v-if="flag==='add'"	// v-if는 add 인 경우
				class="row__content__gender">	// class 이름 row__contant__gender
				<input type="text" v-model="gender" placeholder="gender">	// input type은 text, v-model gender, gender 글자표시
			</div>	// div 닫기


			<div	// div 열기
				v-if="flag==='default' || flag==='first'"	// v-if는 flag가 default 또는 first일 경우
				class="row__content__title">	// row__content__title라는 이름의 클래스 작성
				{{ inputData.data.title }}	// inputData.data.title 속성값
			</div>	// div 닫음
			<div	// div 열기
				v-if="flag==='add'"	// v-if는 flag가 add인 경우
				class="row__content__title">	// class는 row__content__title
				<input type="text" v-model="title" placeholder="ADMIN">	// input type은 text이고 v-model은 title ADMIN글자 추가
			</div> 	// div 닫기
			<!-- content part end -->	// content part end html 주석


			<div	// div 열기
				v-if="flag==='default'"	// v-if는 flag가 default인 경우
				class="row__content__remove">	// class 이름은 row__content__remove
				<md-button	// 버튼
					@click="remove"	// 클릭은 remove
					class="md-raised md-accent row__content__remove--btn">	// class는 row__content__remove--btn
					remove	// 지우기
				</md-button>	// 버튼블록 닫기
			</div>	// div 닫기
			<div	// div 열기
				v-if="flag==='add'"	// v-if는 flag가 add
				class="row__content__add">	// class이름은 row__content__add
				<md-button	// 버튼
					@click="add"	// 클릭은 add
					class="md-raised md-accent row__content__add--btn">	// class는 row__content__add--btn
					ADD	// 추가
				</md-button>	// 버튼 블록 닫기
			</div>	// div 닫기

		</div>	// 두번째 div 닫기
	</div>	// 맨 위에 있는 div 닫기
</template> template 닫기

<script>	// 자바스크립트 코드
  export default {	// 하나의 모듈 내보내기
    name: 'TableRow',	// 이름은 TableRow
    props: {	// props
      index: {	// 인덱스 객체
        default: 0,	// 기본값은 영
				type: Number	// 타입은 숫자
			},
      inputData: {	// inputData 객체
        default: {	// 기본
          type: '',	// 타입은 빈문자열
					data: null	// data는 null값
				},
				type: Object	// 타입은 객체
			},
      flag: {	//flag
        default: "default",	// default는 default
				type: String	// 타입은 문자열
			}
    },
    data () {	//data 함수
      return {	// 반환
				name: "",	// name은 빈 문자열
				email: "",	// email은 빈문자열
				gender: "",	//	gender은 빈문자열
				title: ""	// title은 빈문자열
      }
    },
    methods: {	// 메서드 함수 실행
      remove: function() {	// 지우기 : 함수 실행 시
        this.$emit("removePerson", this.index); 	// 이벤트 트리거 이벤트 네임은 removePerson 이벤트 발생
			},

			add: function() {	// 더하기 : 함수 실행 시
        this.$emit("addPerson", { 	// 이벤트 트리거 이벤트 이름은 addPerson 이벤트 발생
          name: this.name,	// 이름
					email: this.email,	// 이메일
					gender: this.gender,	// 성별
					title: this.title	// 타이틀
				})

        this.name = ""	// 이름 = 빈 문자열
        this.email = ""	// 이메일 = 빈 문자열
      	this.gender = ""	// 성별 = 빈 문자열
        this.title = ""	// 타이틀 = 빈 문자열
			}
    }
  }
</script>	// 스크립트 닫음

<!-- Add "scoped" attribute to limit CSS to this component only -->	// 주석
<style scoped> // 범위 지정 css
	.row__content {	// row__content
		width: 100%;	// 가로길이 100%
		border: 1px #bebebe solid;	// 테두리 1픽셀 스타일은 solid
		margin-bottom: -1px;	// 바깥쪽 아래 여백 -1픽셀
		height: 40px;	// 세로길이 40픽셀
		line-height: 40px;	// 줄 높이 40픽셀
		float:left;	// 왼쪽 부유하는 블록박스 생성
		text-align: center;	// 텍스트 중앙정렬
		background: #fefefe;	// 태그 배경지정
	}

	.row__content:hover {	// row__content pagination
		background: #bebebe;	// 태그 배경지정
		font-weight: 700;	// 글자 굵기 700
	}

	.first-row {	// first-row
		background: #363636;	// 배경지정
		color: white;	// 흰색
		font-weight: 700;	// 글자 굵기는 굵게
		text-align: center;	// 텍스트 중앙정렬
	}

	.first-row:hover {	// first-row 페이징
		background: #363636;	// 배경지정
	}

	.add-row {	// add row
		border: 1px solid #00bb00;	// 테두리 실선 1픽셀
		margin-bottom: 1px;	// 아래 여백 1픽셀
	}

	.add-row:hover {	// add-row pagination
		background: white;	// 배경 흰색
		font-weight: 400;	// 글자 굵기 400
	}

	.row__content__index {	// row__content__index
		float: left;	// 왼쪽 부유하는 블록 박스 생성
		width: 50px;	// 가로 길이 50 픽셀
		border-right: 1px #bebebe solid;	// 오른쪽 테두리 1픽셀
	}

	.row__content__name, .row__content__name input {	// row__content__name, row__content__name input
		float: left;	// 왼쪽 부유하는 블록 박스 생성
		border-right: 1px #bebebe solid;	// 오른쪽 테두리 1픽셀
		width: 200px;	// 가로 길이 200픽셀
	}

	.row__content__email, .row__content__email input {	// row__content__email, .row__content__email input
		float: left;	// 왼쪽 부유하는 블록 박스 생성
		border-right: 1px #bebebe solid;	// 오른쪽 테두리 1픽셀
		width: 250px;	// 가로 길이 250픽셀
	}

	.row__content__gender, .row__content__gender input {	// row__content__gender, .row__content__gender input
		float:left;	// 왼쪽 부유 박스 생성
		border-right: 1px #bebebe solid;	// 오른쪽 테두리 1픽셀
		width: 100px;	// 가로길이 100픽셀
	}

	.row__content__title, .row__content__title input  {	// row__content__title, .row__content__title input
		float: left;	// 왼쪽 부유 블록 생성
		width: calc(100% - 700px);	// 가로길이를 100%에서 700픽셀 뺀 값으로
	}

	.row__content__remove--btn, .row__content__add--btn {	//row__content__remove--btn, .row__content__add--btn
		height: 25px; // 세로 길이 25픽셀
		margin: 0;	// 바깥쪽 여백 0
		padding: 0;	// 안쪽 여백 0
		line-height: 1.2;	// 줄 높이 1.2
		font-size: 13px;	// 글자 크기 13픽셀
		color: white;	// 색상 흰색
		float: right;	// 오른쪽으로 띄운 블록 박스 생성
		margin-right: 5px;	// 오른쪽 여백 5픽셀
		margin-top: 5px;	// 위족 여백 5픽셀
	}

	.row__content__remove--btn {	// row__content__remove--btn
		background: #bb0000;	// 배경 지정
	}

	.row__content__add--btn {	// row__content__add--btn
		background: #00bb00;	// 배경지정
	}

	input {	// input
		border : none;	// 테두리 없음
		height: 38px;	// 세로길이 38픽셀
		font-size: 15px;	// 글자 크기 15픽셀
		padding-left: 10px;	// 안쪽 왼쪽 여백 10픽셀
	}

	input:focus {	// input:focus
		outline: none;	// 외곽선 없음
	}
</style>	// 스타일 닫음
