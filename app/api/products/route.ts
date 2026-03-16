

import { NextResponse } from "next/server";

export async function GET() { //export here doesnt work like with normal functions; because its in a route.ts file, next knows its to be used to handle a request
                                // async means the function runs asynchronously. without this you wouldnt be able to use await
  const response = await fetch("https://dummyjson.com/products?limit=20"); //await pauses the funciton until the asynchronous operation finishes. awaits until dummy server responds
                                                                            //fetch makes an http request to the url
  const data = await response.json(); //this variable will store the response from the above line and convert it into a JS object
  return NextResponse.json(data.products); //return ends the function and sends a value back to the caller. data.products means the products property of the data
                                            //variable is accessed
}