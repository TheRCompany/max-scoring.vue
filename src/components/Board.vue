<template>
  <div class="board">
    <blankstate
      v-if="!boards.length"
      :title="$t('board.welcome')"
      :desc="$t('board.intro')"
      :img="require('@/assets/board_blank.svg')"
    >
      <action-button @click="$modal.show('board-add')">
        {{ $t('board.new_board') }}
      </action-button>
    </blankstate>

    <div v-else class="container">
      <action-button @click="$modal.show('board-add')">
        {{ $t('board.add_board') }}
      </action-button>
      <div class="board-list">
        <div v-for="board in boards" :key="board.id" class="board-tile" @click="selectActive(board)">
          <h3>{{ board.title }}</h3>
          <p>{{ board.description }}</p>
        </div>
      </div>
    </div>

    <!-- BEGIN modals declarations -->
    <board-add @save="create"></board-add>
    <!-- END modals declarations -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { useStore } from 'vuex-simple';

import { boardAdd } from '@/components/modals';
import { actionButton, blankstate } from '@/components/utils';
import { Board, RootModule } from '@/store';

@Component({
  name: 'Login',
  components: {
    actionButton,
    blankstate,
    boardAdd,
  },
  mounted(): void {
    const module = useStore<RootModule>(this.$store);
    module.loadBoards();
  },
})
export default class BoardComponent extends Vue {
  private module = useStore<RootModule>(this.$store);

  get boards(): Board[] {
    return this.module.boards;
  }

  set boards(boards: Board[]) {
    this.module.setBoards(boards);
  }

  get dark(): boolean {
    return this.module.dark;
  }

  create(board: Board): void {
    this.module.addBoard(board);
  }

  selectArchive(board: Board): void {
    this.module.setActiveBoard(board);
    this.$router.push({ name: 'scoring', params: { id: board.id } });
  }
}
</script>

<style scoped>
.board {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  padding: 10px;
}

.board-list {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}

.board-tile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: darkgrey;
  cursor: pointer;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;

  height: 120px;
  width: 200px;
}

.board-tile h3 {
  color: white;
  font-weight: 600;
  width: 100%;
}

.board-tile p {
  text-align: left;
  font-weight: 500;
}
</style>
