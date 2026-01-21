import { itemsData } from './main_data.js';

const itemsWrapper = document.querySelector('.items__wrapper');

itemsWrapper.innerHTML = itemsData.map(item => `
  <div class="items__wrapper-item">
    <div class="items__wrapper-box">
      <div class="item__logo">
        <div class="item__logo-img">
          <img src="${item.image}" alt="${item.title}">
        </div>
      </div>

      <div class="item__title"><p>${item.title}</p></div>

      <div class="item__suptitles">
        ${item.subtitle.map(text => `<p>${text}</p>`).join('')}
      </div>
    </div>
  </div>
`).join('');