<template lang="pug">
  .home
    div(style="background-color: #e5e5e5")
      .px-6
        v-layout.pt-6(v-if="!searchOpened", justify-space-between, align-center)
          v-layout(align-center)
            v-btn(color="primary", fab, small)
              v-avatar(size="32")
                v-img(src="https://picsum.photos/200")
            .font-weight-bold.ml-2(style="font-size: 1.2em") Username
          v-btn(icon, color="primary", @click="searchOpened = true")
            v-icon fas fa-search
        v-combobox.pt-2(v-else, autofocus, prepend-inner-icon="fas fa-arrow-left", @click:prepend-inner="searchOpened = false", multiple, @blur="searchOpened = false", v-model="model", :filter="filter", :hide-no-data="!search", :items="items", :search-input.sync="search", hide-selected, placeholder="Buscar por tema", small-chips)
          template(v-slot:selection="{ attrs, item, parent, selected }")
            v-chip(v-if="item === Object(item)", dark, pill, v-bind="attrs", color="primary", :input-value="selected", small)
              span.font-weight-bold {{ item.text }}
          template(v-slot:item="{ index, item }")
            v-chip.font-weight-bold(color="primary", pill, dark, small)
              span.font-weight-bold {{ item.text }}
      v-layout.mt-4.px-6.pb-5(v-if="!searchOpened", style="width: 100%; overflow-x: scroll", align-center)
        v-card.py-6.px-5.text-center.rounded-xl(flat, color="#DDE0E1", @click="$store.commit('toogleNewSlotOpened')")
          v-avatar.rounded-lg(tile, color="primary")
            v-icon(color="white") fas fa-plus
          .font-weight-bold.mt-2 NUEVO
        .ml-2(v-for="i in 5")
          calendar-event
    .font-weight-bold.ml-6.mt-4 Martes 15 de Febrero
    slot-post.mx-4.mt-3(v-for="i in 10")
</template>

<script>
import calendarEvent from '@/components/calendarEvent'
import slotPost from '@/components/slotPost'

export default {
  name: 'Home',
  components: {
    calendarEvent, slotPost
  },
  data: () => ({
    searchOpened: false,
    items: [
      { header: 'Categoría' },
      {
        text: 'UX',
      },
      {
        text: 'Empresa',
      },
    ],
  })
}
</script>
