import LgLink from '../'

export default {
  title: 'LgLink',
  component: LgLink
}

export const link = () => ({
  components: { LgLink },
  template: `
    <div>
      <lg-link href="http://www.baidu.com" :disabled="true">百度</lg-link>
    </div>
    `,
})