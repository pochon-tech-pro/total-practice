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
	var customers []orm.CustomerORM
	d.DB.Find(&customers)
	// log.Printf("%+v", customers)
	for _, v := range customers {
		out = append(out, model.Customer{
			Id:   v.Id,
			Name: v.Name,
			Tel:  v.Tel,
		})
	}
	return
}
