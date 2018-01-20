import { getOrderList } from '../../api/index.js'
import { serviceNumber } from '../../config.js'

Page({
  data: {
    orderList: []
  },
  onLoad: function() {
    const $that = this

    // 发送请求，获取地址
    wx.login({
      success: res => {
        const { code } = res

        if (code) {
          getOrderList({
            query: {
              loginCode: code
            },
            success: function (res) {
              const { data = {} } = res
              const{ data: orderList } = data

              $that.setData({
                orderList
              })
            },
            fail: function (err) {
              console.log(err)
            }
          })
        }
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  callService: function () {
    wx.makePhoneCall({
      phoneNumber: serviceNumber
    })
  }
})
