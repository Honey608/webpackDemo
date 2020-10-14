import buttonstyle from './static/css/button.css'

let btn = document.createElement('button');
btn.innerHTML = '新增';
document.body.append(btn);

btn.onclick = function(){
    let main = document.createElement('main');
    main.classList.add(buttonstyle.div)
    main.innerHTML = 'item';
    document.body.append(main)
}