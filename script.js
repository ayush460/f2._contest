function getMenu() {
  return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
    .then(response => response.json())
    .then(data => {
      const menuList = document.getElementById('menu-list');
      data.forEach(item => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = item.imgSrc;
        image.alt = item.name;
       
        image.style.width = '400px';
        image.style.height = '200px';
        listItem.innerText = `${item.name} - ${item.price}`;
        listItem.appendChild(image);
        menuList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching menu:', error);
    });
}

function takeOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      const burgers = getRandomBurgers(3);
      const order = {
        burgers: burgers
      };
      resolve(order);
    }, 2500);
  });
}

function orderPrep() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

function payOrder() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

function thankyouFnc() {
  alert('Thank you for eating with us today!');
}

function getRandomBurgers(count) {
  const burgers = ['Cheeseburger', 'Burger', 'Veggie Burger', 'Chicken Burger'];
  const randomBurgers = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * burgers.length);
    randomBurgers.push(burgers[randomIndex]);
  }
  return randomBurgers;
}

function startOrder() {
  getMenu()
    .then(() => {
      return takeOrder();
    })
    .then(order => {
      console.log('Order:', order);
      return orderPrep();
    })
    .then(preparation => {
      console.log('Preparation:', preparation);
      return payOrder();
    })
    .then(payment => {
      console.log('Payment:', payment);
      thankyouFnc();
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
