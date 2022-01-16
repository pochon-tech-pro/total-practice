package model

type Customer struct {
	Id   int
	Name string
	Tel  string
}

func NewCustomer(id int, name string, tel string) (out Customer, err error) {
	out = Customer{id, name, tel}
	return
}

type Customers []Customer
