const items = document.querySelectorAll('.faq-item');
const questions = document.querySelectorAll('.container');
        
function closeItem(item){
    item.classList.remove('active');

    const button = document.querySelector('button');
    button.setAttribute('aria-expanded', 'false');

    const icon = item.querySelector('img');
    icon.src='./assets/images/icon-plus.svg';
};

function openItem(item){
    item.classList.add('active');

    const button = document.querySelector('button');
    button.setAttribute('aria-expanded', 'true');

    const icon = item.querySelector('img');
    icon.src='./assets/images/icon-minus.svg';    
};

function isItemOpen(item){
    return item.classList.contains('active');
};

function closeAll(){
    items.forEach(closeItem);    
};

function handleQuestionClick(item){
    const open = isItemOpen(item);
    closeAll();
    if(!open){
        openItem(item);
    }
};

questions.forEach((question) =>{
    question.addEventListener('click', ()=>{
        const item = question.closest('.faq-item');
        handleQuestionClick(item);
     });
});