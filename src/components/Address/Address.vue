<template>	// 템플릿
	<div>	// div
		<v-header title="ADDRESS"></v-header>	// 타이틀은 ADDRESS
		<div class="md-layout md-gutter">	// 클래스는 md-layout md-gutter
			<div class="md-layout-item">	// class는 md-layout-item
				<div class="table__container">	// class는 table__container
					<div class="table__header">	// class는 table__header
						<h3>My Address</h3>	// 제목 Address
					</div>	// 닫기

					<div class="table__content">	// class는 table__content
						<tableRow	// tableRow
							flag="first"	// flag는 first
							:index="0"	// index는 0
							:input-data="{ type:'person', data:rowTitle }">	// input daat 타입은 person 데이터는 rowTitle
						</tableRow>

						<div v-for="(person, idx) in people">	// person, idx 요소를 people에서 반복되면서 불러옴.
							<tableRow	 // tableRow
								@removePerson="removePerson"	// removePerson은 removePerson
								:index="idx+1"	// index는 idx + 1
								:input-data="{ type:'person', data:person }"></tableRow>	// input data 타입은 person
						</div>	// div 닫기

						<tableRow	// tableRow
							@addPerson="addPerson"	// addPerson은 addPerson
							flag="add"	// flag는 add
							:index="people.length + 1"	// imdex는 people.length + 1
							:input-data="{ type:'person', data:null }">	// input-data 타입은 person 데이터는 null
						</tableRow>	// tableRow 닫기
					</div>	// 닫기
				</div>	// 닫기
			</div>	// 닫기
		</div>	// 닫기
	</div>	// 닫기
</template>	// 닫기

<script>	// 스크립트
	import TableRow from './Components/tableRow'; 	// components/tableRow에서 TableRow로 모듈 가져오기
  import Header from '../SharedComponent/Header';	// /SharedComponent/Header에서 Header로 모듈 가져오기

  export default {	// 모듈 내보내기
    name: 'Address',	// 이름 : Address
		components: {	// 컴포넌트
			'tableRow': TableRow,	// tableRow : TableRow
      'v-header': Header	// v-header : Header
		},
    data () {	// data 함수
      return {	// 반환
        selected: [],	// selected 비어있음
				rowTitle: {	// rowTitle
          name: "NAME",	// name : NAME
					email: "EMAIL",	// email : 	email
					gender: "GENDER",	 // gender : GENDER
					title: "MEMO"	// title : MEMO
				},
        people: [	// people
          {
            name: 'Shawna Dubbin',	// 이름 : Shawna Dubbin
            email: 'sdubbin0@geocities.com',	// 이메일 : sdubbin0@geocities.com
            gender: 'Male',	// 성별 : Male
            title: 'Assistant Media Planner'	//	타이틀 : Assistant Media Planner
          },
          {
            name: 'Odette Demageard',	// name : Odette Demagerd
            email: 'odemageard1@spotify.com',	// email : odemageard1@spotify.com
            gender: 'Female',	// gender : Female
            title: 'Account Coordinator'	// title : Account Coordinator
          },
          {
            name: 'Lonnie Izkovitz',	// name : Lonnie Izkovitz
            email: 'lizkovitz3@youtu.be',	// email : lizkovitz3@youtu.be
            gender: 'Female',	// gender : Female
            title: 'Operator'	// title : Operator
          },
          {
            name: 'Thatcher Stave',	// name : Thatcher Stave
            email: 'tstave4@reference.com',	// tstave4@refernce.com
            gender: 'Male',	// gender : Male
            title: 'Software Test Engineer III'	// title : Softwere Test Engineer III
          },
          {
            name: 'Clarinda Marieton',	// name : Clarinda Marieton
            email: 'cmarietonh@theatlantic.com',	// email : cmarietonh@theatlantic.com
            gender: 'Female',	// gender : Female
            title: 'Paralegal'	// title : Paralegal
          }
        ]
      }
    },
    methods: {	// 메서드
      removePerson: function(index) {	// removePerson 함수
        this.people.splice(index-1, 1)	// 배열 내용 변경
			},

			addPerson: function(data) {	// addPerson 함수
				let values = Object.values(data);	// values 는 Object.values

				for(let i=0; i<values.length; i++) {	// 반복문 i = 0, i<valus, i = i + 1
				  if(values[i] === "") { if문 아무값도 안넣을 경우
				    alert("빈값을 입력하실 수는 없습니다.")	// 경고창 빈값을 입력하실 수는 없습니다. 표시
				    return;
					}
				}

        this.people.push(data)	// people 속성 값 추가
			}
    }
  }
</script>	// 스크립트

<!-- Add "scoped" attribute to limit CSS to this component only -->	// 주석
<style scoped>	// 범위지정 css
	.md-table + .md-table {	// md-table + md-table

	}

	.md-layout {	// md-layout
		margin-left: auto;	// 왼쪽 마진 자동
		margin-right: auto;	// 오른쪽 마진 자동
	}

	.md-title {	// md-title
		text-align: center;	// 텍스트 중앙정렬
	}

</style>
