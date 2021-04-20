// index.ts
// 获取接口
import { getSwiperList, getCatesList, getFloorList } from "../../api/index";
// 获取应用实例
//const app = getApp<IAppOption>();

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    catesList: [],
    // 楼层数据
    floorList: [],
  },
  onLoad() {
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  // 获取轮播图数据
  getSwiperList() {
    getSwiperList().then(res => {
      this.setData({
        swiperList: res,
      })
    })
  },
  // 获取分类导航数据
  getCatesList() {
    getCatesList().then(res => {
      this.setData({
        catesList: res,
      })
    })
  },
  // 获取楼层数据
  getFloorList() {
    getFloorList().then(res => {
      this.setData({
        floorList: res,
      })
    })
  }
})
