import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
        {name: "Chocolate", imagePaths: "/images/chocolate.png"},
        {name: "Vanilla", imagePaths: "/images/vanilla.png"}
    ])
  }),
  http.get('http://localhost:3030/toppings', () => {
    return HttpResponse.json([
        {name: "Cherries", imagePaths: "/images/cherries.png"},
        {name: "M&Ms", imagePaths: "/images/m-andms.png"},
        {name: 'Hot fudge', imagePath: "/images/hot-fudge.png"},
    ])
  }),
]