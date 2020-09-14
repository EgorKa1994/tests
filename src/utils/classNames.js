// упрощенная версия https://www.npmjs.com/package/classnames
export function classNames(...args) {
  const classesToReturn = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classesToReturn.push(arg);
    } else if (typeof arg === "object") {
      Object.entries(arg).forEach(([className, shouldBeAdded]) => {
        if (shouldBeAdded) {
          classesToReturn.push(className);
        }
      });
    }
  });

  return classesToReturn.join(" ");
}
