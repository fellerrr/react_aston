import './style.css'

interface ItemProps {
  item: {
    title: string
    price: number
  }
}

export function Item(props: ItemProps) {
  return (
    <div className='Item'>
      <div className='Item-title'>{props.item.title}</div>
      <div className='Item-price'>
        <span>{props.item.price.toLocaleString('ru-RU')}</span>
        <span> ₽</span>
      </div>
    </div>
  )
}
