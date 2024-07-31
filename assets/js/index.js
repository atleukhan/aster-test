// NAVIGATION
let desktopNav = [
    { title: "Найти авто", state: ""},
    { title: "Новые авто", state: ""},
    { title: "Автокредитование", state: ""},
    { title: "Онлайн оценка", state: ""},
    { title: "Выкуп", state: ""},
    { title: "Aster Check", state: ""},
    { title: "Запчасти", state: ""},
    { title: "Журнал", state: ""},
    { title: "Шины", state: "new"}
];
let desktopNavPlace = document.querySelector('#desktop-nav');
let navItem = "";
    desktopNav.forEach(item=>{
        navItem += `
            <li class="desktop-nav-item d-flex align-items-center">
                <a href="" class="text-light">${item.title}</a>
                <span class="py-1 px-2 rounded-5 bg-red text-light text-xs ms-1 text-uppercase">${item.state}</span>
            </li>`;
    });
    desktopNavPlace.innerHTML = navItem;

let desktopNavItems = document.querySelectorAll('.desktop-nav-item');   
    desktopNavItems.forEach(item=>{
        let span = item.querySelector('span');
            if(span.innerText === ""){
                span.classList.add('d-none');
            }
    });

//  FAQ
let faq = [
    {
        id:"one",
        question: "Могу ли я договориться о цене автомобиля Aster?",
        answer: "В этом нет необходимости. Мы предлагаем прозрачный и удобный опыт продажи. Цены, указанные для каждого автомобиля Aster, являются нашими лучшими и максимально конкурентоспособными. Цена, которую вы видите, - это цена, которую вы заплатите за свой автомобиль, и к вашей покупке нет никаких скрытых комиссий или дополнительных затрат.",
    },
    {
        id:"two",
        question: "Могу ли я договориться о цене автомобиля Aster?",
        answer: "В этом нет необходимости. Мы предлагаем прозрачный и удобный опыт продажи. Цены, указанные для каждого автомобиля Aster, являются нашими лучшими и максимально конкурентоспособными. Цена, которую вы видите, - это цена, которую вы заплатите за свой автомобиль, и к вашей покупке нет никаких скрытых комиссий или дополнительных затрат.",
    },
    {
        id:"three",
        question: "Могу ли я договориться о цене автомобиля Aster?",
        answer: "В этом нет необходимости. Мы предлагаем прозрачный и удобный опыт продажи. Цены, указанные для каждого автомобиля Aster, являются нашими лучшими и максимально конкурентоспособными. Цена, которую вы видите, - это цена, которую вы заплатите за свой автомобиль, и к вашей покупке нет никаких скрытых комиссий или дополнительных затрат.",
    },
];
let faqListPlace = document.querySelector('#faq-list');
let faqCollapse = "";
    faq.forEach(item=>{
        faqCollapse +=`
        <div class="faq-item mb-3 pb-3 border-bottom p-3 bg-white">
            <button class="not-button d-flex align-items-center justify-content-between w-100" type="button" data-bs-toggle="collapse" data-bs-target="#${item.id}" aria-expanded="false" aria-controls="${item.id}" onclick="collapseFunction(event);">
                <h3 class="m-0 fw-bold text-dark fs-5">${item.question}</h3>
                <i class="bi bi-plus-lg fs-5 text-dark"></i>
            </button>
            <div class="collapse mt-3" id="${item.id}">
                <p class="m-0 text-dark">${item.answer}</p>
            </div>
        </div>
        `;
    });
    faqListPlace.innerHTML = faqCollapse;

    function collapseFunction(event){
        let button;
        let target = event.target;
            if(target.tagName === "BUTTON"){
                button = target;
            }else{
                button = target.closest('button');
            }
            let i = button.querySelector('i');
            let parent = button.closest('.faq-item');
                parent.classList.toggle('rounded-5');
                parent.classList.toggle('bg-blue-light');
                parent.classList.toggle('bg-white');
                parent.classList.toggle('rounded-0');
                i.classList.toggle('rotate');
    }