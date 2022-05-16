import { getTech, setTech } from "./database.js";
const techPackages = getTech()
export const techOptions = () => {
    let html = "<h2>Technologies</h2>"
    html += `<select id="techPackages">`
    html += '<option value="0">Make a Selection</option>'
    // Use .map() for converting objects to <li> elements
    const techOptionArray = techPackages.map(
        (tech) => {
            return `<option type name="paint" value="${tech.id}" /> ${tech.package}
        </option>`
    })
    
        
        
        // Join all of the strings in the array into a single string
    html += techOptionArray.join("")

    html += "</select>"
    return html
}
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "techPackages") {
            const chosenOption = parseInt(changeEvent.target.value)
            for (const techPackage of techPackages) { 
              if (techPackage.id === chosenOption) {
                setTech(changeEvent.target.value)  
        } }
    } }
)