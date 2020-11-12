function prefetching(){
    const element = document.createElement('div');
    element.innerHTML = 'hello'
    document.body.appendChild(element);
}

export default prefetching;