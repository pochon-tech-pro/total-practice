package usecase

import (
	"echo-app/sales/application/repository"
)

type CustomerUseCase struct {
	CustomerRepository repository.CustomerRepository
}

type FindAllOutput struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func (c CustomerUseCase) FindAll() (out []FindAllOutput, err error) {
	data := c.CustomerRepository.FindAll()
	for _, v := range data {
		out = append(out, FindAllOutput{
			Id:   v.Id.ToInt(),
			Name: v.Name.ToString(),
			Tel:  v.Tel.ToString(),
		})
	}
	//err = errors.New(fmt.Sprintf("unexpected : %+v", out))
	return
}
