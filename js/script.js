////// Task 1 - Все робити за допомоги js.

//        - створити блок,
const main = document.createElement('div');

//        - додати йому класи wrap, collapse, alpha, beta
main.classList = 'wrap collapse alpha beta';

//        - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
main.style.backgroundColor = 'grey';
main.style.color = 'yellow';
main.style.fontSize = '21px';

//        - додати цей блок в body.
document.body.append(main);

//        - клонувати його повністю, та додати клон в body.
document.body.append(main.cloneNode(true));

////// Task 2 - Є масив:
//          ['Main','Products','About us','Contacts']
//          Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає
//          його до блоку .menu
//          Завдання робити через цикли.

const arr2 = ['Main', 'Products', 'About us', 'Contacts'];
const list = document.getElementsByClassName('menu')[0];

for (const elem of arr2) {
    const section = document.createElement('div');
    section.classList = elem;
    list.append(section);
}

////// Task 3 - Є масив
//              let coursesAndDurationArray = [
//                  {title: 'JavaScript Complex', monthDuration: 5},
//                  {title: 'Java Complex', monthDuration: 6},
//                  {title: 'Python Complex', monthDuration: 6},
//                  {title: 'QA Complex', monthDuration: 4},
//                  {title: 'FullStack', monthDuration: 7},
//                  {title: 'Frontend', monthDuration: 4}
//              ];
//              Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//              Завдання робити через цикли.

const coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const block of coursesAndDurationArray1) {
    const box = document.createElement('div');
    box.innerHTML = `${block.title} = ${block.monthDuration} month`;
    document.body.append(box);
}

////// Task 4 - Є масив
//              let coursesAndDurationArray = [
//                  {title: 'JavaScript Complex', monthDuration: 5},
//                  {title: 'Java Complex', monthDuration: 6},
//                  {title: 'Python Complex', monthDuration: 6},
//                  {title: 'QA Complex', monthDuration: 4},
//                  {title: 'FullStack', monthDuration: 7},
//                  {title: 'Frontend', monthDuration: 4}
//              ];
//              За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
//              <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//              Завдання робити через цикли.

const coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const block of coursesAndDurationArray2) {
    const box = document.createElement('div'),
        title = document.createElement('h1'),
        text = document.createElement('p');

    box.classList = 'item';
    title.classList = 'heading';
    text.classList = 'description';

    title.innerHTML = block.title;
    text.innerHTML = block.monthDuration;

    document.body.append(box);
    box.append(title);
    box.append(text);
}