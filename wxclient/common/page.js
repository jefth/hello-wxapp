export default function(options = {}) {
  return Page({
    // 用户点击右上角分享
    onShareAppMessage() {
      return {
        title: 'Vant Weapp 组件库演示'
      };
    },
    ...options
  });
}
