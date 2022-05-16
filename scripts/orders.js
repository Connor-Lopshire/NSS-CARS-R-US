import { getCustomOrder, addCustomOrder, getInterior, getPaint, getTech, getWheels } from "./database.js"

const paints = getPaint()
const interiors = getInterior()
const techOptions = getTech()
const wheels = getWheels()
const totalPrice = (order) => {
    let totalCost = 0;

    const chosenPaint = paints.find((paint) => {
        if (paint.id === order.paintId) {
            totalCost += paint.price
        }
    }
    )


    const chosenInterior = interiors.find((interior) => {
        if (interior.id === order.interiorId) {
            totalCost += interior.price
        }
    }
    )


    const chosenTechPackage = techOptions.find( (techOption) => {
        if (techOption.id === order.techId) {
            totalCost += techOption.price
        }
    }
    )


    const chosenWheels = wheels.find( (wheel) => {
        if (wheel.id === order.wheelId) {
            totalCost += wheel.price
        }
    })
    return totalCost
}


const buildOrderHTML = (order, costString) => {
    return `<li>
            Order # ${order.id} was placed on${order.timestamp} and cost ${costString}
            </li>`
}


export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getCustomOrder()

    
    const listItems = orders.map((order) => {
       let newOrder = totalPrice(order)
       const costString = newOrder.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    } )
    return buildOrderHTML(order, costString) })

    let html = "<ul>"
    html += listItems.join("")
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()

        }
    }
)