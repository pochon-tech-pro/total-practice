package bootstrap

import (
	"database/sql"
	"echo-app/database"
	"echo-app/foundation"
	"fmt"
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

	provider(foundation.Middleware{
		DB: database.DB,
	})
}
