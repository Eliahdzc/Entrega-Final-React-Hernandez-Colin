// import data from "./output.json"

// export const datos = () => {

//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             resolve(data);
//         }, 500)
//     })
// }

// export const itemPorId = (id) => {
//     return new Promise((resolve, reject) => {

//         const item = data.find((producto) => producto.id === id)

//         if(item) {
//             resolve(item)
//         } else {
//             reject({
//                 error: "Producto no encontrado"
//             })
//         }
//     })
// }