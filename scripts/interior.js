import { getInterior, setInterior } from "./database.js";
const interiors = getInterior()
export const interiorOptions = () => {
    let html = "<h2>Interiors</h2>" 
    html += `<select id="interiors">`
    html += '<option value="0">Make a Selection</option>'
    // Use .map() for converting objects to <li> elements
    const interiorOptionArray = interiors.map(
        (interior) => {
            return `<option type name="interior" value="${interior.id}" /> ${interior.type}
        </option>`
    })
    
        
        
        // Join all of the strings in the array into a single string
    html += interiorOptionArray.join("")

    html += "</select>"
    return html
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiors") {
            const chosenOption = parseInt(changeEvent.target.value)
            for (const interior of interiors) { 
              if (interior.id === chosenOption) {
                setInterior(interior.id)  
        } }
    } }
)