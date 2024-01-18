import { temporaryList as list } from '../../utils'
import { Item } from '../item'
import './style.css'

export function List() {
  return (
    <div>
      {list.map((item) => (
        <div className='List-item' key={item.title}>
          <Item item={item} />
        </div>
      ))}
    </div>
  )
}
