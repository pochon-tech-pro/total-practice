package api

import (
	"echo-app/sales/application/service"
	"github.com/labstack/echo/v4"
	"net/http"
)

func CustomerListHandler(service service.CustomerListService) echo.HandlerFunc {
	return func(c echo.Context) error {
		output, err := service.FindAll()
		if err != nil {
			return NewHTTPError(http.StatusBadRequest, "InvalidID", err.Error())
		}
		return c.JSON(http.StatusOK, output)
	}
}
