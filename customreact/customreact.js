function CustomRender(container,reactElement){
    //  const domElement = document.createElement(reactElement.type)
    //  domElement.textContent = reactElement.children
    //  domElement.setAttribute = ('href',reactElement.props.href)
    //  domElement.setAttribute = ('target',reactElement.props.target)
    //  container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children
    for(const prop in reactElement.props)
    {
      domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: 'Click Me' 
};
const mainContainer=document.querySelector('#root');
CustomRender(mainContainer,reactElement);