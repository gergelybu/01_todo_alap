import TodoView from "./Megjelenit.js";
import { TODOLIST, TODOLIST2 } from "./adatok.js";

$(function () {
  const szuloElem = $(".tarolo");
  new TodoView(TODOLIST2, szuloElem);
});

