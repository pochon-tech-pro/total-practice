package presentation

import (
	"echo-app/sales/application/service"
	"github.com/labstack/echo/v4"
	"net/http"
)

func CustomerListHandler(s service.CustomerListService) echo.HandlerFunc {
	return func(c echo.Context) error {
		output := s.Find()
		return c.JSON(http.StatusOK, output)
	}
}
