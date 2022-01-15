package router

import (
	"echo-app/foundation"
)

func Provider(m foundation.Middleware) {
	provCustomer(m)
	m.Echo.Logger.Fatal(m.Echo.Start(":3001"))
}
