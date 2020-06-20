// document.createElement(), someElement.append(), and someElement.remove()
// gotta use the abovementioned stuff


const btn = document.createElement('button');
btn.innerHTML = "Remove Element";
document.body.appendChild(btn);

const mainElement = document.createElement("main")
document.body.append(mainElement)

const anchorElement = document.createElement("a")
mainElement.append(anchorElement)

const imageElement = document.createElement("img")
imageElement.setAttribute("src", "https://www.sideshow.com/storage/product-images/903429/thanos_marvel_feature.jpg");
imageElement.setAttribute("width", "304");
imageElement.setAttribute("height", "228");
imageElement.setAttribute("alt", "Oh Snap!");
mainElement.append(imageElement)

let removeStuff = document.querySelector('button')
removeStuff.addEventListener('click', function () {
    console.log("Remove Element button clicked")
    mainElement.remove()
})

const removeParticular = document.createElement('button')
removeParticular.innerHTML = 'Remove Particular Element'
document.body.append(removeParticular)

const deleteElement = document.createElement('input')
deleteElement.setAttribute('type', 'text')
deleteElement.placeholder = 'Element Type'
deleteElement.innerHTML = 'Element Type'
document.body.append(deleteElement)

removeParticular.addEventListener('click', function () {
    let destroyElement = deleteElement.value
    console.log('Remove Particular button clicked',destroyElement)
    // destroyElement.remove()
})

