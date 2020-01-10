import packageJson from '../../package.json'
import { channel } from '@hupo/core'
export const env = {
  mock: false,
  debug: true
}
export const wechat = {
  appId: {
    H5: '',
    WX_H5: '',
    WX_MINI_PROGRAM: ''
  }
}
export const getAppId = () => wechat.appId[channel] || ''
export const version = packageJson.version

const urls = {
  prod: 'https://server-service.hupovip.cn/hpserver',
  dev: 'https://hp-server.hupovip.cn/hpserver'
}

export const localBaseUrl = env.mock ? 'https://yapi.hupovip.cn/mock/30/' : 'http://dev-hp-mall.hupovip.cn/'

export const serverUrl = env.debug ? urls.dev : urls.prod

export const styles = {
  color: {
    primary: '#dd392e'
  },
  image: {
    width: 750,
    thumb: 360
  }
}

export const page = {
  pageIndex: 1,
  pageCount: 10
}

export const systemConfig = { // 系统配置
  iosBuyMember: true,
  saveMoney: 3044,
  becomeMemberPrice: env.debug ? 10 : 9900,
  memberNumber: '50,000',
  indexCouponShowCitys: true,
  memberSubject: [],
  sendFormIdIntervalTime: 3 * 60 * 1000
}

export const acm = {
  dev: {
    group: 'DEFAULT_GROUP',
    dataId: 'cn.hupovip.mall.mobile:config.json',
    tenant: 'eb39d1b2-7751-430f-8fbb-d9f5957ad32a'
  },
  prod: {
    group: 'DEFAULT_GROUP',
    dataId: 'cn.hupovip.mall.mobile:config.json',
    tenant: 'eb39d1b2-7751-430f-8fbb-d9f5957ad32a'
  }
}
