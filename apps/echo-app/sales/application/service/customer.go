package service

import (
	"echo-app/sales/application/repository"
)

type CustomerListService struct {
	CustomerRepository repository.CustomerRepository
}

type Output struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func (c CustomerListService) FindAll() (out []Output, err error) {
	data := c.CustomerRepository.FindAll()
	for _, v := range data {
		out = append(out, Output{
			Id:   v.Id.ToInt(),
			Name: v.Name.ToString(),
			Tel:  v.Tel.ToString(),
		})
	}
	//err = errors.New(fmt.Sprintf("unexpected : %+v", out))
	return
}
