package api

import (
	"echo-app/sales/application/service"
	"github.com/labstack/echo/v4"
	"net/http"
)

type ResponseSchema struct {
	IsSuccess bool             `json:"isSuccess"`
	Message   string           `json:"message"`
	Body      []service.Output `json:"body"`
}

func CustomerListHandler(service service.CustomerListService) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := service.FindAll()
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}
		response := ResponseSchema{
			IsSuccess: true,
			Message:   "",
			Body:      output,
		}
		return c.JSON(http.StatusOK, response)
	}
}
