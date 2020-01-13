const app = require('./package.json')
module.exports = {
  commands: {
    qa: ['git pull', 'git push', 'git checkout qa', 'git pull origin qa', 'git merge dev', 'git push', 'git checkout -', 'hupo dingtalk']
  },
  version: app.version,
  <% if (options.hupoToolArr.indexOf('yapi') !== -1) { %>
  // 接口
  yapi: {
    apiPath: '<%= options.yapiPath %>',
    token: '<%= options.yapiToken %>'
  },
  <% } %>
  <% if (options.hupoToolArr.indexOf('dingTalk') !== -1) { %>
  // 钉钉配置
  dingTalk: {
    url: 'https://oapi.dingtalk.com/robot/send?access_token=39eba60ccb64104e0126a2dead58594f68979f93f0989895ee918b3642f1191c',
    config: {
      msgtype: 'text',
      text: {
        content: `测试服 前端 小程序 ${app.name}@${app.version}发布成功`
      },
      at: {
        atMobiles: [<%= options.dingTalkMobiles %>],
        isAtAll: false
      }
    }
  }
  <% } %>
}
