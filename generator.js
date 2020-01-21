module.exports = (api, options, rootOptions) => {
  // 清空默认生成的模板
  api.render(async function (files) {
    Object.keys(files).forEach(name => {
      delete files[name]
    })
  })
  api.extendPackage(pkg => {
    return {
      scripts: {
        "update": "yarn upgrade-interactive"
      },
      author: "Hupo-Team",
      dependencies: {
        '@dcloudio/uni-helper-json': '*',
        'regenerator-runtime': '^0.12.1',
        "@hupo/core": "2.0.0-uni-app.4",
      },
      devDependencies: {
        "@types/html5plus": "*",
        "@types/uni-app": "*",
        "@vue/cli-plugin-babel": "3.5.1",
        "@vue/cli-service": "^4.1.0",
        "babel-eslint": "^10.0.3",
        "babel-plugin-import": "^1.11.0",
        "eslint": "^6.3.0",
        "eslint-friendly-formatter": "^4.0.1",
        "eslint-plugin-html": "^6.0.0",
        "eslint-plugin-vue": "^5.2.3",
        "mini-types": "*",
        "miniprogram-api-typings": "^2.8.0-2",
       
      }
    }
  })

  // hupo ui
  if (options.features.indexOf('hupoUI') !== -1) {
    api.extendPackage(pkg => {
      return {
        dependencies: {
          "@hupo/ui": "2.0.0-uni-app.7",
        }
      }
    })
  }

  // scss 
  if (options.features.indexOf('scss') !== -1) {
    api.extendPackage(pkg => {
      return {
        dependencies: {
          "@hupo/core-sass-bem": "^2.0.0-uni-app.2",
        },
        devDependencies: {
          "node-sass": "^4.13.0",
          "postcss-comment": "^2.0.0",
          "sass-loader": "^8.0.0",
        }
      }
    })
  }

  // 图片上传cdn
  if (options.features.indexOf('compileUploadOssCdn') !== -1) {
    api.extendPackage(pkg => {
      return {
        devDependencies: {
          "@hupo/compile-upload-oss-cdn": "^0.1.37",
        }
      }
    })
  }

  // 网络请求
  if (options.features.indexOf('coreRequestUni') !== -1) {
    api.extendPackage(pkg => {
      return {
        dependencies: {
        "@hupo/core-request-uni": "^2.0.0-uni-app.1",
        }
      }
    })
  }

  // git commit规范
  if (options.gitCommit) {
    api.extendPackage(pkg => {
      return {
        scripts: {
          "changelog": "rm CHANGELOG.md && standard-version"
        },
        devDependencies: {
          "@commitlint/cli": "^8.3.4",
          "@commitlint/config-conventional": "^8.3.4",
          "commitizen": "^4.0.3",
          "cz-customizable": "^6.2.0",
          "husky": "^4.0.9",
          "standard-version": "^7.0.1"
        },
        config: {
          commitizen: {
            "path": "node_modules/cz-customizable"
          }
        },
        "standard-version": {
          "skip": {
            "tag": true,
            "commit": true,
            "bump": true
          },
          types: [
              {"type":"feat","section":"Features"},
              {"type":"fix","section":"Bug Fixes"},
              {"type":"chore","hidden":true},
              {"type":"docs","hidden":true},
              {"type":"style","hidden":true},
              {"type":"refactor","section":"Refactor"},
              {"type":"perf","section":"Perf"},
              {"type":"test","hidden":true},
              {"type":"revert","section":"Revert"}
            ]
        },
        husky: {
          hooks: {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
          }
        }
      }
    })
  }

  // 渲染通用文件
  api.render('./template/common')

  // eslint
  if (options.features.indexOf('eslint') !== -1) {
    api.render('./template/eslint')
  }

  // vuex
  if (options.features.indexOf('vuex') !== -1) {
    api.render('./template/vuex')
  }

  // jsconfig
  if (options.jsconfig) {
    api.render('./template/eslint')
  }

  // git commit
  if (options.gitCommit) {
    api.render('./template/gitcommit')
  }

  // hupo工具
  if (options.hupoTool) {
    api.render('./template/huoconfig')
  }
}
