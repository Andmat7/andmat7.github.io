const canvas = document.getElementById("mycanvas");
const renderer = new PIXI.Renderer({
  view: canvas,
  height: window.innerHeight,
  width: window.innerWidth,
  resolution: 2,
  autoDensity: true,
});
const container = new PIXI.Container();
container.interactive = true;
const padding = 100;
const bounds = new PIXI.Rectangle(
  -padding,
  -padding,
  window.innerWidth + padding * 2,
  window.innerHeight + padding * 2
);
// const bg = PIXI.Sprite.from("displacement_BG.jpg");
// bg.width = window.innerWidth;
// bg.height = window.innerHeight;
// bg.alpha = 0.4;
// container.addChild(bg);
const logo = PIXI.Sprite.from("genomica_logo_transparent.png");
//logo.anchor.setTo(0.5, 0.5);
// logo.width = window.innerWidth;
// logo.height = window.innerHeight;
logo.scale.set(.4);
container.addChild(logo);
logo.position.y = window.innerHeight - 80;
logo.position.x = 12;

