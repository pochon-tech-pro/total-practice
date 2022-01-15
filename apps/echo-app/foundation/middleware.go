package foundation

import (
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
)

type Middleware struct {
	DB   *gorm.DB
	Echo *echo.Echo
}
