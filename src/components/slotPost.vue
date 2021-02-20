<template lang="pug">
  v-card.pa-4.rounded-xl(color="primary", dark, @click="$router.push({path: '/user/slot'})")
    v-layout(justify-space-between)
      v-btn.pr-2.px-0.text-capitalize(text, rounded, @click.stop="$router.push({ path: '/user' })")
        v-avatar(size="32", style="border: 2px solid white;")
          v-img(src="https://picsum.photos/200")
        .ml-2.font-weight-bold(style="letter-spacing: 0") Username
      v-btn.rounded-lg(depressed, color="primary darken-1", @click.stop="") SEGUIR
    v-layout.mt-4(style="letter-spacing: 2px")
      .font-weight-bold MAR 13
      span.ml-2 16:30
    v-card-title.pl-0.pt-1.font-weight-bold(style="font-size: 1.6em; letter-spacing: -1px") Nombre del Evento
    v-layout
      v-chip.primary--text.font-weight-bold.mr-2(color="white", @click.stop="") #Tag
      v-chip.primary--text.font-weight-bold.mr-2(color="white", @click.stop="") #Tag
    v-layout.mt-4(align-center)
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