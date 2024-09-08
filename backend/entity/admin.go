package entity


import (
   "gorm.io/gorm"
)

type Admin struct {

	gorm.Model
	FirstName string 
	LastName string 
	UserName string `json:"user_name"`
	Password  string   `json:"-"`
	GenderID  string     `json:"gender_id"`
	Gender    *Genders  `gorm:"foreignKey: gender_id" json:"gender"`
}