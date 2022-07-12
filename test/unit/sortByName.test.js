const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("book titles are repeated", () => {
    expect(
      sorting.sortByName([
        "Граф Монте Кристо", 
        "Граф Монте Кристо"
      ])
    ).toEqual([
      "Граф Монте Кристо",
      "Граф Монте Кристо"
    ])
  });
  });