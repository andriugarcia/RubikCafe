<template lang="pug">
  v-app#app
    v-content
      router-view.text-left
    v-bottom-sheet(v-model="newSlotOpened", persistent)
      v-card(style="border-radius: 24px 24px 0 0")
        new-slot(@back="newSlotOpened = false")
</template>

<script>
import newSlot from "@/components/newSlot"

export default {
  components: {
    newSlot
  },
  computed: {
    newSlotOpened: {
      get() {
        return this.$store.state.newSlotOpened
      },
      set(value) {
        this.$store.state.newSlotOpened = value
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
