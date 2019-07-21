import Vue from 'vue' //  vue로부터 vue 가져오기
import Router from 'vue-router' // router로부터 vue-router 가져오기

import Main from '@/components/Main/Main' // @/components/Main/Main로부터 Main으로 가져오기
import Address from '@/components/Address/Address'  // '@/components/Address/Address로부터 Address로 가져오기
import Calendar from '@/components/Calendar/Calendar' // @/components/Calendar/Calendar로부터 Calender 가져오기

Vue.use(Router) // 뷰라우터 등록

export default new Router({ //  라우터 인스턴스 생성
  mode: 'history',  // 히스토리모드 해시 제거
  routes: [ // routes
    {
      path: '/',  //
      name: 'Main',
      component: Main
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
