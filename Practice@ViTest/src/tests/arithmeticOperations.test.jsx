// import { describe, expect, it } from "vitest";
import { expect, it } from "vitest";
import { subtract, sum } from "../components/ArithmeticOperations";

// describe - Creates a group of related tests (a test suite)
describe("Tests for sum func.",() => {
  // it - Creates a individual test
  it("returns 0 for empty call", () => {
    // expect - Asserts that an expression is true
    console.log(expect(sum()))
    expect(sum()).toBe(0)
  })
  // Type checking
  it(("return type should be number"), () => {
    expect(sum(0)).toBeTypeOf("number")
  })
  // Less than or greater than
  it("returns negative number", ()=>{
    expect(sum(-10,5)).toBeLessThan(0)
  }) 

  // chaining assertions with chai syntax. (toBe() - jest syntax, to.be() - chai syntax)
  it("test 5+7 not giving 13 ",()=>{
    // expect(sum(5,7)).not.toBe(12) // will fail
    expect(sum(5,7)).not.toBe(13)
  })
  
  // multiple scenarios
  it("giving other type of params instead of number",() => {
    expect(sum(1,2,"5")).toBe(null)
  })

  // throwing error
})


describe("Tests for subtract func.",() => {
  it("no params",() => {
  expect(subtract()).toBe(0)
  })

  it("reruns negative value", () => {
    expect(subtract(10,100)).toBeLessThan(0)
  })

  it("should subtract non-integer numbers correctly",() => {
    const res = subtract(10.5, 3.2, 2.1)
    expect(res).toBe(5.2)
  })
})