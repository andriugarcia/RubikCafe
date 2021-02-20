<template lang="pug">
  #newSlot.pa-4.text-left
    v-layout(align-center)
      v-btn(icon, @click="$emit('back')")
        v-icon fas fa-arrow-left
      .font-weight-bold.ml-2 Nuevo Slot
    v-layout.py-4(justify-center)
      v-btn.mr-2(rounded, large, color="primary")
        v-icon.white--text(small) fas fa-user
        span.ml-2.text-capitalize Individual
      v-btn(rounded, text, large)
        v-icon(small) fas fa-users
        span.ml-2.text-capitalize Grupal
    v-text-field(label="Nombre del Evento")
    v-textarea(label="Descripción", auto-grow, :rows="1")
    v-text-field(label="Hora del Evento", prepend-inner-icon="far fa-clock")
    v-text-field(label="Programar diariamente", prepend-inner-icon="far fa-calendar")
    v-checkbox(label="Aceptar automaticamente reuniones")
    v-btn(rounded, block, color="primary") Crear
</template>