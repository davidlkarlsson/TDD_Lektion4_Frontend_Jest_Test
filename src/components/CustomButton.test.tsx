/* TODO : Important steps
Does:
describe exist
it exist
test exist
getByText
render()
expect().toBe()
*/

import CustomButton, { ButtonState } from "./CustomButton";
import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"
 

//it("", () => {});
//test("", () => {});

// DisplayName() JUNIT == Collection of Tests
describe("Easy Examples", () => {
  // Test #1
  test("2+2 = 4", () => {
    expect(2 + 2).toBe(4);
  });

  // Test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0);
  });

  // Test #3
  test("2-2 equals 0", () => {
    expect(2 - 2).toBe(0);
  });
});

describe("", () => {

    // idle
    test("Check if Button Component starts with Idle", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
    })
    // hover
    test("Check if Button Component on Hover state changes", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)
    })
    // clicked
    test("Custom Button Component on click state changes", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)
})
})