const animals = [];
const totalanimals = parseInt((window.innerWidth * window.innerHeight) / 8500);
for (let i = 0; i < totalanimals; i++) {
  var animalId = parseInt(Math.random() * 44);
  //animalId = 47;
  const animal = PIXI.Sprite.from("animal" + animalId + ".png");
  animal.anchor.set(0.5);
  zoo.addChild(animal);
  animal.interactive = true;

  animal
    .on("mousedown", onButtonDown)
    .on("touchstart", onButtonDown)
    .on("mouseup", onButtonUp)
    .on("touchend", onButtonUp)
    .on("mouseupoutside", onButtonUp)
    .on("touchendoutside", onButtonUp)
    // set the mouseover callback...
    .on("mouseover", onButtonOver)
    // set the mouseout callback...
    .on("mouseout", onButtonOut);
  //animal.direction = 0.5 * Math.PI * 2;
  animal.direction = Math.random() * 8 * 0.25 * Math.PI;
  let random = Math.random();
  if (animalId > 21 && animalId < 36) {
    animal.originalspeed = 0.08 + random * 0.1;
  } else {
    animal.originalspeed = 0.1 + random * 0.5;
  }

  animal.speed = animal.originalspeed;
  animal.turnSpeed = 0.0;
  animal.x = Math.random() * bounds.width;
  animal.y = Math.random() * bounds.height;
  animal.rateTinker = 1;
  animal.palpitationOffset = Math.random();
  animal.palpitationRate = Math.random();
  animal.scale.set(0.07 + Math.random() * 0.09);
  animal.scale.set(0.09);
  animal.original = new PIXI.Point();
  animal.original.copyFrom(animal.scale);
  if (i < totalanimals / 2) {
    animal.alpha = 0.3;
  } else {
    animal.alpha = 1;
  }

  animals.push(animal);
}
function animalAnimation(animals, bounds, count) {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    animal.direction += animal.turnSpeed * 0.01;
    animal.x += animalXPosition(animal.speed, animal.direction);
    animal.y += animalYPosition(animal.speed, animal.direction);

    animal.blendMode = PIXI.BLEND_MODES.LIGHTEN;
    animal.rotation = animal.direction + 1 * 0.5 * Math.PI;
    animal.scale.x =
      animal.original.x +
      Math.sin(
        count * animal.speed * 8 + animal.palpitationOffset * 2 * Math.PI
      ) *
        0.015;
    // animal.scale.y =
    //   animal.original.y +
    //   Math.cos(
    //     (count * animal.rateTinker + animal.palpitationOffset * 2 * Math.PI) /
    //       (1 + animal.palpitationRate)
    //   ) *
    //     0.01;
    if (animal.x < bounds.x) {
      animal.x += bounds.width;
    } else if (animal.x > bounds.x + bounds.width) {
      animal.x -= bounds.width;
    }

    if (animal.y < bounds.y) {
      animal.y += bounds.height;
    } else if (animal.y > bounds.y + bounds.height) {
      animal.y -= bounds.height;
    }
  }
}
function animalXPosition(speed, radians) {
  let x = Math.sin(radians) * speed * 2;
  return x;
}
function animalYPosition(speed, radians) {
  let y = -Math.cos(radians) * speed * 1;
  return y;
}
function onButtonDown() {
  this.rateTinker = 4;
  this.speed = this.originalspeed * 4;
}

function onButtonUp() {}

function onButtonOver() {}

function onButtonOut() {
  this.rateTinker = 1;
  this.speed = this.originalspeed;
}
