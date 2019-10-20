import { Action, Mutation, State, createVuexStore } from 'vuex-simple';

import VModal from 'vue-js-modal';
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VModal);

interface Board {
  id: string;
  title: string;
  description: string;
}

interface ListItem {
  id: string;
  title: string;
  desc: string;
  score?: number;
  color?: string;
}

export class RootModule {
  @State()
  dark = false;

  @State()
  boards: Board[] = [];

  @State()
  activeBoard?: Board;

  @State()
  list: ListItem[] = [];

  @Action()
  async loadBoards(): Promise<void> {
    const data = await axios.get<Board[]>('/boards');
    this._setBoards(data.data);
  }

  @Action()
  async loadBoard(id: number): Promise<void> {
    const data = await axios.get<Board>(`/boards/${id}`);
    this._setActiveBoard(data.data);
  }

  @Action()
  async addBoard(board: Board): Promise<void> {
    const { title, description } = board;
    const data = await axios.post<Board>(`/boards`, { title, description });
    this.addBoard(data.data);
  }

  // board part
  @Mutation()
  private _setBoards(boards: Board[]): void {
    this.boards = boards;
  }

  @Mutation()
  private _addBoard(board: Board): void {
    this.boards.push(board);
  }

  @Mutation()
  private _setActiveBoard(board: Board): void {
    this.activeBoard = board;
  }

  @Mutation()
  private _editActiveBoard(board: Board): void {
    const { id, title, description } = board;
    this.activeBoard = board;
    const index = this.boards.findIndex(item => item.id === board.id);
    Vue.set(this.boards, index, board);
    // TODO: set an action instead of a mutation here.
    axios.patch(`/boards/${id}`, { title, description });
  }

  @Mutation()
  private _closeBoard(): void {
    this.activeBoard = undefined;
  }

  // scoring list part
  @Mutation()
  private _setList(list: ListItem[]): void {
    this.list = list;
  }

  @Mutation()
  private _addItem({ title, desc, score }: ListItem): void {
    const id = `item-${this.list.length}`;
    this.list.push({ title, desc, score, id });
  }

  @Mutation()
  private _updateItem({ id, title, desc, score }: ListItem): void {
    const item = this.list.find(item => item.id === id);
    const index = this.list.findIndex(item => item.id === id);
    Vue.set(this.list, index, { ...item, title, desc, score });
  }

  @Mutation()
  private _updateItemColor({ id, color }: ListItem): void {
    const item = this.list.find(item => item.id === id);
    const index = this.list.findIndex(item => item.id === id);
    Vue.set(this.list, index, { ...item, color });
  }

  @Mutation()
  private _removeItem(item: ListItem): void {
    this.list.splice(this.list.indexOf(item), 1);
  }

  // setting part
  @Mutation()
  private _toggleDark(): void {
    this.dark = !this.dark;
  }
}

export default createVuexStore(new RootModule(), {
  strict: process.env.NODE_ENV !== 'production',
});
