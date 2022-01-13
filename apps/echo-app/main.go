package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"

	"echo-app/bootstrap"
	"echo-app/database"
)

type Customer struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func hello(c echo.Context) error {
	database.Connect()
	sqlDB, _ := database.DB.DB()
	defer func(sqlDB *sql.DB) {
		fmt.Println("DB Closing...")
		err := sqlDB.Close()
		if err != nil {

		}
	}(sqlDB)
	err := sqlDB.Ping()
	if err != nil {
		return c.String(http.StatusInternalServerError, "DB Connect Failed ..")
	} else {
		var customers []Customer
		database.DB.Find(&customers)
		return c.JSON(http.StatusOK, customers)
	}
}

func main() {
	bootstrap.Start()

	e := echo.New()
	e.GET("/", hello)
	e.Logger.Fatal(e.Start(":3001"))
}
