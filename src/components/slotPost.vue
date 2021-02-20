<template lang="pug">
  #slotPost
    v-layout.mt-4(style="letter-spacing: 2px")
      v-chip.ml-3(color="primary")
        .font-weight-bold MAR 13
        span.ml-2 16:30
    v-card.pa-4.mt-1.rounded-xl(color="primary", flat, dark, @click="$router.push({path: '/user/slot'})")
      v-layout(align-center)
        v-btn.pr-2.px-0.text-capitalize(text, rounded, @click.stop="$router.push({ path: '/user' })")
          v-avatar(size="32", style="border: 2px solid white;")
            v-img(src="https://picsum.photos/200")
          .ml-2.font-weight-bold(style="letter-spacing: 0") Username
        v-spacer
        v-btn.rounded-lg(depressed, color="primary darken-1", @click.stop="") 
          span SEGUIR
          span.ml-2 15
          v-icon.ml-1(small) fas fa-mug-hot
      p.mt-3.py-0 Diseñadora y User Experience en Rubik Café
      v-layout
        v-chip.primary--text.font-weight-bold.mr-2(small, color="white", @click.stop="") #UX
        v-chip.primary--text.font-weight-bold.mr-2(small, color="white", @click.stop="") #Diseño
      v-card-title.pl-0.font-weight-bold(style="font-size: 1.6em; letter-spacing: -1px") Mi primer meeting
      //- v-layout.mt-4(align-center)
        v-icon.mr-1(small) fas fa-users
        .font-weight-bold Grupal
        v-spacer
        avatar-group(:avatars="['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']", :limit="6")
</template>

<script>
export default {
  components: {
    avatarGroup: () => import("@/components/avatarGroup")
  }
}
</script>