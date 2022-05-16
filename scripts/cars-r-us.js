import { paintOptions } from "./paints.js";
import { wheelOptions } from "./wheels.js";
import { interiorOptions } from "./interior.js";
import { techOptions } from "./tech.js";
import { Orders } from "./orders.js";
export const carsRUs = () => {
    return ` 
<header>
<h1>Cars'R Us : Personal Car Builder<h1>
</header>
<article class="choices">
            <section class="choices__paint options">
                
                ${paintOptions()}
            </section>
            <section class="choices__wheel options">
                
                ${wheelOptions()}
            </section>
            <section class="choices__interior options">
                
                ${interiorOptions()}
            </section>
            <section class="choices__tech options">
            
            ${techOptions()}
        </section>       
         </article>
         
         <article class="submit-button">
         <button id="orderButton">Create Custom Order</button>
         ${Orders()}
     </article>
`
}