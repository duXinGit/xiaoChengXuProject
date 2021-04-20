"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../api/index");
Page({
    data: {
        swiperList: [],
        catesList: [],
        floorList: [],
    },
    onLoad: function () {
        this.getSwiperList();
        this.getCatesList();
        this.getFloorList();
    },
    getSwiperList: function () {
        var _this = this;
        index_1.getSwiperList().then(function (res) {
            _this.setData({
                swiperList: res,
            });
        });
    },
    getCatesList: function () {
        var _this = this;
        index_1.getCatesList().then(function (res) {
            _this.setData({
                catesList: res,
            });
        });
    },
    getFloorList: function () {
        var _this = this;
        index_1.getFloorList().then(function (res) {
            _this.setData({
                floorList: res,
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlDQUE0RTtBQUk1RSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFFSixVQUFVLEVBQUUsRUFBRTtRQUVkLFNBQVMsRUFBRSxFQUFFO1FBRWIsU0FBUyxFQUFFLEVBQUU7S0FDZDtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsYUFBYTtRQUFiLGlCQU1DO1FBTEMscUJBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDdEIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsR0FBRzthQUNoQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxZQUFZO1FBQVosaUJBTUM7UUFMQyxvQkFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNyQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxHQUFHO2FBQ2YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsWUFBWTtRQUFaLGlCQU1DO1FBTEMsb0JBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsR0FBRzthQUNmLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5bmjqXlj6NcbmltcG9ydCB7IGdldFN3aXBlckxpc3QsIGdldENhdGVzTGlzdCwgZ2V0Rmxvb3JMaXN0IH0gZnJvbSBcIi4uLy4uL2FwaS9pbmRleFwiO1xuLy8g6I635Y+W5bqU55So5a6e5L6LXG4vL2NvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIC8vIOi9ruaSreWbvuaVsOe7hFxuICAgIHN3aXBlckxpc3Q6IFtdLFxuICAgIC8vIOWvvOiIquaVsOe7hFxuICAgIGNhdGVzTGlzdDogW10sXG4gICAgLy8g5qW85bGC5pWw5o2uXG4gICAgZmxvb3JMaXN0OiBbXSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0U3dpcGVyTGlzdCgpO1xuICAgIHRoaXMuZ2V0Q2F0ZXNMaXN0KCk7XG4gICAgdGhpcy5nZXRGbG9vckxpc3QoKTtcbiAgfSxcbiAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXG4gIGdldFN3aXBlckxpc3QoKSB7XG4gICAgZ2V0U3dpcGVyTGlzdCgpLnRoZW4ocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHN3aXBlckxpc3Q6IHJlcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgLy8g6I635Y+W5YiG57G75a+86Iiq5pWw5o2uXG4gIGdldENhdGVzTGlzdCgpIHtcbiAgICBnZXRDYXRlc0xpc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjYXRlc0xpc3Q6IHJlcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgLy8g6I635Y+W5qW85bGC5pWw5o2uXG4gIGdldEZsb29yTGlzdCgpIHtcbiAgICBnZXRGbG9vckxpc3QoKS50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmbG9vckxpc3Q6IHJlcyxcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufSlcbiJdfQ==