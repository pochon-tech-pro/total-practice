package bootstrap

import (
	"database/sql"
	"echo-app/database"
	"echo-app/foundation"
	"echo-app/sales/interfaces/api"
	"fmt"
	"github.com/labstack/echo/v4"
	"log"
)

func Start() {
	log.Println("Go Application Starting..")

	database.Connect()
	sqlDB, _ := database.DB.DB()
	defer func(sqlDB *sql.DB) {
		fmt.Println("DB Closing...")
		err := sqlDB.Close()
		if err != nil {

		}
	}(sqlDB)

	api.Routes(foundation.Middleware{
		DB:   database.DB,
		Echo: echo.New(),
	})
}
