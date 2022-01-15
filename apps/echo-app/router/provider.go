package router

import (
	"echo-app/foundation"
)

func Provider(m foundation.Middleware) {
	provUser(m)
	m.E.Logger.Fatal(m.E.Start(":3001"))
}
