import { stringify } from 'qs';
import request from '../utils/request';
const APIROOT = 'https://zaihu.zhangguanzhang.com/zaihu'
// const APIROOT = 'http://localhost:8080/zaihu'

// 获取订单信息
export async function queryOrderTypeInfor(params) {
  return request(`${APIROOT}/get_type_infor_list?${stringify(params)}`);
}

// 修改订单信息
export async function editOrderTypeInfor(params) {
  return request(`${APIROOT}/update_type_infor`, {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 获取用户列表
export async function getUserList() {
  return request(`${APIROOT}/get_user_list`);
}

// 获取个人信息
export async function getUserInfo(params) {
  return request(`${APIROOT}/get_user_infor?${stringify(params)}`);
}


export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}



export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}
