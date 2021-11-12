const newPic = document.querySelector('#newPic');
const submit = document.querySelector('#submitbutton')
const img = document.querySelector('input[type="url"')
const topText = document.querySelector(`#topText`);
const bottomText = document.querySelector(`#bottomText`);


submit.addEventListener('click', function(e){
    e.preventDefault();
    // img url
    const imgLink = img.value;
    img.value = '';
    // text on image
    const topTextValue = topText.value;
    const bottomTextValue = bottomText.value
    // to require all fields be filled out
    if (imgLink === '' || topTextValue === '' || bottomTextValue === '') {
        alert('You need to input text and link an image')
    } else {
        topText.value = '';
        bottomText.value = '';
        // div for image
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `<img src=${imgLink} id="newImg">`
        // div for top meme text
        const newDiv2 = document.createElement('div');
        newDiv2.id = 'topDiv';
        newDiv2.innerHTML = `<h3 id='topTop'>${topTextValue}</h3>`
        // div for bottom meme text 
        const newDiv3 = document.createElement('div');
        newDiv3.id='bottomDiv';
        newDiv3.innerHTML = `<h3 id='bottomBottom'>${bottomTextValue}</h3>`
        // div for remove button
        const removeDiv = document.createElement('div');
        removeDiv.id='removeDiv';
        removeDiv.innerHTML = '<h1 id="removeText">&#10005;</h1>';
        // add picture,text and remove button divs
        newPic.append(newDiv);
        newDiv.append(newDiv2);
        newDiv.append(newDiv3);
        newDiv.append(removeDiv);
        // remove button to remove only the picture that is clicked
        removeDiv.addEventListener('click', function(e) {
            e.target.parentElement.parentElement.remove();
        })
    }
})