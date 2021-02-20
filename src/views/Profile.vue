<template lang="pug">
  #profile
    v-app-bar(color="white", flat, absolute, inverted-scroll, scroll-target="#content")
      v-btn(icon, @click="$router.go(-1)")
        v-icon fas fa-arrow-left
      v-avatar(size="46", style="border: 2px solid #1976d1;")
        v-img(src="https://picsum.photos/200")
      .ml-2
        .font-weight-bold Username
        v-layout
          v-icon.black--text(small) fas fa-mug-hot
          span 16 cafés
      v-spacer
      v-btn.mt-2(rounded, outlined, color="primary") Seguir
    v-sheet#content.overflow-y-auto.pa-4(max-height="100vh")
      v-layout(column, align-center)
        v-avatar(column, align-center, size="100", style="border: 4px solid #1976d1;")
          v-img(src="https://picsum.photos/200")
        .font-weight-bold Username
        v-layout
          v-icon.black--text(small) fas fa-mug-hot
          span 16 cafés
        v-btn(rounded, outlined, color="primary") Seguir
      .font-weight-bold Acerca de mí
      p Diseñadora y User Experience en Rubik Café
      v-layout
        v-btn.mr-2(icon)
          v-icon.black--text fab fa-linkedin
        v-btn.mr-2(icon)
          v-icon.black--text fab fa-twitter
      slot-post.mt-3(v-for="i in 10")
</template>

<script>
import slotPost from '@/components/slotPost'

export default {
  components: {
    slotPost
  }
}
</script>