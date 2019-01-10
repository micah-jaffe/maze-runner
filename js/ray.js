// const ray = (origin) => {
//   const stepX = step(sin, cos, origin.x, origin.y);
//   const stepY = step(cos, sin, origin.y, origin.x);
//   const nextStep = stepX.length2 < stepY.length2
//     ? inspect(stepX, 1, 0, origin.distance, stepX.y)
//     : inspect(stepY, 0, 1, origin.distance, stepY.x);

//   if (nextStep.distance > range) return [origin];
// }