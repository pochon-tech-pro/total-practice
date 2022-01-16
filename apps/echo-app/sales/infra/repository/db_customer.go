package repository

import (
	"echo-app/sales/domain/model"
	"gorm.io/gorm"
)

type DBCustomerRepository struct {
	DB *gorm.DB
}

type Customer struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func (d DBCustomerRepository) FindAll() (out model.Customers) {
	var customers []Customer
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
