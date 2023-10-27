import AnchorLink from "./modules/AnchorLink";
import Demo6 from "./modules/Demo6";
import ViewChange from "./modules/ViewChange";

document.addEventListener("DOMContentLoaded", (event) => {
  const anchorLink = new AnchorLink();
  anchorLink.init();

  const demo6 = new Demo6();
  demo6.init();

  const viewChange = new ViewChange();
  viewChange.init();
});
