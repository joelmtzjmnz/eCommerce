const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Conjunto pans amarillo ligero, con sudadera-top'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Pantalon de lineas, negro con blanco con top y bolsa roja'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '04',
        name: 'Fun time',
        image: 'img4.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '05',
        name: 'wealth of a religion',
        image: 'img5.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '06',
        name: 'Casual day',
        image: 'img6.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '07',
        name: 'Night sense',
        image: 'img7.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '08',
        name: 'Light of elegance',
        image: 'img8.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '09',
        name: 'Street fashion',
        image: 'img9.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    },
    {
        index: '10',
        name: 'Thursday oufit',
        image: 'img10.jpg',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat veniam impedit aperiam dignissimos optio vel.'
    }
    
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let socialmFb = document.getElementById('fb')
let socialmIg = document.getElementById('ig')

let currentProduct = 0

socialmFb.addEventListener('click', ()=>{
    window.location.href = "https://www.facebook.com/joel.martinezjimenez.5";
})

socialmIg.addEventListener('click', ()=>{
    window.location.href = "https://www.instagram.com/joel_slv.exe/";
})

nxtBtn.addEventListener('click', ()=>{
    if(currentProduct >= productData.length - 1)
    {
        currentProduct=0
    }
    else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0,80)
    productImgContainer.classList.add('slide')
    smImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout(() => {
        //Ejecuta después de 500ms, cambia texto
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src =`img/${productData[currentProduct].image}`
    }, 500)

    setTimeout(() =>{
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    },2000)
})


