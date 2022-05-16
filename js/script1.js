// Task 1 - є масив: const simpsons = [];
//          Проітерувати його, створиши для кожного елементу масиву <div class='member'>.

const simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    const block = document.createElement('div');
    block.classList = 'member';
    document.body.append(block);
}

// Task 2 - взяти попередній масив з сімпсонами.
//          Проітерувати його, створиши для кожного елементу масиву <div class='member'>. Для кожної властивості елементу
//          створити окремий блок, та помістити його у div.member

for (const simpson of simpsons) {
    const block = document.createElement('div'),
        name = document.createElement('p'),
        surname = document.createElement('p'),
        age = document.createElement('p'),
        info = document.createElement('p'),
        photo = document.createElement('img');

    block.classList = 'member';
    name.textContent = simpson.name;
    surname.textContent = simpson.surname;
    age.textContent = simpson.age;
    info.textContent = simpson.info;
    photo.src = simpson.photo;

    document.body.append(block);
    block.append(name, surname, age, info, photo);
}

// Task 3 - Є масив
//          Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
//          окремих властивостей, для властивості modules зробити список з елементами
//          Приклад структири знаходиться у файлі example.png

const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const elem of coursesArray) {
    const container = document.createElement('div'),
        title = document.createElement('div'),
        duration = document.createElement('div'),
        monthDuration = document.createElement('div'),
        hourDuration = document.createElement('div'),
        modules = document.createElement('div');

    container.style.border = '1px solid red';
    container.style.width = '400px';

    title.textContent = elem.title;
    title.style.border = '1px solid blue';
    title.style.margin = '2px';

    duration.style.border = '1px solid blue';
    duration.style.display = 'flex';
    duration.style.margin = '2px';

    monthDuration.textContent = elem.monthDuration;
    monthDuration.style.border = '1px solid blue';
    monthDuration.style.margin = '2px';
    monthDuration.style.width = '30%';

    hourDuration.textContent = elem.hourDuration;
    hourDuration.style.border = '1px solid blue';
    hourDuration.style.margin = '2px';
    hourDuration.style.width = '70%';

    modules.style.border = '1px solid blue';
    modules.style.margin = '2px';

    for (const module of elem.modules) {
        const box = document.createElement('div');
        box.textContent = module;
        box.style.border = '1px solid blue';
        box.style.margin = '2px';
        modules.append(box);
    }

    document.body.append(container);
    container.append(title, duration, modules);

    duration.append(monthDuration, hourDuration);
}
