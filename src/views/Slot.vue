<template lang="pug">
  #slot
    v-app-bar(color="white", flat, absolute)
      v-btn(icon, @click="$router.go(-1)")
        v-icon fas fa-arrow-left
      v-avatar(size="46")
        v-img(src="https://picsum.photos/200")
      .ml-2
        .font-weight-bold Username
        v-layout
          v-icon.black--text(small) fas fa-mug-hot
          span 16 cafés
      v-spacer
      v-btn(rounded, outlined, color="primary") Seguir
    .pa-6.mt-12()
      .pl-0.pt-1.font-weight-bold(style="font-size: 1.6em; letter-spacing: -1px") Nombre del Evento
      v-layout
        v-chip.white--text.font-weight-bold.mr-2(color="primary", @click.stop="") #Tag
        v-chip.white--text.font-weight-bold.mr-2(color="primary", @click.stop="") #Tag
      .overline.mt-4 ACERCA DEL CAFÉ
      p Lorem ipsum dolor sit amet consectetur adipiscing elit netus quam, tortor nullam vestibulum tincidunt torquent urna dapibus massa, dui per potenti vulputate tellus orci sed mattis. Taciti suspendisse erat rhoncus sollicitudin netus, lacus turpis habitasse consequat facilisi accumsan, ridiculus ad facilisis tristique. Platea rhoncus fusce lobortis vitae est consequat ante pellentesque, facilisi semper sem laoreet suscipit curabitur parturient habitant, vulputate eu posuere a tellus varius ac.
      .overline ACERCA DE MI
      v-btn.my-2.pr-2.px-0.text-capitalize(text, rounded, @click="$router.push({ path: '/user' })")
        v-avatar(size="32", style="border: 2px solid #1976d1;")
          v-img(src="https://picsum.photos/200")
        .ml-2.font-weight-bold(style="letter-spacing: 0") Username
      p Diseñadora y User Experience en Rubik Café
      .px-2
        v-btn(color="primary lighten-3", block, depressed, rounded, light, @click="$router.push({ path: '/user' })")
          span.text-capitalize.black--text Ver más cafés 
    v-card.py-4.px-6(style="border-radius: 24px 24px 0 0; position: absolute; bottom: 0; left: 0; right: 0", color="primary", dark)
      v-layout.my-4(style="letter-spacing: 2px")
        .font-weight-bold MAR 13
        span.ml-2 16:30
        v-spacer
        span Zoom
      v-btn(block, rounded, depressed, color="white")
        span.text-capitalize.primary--text.font-weight-bold Coger Slot
</template>