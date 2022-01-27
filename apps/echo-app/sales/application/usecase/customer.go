package usecase

import (
	"echo-app/sales/application/repository"
	"echo-app/sales/domain/model"
)

type CustomerUseCase struct {
	CustomerRepository repository.CustomerRepository
}

type Customer struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

type FindAllOutput struct {
	Customer
}

func (c CustomerUseCase) FindAll() (out []FindAllOutput, err error) {
	data := c.CustomerRepository.FindAll()
	for _, v := range data {
		out = append(out, FindAllOutput{
			Customer{
				Id:   v.Id.ToInt(),
				Name: v.Name.ToString(),
				Tel:  v.Tel.ToString(),
			},
		})
	}
	//err = errors.New(fmt.Sprintf("unexpected : %+v", out))
	return
}

type FindOneInput struct {
	Tel string `json:"tel"`
}

type FindOneOutput struct {
	Customer
}

func (c CustomerUseCase) FindOne(in FindOneInput) (out FindOneOutput, err error) {
	tel := model.Tel(in.Tel)
	data, err := c.CustomerRepository.FindByTel(tel)
	out = FindOneOutput{
		Customer{
			Id:   data.Id.ToInt(),
			Name: data.Name.ToString(),
			Tel:  data.Tel.ToString(),
		},
	}
	return
}
