const database = {
    paints: [
        { id: 1, color: "Silver", price: 400 },
        { id: 2, color: "Midnight Blue", price: 500 },
        { id: 3, color: "Firebrick Red", price: 600 },
        { id: 4, color: "Spring Green", price: 500 },
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 500 },
        { id: 2, type: "Charcoal Fabric", price: 600 },
        { id: 3, type: "White Leather", price: 1100 },
        { id: 4, type: "Black Leather", price: 1200 },
    ],
    techPackages: [
        { id: 1, package: "Basic package", price: 200 },
        { id: 2, package: "Navigation package", price: 400 },
        { id: 3, package: "Visibility package", price: 600 },
        { id: 4, package: "Ultra package", price: 1000 },
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 500 },
        { id: 2, type: "17-inch Pair Radial Black", price: 700 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 1000 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 1200 },
    ],

    customOrders: [
        { id: 1, paintId: 1, interiorId: 1, techId: 1, wheelId: 1, typeId: 1, timestamp: 1324254323543234254 }

    ],
    orderBuilder: {}
}
export const getPaint = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))    
}
export const getTech = () => {
    return database.techPackages.map(techPackage => ({...techPackage}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getCustomOrder = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const getCustomOrders = () => {
    return database.customOrders.map(order => ({...order}))
}
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}