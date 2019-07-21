<template> // 템플릿
	<div>	// div열기
		<md-card	// md-card
			class="md-accent"	// class는 md-accent
			md-with-hover>	// md-with-hover
			<md-ripple>	// md-ripple
				<div @click="clickCard(link)">	// 클릭 이벤 = 클릭카드(링크)
					<md-card-media>	// md-card-midia
						<img :src="imgUrl" :alt="title">	// 이미지 지정
					</md-card-media>

					<md-card-header>	// md-card-header
						<div class="md-title">{{ title }}</div>	// 20픽셀 타이틀
						<div class="md-subhead">{{ desc }}</div>	// 16픽셀 desc
					</md-card-header>	// md-card-header
				</div>	// div닫기
			</md-ripple>	// md-ripple
		</md-card>	// md-card
	</div>	// div 닫기
</template>	// 템플릿 닫기

<script>	// 스크립트
  export default {	// 내보내기
    name: 'Card',	// 이름 Card
		props: {	// props
      title: {	// title
        default: "",	// 기본값 : 빈문자열
        type: String	// 타입 : 문자열
      },
			link: {	// 링크
        default: "",	// 기본값 : 빈문자열
        type: String	// 타입 문자열
			},
      imgUrl: {	// imgUrl
        default: "",	// 기본값 : 빈문자열
        type: String	// 타입 : 문자열
      },
			desc: {	// desc
        default: "",	// 기본값 : 빈문자열
				type: String	// 타입 : 문자열
			}
    },
    data () {	// data
      return {	// 반환
        msg: 'Card'	// msg : Card
      }
    },
		methods: {	// 메서드
			clickCard: function(link) {	// 클릭카드 함수
			  this.$router.push(link)	// router.push(link)
			}
		}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->	// 주석
<style scoped>	// css
	.md-card {	// md-card
		width: 100%;	// 가로길이 100%
		margin: 4px;	// 여백 4픽셀
		vertical-align: top;	// 위에 수직정렬
		display: block;	// 블록박스
		background: white;	// 배경 흰색
	}

	.md-card img {	// md-card-img
		height: 200px;	// 세로길이 200픽셀
		width: auto;	// 가로길이 자동
	}
</style>
