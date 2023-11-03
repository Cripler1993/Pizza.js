let pizza = [
  {
    id: "1",
    name: "Жюльен",
    description:
      "Цыпленок, шампиньоны, сливочный соус с грибами, красный лук, чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
    price: 469,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/f8bcc0d18f5a4817a720a159f0f8c37c_366x366.webp",
  },
  {
    id: "2",
    name: "Сырная",
    description: "Моцарелла, сыры чеддер и пармезан, фирменный соус альфредо",
    price: 289,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/d9c609f1422247f2b87b6293eb461ff0_366x366.webp",
  },
  {
    id: "3",
    name: "Двойной цыпленок",
    description: "Цыпленок, моцарелла, фирменный соус альфредо",
    price: 369,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_366x366.webp",
  },
  {
    id: "4",
    name: "Чоризо фреш",
    description:
      "Фирменный томатный соус, моцарелла, острая чоризо, сладкий перец",
    price: 289,
    category: "пицца",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/02ca2561953b488993878d1f70e359de_366x366.webp",
  },
  {
    id: "5",
    name: "Омлет с ветчиной и грибами",
    description:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла",
    price: 179,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/56d8f8a01e8743a0a5fcedb99aafcc1e_366x366.webp",
  },
  {
    id: "6",
    name: "Омлет с ветчиной и грибами в пите",
    description:
      "Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла в пшеничной пите. Удобно взять с собой",
    price: 199,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/e62d387386984ad1ac46309e372c1b9a_366x366.webp",
  },
  {
    id: "7",
    name: "Омлет с беконом",
    description:
      "Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак",
    price: 179,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/667b94d3b0604d30965e5b0ca057c964_366x366.webp",
  },
  {
    id: "8",
    name: "Омлет сырный в пите",
    description:
      "Вариант завтрака в пшеничной пите с омлетом с поджаристой корочкой, моцареллой, кубиками брынзы, сырами чеддер и пармезан. Удобно взять с собой",
    price: 199,
    category: "завтраки",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b990b6a4313e434a924bdaafea9e9a98_366x366.webp",
  },
  {
    id: "9",
    name: "Банановый молочный коктейль",
    description:
      "По-настоящему солнечный! Молочный коктейль с добавлением бананового пюре",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b37a2fc8d9ac4636957fdd71f62d1725_366x366.webp",
  },
  {
    id: "10",
    name: "Карамельное яблоко молочный коктейль",
    description:
      "Уютное сочетание яблочного вкуса, теплой карамели, молока и мороженого в вашем стакане",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/7d8acee0f9984844bdeb3e22d359a4fc_366x366.webp",
  },
  {
    id: "11",
    name: "Шоколадный молочный коктейль",
    description:
      "Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым",
    price: 199,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/8f463da299934c02be98098809ceb885_366x366.webp",
  },
  {
    id: "12",
    name: "Молочный коктейль с печеньем Орео",
    description:
      "Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»",
    price: 215,
    category: "коктейли",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/de7a12c1a960434cadc309df31da75ed_366x366.webp",
  },
  {
    id: "13",
    name: "Слоеные палочки с соусом манго и ананасами",
    description:
      "Это что-то на тропическом! Ананас и манговый соус на воздушном слоеном тесте",
    price: 249,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/45260444366141e09484d43397821382_366x366.webp",
  },
  {
    id: "14",
    name: "Слоеные палочки с ананасами и брусникой",
    description:
      "Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте",
    price: 229,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/b61244b188fa4bcaa5c751f970954ffb_366x366.webp",
  },
  {
    id: "15",
    name: "Брауни",
    description:
      "Умножили какао на шоколад и получили изумительный десерт. Вот такая сладкая арифметика",
    price: 139,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/33bbe8803b6a41268c6cc3980db0be3a_366x366.webp",
  },
  {
    id: "16",
    name: "Чизкейк Нью-Йорк",
    description:
      "Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк",
    price: 159,
    category: "десерты",
    img: "https://dodopizza-a.akamaihd.net/static/Img/Products/5a06bd533bb846f59cfb4b8c4e062f86_366x366.webp",
  },
];
let bin = [];

