import { fireEvent, render, screen } from "@testing-library/react"; 
import Calculator from "../components/calculator";

const numberBtns = [ '7', '8', '9', '4', '5', '6', '1', '2', '3', ];
 describe("test if display shows correctly after user interaction", () => {
	 test.each(numberBtns)( 'user clicked', (element) => { 
		render(<Calculator />); 
		const display = document.querySelector('.display'); 
		const numberTwo = screen.getByText(element); 
		fireEvent.click(numberTwo); 
		expect(display.textContent).toBe(element); } ) }) 
