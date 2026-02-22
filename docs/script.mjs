import Demo6 from "./mods/Demo6.mjs";
import ViewChange from "./mods/ViewChange.mjs";

document.addEventListener("DOMContentLoaded", (event) => {
  const demo6 = new Demo6();
  demo6.init();

  const viewChange = new ViewChange();
  viewChange.init();
});
