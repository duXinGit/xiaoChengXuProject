import { request } from "../request/index";

export const getSwiperList = () =>
  request({
    url: '/home/swiperdata',
    method: 'GET'
  })

export const getCatesList = () =>
  request({
    url: '/home/catitems',
    method: 'GET'
  })

export const getFloorList = () =>
  request({
    url: '/home/floordata',
    method: 'GET'
  })
