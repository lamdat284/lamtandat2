
//Menu-form
let previewContainer = document.querySelector('.product-review');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    }
});
//Close Menu-form
previewBox.forEach(close => {
    close.querySelector('.fa-xmark').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
});