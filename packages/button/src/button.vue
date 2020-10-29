<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "LgButton",
  methods: {
    handleClick(evt) {
      console.log("click");
      this.$emit("click", evt);
      evt.preventDefault();
    },
  },
};
</script>

<style>
</style>
