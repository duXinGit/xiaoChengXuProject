"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../request/index");
exports.getSwiperList = function () {
    return index_1.request({
        url: '/home/swiperdata',
        method: 'GET'
    });
};
exports.getCatesList = function () {
    return index_1.request({
        url: '/home/catitems',
        method: 'GET'
    });
};
exports.getFloorList = function () {
    return index_1.request({
        url: '/home/floordata',
        method: 'GET'
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUEyQztBQUU5QixRQUFBLGFBQWEsR0FBRztJQUMzQixPQUFBLGVBQU8sQ0FBQztRQUNOLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsTUFBTSxFQUFFLEtBQUs7S0FDZCxDQUFDO0FBSEYsQ0FHRSxDQUFBO0FBRVMsUUFBQSxZQUFZLEdBQUc7SUFDMUIsT0FBQSxlQUFPLENBQUM7UUFDTixHQUFHLEVBQUUsZ0JBQWdCO1FBQ3JCLE1BQU0sRUFBRSxLQUFLO0tBQ2QsQ0FBQztBQUhGLENBR0UsQ0FBQTtBQUVTLFFBQUEsWUFBWSxHQUFHO0lBQzFCLE9BQUEsZUFBTyxDQUFDO1FBQ04sR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixNQUFNLEVBQUUsS0FBSztLQUNkLENBQUM7QUFIRixDQUdFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcIi4uL3JlcXVlc3QvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTd2lwZXJMaXN0ID0gKCkgPT5cclxuICByZXF1ZXN0KHtcclxuICAgIHVybDogJy9ob21lL3N3aXBlcmRhdGEnLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2F0ZXNMaXN0ID0gKCkgPT5cclxuICByZXF1ZXN0KHtcclxuICAgIHVybDogJy9ob21lL2NhdGl0ZW1zJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZsb29yTGlzdCA9ICgpID0+XHJcbiAgcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvaG9tZS9mbG9vcmRhdGEnLFxyXG4gICAgbWV0aG9kOiAnR0VUJ1xyXG4gIH0pXHJcbiJdfQ==