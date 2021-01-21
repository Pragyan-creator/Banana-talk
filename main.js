var translateButton = document.querySelector("#translate-button");

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json"

translateButton.onclick=function(){
    var input=translateInput.value
    var finalUrl = `${url}?text=${input}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET',`${finalUrl}`)
    xhr.send()

    xhr.onload=function(){
        const data=JSON.parse(xhr.responseText)
        console.log(data)
        translateOutput.innerText=data.contents.translated
    }
    xhr.onerror=function(){
        alert('Some error occured')
    }
}
