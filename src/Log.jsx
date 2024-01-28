export default function Log({log}) {
 return (
     <>
      <ol id="log">
          {log.map(item =>{
              return(
                  <li key={`${item.selectedSqure.row}${item.selectedSqure.col}`}>selectedPlater : {item.selectedPlayer} , selectedSqure: {item.selectedSqure.row}, {item.selectedSqure.col}</li>
              )
          })}
      </ol>

     </>
 )
}
