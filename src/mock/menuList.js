export default [
  {
    name: '首页',
    url: 'admin/home',
    key: 'home',
    parent_key: 'root',
  },
  {
    name: '平台管理',
    url: 'admin/platformManagement',
    key: 'platformManagement',
    parent_key: 'root',
    children: [
      {
        name: '轮播图管理',
        url: 'admin/platformManagement/carousel',
        key: 'carousel',
        parent_key: 'platformManagement'
      },
      {
        name: '类别管理',
        url: 'admin/platformManagement/category',
        key: 'category',
        parent_key: 'platformManagement'
      }
    ]
  },
  {
    name: '消息管理',
    url: 'admin/messageManagement',
    key: 'messageManagement',
    parent_key: 'root'
  }, {
    name: '权限管理',
    url: 'admin/limits',
    key: 'limits',
    parent_key: 'root'
  }
];
