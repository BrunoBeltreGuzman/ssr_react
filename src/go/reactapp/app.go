package main

import (
	"fmt"
	"log"
	"net/http"

	rice "github.com/GeertJohan/go.rice"
	"github.com/gorilla/mux"
)

func main() {

	//Server config
	const PORT string = ":8080"

	//Server routers and static files
	routers := mux.NewRouter()
	routers.PathPrefix("/").Handler(http.FileServer(rice.MustFindBox("build").HTTPBox()))

	fmt.Println("Server start successful")
	fmt.Println("http://localhost:", PORT)

	//Server start
	err := http.ListenAndServe(PORT, routers)

	if err != nil {
		log.Fatal(err)
	}
}
