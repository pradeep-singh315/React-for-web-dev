const renderingFunction = (element, container) => {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)

    for (const prop in element.props) {
        domElement.setAttribute(prop, element.props[prop])
            
        }
    container.appendChild(domElement)
}


const reactContainer = document.querySelector("#rootElement")

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.youtube.com',
        target : '_blank'
    },
    children : "Click on the button to visit YouTube"
}

renderingFunction(reactElement, reactContainer)