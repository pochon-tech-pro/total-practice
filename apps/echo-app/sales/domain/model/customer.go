package model

type Id int

func (i Id) ToInt() int {
	return int(i)
}

type Name string

func (n Name) ToString() string {
	return string(n)
}

type Tel string

func (t Tel) ToString() string {
	return string(t)
}

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
