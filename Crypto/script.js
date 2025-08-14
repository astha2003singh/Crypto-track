async function fetchCryptoPrices() {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd'
    );
    const data = await response.json();

    document.getElementById('btc-price').textContent = `$${data.bitcoin.usd}`;
    document.getElementById('eth-price').textContent = `$${data.ethereum.usd}`;
    document.getElementById('doge-price').textContent = `$${data.dogecoin.usd}`;
  } catch (error) {
    console.error('Error fetching prices:', error);
  }
}

//   Fetch prices on page load
fetchCryptoPrices();

// Refresh every 30 seconds
setInterval(fetchCryptoPrices, 30000);

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger-menu');
const menu = document.querySelector('.menu');

if (hamburger && menu) {
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

