package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func connect() {
	db := "db"
	user := "user"
	pass := "pass"
	host := "mysql"
	port := "3306"

	dsn := user + ":" + pass + "@tcp(" + host + ":" + port + ")/" + db + "?charset=utf8mb4"
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err.Error())
	}
}

type Customer struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func hello(c echo.Context) error {
	connect()
	sqlDB, _ := DB.DB()
	defer sqlDB.Close()
	err := sqlDB.Ping()
	if err != nil {
		return c.String(http.StatusInternalServerError, "データベース接続失敗")
	} else {
		var customers []Customer
		DB.Find(&customers)
		return c.JSON(http.StatusOK, customers)
	}
}

func main() {
	e := echo.New()
	e.GET("/", hello)
	e.Logger.Fatal(e.Start(":3001"))
}
