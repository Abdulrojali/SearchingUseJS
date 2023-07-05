let buttonSearch=document.querySelector('.search')
let buttonDelete=document.querySelector('.delete')


buttonSearch.addEventListener('click',getSearch)
let contex=[
    'testing programming',
    'coding time',
    'html css',
    'css',
    'javascript',
    'pyhton',
    'programming language',
    'script data'
]

function getSearch(){
    let teks=document.querySelector('.text').value
    contex.forEach(el=>{
      if(el.toLowerCase().includes(teks.toLowerCase())){
        console.log(el)
      }
      else if(el.toLowerCase().includes(!teks.toLowerCase())){
        console.log('failed')
      }
    })
}

let button=document.querySelectorAll('button')
button.forEach(el=>{
    el.addEventListener('click',function(el){
        el.preventDefault()
    })
})