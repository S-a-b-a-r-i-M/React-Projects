
describe("Testing using chai syntax ",() => {

  it("test 5+7 is equal to 12 ",()=>{
    expect(5+7).to.equal(12)
  })

  it("chain multiple assertions",() => {
    // Custom error msg
    // expect([1,2,3], "This array has 2 in it").to.be.an("array").not.includes(2) // will fail
    expect([1,2,3]).to.be.an("array").not.includes(4)
  })

  // equals and deep-equals
  it("using equals to compare two objects", () => {
    let obj1 = {a:1}
    let obj2 = {a:1}
    expect(obj1).to.not.equal(obj2) // but both objects having the same key and value, but not same reference id
  })

  it("using deep equals to compare two objects", () => {
    let obj1 = {a:1}
    let obj2 = {a:1}
    expect(obj1).to.deep.equal(obj2)
  })
})