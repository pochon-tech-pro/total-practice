package router

import (
	"echo-app/foundation"
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

func provUser(m foundation.Middleware) {
	m.E.GET("/", HelloPage(m))
}
