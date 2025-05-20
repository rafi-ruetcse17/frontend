export const getClassNames = (module) => {
  return (...classnames) => {
    let className = "";
    classnames.forEach((classname) => {
      if (!classname || typeof className != "string") {
        return;
      }
      if (!module[classname]) {
        className += ` ${classname}`;
        return;
      }
      className += ` ${module[classname]}`;
    });
    return className;
  };
};

export const arePathsEqual = (path1, path2) => {
  return path1 === path2;
};