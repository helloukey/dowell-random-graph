const transformData = (data) => {
  const arr = [];
  data.map(([x, y], index) => {
    return arr.push({ name: index, uv: y, pv: x, amt: y });
  });

  return arr;
};

export { transformData };
