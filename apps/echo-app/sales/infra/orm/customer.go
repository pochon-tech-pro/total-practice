package orm

import "echo-app/sales/domain/model"

type CustomerORM struct {
	Id   int    `gorm:"column:id; primary_key"`
	Name string `gorm:"column:name"`
	Tel  string `gorm:"column:tel"`
}

func (c CustomerORM) TableName() string {
	return "customers"
}
func (c CustomerORM) ToModel() (out model.Customer, err error) {
	out, _ = model.NewCustomer(c.Id, c.Name, c.Tel)
	return
}

type CustomersORM []CustomerORM

func (cs CustomersORM) ToModel() (out model.Customers, err error) {
	for _, each := range cs {
		customer, _ := each.ToModel()
		out = append(out, customer)
	}
	return
}
