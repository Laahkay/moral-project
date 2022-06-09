const getString = (str) => {
  return (getIt = str
    .split("")
    .filter((x) => number(x))
    .map((a,h)=>number(a,h))
    .reduce((a,h)=> a +h)
    );
};

