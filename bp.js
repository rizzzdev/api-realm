const markLists = [
  {
    id: 1,
    mark: 9,
    markedAt: 10
  },
  {
    id: 2,
    mark: 7,
    markedAt: 8
  },
  {
    id: 3,
    mark: 7,
    markedAt: 7
  }
];

// console.log(
//   markLists.sort((a, b) => {
//     if (a.mark !== b.mark) {
//       return b.mark - a.mark;
//     }
//     return a.markedAt - b.markedAt;
//   })
// );

const obj = {
  id: 1,
  hi: (function () {
    return this.id;
  })()
};

console.log(obj);
