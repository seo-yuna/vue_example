<template>	// 템플릿
	<div class="hello">	// class 는 hello
		<v-header title="CALENDAR"></v-header>	// title 는 CALENDER
		<div>
			<div></div>
		</div>
		<v-calendar	// 캘린더
			v-model="year"	// 표시할 연도
			:activeDates.sync="activeDates"	// array of object
			@toggleDate="toggleDate"	// 토글날짜
			prefixClass="selected__date"	//  커스터마이징 된 래퍼 클래스명
			:activeClass="activeClass"	// 토글 할 클래스 이름
		></v-calendar>
	</div>
</template>

<script>	// 스크립트
  import Header from '../SharedComponent/Header';	// SharedComponent/Header에서 모듈을 Header로 가져오기
  import YearCalendar from 'vue-material-year-calendar'	// vue-material-year-calender에서 모듈을 YearCalender로 가져오기

  export default {	// 하나의 모듈 내보내기
    name: 'Calendar',	// 이름 Calender
    components: {	// 컴포넌트
      'v-header': Header,	// v-header : Header 컴포넌트 명시
      'v-calendar':  YearCalendar	// v-calender : YeaerCalender 컴포넌트 명시
    },
    data () {	// data
      return {	// 반환
        year: 2019,	// 년도 : 2019
        activeDates: [	// activeDates
          { date: '2019-02-13' },	// 날짜 2019-02-13
          { date: '2019-02-14', className: 'red' },	// 날짜 2019-02-14 className 속성 빨간색
          { date: '2019-02-15', className: 'blue' },	// 날짜 2019-02-15 className 속성 파란색
          { date: '2019-02-16', className: 'your_customized_classname' }	// 날짜 2019-02-16 className 속성 사용자 정의
        ],
        activeClass: '',	// activeClass 빈 문자열
      }
    },
    methods: {	// 메서드
      toggleDate (dateInfo) {	// toggleDate 날짜 선택/취소 함수 호출
        console.log(dateInfo)  // { date: '2010-10-23', selected: true }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 	// 주석
<style>	// css
	.selected__date {	// selected__date
		background-color: #0aa;	// 배경색
		color: white;	// 색상 흰색
	}
</style>
