let url ;
let array =JSON.parse(localStorage.getItem('hotels'))|| [];
console.log('array:', array)
let input = document.querySelector('input');
input.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        let q = document.getElementById("query").value
        // console.log(q)
        
         url = `https://masai-api.herokuapp.com/hotels/search?city=${q}` 
       
    }
    let getData = async () => {
        let res = await fetch(url)
        let data = await res.json()
        console.log('data:', data.hotels)
        array.push(data.hotels)
        localStorage.setItem('hotels', JSON.stringify(array))
    }
    getData()
})


let renderData = (array) => {
array.forEach((el)=>{
    console.log('el:', el)
    let div = document.createElement('div')
    div.setAttribute('class', 'hotel')
    let p1 = document.createElement('p')
    let img = document.createElement('img')
    img.src = el.Images.one

})
}
renderData(array)