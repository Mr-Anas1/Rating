const no = document.querySelectorAll('.no');
const click = document.querySelector('.btn');
const box1 = document.querySelector('.main');
const box2 = document.querySelector('.secondary');
const rating = document.querySelector('.rate_text')
const sub_btn = document.querySelector('#sub_btn')

sub_btn.disabled = true

let current;
no.forEach((button,index) => {
    button.addEventListener('click', () => {
        //remove existing classes
        no.forEach(butn => {
            butn.classList.remove('active', 'pre_active');
        });
        current = no[index].textContent;
        if(current == '1') {
            button.classList.toggle('active');
            sub_btn.disabled = false;
        } else {
            no[index-1].classList.toggle('pre_active');
            no[index].classList.toggle('active');
            sub_btn.disabled = false;
        }
    });
})

click.addEventListener('click', ()=> {
    box1.classList.remove('active');
    box2.classList.add('active');
    rating.innerHTML = 'You selected '+ current + ' out of 5';
})