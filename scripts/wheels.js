import { getWheels, setWheels } from "./database.js";
const wheels = getWheels()
export const wheelOptions = () => {
    let html = "<h2>Wheels</h2>" 
    html += `<select id="wheels">`
    html += '<option value="0">Make a Selection</option>'

    // Use .map() for converting objects to <li> elements
const wheelOptionArray = wheels.map(
        (wheel) => {
            return `<option type name="wheel" value="${wheel.id}" /> ${wheel.type}
        </option>`
    })
    
        
        
        // Join all of the strings in the array into a single string
    html += wheelOptionArray.join("")

    html += "</select>"
    return html
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheels") {
            const chosenOption = parseInt(changeEvent.target.value)
            for (const wheel of wheels) { 
              if (wheel.id === chosenOption) {
                setWheels(wheel.id)  
        } }
    } }
)