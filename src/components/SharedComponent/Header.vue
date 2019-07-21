<template>	// template
	<div class="header">	// class는 header
		<div class="md-display-1 title">{{ title }}</div>	// md-display title
		<div class="logo">	// class는 로고
			<img src="https://www.stickpng.com/assets/images/58482acecef1014c0b5e4a1e.png" alt="">
		</div>
	</div>
</template>

<script>
  export default {	// 단일 모듈 내보내기
    name: 'Header',	// 이름 Header
    props: { //	props
      title: {	 //title
        default: "",	// 기본값 : 빈 문자열
        type: String	// 타입 문자열
      }
    },
    data () {	// 데이터 함수
      return {	// 반환
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {	// 헤더
		text-align: center;	// 텍스트 중앙정렬
		width: 100%;	// 가로 길이 100%
		margin-top: 100px;	// 위쪽 바깥쪽 여백 100픽셀
		height: 100px;	// 세로 길이 100픽셀
		margin-bottom: 50px;	// 아래쪽 여백 50픽셀
	}

	.logo {	// 로고
		opacity: 0.2;	// 투명도 0.2
		margin-left: auto;	// 왼쪽 여백 자동
		margin-right: auto;	// 오른쪽 여백 자동
		width: 100px;	// 가로 길이 100픽셀
		position: relative;	// 포지션 원래 있던 위치를 기준으로 좌표 지정
		bottom: 100px;	// 요소의 아래쪽 가장자리를 100픽셀 위로 설정
	}

	.title {	// 타이틀
		margin-bottom: 40px;	// 아래쪽 여백 40픽셀
		font-weight: 700;	// 글자 굵기 700
	}
</style>
