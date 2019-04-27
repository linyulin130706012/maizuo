import Mock from 'mockjs';

Mock.mock('/api/getFilm', {
  'status|1': [0, -1],
  'msg': function () {
    if (this.status == 0) {
      return 'ok';
    } else {
      return 'error';
    }
  },
  'data': {
    'total|10-20': 1,
    'films|2-10': [{
      'poster': '@image',
      'name': '@cname'
    }]
  }
});