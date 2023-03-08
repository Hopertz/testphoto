package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	// Read the image file into a []byte variable
	imageBytes, err := ioutil.ReadFile("bb.jpg")
	if err != nil {
		panic(err)
	}

	// Print the length of the []byte variable
	fmt.Printf("Image file size: %d bytes\n", len(imageBytes))

	fmt.Println(imageBytes)

	// Do something with the image bytes...
}
