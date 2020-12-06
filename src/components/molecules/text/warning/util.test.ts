import { getRestDate } from "./utils";

describe("unit test for rest time", () => {
  // mock 2020-12-05
  const mockDate = new Date(1607126400000);
  const OriginalDate = Date;
  jest
    .spyOn(global, "Date")
    // eslint-disable-next-line
    // @ts-ignore
    .mockImplementation((arg) => (arg ? new OriginalDate(arg) : mockDate));
  test("get rest time 0 pattern", () => {
    expect(getRestDate("2020-12-05")).toBe(0);
  });
  test("get rest time 1 pattern", () => {
    expect(getRestDate("2020-12-06")).toBe(1);
  });
  test("get rest time -1 pattern", () => {
    expect(getRestDate("2020-12-04")).toBe(-1);
  });
});
