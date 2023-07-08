import Mock from 'mockjs'

Mock.mock('/api/test', 'get', {
  code: 200,
  data: {
    token: '123456789',
  },
})
