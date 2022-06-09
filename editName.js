const EditName = [
  { id: 1, name: "Thabo", mark: 40 },
  { id: 2, name: "smith", mark: 33 },
  { id: 3, name: "Nean", mark: 22 },
];

const edittedName = EditName.map((p) =>
  p.id === 2 ? { ...p, name: "kagiso" } : p
);

console.log("After Edit: ", edittedName);
