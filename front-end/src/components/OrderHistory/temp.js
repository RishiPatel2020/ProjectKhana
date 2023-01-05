// Item =
// 	{
// 		Name: "Punjabi",
// 		Quantity: 2
// 	}

// Order
// 	Customer:
// 	items: [item1, item2,....]
// 	Shipping Date:
// 	Ordered Date:
// 	Price:

const item = {
  name: "Gujarati Thali",
  quantity: 2,
};

const Customer = {
  id: 1,
  fname: "Raju",
  lname: "Iyer",
  email: "rajIyer123@gmail.com",
  address: "15 reler lane, Somerest, NJ, 08873",
  phone: 1234567890,
};

const order = {
  customer: Customer,
  items: [item],
  shipDate: "01/06/2023",
  orderDate: "01/05/2023",
  price: 19.25,
};


Customer
	id 
	fname, lname
	email
	address
	phone

Item
	id
	zipcode
	name
	quantity
	price

Order
	order id
	customer id 
	dateOrder
	shipDate
	totalPrice
	items
