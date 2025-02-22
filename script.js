const $ =document

const textCounter =$.getElementById('text')

let text = " علی کاکو بهترین برنامه نویس دنیاست❤️❤️❤️❤️👍👍👍👌👌👌 "
let index = 0

const typeWriter = () => {

    if (index<text.length) {
        textCounter.innerHTML += text[index]
        index++
    }
    
    setTimeout(() => {
        typeWriter()
    },100)

}

typeWriter()