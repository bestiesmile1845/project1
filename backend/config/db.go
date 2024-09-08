package config


import (

   "fmt"

   "example.com/pj2/entity"

   "gorm.io/driver/sqlite"

   "gorm.io/gorm"

)


var db *gorm.DB


func DB() *gorm.DB {

   return db

}


func ConnectionDB() {

   database, err := gorm.Open(sqlite.Open("sa.db?cache=shared"), &gorm.Config{})

   if err != nil {

       panic("failed to connect database")

   }

   fmt.Println("connected database")

   db = database

}


func SetupDatabase() {


   db.AutoMigrate(

       &entity.Users{},

       &entity.Genders{},
       &entity.admins{},

   )


   GenderMale := entity.Genders{Gender: "Male"}

   GenderFemale := entity.Genders{Gender: "Female"}


   db.FirstOrCreate(&GenderMale, &entity.Genders{Gender: "Male"})

   db.FirstOrCreate(&GenderFemale, &entity.Genders{Gender: "Female"})


   hashedPassword, _ := HashPassword("123456")


   Admin := &entity.admin{

       FirstName: "smile",
       LastName:  "Thawan",
	   UserName: "Admin1",
       Password:  hashedPassword,
       GenderID:  1,

   }

   db.FirstOrCreate(Admin, &entity.Admin{

       Email: "Ad@gmail.com",

   })


}