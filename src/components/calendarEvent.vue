<template lang="pug">
  v-bottom-sheet
    template(v-slot:activator="{on}")
      v-card.px-6.pt-4.pb-4.rounded-xl(color="primary", dark, v-on="on")
        v-layout(column, align-center)
          .font-weight-bold(style="letter-spacing: 2px; font-size: 0.8em") MAR
          span.mt-n2(style="font-weight: 700; font-size: 2.5em") 15
          .font-weight-bold.mt-n2(style="letter-spacing: 2px; font-size: 0.8em") 16:30
        v-layout(justify-center, style="position: absolute; bottom: -20px; left: 0; right: 0")
          v-avatar(size="36", style="border: 3px solid white;")
            v-img(src="https://picsum.photos/200")
    v-card.pa-6.text-left(style="border-radius: 24px 24px 0 0")
      .pl-0.pt-1.font-weight-bold(style="font-size: 1.6em; letter-spacing: -1px") Nombre del Evento
      v-layout.mt-4(style="letter-spacing: 2px")
        .font-weight-bold MAR 13
        span.ml-2 16:30
      v-btn.my-2.pr-2.px-0.text-capitalize(text, rounded, @click="$router.push({ path: '/user' })")
        v-avatar(size="32", style="border: 2px solid #1976d1;")
          v-img(src="https://picsum.photos/200")
        .ml-2.font-weight-bold(style="letter-spacing: 0") Username
      v-text-field.mt-2.rounded-lg.elevation-0(readonly, solo, dark, background-color="primary", value="zoom.us/link-llamada")
        template(#append)
          v-btn(text) Entrar
      v-btn.text-capitalize(color="red lighten-5", depressed, rounded, block) 
        span.red--text.font-weight-bold Cancelar Café
</template>