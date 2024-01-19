import './style.css'

interface ItemProps {
  item: {
    id: number
    name: string
    image: string
    status: string
    species: string
    type: string
    gender: string
  }
}

export function Item(props: ItemProps) {
  const type = props.item.type ? props.item.type : 'No'
  return (
    <div className='Item'>
      <img className='Item-image' src={props.item.image} alt={props.item.name} />
      <div>
        <div className='Item-text'>Name: {props.item.name}</div>
        <div className='Item-text'>Status: {props.item.status}</div>
        <div className='Item-text'>Species: {props.item.species}</div>
        <div className='Item-text'>Type: {type}</div>
        <div className='Item-text'>Gender: {props.item.gender}</div>
      </div>
    </div>
  )
}
