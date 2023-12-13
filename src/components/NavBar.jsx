
function NavBar ({classNameBackward, classNameForward, clickBackward,clickForward }) {
    
   return ( 
   <div>
        <button className={classNameBackward.className} onClick={clickBackward} > Précedent </button>
        <button className={classNameForward.className} onClick={clickForward} > Suivant </button> 
        
    </div>
    )
}

export default NavBar;