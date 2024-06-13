document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector('.burger')
    const middle = document.querySelector('.middle')
    const inner = document.querySelector('.inner')

    burger.addEventListener('click', () => {
        middle.style.display = 'block'
        inner.style.right = '0'
    })

    middle.addEventListener('click', () => {
        middle.style.display = 'none'
        inner.style.right = '-100%'
    })

    try{
        document.querySelectorAll('.button').forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.card');
                card.classList.toggle('show-recipes');
            });
        });
    }catch(error){
        console.log(".")
    }
})