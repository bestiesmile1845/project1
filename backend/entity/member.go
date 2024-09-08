package entity


import (
   "gorm.io/gorm"
)

type Users struct {

	gorm.Model

	FirstName string    

	LastName  string    

	Email     string    

	UserName string 

	Password  string    
	GenderID  uint      `json:"gender_id"`

	Gender    *Genders  `gorm:"foreignKey: gender_id" json:"gender"`
}