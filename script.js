function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuElement = document.getElementById('menu');
        
        // Display food items to the user
        data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.textContent = `${item.name}: $${item.price}`;
          menuElement.appendChild(itemElement);
        });
      })
      .catch(error => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
      });
  }
  
  // Rest of the code remains the same...
  
  
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        // Randomly select 3 burgers
        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }
        
        const order = { burgers: randomBurgers };
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
  
  function startOrder() {
    getMenu()
      .then(() => takeOrder())
      .then(order => {
        console.log('Order:', order);
        return orderPrep();
      })
      .then(orderStatus => {
        console.log('Order Status:', orderStatus);
        return payOrder();
      })
      .then(paymentStatus => {
        console.log('Payment Status:', paymentStatus);
        thankyouFnc();
      })
      .catch(error => {
        // Handle any errors that occur during promise resolutions
        console.error('Error:', error);
      });
  }
  