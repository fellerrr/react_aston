export const temporaryList = [
  { title: 'Название товара', price: 100.0 },
  { title: 'Книга про React', price: 770 },
  { title: 'Конфета', price: 33 },
  { title: 'Трактор', price: 7955320 },
  { title: 'Телефон iPhone XV', price: 120000 },
  { title: 'Карандаши цветные', price: 111 },
  { title: 'Товар сюрприз', price: 0 }
]

export const generateCode = (function (start = 0) {
  return () => ++start
})()
