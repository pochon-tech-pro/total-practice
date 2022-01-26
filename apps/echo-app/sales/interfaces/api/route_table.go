package api

import (
	"echo-app/foundation"
	"echo-app/sales/application/usecase"
	db "echo-app/sales/infra/repository"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type httpError struct {
	code    int
	Key     string `json:"error"`
	Message string `json:"message"`
}

func (e *httpError) Error() string {
	return e.Key + ": " + e.Message
}

func httpErrorHandler(err error, c echo.Context) {
	var (
		code = http.StatusInternalServerError
		key  = "ServerError"
		msg  string
	)

	if he, ok := err.(*httpError); ok {
		code = he.code
		key = he.Key
		msg = he.Message
	} else {
		msg = http.StatusText(code)
	}

	if !c.Response().Committed {
		if c.Request().Method == echo.HEAD {
			err := c.NoContent(code)
			if err != nil {
				c.Logger().Error(err)
			}
		} else {
			err := c.JSON(code, NewHTTPError(code, key, msg))
			if err != nil {
				c.Logger().Error(err)
			}
		}
	}
}

func NewHTTPError(code int, key string, msg string) *httpError {
	return &httpError{
		code:    code,
		Key:     key,
		Message: msg,
	}
}

func Routes(m foundation.Middleware) {
	m.Echo.Use(middleware.Logger())

	m.Echo.HTTPErrorHandler = httpErrorHandler
	m.Echo.Use(middleware.CORS())
	{
		s := usecase.CustomerUseCase{
			CustomerRepository: db.DBCustomerRepository{DB: m.DB},
		}
		m.Echo.GET("/customer/all", CustomerListHandler(s))
		m.Echo.GET("/customer", CustomerFindOneHandler(s))
	}

	m.Echo.Logger.Fatal(m.Echo.Start(":3001"))
}
