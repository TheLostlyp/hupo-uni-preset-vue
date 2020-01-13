module.exports = [
  {
    type: 'checkbox',
    name: 'features',
    message: '请选择安装插件:',
    choices: [
      { name: 'hupo-ui', value: 'hupoUI' },
      { name: 'scss', value: 'scss' },
      { name: 'vuex', value: 'vuex' },
      { name: 'eslint', value: 'eslint' },
      { name: 'compile-upload-oss-cdn', value: 'compileUploadOssCdn' },
      { name: 'core-request-uni', value: 'coreRequestUni' }
    ],
  },
  {
    name: "jsconfig",
    type: "confirm",
    message: '添加jsconfig.json',
    default: false
  },
  {
    name: "hupoTool",
    type: "confirm",
    message: '添加hupo工具',
    default: false
  },
  {
    when: ({hupoTool}) => hupoTool,
    type: 'checkbox',
    name: 'hupoToolArr',
    message: '请选择需要安装的Hupo全局工具:',
    choices: [
      { name: 'yapi接口获取', value: 'yapi' },
      { name: '发布后钉钉消息推送', value: 'dingTalk' }
    ]
  },
  {
    when: ({hupoToolArr, hupoTool}) => hupoTool && hupoToolArr.indexOf('yapi') !== -1,
    type: 'input',
    name: 'yapiPath',
    message: '请输入接口文件生成路径',
    filter (input) {
      return new Promise(function (resolve, reject) {
        resolve(input || '')
      })
    }
  },
  {
    when: ({hupoToolArr, hupoTool}) => hupoTool && hupoToolArr.indexOf('yapi') !== -1,
    type: 'input',
    name: 'yapiToken',
    message: '请输入yapi token',
    filter (input) {
      return new Promise(function (resolve, reject) {
        resolve(input || '')
      })
    }
  },
  {
    when: ({hupoToolArr,hupoTool}) => hupoTool && hupoToolArr.indexOf('dingTalk') !== -1,
    type: 'input',
    name: 'dingTalkMobiles',
    message: '请输入项目发布后推送钉钉消息@测试的手机号码(多个号码用,隔开)',
    filter (input) {
      return new Promise(function (resolve, reject) {
        if (input.endsWith(',')) {
          input = input.substr(0,input.length - 1)
        }
        resolve(input || '')
      })
    }
  }
]


