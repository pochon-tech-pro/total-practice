package repository

import (
	"echo-app/sales/domain/model"
	"gorm.io/gorm"
)

type DBCustomerRepository struct {
	DB *gorm.DB
}

func (d DBCustomerRepository) FindAll() (out model.Customers) {
	return model.Customers{{1, "test", "03-0001-0001"}}
}
