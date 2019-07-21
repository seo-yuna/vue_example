<template>	// template
	<div>	// div
		<v-header title="Vue.js Example Code"></v-header>	// v-header title 는 vue.js example code 제목표시
		<div class="md-layout md-gutter">	// class는 m-layout md-gutter
			<div	// div
				class="md-layout-item"	// class는 md-layout-item
				v-for="data in mainData">	// v-for는 data in maindata maindata 데이터 배열 렌더링
				<card	// card
					:title="data.title"	// 타이틀 data.title
					:desc="data.desc"	// desc data.desc
					:link="data.link"// 	link data.link
					:imgUrl="data.imgUrl">	// imgURL data.imgURL
				</card>	// key 속성 제공
			</div>
		</div>
	</div>
</template>

<script>
	import Card from './Components/Card';	// Components/Card에서 card로 모듈 가져오기
	import Header from '../SharedComponent/Header';	// /SharedComponent/Header에서 Header로 모듈 가져오기

  export default {	// 하나의 모듈 내보내기
    name: 'Main',	// 이름 Main
		components: {	// 컴포넌트
      'card': Card,	// card : Card 컴포넌트 명시
			'v-header': Header	// v-header : Header 컴포넌트 명시
		},
    data () {	// data
      return {	// 반환
        mainData: [	// mainData
					{
					  title: "ADDRESS",	// 타이틀 : ADDRESS 설정
						link: "/address",	// 링크 : address 설정
						imgUrl: "https://ak9.picdn.net/shutterstock/videos/14941789/thumb/1.jpg?i10cx3dimg.resize(height:160)",	// imgUrl
						desc: "Just Local Address"	// desc : Just Local Address
					},
          {
            title: "CALENDAR ",	// 타이틀 CALENDER 설정
            link: "/calendar",	// 링크 : calender 설정
            imgUrl: "https://media.gettyimages.com/photos/calendar-page-background-picture-id643126222?b=1&k=6&m=643126222&s=612x612&w=0&h=2NzlkCzSQ0foeHG_tjaf2vA4J3tgUaCSK28yTMMmYR0=", 	// imgUrl
            desc: "Just Calendar"	// desc Just Calender
          },
          {
            title: "TEST",	// title : TEST 설정
            link: "/",	// link : 없음
            imgUrl: "http://www.w3.org/Graphics/PNG/text2.png", 	// 이미지Url
						desc: "JUST TEST"	// desc JUST TEST
          }
				]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->	// 주석
<style scoped>	// css
	.md-layout {	// md-layout
		margin-left: auto;	// 바깥쪽 왼쪽 여백 자동
		margin-right: auto;	// 바깥쪽 오른쪽 여백 자동
		text-align: center;	// 텍스트 중앙정렬
		width: 1000px;	// 가로길이 100픽셀
	}
</style>
