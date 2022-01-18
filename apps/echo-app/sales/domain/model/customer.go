package model

type Id int
type Name string
type Tel string

type Customer struct {
	Id   Id
	Name Name
	Tel  Tel
}

func NewCustomer(id int, name string, tel string) (out Customer, err error) {
	out = Customer{Id(id), Name(name), Tel(tel)}
	return
}

type Customers []Customer
