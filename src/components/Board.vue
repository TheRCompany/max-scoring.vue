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

    <div class="container" v-else>
      <action-button @click="$modal.show('board-add')">
        {{ $t('board.add_board') }}
      </action-button>
      <div class="board-list">
        <div class="board-tile" v-for="board in boards" :key="board.id" @click="selectActive(board)">
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

<script>
import { actionButton, blankstate } from '@/components/utils';
import { boardAdd } from '@/components/modals';

export default {
  name: 'Board',
  components: {
    actionButton,
    blankstate,
    boardAdd,
  },
  props: {
    dark: Boolean,
  },
  computed: {
    boards: {
      get() {
        return this.$store.state.boards;
      },
      set(value) {
        this.$store.commit('setBoards', value);
      },
    },
  },
  mounted() {
    this.$store.dispatch('loadBoards');
  },
  methods: {
    create(board) {
      this.$store.dispatch('addBoard', board);
    },
    selectActive(board) {
      this.$store.commit('activeBoard', board);
    },
  },
};
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
