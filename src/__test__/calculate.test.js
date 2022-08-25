import calculate from "../components/Logic/calculate";

test('The "AC" function should clear the values on display',()=>{
    const state = [{
        total:"15",
        next :"6",
        operation : "+",
    }
];
    expect(calculate(state,'AC')).toEqual({"next":null,"total":null,"operation":null})
})
test('The "+/-" should change the number from positive to negative or return vice versa',()=>{
    const state = {
        total:"15",
        next :null,
        operation : "x",
    };
     expect(calculate(state,'+/-').total).toBe("-15");
})