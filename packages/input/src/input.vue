<template>
  <div>
    <input :type="type" :value="value" @input="handlerInput" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: "LgInput",
  inheritAttrs: false,
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  methods: {
    handlerInput(evt) {
      this.$emit("input", evt.target.value);

      const findParent = (parent) => {
        while (parent) {
          if (parent.$options.name === "LgFormItem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };

      const parent = findParent(this.$parent);
      if (parent) {
        parent.$emit("validate");
      }
    },
  },
};
</script>

<style>
</style>