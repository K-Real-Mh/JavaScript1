function createItem(id, name, price, img) {
	return { id, name, price, img }
};

function initCatalog() {
	let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let names = ["MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT",
	"MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT", "MANGO PEOPLE T-SHIRT"];

	let prices = ["12.00", "25.00", "32.00", "100.00", "10500.00", "666.00", "69.00", "11111.00", "0.69",];

	let imgs = [
		"../src/assets/imgs/product1.jpg",
		"../src/assets/imgs/product2.jpg",
		"../src/assets/imgs/product3.jpg",
		"../src/assets/imgs/product4.jpg",
		"../src/assets/imgs/product5.jpg",
		"../src/assets/imgs/product6.jpg",
		"../src/assets/imgs/product7.jpg",
		"../src/assets/imgs/product8.jpg",
		"../src/assets/imgs/product9.jpg",
	]

	return names.map((name, index) => createItem(ids[index], name, prices[index], imgs[index]));
}

const catalog = {
	items: [],
	container:  null,

	init() {
		this.container = document.querySelector('#catalog');
		this.items = initCatalog();
		this._render();
	},
	_render() {
		let str = '';

		this.items.forEach(item => {
			str += `
			<section class="col-xl-4 col-6 product__item">
				<div class="products__item">
				<div class="products__wrap-img">
					<div class="products__buy">
						<button>
							<img src="../src/assets/imgs/addToCart.png" alt="">
							Add to Cart
						</button>
					</div>
					<img class="products__img" src="${item.img}" alt="product1">
				</div>
				<div class="products__bottom">
					<div class="products__name">${item.name}</div>
					<div class="products__price">$${item.price}</div>
				</div>
			</div>
		</section>
			`
		});
		this.container.innerHTML = str;
	}
}

catalog.init();