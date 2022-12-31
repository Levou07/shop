import React, { useContext, useState } from 'react'
import { Context } from '../../Context/Context'
import './Orders.scss'


function Orders() {
  const [btn, setBtn] = useState('b1')
  const {item, setItem} = useContext(Context)

  const delOrder = (evn)=>{
    console.log(evn);
    setItem(item.filter((e)=> (
      e.id != evn,
      e.id === evn ? e.number = 0 : e.number
    )))
  }

  return (
    <div className='order'>
      <div className="order-head">
        <h2>Order #1</h2>
        <div className="order-head-btn">
          <button id='b1' className={btn == 'b1' ? 'btnAct1' : ''} onClick={(e)=> setBtn(e.target.id)}>Dine in</button>
          <button id='b2' className={btn == 'b2' ? 'btnAct1' : ''} onClick={(e)=> setBtn(e.target.id)}>To Go</button>
          <button id='b3' className={btn == 'b3' ? 'btnAct1' : ''} onClick={(e)=> setBtn(e.target.id)}>Delivery</button>
        </div>
        <div className="order-head-poss">
          <h3>Item</h3>
          <h3>Qty</h3>
          <h3>Price</h3>
        </div>
        <hr />
      </div>
      <div className="right-List">
        {
          item?.map((e,i)=>(
            <li key={i} className='list' >
              <div className="list-up">
                <div>
                  <img src={e.img} alt="img" />
                </div>
                <div className='center'>
                  <b>{e.title}</b>
                  <p>$ {e.price}</p>
                </div>
                <div>
                  <button>{e.number}</button>
                </div>
                <div className='NumP'>
                  <b>$ {e.number * e.price}</b>
                </div>
              </div>
              <div className="list-bottom">
                <div>
                  <input type="text" placeholder='Please, just a little bit spicy only.'/>
                </div>
                <div>
                  <button onClick={()=> delOrder(e.id)}><i className='bi bi-trash'></i></button>
                </div>
              </div>
            </li>
          ))
        }
      </div>
      <div className="order-foot">
        <div className='foot-up'>
          <h3>Discount</h3>
          <b>$ 0</b>
        </div>
        <div className='foot-bottom'>
          <h3>Sub Total</h3>
          {
            item?.map((e,i)=>(
              <b key={i}>$ {e.price}</b>
            ))
          }
        </div>
        <button>Continue to Payment</button>
      </div>
    </div>
  )
}

export default Orders