// вопросы как сделать так чтобы не выбрасывало на пиццу фильтры
// нужен скролл в корзине

let container = document.querySelector(".container");
let categoryBtns = document.querySelectorAll(".categ__btn");
let filterPrice = document.querySelector(".filter__price");
let filterAlphabet = document.querySelector(".filter__alphabet");

let basketCount = document.querySelectorAll(".quantity__value");
let summValue = document.querySelector(".summ__value");

// Написать функцию sortProducts которая на вход принимает строку, и сортирует массив pizza
// по убыванию или возрастанию цены, в зависимости от значения строки (min или max)

filterPrice.onchange = function sortProducts() {
  if (filterPrice.value == "max") {
    pizza.sort(function (a, b) {
      return a.price - b.price;
    });
  } else {
    pizza.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  renderProducts(pizza);
};

// функция сортирует массив в алфавитном порядке. условие если значение FA = "min" сортируем от а до я.
//  В другом случае наоборот.

filterAlphabet.onchange = function sortProductsArr() {
  if (filterAlphabet.value == "min") {
    pizza.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  } else {
    pizza.sort(function (a, b) {
      return b.name.localeCompare(a.name);
    });
  }
  renderProducts(pizza);
};

// функция для сортировки по категориям.
//  Кликая на кнопки открываем функцию где производим очистку всех кнопок от активного класса(синий цвет)
// добавляем активный класс кнопке(синий цвет).
// задаем условие в котором если внутренний текст кнопки = 'все', то вставляем массив пицца
// в другом случае создаем переменную в которую  заносим результат выполнении функции filterProducts
// далее осуществляем рендер отфильрованного массива

categoryBtns.forEach(function (elem) {
  elem.onclick = function () {
    clearAll();
    elem.classList.add("active");
    if (elem.innerText == "все") {
      renderProducts(pizza);
    } else {
      let newArr = filterProducts(elem.innerText);
      console.log(newArr);
      renderProducts(newArr);
    }
  };
});

//! Написать функцию filterProducts которая на вход принимает название категории,
//!  и возвращает новый отфильтрованный массив состоящий из элементов,
//! где значение ключа категории совпадает с переданным в функцию

// данная функция позволяет нам вернуть отфильтрованный массив для использования в функции выше
// в ней создаем переменную  в которую возвращаем отфильтрованный массив пицца по условию
// название категории объекта = параметру Name
// возвраащаем результат функции filterProducts

function filterProducts(name) {
  let newArr = pizza.filter(function (elem, index) {
    return elem.category == name;
  });
  return newArr;
}

//функция убирает активный класс у всех элементов условного массива categoryBtns

function clearAll() {
  categoryBtns.forEach(function (elem) {
    elem.classList.remove("active");
  });
}
// исходная функция которая добавляет элементы из массива на страинцу браузера, в себя принимает параметр arr
// ! для того чтобы в будущем взаимодействовать c разными массивами через эту функцию
//добавлено очищение контента в связи c тем, что фильтруем исходный массив по категориям
// далее выполняем рендер массива
// добавили функцию слушателей

function renderProducts(arr) {
  container.innerHTML = "";
  arr.forEach(function (elem) {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class="product">
      <div>
    <div class="product__img">
      <img
        src=${elem.img}
        alt=""
      />
    </div>
    <div class="product__name">${elem.name}</div>
    <div class="product__description">
      ${elem.description}
    </div>
    </div>
    <div class="product__info">
      <p class="price">${elem.price}р</p>
      <button class="product__btn">выбрать <span class="product__count"></span></button>
    </div>
  </div>`
    );
  });
  addlisteners(arr);
}
// функция слушателей позволяет пользоваться кнопкой выбрать и добавлять элемент в корзину
// внутри функции достаем все кнопки выбрать
// по клику на кнопку создаем переменную в которую возвращем итог нового метода find
//в массиве bin ищем элемент который прошел проверку условия на совпадение его id с id объекта из массива arr(параметр)
//  который рендерим в функции renderProducts
// так же по клику на кнопку проходит условие в котором если отфильтрованный элемент уже существует плюсуем к ключу count 1
// и отображаем в соответсвующем спане это количество
// если такого элемента не существует то мы отправляем в массив бин объект
// в соответсвующем спане отображаем единицу
// (в этом случае любой объект из бин получает новый ключ count )

function addlisteners(arr) {
  let productBtns = document.querySelectorAll(".product__btn");
  let productCounts = document.querySelectorAll(".product__count");

  productBtns.forEach(function (elem, index) {
    elem.onclick = function () {
      // bin.push(arr[index]);
      let currentElement = bin.find(function (elem) {
        return elem.id == arr[index].id;
      });
      if (currentElement) {
        currentElement.count = currentElement.count + 1;
        productCounts[index].innerHTML = `(${currentElement.count})`;
      } else {
        bin.push({
          img: arr[index].img,
          name: arr[index].name,
          price: arr[index].price,
          count: 1,
          id: arr[index].id,
        });
        productCounts[index].innerHTML = "(1)";
      }
      console.log(bin);
      renderBin();
    };
  });
}

// функция осуществляет рендер элементов в корзину у которых кликнули на кнопку "выбрать"
// создали переменную summ равную 0 с помощью которой будем в корзине увеличивать общую сумму заказа
// очищаем html корзины чтобы избежать повторения ранее стоящих в массиве элементов.
// выше созадли пустой массив бин для всех элементов в нем открываем функцию с параметром elem
// переменная summ получает в себя значение где к ее значению будет плюсоваться цена каждого элемента в массиве бин
// рендер элементов из массива бин в окно корзины
// добавляли сюда count чтобы при повторении элемента число продуктов росло в корзине
// строчка позволяет подставить значение summ в html у  summ__value
//! не понял почему для баскет каунта открыт for each. смысл в том, что в html счетчик количества товаров в корзине
//! подставляется количество элементов в массиве bin
// добавляем функцию слушателей корзины

function renderBin() {
  let summ = 0;

  basket.innerHTML = "";
  bin.forEach(function (elem) {
    summ = summ + elem.price * elem.count;
    basket.insertAdjacentHTML(
      "beforeend",
      `<div class="bin__product">
      <div class="bin__top">
        <div class="bin__flex">
          <img
            src=${elem.img}
            alt=""
          />
          <p>${elem.name} (${elem.count})</p>
        </div>
        <div class="bin__delete">
          <i class="uil uil-times uil-del"></i>
        </div>
      </div>
      <p class="bin__price">${elem.price}р</p>
    </div>`
    );
  });
  summValue.innerHTML = summ;
  basketCount.forEach(function (elem) {
    elem.innerHTML = bin.length;
  });
  addBinListeners();
}

// функция позволяет пользоваться кнопками удаления элементов из корзины
// достаем внутри функции все кнопки удаления
// кликая по кнопке удаления(крестик) фильтруем массив бин по условию где будем возращать массив в ко
//
// снова проводим подставление массива после того как был произведен фильтр по условию

function addBinListeners() {
  let btnDelete = document.querySelectorAll(".bin__delete");

  btnDelete.forEach(function (elem, index) {
    elem.onclick = function () {
      console.log(bin[index]);
      bin = bin.filter(function (item) {
        console.log(item);
        return item.id != bin[index].id;
      });
      renderBin();
    };
  });
}

renderProducts(pizza);

// корзина

let modalWrapper = document.querySelector(".modal__wrapper");
let binBtn = document.querySelector(".bin__btn");
let closeBin = document.querySelector(".uil");
let basket = document.querySelector(".bin__column");
let body = document.querySelector(".body");

binBtn.onclick = function () {
  modalWrapper.classList.remove("disable__modalWrapper");
  body.classList.add("scroll__disable");
};

closeBin.onclick = function () {
  modalWrapper.classList.add("disable__modalWrapper");
  body.classList.remove("scroll__disable");
};
