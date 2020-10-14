import avatar from './static/images/scenery.jpg';

function createIma(){
    var img = new Image();
    img.src = avatar;
    img.className = 'image-style';
    var app = document.getElementById('app');
    app.append(img)
}

export default createIma
