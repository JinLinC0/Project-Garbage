const app = getApp();
// radio-group.js
Page({
  radioChange: function(e) {
    const selectedValue = e.detail.value;
    let title = '';
    let content = '';
    if (selectedValue === '4') {
      title = '回答正确';
      content = '恭喜你选择了正确的垃圾分类！';
    } else {
      title = '回答错误';
      content = '干电池是干垃圾！';
    }
    wx.showModal({
      title: title,
      content: content,
      showCancel: false
    });
  },

  radioChangeTwo: function(e) {
    const selectedValue = e.detail.value;
    let title = '';
    let content = '';
    if (selectedValue === '1') {
      title = '回答正确';
      content = '恭喜你选择了正确的垃圾分类！';
    } else {
      title = '回答错误';
      content = '玻璃瓶是可回收垃圾！';
    }
    wx.showModal({
      title: title,
      content: content,
      showCancel: false
    });
  },

  radioChangeThree: function(e) {
    const selectedValue = e.detail.value;
    let title = '';
    let content = '';
    if (selectedValue === '3') {
      title = '回答正确';
      content = '恭喜你选择了正确的垃圾分类！';
    } else {
      title = '回答错误';
      content = '茶叶是湿垃圾！';
    }
    wx.showModal({
      title: title,
      content: content,
      showCancel: false
    });
  }
})