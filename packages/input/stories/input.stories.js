import LgInput from '../'

export default {
  title: 'LgInput',
  component: LgInput
}

export const Text = () => ({
  components: { LgInput },
  template: '<LgInput v-model="value"></LgInput>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { LgInput },
  template: '<LgInput type="password" v-model="value"></LgInput>',
  data() {
    return {
      value: 'admin'
    }
  }
})