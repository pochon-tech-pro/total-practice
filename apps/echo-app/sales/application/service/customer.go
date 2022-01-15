package service

import (
	"errors"
	"fmt"
)

type CustomerListService struct {
}

type Output struct {
	Id   int
	Name string
}

func (c CustomerListService) Find() (out []Output, err error) {
	out = append(out, Output{
		Id:   1,
		Name: "Test",
	})
	out = append(out, Output{
		Id:   2,
		Name: "Test2",
	})
	err = errors.New(fmt.Sprintf("unexpected : %+v", out))

	return
}
