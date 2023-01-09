const ItemOption = ( version ) => {

    const itemVersion = [...version]

    const renderVersions = () => {
        itemVersion.forEach ((element) => {
       
            return  <li class="dropdown-item">{element}</li>
     
    })}

  return (
    <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu"> { renderVersions ()} </ul>
</div>
  )
}

export default ItemOption