package router

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

func CustomerListHandler(s service.CustomerListService) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := s.Find()
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}
		return c.JSON(http.StatusOK, output)
	}
}

func provCustomer(m foundation.Middleware) {
	{
		s := service.CustomerListService{}
		m.Echo.GET("/sample", CustomerListHandler(s))
	}
	{
		m.Echo.GET("/", HelloPage(m))
	}
}
