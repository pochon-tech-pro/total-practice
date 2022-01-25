package usecase

import (
	"echo-app/sales/application/repository"
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
	out = FindOneOutput{
		Customer{
			Id:   1000,
			Name: "太郎",
			Tel:  "03-1111-2222",
		},
	}
	return
}
