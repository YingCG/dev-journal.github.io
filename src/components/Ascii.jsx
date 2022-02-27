import React from 'react'

function Ascii () {

const bigHello = (
    <pre>
    <code>
{`
          _____                    _____                    _____            _____           _______         
         /\\    \\                  /\\    \\                  /\\    \\          /\\    \\         /::\\    \\        
        /::\\____\\                /::\\    \\                /::\\____\\        /::\\____\\       /::::\\    \\       
       /:::/    /               /::::\\    \\              /:::/    /       /:::/    /      /::::::\\    \\      
      /:::/    /               /::::::\\    \\            /:::/    /       /:::/    /      /::::::::\\    \\     
     /:::/    /               /:::/\\:::\\    \\          /:::/    /       /:::/    /      /:::/~~\\:::\\    \\    
    /:::/____/               /:::/__\\:::\\    \\        /:::/    /       /:::/    /      /:::/    \\:::\\    \\   
   /::::\\    \\              /::::\\   \\:::\\    \\      /:::/    /       /:::/    /      /:::/    / \\:::\\    \\  
  /::::::\\    \\   _____    /::::::\\   \\:::\\    \\    /:::/    /       /:::/    /      /:::/____/   \\:::\\____\\ 
 /:::/\\:::\\    \\ /\\    \\  /:::/\\:::\\   \\:::\\    \\  /:::/    /       /:::/    /      |:::|    |     |:::|    |
/:::/  \\:::\\    /::\\____\\/:::/__\\:::\\   \\:::\\____\\/:::/____/       /:::/____/       |:::|____|     |:::|    |
\\::/    \\:::\\  /:::/    /\\:::\\   \\:::\\   \\::/    /\\:::\\    \\       \\:::\\    \\        \\:::\\    \\   /:::/    / 
 \\/____/ \\:::\\/:::/    /  \\:::\\   \\:::\\   \\/____/  \\:::\\    \\       \\:::\\    \\        \\:::\\    \\ /:::/    /  
          \\::::::/    /    \\:::\\   \\:::\\    \\       \\:::\\    \\       \\:::\\    \\        \\:::\\    /:::/    /   
           \\::::/    /      \\:::\\   \\:::\\____\\       \\:::\\    \\       \\:::\\    \\        \\:::\\__/:::/    /    
           /:::/    /        \\:::\\   \\::/    /        \\:::\\    \\       \\:::\\    \\        \\::::::::/    /     
          /:::/    /          \\:::\\   \\/____/          \\:::\\    \\       \\:::\\    \\        \\::::::/    /      
         /:::/    /            \\:::\\    \\               \\:::\\    \\       \\:::\\    \\        \\::::/    /       
        /:::/    /              \\:::\\____\\               \\:::\\____\\       \\:::\\____\\        \\::/    /        
         \\::/    /                \\::/    /                \\::/    /        \\::/    /         \\/____/          
    \\/____/                  \\/____/                  \\/____/          \\/____/                     

`}
   </code>
   </pre>
);

const smallHello =
    (
        <pre><code>
    {`
     ___         ___         ___  ___  ___     
          /\\__\\       /\\  \\       /\\__\\/\\__\\/\\  \\          
   /:/  /      /::\\  \\     /:/  /:/  /::\\  \\   
  /:/__/      /:/\\:\\  \\   /:/  /:/  /:/\\:\\  \\  
 /::\\  \\ ___ /::\\~\\:\\  \\ /:/  /:/  /:/  \\:\\  \\ 
/:/\\:\\  /\\__/:/\\:\\ \\:\\__/:/__/:/__/:/__/ \\:\\__\\
\\/__\\:\\/:/  \\:\\~\\:\\ \\/__\\:\\  \\:\\  \\:\\  \\ /:/  /
     \\::/  / \\:\\ \\:\\__\\  \\:\\  \\:\\  \\:\\  /:/  / 
     /:/  /   \\:\\ \\/__/   \\:\\  \\:\\  \\:\\/:/  /  
    /:/  /     \\:\\__\\      \\:\\__\\:\\__\\::/  /   
    \\/__/       \\/__/       \\/__/\\/__/\\/__/    

    `}  
    </code></pre>)
;

  return (
    <>
      <div className="monospaced">
        {bigHello}
         </div>
      <div className="hello">
         {smallHello}
      </div>
          
        
    </>
  )
}

export default Ascii
