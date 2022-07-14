import React,{useState} from "react";

const Admin=({items,setItems})=>{

  {/*18 pravim stanje za dugme edit*/}
  const[editMode,setEditMode]=useState({mode:false, id:null})

  {/*16 previm useState da bi uvezao stanja*/}
  
  const[title, setTitle]=useState('');
  const[desc, setDesc]=useState('');
  const[qty, setQty]=useState('');
  const[price, setPrice]=useState('');
  const[img,setImg]=useState('');

  

  const addFormSubmit = (event) => {
    event.preventDefault();
  {/*17Gore imam sve sada pravim novi item, prikaz uneti elemenata forme*/}
    const newItem={
      id:items[items.length-1].id+1,
      title:title,
      desc:desc,
      qty:qty,
      price:price,
      img:img

    };
    {/*17.1 funkcija koja vraca newItem*/}
    setItems(prev=>{
      return[...prev,newItem];
    });

  }
  {/*18*/}
  const setEdit = (idx) => {
    setEditMode({ mode: true, id: idx });
    {/*20.1 Mogucnost promene vrednosti u poljima*/}
    setTitle(items[idx].title);
    setDesc(items[idx].desc);
    setQty(items[idx].qty);
    setPrice(items[idx].price);
    setImg(items[idx].img);

  }
  {/*19*/}
  
  const editFormSubmit = (event) => {
    event.preventDefault();
  {/*21 Da mi zameni standardne vrednosti u poljima*/}
    items.forEach((item,idx) =>{
      if(idx==editMode.id){
        const tempItems=[...items];
        tempItems[idx].title=title;
        tempItems[idx].desc=desc;
        tempItems[idx].qty=qty;
        tempItems[idx].price=price;
        tempItems[idx].img=img;

        setItems([...tempItems]);

      }
    } )
    {/*23*/}
    setEditMode({ mode: false, id: null });
    setTitle('');
    setDesc('');
    setQty('');
    setPrice('');
    setImg('');
  }

  {/*20*/}
  const cancelEdit=()=>{
    {/*22 Postavljam prazna polja da mi bude prazno pre unosa*/}
    setEditMode({mode:false, id:null});
    setTitle('');
    setDesc('');
    setQty('');
    setPrice('');
    setImg('');
    
  }

  {/*15 Brisanje itema*/}
  
  const removeItem=(idx)=>{
    let tempItem=[...items];
    tempItem.splice(idx,1);
    setItems(tempItem);
  }
  
  return(
    

        <>
    <section className="single py-5">
      <article className="container">
        <div className="row align-items-center">
      <div className="col-md-10 mx-auto">
        {editMode.mode==false
        ?
        <form onSubmit={addFormSubmit}>
          <input value={title} onChange={(event)=>setTitle(event.target.value)} className="m-2" type="text" placeholder="title"/>
          <input value={desc} onChange={(event)=>setDesc(event.target.value)} className="m-2" type="text" placeholder="Description"/>
          <input value={qty} onChange={(event)=>setQty(event.target.value)} className="m-2" type="text" placeholder="Qty"/>
          <input value={price} onChange={(event)=>setPrice(event.target.value)} className="m-2" type="text" placeholder="Price"/>
          <select value={img} onChange={(event)=>setImg(event.target.value)} className="m-2"> 
            <option value="img/image1.jpg">Majica</option>
            <option value="img/image2.jpg">Torba</option>
            <option value="img/image3.jpg">Naocari</option>
            <option value="img/image4.jpg">Sat</option>
            <option value="img/image5.jpg">Sesir</option>
            <option value="img/image6.jpg">Kaciga</option>
    </select>
            <input type="submit" value="Add" className="btn btn-outline-primary m-2" />

  
</form>
:<>
<form onSubmit={editFormSubmit}>
          <input value={title} onChange={(event)=>setTitle(event.target.value)} className="m-2" type="text" placeholder="title"/>
          <input value={desc} onChange={(event)=>setDesc(event.target.value)} className="m-2" type="text" placeholder="Description"/>
          <input value={qty} onChange={(event)=>setQty(event.target.value)} className="m-2" type="text" placeholder="Qty"/>
          <input value={price} onChange={(event)=>setPrice(event.target.value)} className="m-2" type="text" placeholder="Price"/>
          <select value={img} onChange={(event)=>setImg(event.target.value)} className="m-2"> 
            <option value="img/image1.jpg">Majica</option>
            <option value="img/image2.jpg">Torba</option>
            <option value="img/image3.jpg">Naocari</option>
            <option value="img/image4.jpg">Sat</option>
            <option value="img/image5.jpg">Sesir</option>
            <option value="img/image6.jpg">Kaciga</option>
    </select>
            <input type="submit" value="Edit" className="btn btn-warning m-2" />

  
</form>
<button className='btn btn-danger' onClick={() => cancelEdit()}>Cancel</button>

</>
}
    <table className="table table-striped table-hover shadow-lg">
  <thead>
    <tr>
      
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Edit</th>
      <th scope="col">Remowe</th>




    
    </tr>
  </thead>
  <tbody>
  
  {items.map((item, idx) => {
      return (
        <tr key={idx}>
        <th scope="row">{item.id}</th>
        <td><img src={item.img} height="30px" /></td>
        <td>{item.title}</td>
        <td>{item.desc}</td>
        <td>{item.qty}</td>
        <td>${item.price}</td>
        <td><button onClick={()=>setEdit(idx)}  className="btn btn-warning">Edit</button></td>
        <td><button onClick={()=>removeItem(idx)} className="btn btn-danger">X</button></td>
        </tr>
        )
    })}

        
  </tbody>
</table>
</div>
</div>
</article>
</section>
        </>
    )
}
export default Admin;