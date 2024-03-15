import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
        {name: "Chocolate", imagePaths: "/images.chocolate.png"},
        {name: "Vanilla", imagePaths: "/images.vanilla.png"}
    ])
  }),
]