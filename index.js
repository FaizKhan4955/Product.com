getPorducts()
const container = document.getElementById('container')
const tags = document.getElementById('tags')
let product=[]
async function getPorducts() {
    const productsResponse = await fetch('https://dummyjson.com/products')
        .then(res => res.json())

    let products = productsResponse.products
product=products
    // console.log(products);

    products.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <br>
        <h5>${data.title} </h5>
        <br>

        <h6 style="color: red;">${data.price} ${'$'}</h6>
        </div>`
        container.innerHTML += card
    })



        var categories = []
    products.map((obj, i) => {
        if (!categories.includes(obj.category)) {
            categories.push(obj.category)
        }
    })
    categories.forEach((cat, i) => {
        const chip = `<div class = 'chip' id = 'chip'> <span> ${cat}</span> </div>`
        // tags.innerHTML += chip
    })
console.log(categories);    }

    function smarty (){
        const smartphones = product.filter((data) => data.category == 'smartphones')
        container.innerHTML =''
        smartphones.forEach((data, i) => {
            const card = `<div class='card' >
            <img src =${data.thumbnail} />
            <h4>${data.title} </h4>
            <h4>${data.price} </h4>
            </div>`
         

            // document.getElementsByClassName('CategoryCard')
            container.innerHTML += card
        })

   }
   function lap (){
    const laptop = product.filter((data) => data.category == 'laptops')
    container.innerHTML =''
    laptop.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
    
        container.innerHTML += card
    })
    
}

function frag(){
    const fragrance=product.filter((data)=>data.category=='fragrances')
    container.innerHTML =''
    fragrance.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
       
        container.innerHTML += card
    })
}

function skin(){
    const skincare=product.filter((data)=>data.category=='skincare')
    container.innerHTML =''
    skincare.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
       
        container.innerHTML += card
    })
}

function groc(){
    const groceries=product.filter((data)=>data.category=='groceries')
    container.innerHTML =''
    groceries.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
        container.innerHTML += card
    })
}

function home(){
    const homedecoration=product.filter((data)=>data.category=='home-decoration')
    container.innerHTML =''
    homedecoration.forEach((data, i) => {
        const card = `<div class='card' >
        <img src =${data.thumbnail} />
        <h4>${data.title} </h4>
        <h4>${data.price} </h4>
        </div>`
        container.innerHTML += card
    })
}

var bot=document.getElementById('bot')
var lapo=document.getElementById('lap')
var fragi=document.getElementById('frag')
var skini=document.getElementById('skin')
var groci=document.getElementById('groc')
var homi=document.getElementById('home')



var inp=document.getElementById('inp')
var bnp=document.getElementById('bnp')

bnp.addEventListener('click',saer)

// function srch(){
//     if(inp.value =='smartphones'){
//         const smartphones = product.filter((data) => data.category == 'smartphones')
//         container.innerHTML =''
//         smartphones.forEach((data, i) => {
//             const card = `<div class='card' >
//             <img src =${data.thumbnail} />
//             <br>
//             <h5>${data.title} </h5>
//             <br>
    
//             <h6 style="color: red;">${data.price} ${'$'}</h6>
//             </div>`
//             // document.getElementsByClassName('CategoryCard')
//             container.innerHTML += card
//     })
// }else if (inp.value =='laptop'){
//     const laptop = product.filter((data) => data.category == 'laptops')
//     container.innerHTML =''
//     laptop.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <br>
//         <h5>${data.title} </h5>
//         <br>

//         <h6 style="color: red;">${data.price} ${'$'}</h6>
//         </div>`
      
//         container.innerHTML += card
//     })
// }else if (inp.value =='fragrance'){
//     const fragrance=product.filter((data)=>data.category=='fragrances')
//     container.innerHTML =''
//     fragrance.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <br>
//         <h5>${data.title} </h5>
//         <br>

//         <h6 style="color: red;">${data.price} ${'$'}</h6>
//         </div>`
      
//         container.innerHTML += card
//     })
// }else if (inp.value =='skincare'){
//     const skincare=product.filter((data)=>data.category=='skincare')
//     container.innerHTML =''
//     skincare.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <br>
//         <h5>${data.title} </h5>
//         <br>

//         <h6 style="color: red;">${data.price} ${'$'}</h6>
//         </div>`
       
//         container.innerHTML += card
//     })
// }else if (inp.value =='groceries'){
//     const groceries=product.filter((data)=>data.category=='groceries')
//     container.innerHTML =''
//     groceries.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <img src =${data.thumbnail} />
//         <br>
//         <h5>${data.title} </h5>
//         <br>

//         <h6 style="color: red;">${data.price} ${'$'}</h6>
//         </div>`
     
//         container.innerHTML += card
//     })
// }else if (inp.value =='home-decoration' ||inp.value =='home' ){
//     const homedecoration=product.filter((data)=>data.category=='home-decoration')
//     container.innerHTML =''
//     homedecoration.forEach((data, i) => {
//         const card = `<div class='card' >
//         <img src =${data.thumbnail} />
//         <br>
//         <h5>${data.title} </h5>
//         <br>

//         <h6 style="color: red;">${data.price} ${'$'}</h6>
//         </div>`
       
//         container.innerHTML += card
//     })
// }

// }

async function saer(){
   const drive=await fetch(`https://dummyjson.com/products/search?q=${inp.value}`)
   .then(res => res.json())
//    .then(console.log);

   let be =await drive.products
   container.innerHTML=''
   be.forEach((data, i) => {
                const card = `<div class='card' >
                <img src =${data.thumbnail} />
                <br>
                <h5>${data.title} </h5>
                <br>
        
                <h6 style="color: red;">${data.price} ${'$'}</h6>
                </div>`
                // document.getElementsByClassName('CategoryCard')
                container.innerHTML += card

})}
saer()

    //if we do it thruofh for loop

    // for (var i = 0; i < products.length; i++) {
    //     const card = `<div class='card' >
    //     <img src =${products[i].thumbnail} />
    //     <h4>${products[i].title} </h4>
    //     </div>`
    // }

    //map
    // let categories = products.map((obj, i) => {
    //     var prod = obj
    //     prod.available = true
    //     return prod
    // })



    //For Each


    //map
//     var categories = []
//     products.map((obj, i) => {
//         if (!categories.includes(obj.category)) {
//             categories.push(obj.category)
//         }
//     })
//     categories.forEach((cat, i) => {
//         const chip = `<div class = 'chip' id = 'chip'> <span> ${cat}</span> </div>`
//         tags.innerHTML += chip
//     })
// console.log(categories);
    // filter
    // const smartphones = products.filter((data) => data.category == 'laptops')
    // console.log('smartphones->', smartphones)

    //find
    // const iphone = products.find((data) => data.title == 'iPhone X')
    // console.log('iphone->', iphone)

 







//for each
//map
//filter
//find
//findbyindex
//reduce
//sort
