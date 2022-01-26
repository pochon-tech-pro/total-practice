package repository

import "echo-app/sales/domain/model"

type CustomerRepository interface {
	FindAll() model.Customers
	FindByTel(tel model.Tel) model.Customer
}
