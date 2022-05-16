import { getPaint, setPaint } from "./database.js";
const paints = getPaint()
export const paintOptions = () => {
    let html = "<h2>Paints</h2>" 
    html += `<select id="paints">`
    html += '<option value="0">Make a Selection</option>'

    // Use .map() for converting objects to <li> elements
    const paintOptionArray = paints.map(
        (paint) => {
            return `<option  name="paint" id="paintColor" value="${paint.id}" /> ${paint.color}
        </option>`
    })
    
        
        
        // Join all of the strings in the array into a single string
    html += paintOptionArray.join("")

    html += "</select>"
    return html
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paints") {
            const chosenOption = parseInt(changeEvent.target.value)
            for (const paint of paints) { 
              if (paint.id === chosenOption) {
                setPaint(event.target.value) 
        } }
    } }
)





// document.addEventListener(
//     "change",
//     (event) => {
      
//         if (event.target.name === "paint") {
//             window.alert(`${paint.color}`)
//             }
//         }
    
// )

