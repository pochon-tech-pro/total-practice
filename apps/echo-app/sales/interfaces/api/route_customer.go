package api

import (
	"echo-app/sales/application/usecase"
	"github.com/labstack/echo/v4"
	"net/http"
)

func CustomerListHandler(service usecase.CustomerUseCase) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := service.FindAll()
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}

		type responseSchema struct {
			IsSuccess bool                    `json:"isSuccess"`
			Message   string                  `json:"message"`
			Body      []usecase.FindAllOutput `json:"body"`
		}
		response := responseSchema{
			IsSuccess: true,
			Message:   "",
			Body:      output,
		}
		return c.JSON(http.StatusOK, response)
	}
}

func CustomerFindOneHandler(service usecase.CustomerUseCase) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := service.FindOne(usecase.FindOneInput{Tel: "03-1111-2222"})
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}

		type responseSchema struct {
			IsSuccess bool                  `json:"isSuccess"`
			Message   string                `json:"message"`
			Body      usecase.FindOneOutput `json:"body"`
		}
		response := responseSchema{
			IsSuccess: true,
			Message:   "",
			Body:      output,
		}
		return c.JSON(http.StatusOK, response)
	}
}
