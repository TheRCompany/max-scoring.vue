<template>
  <div v-if="board" class="scoring">
    <score-bar :dark="dark" :board="board"></score-bar>

    <draggable v-model="list" class="list" group="score" @start="drag = true" @end="drag = false">
      <div v-for="item in list" :key="item.id">
        <item :dark="dark" :item="item">
          <button @click="$modal.show('item-preview', { item })">
            Preview
          </button>
          <button @click="$modal.show('color-picker', { item })">
            Set color
          </button>
          <button @click="$modal.show('item-add-edit', { item })">Edit</button>
          <button @click="removeList(item)">Remove</button>
        </item>
      </div>
    </draggable>

    <!-- BEGIN modals declarations -->
    <item-add-edit @save="addEditList"></item-add-edit>
    <item-preview></item-preview>
    <color-picker @update="updateColor"></color-picker>
    <!-- END modals declarations -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';
import draggable from 'vuedraggable';

import { scoreBar } from '@/components/header';
import { item } from '@/components/list';
import { colorPicker, itemAddEdit, itemPreview } from '@/components/modals';
import { Board, RootModule, ListItem } from '@/store';

@Component({
  name: 'Scoring',
  components: {
    draggable,
    item,
    colorPicker,
    itemAddEdit,
    itemPreview,
    scoreBar,
  },
})
export default class Scoring extends Vue {
  private module = useStore<RootModule>(this.$store);

  get dark(): boolean {
    return this.module.dark;
  }

  get board(): Board | undefined {
    return this.module.activeBoard;
  }

  get list(): ListItem[] {
    return this.module.list;
  }

  set list(list: ListItem[]) {
    this.module.setList(list);
  }

  mounted(): void {
    if (!this.board) {
      const id = this.$route.params.id;
      this.module.loadBoard(id);
    }
  }

  addEditList(item: ListItem, isEdit: boolean): void {
    const type = isEdit ? 'updateItem' : 'addItem';
    this.$store.commit(type, item);
  }

  removeList(item: ListItem): void {
    this.module.removeItem(item);
  }

  updateColor(item: ListItem): void {
    this.module.updateItemColor(item);
  }
}
</script>

<style scoped>
.scoring {
  max-height: 100%;
}

.list {
  padding: 10px;
  background-color: #f4f4f4d8;
  width: 60%;
  margin: 10px auto;
}
</style>
