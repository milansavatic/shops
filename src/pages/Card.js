import React from "react";


const Card=({card, setCard})=>{

  {/*13 Pravljenje funkcije za brisanje proizvoda koji je dodat u korpu*/}

  const removeFromCard=(idx)=>{
    let tepmCard=[...card];
    tepmCard.splice(idx,1);
    setCard(tepmCard);
  } 
    
    return(
        <>
          <section className="single py-5">
            <article className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 mx-auto">
        <table className="table table-striped table-hover shadow-lg">
  <thead>
    <tr>
      {/*10 Menjam vrednosti i dodajem ih to mi je naslov tabele*/}
      <th scope="col">Id</th>
      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Remowe</th>




    
    </tr>
  </thead>
  <tbody>
  {/*11 Pravim prikaz elemenata koje sam dodao u korpu*/}
  {card.map((item, idx) => {
      return (
        <tr key={idx}>
        <th scope="row">{item.id}</th>
        <td><img src={item.img} height="30px" /></td>
        <td>{item.title}</td>
        <td>{item.desc}</td>
        <td>{item.qty}</td>
        <td>${item.price}</td>
        <td><button onClick={()=>removeFromCard(idx)} className="btn btn-danger">X</button></td>
        </tr>
        )
    })}

    {/*<tr>
      <th scope="row">2</th>
      <td>Traveler bag</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Sunglass</td>
      <td>1</td>
    </tr>*/}
         <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td>Total:</td>
            {/*12 Racunanje totalne cene*/}
            <td>${card.reduce((acc, cur) => { return acc + cur.price * cur.qty }, 0)}</td>
            </tr>
            
  </tbody>
</table>
</div>
</div>
</article>
</section>
        </>
    )
}
export default Card;