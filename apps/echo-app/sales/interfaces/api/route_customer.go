package api

import (
	"echo-app/foundation"
	"echo-app/sales/application/service"
	"github.com/labstack/echo/v4"
	"net/http"
)

type Customer struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func HelloPage(m foundation.Middleware) echo.HandlerFunc {
	return func(c echo.Context) error {
		var customers []Customer
		m.DB.Find(&customers)
		return c.JSON(http.StatusOK, customers)
	}
}

func CustomerListHandler(service service.CustomerListService) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := service.FindAll()
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}
		return c.JSON(http.StatusOK, output)
	}
}
