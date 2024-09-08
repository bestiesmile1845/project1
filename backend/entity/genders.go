package entity


import "gorm.io/gorm"


type Genders struct {

   gorm.Model

   Gender string `json:"gender"`
   TypeGender string `json:type_Gender`

}