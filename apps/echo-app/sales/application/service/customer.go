package service

type CustomerListService struct {
}

type Output struct {
	Id   int
	Name string
}

func (c CustomerListService) Find() Output {
	return Output{
		Id:   1,
		Name: "Test",
	}
}
