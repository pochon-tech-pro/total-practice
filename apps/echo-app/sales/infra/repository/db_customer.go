package repository

import (
	"echo-app/sales/domain/model"
	"echo-app/sales/infra/orm"
	"gorm.io/gorm"
)

type DBCustomerRepository struct {
	DB *gorm.DB
}

func (d DBCustomerRepository) FindAll() (out model.Customers) {
	var customers orm.CustomersORM
	d.DB.Find(&customers)
	// log.Printf("%+v", customers)
	out, _ = customers.ToModel()
	return
}
