
  
  
  var container1 = document.querySelector('#dog-image-container')
  const imgUrl =  "https://dog.ceo/api/breeds/image/random/5"
  
  //   add img para elemento del dooom for EACH img
  
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(images =>{
    const imgs = images.message
  
    // agarrar 1 img array y volcarla a appendy each element
    let imgsArray = imgs.map((img)=>{
        let i = `<img src=${img}>`
      return i
    })
    imgsArray.forEach(e =>{
      container1.innerHTML += e
  
    });
  })

  

  
var container2 = document.querySelector('#animalesList2')

//   add img para elemento del dooom for EACH img

fetch(imgUrl)
.then(resp => resp.json())
.then(images =>{
  const imgs = images.message

  // agarrar 1 img array y volcarla a appendy each element
  let imgsArray = imgs.map((img)=>{
      let i = `<img src=${img}>`
    return i
  })
  imgsArray.forEach(e =>{
    container2.innerHTML += e

  });
})