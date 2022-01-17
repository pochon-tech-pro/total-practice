package orm

type CustomerORM struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
	Tel  string `json:"tel"`
}

func (c CustomerORM) TableName() string {
	return "customers"
}
