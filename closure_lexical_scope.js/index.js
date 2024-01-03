/***
 * @description
 * lexical scope where inner function have access to outer function variables
 */

function outer() {
  let username = "pj007";

  function inner() {
    console.log(`this is my username ${username}`);
  }

  inner();
}

outer(); /***
 @explain : behind the scene 


 phase 1 : memory creation phase 

 GEC 
 outer : function 

 then outer invoked 

 FEC 
 memory creation phase 
 username : undefined 
 inner : function (){}

 execution 
 inner()  - invoked 
 then console.log(`this is my username ${username}`)


 @learning 
inner function have access  to outer function variable because they we bind we lexical 

*/




/***
 * #Closure
 */


function displayIcon(){
    let icon = "BIBI";
    function iconType(){
        return icon;
    }

    return iconType;   /*** @explain displayIcon function return iconType with he completed lexical scope so evenly after removing form GEC display iconType have memory access of outer function this is called closure */
}

const show  = displayIcon() // output function iconType(){ return icon}



/*** Behind the scene 
 * GEC 
 * - memory creation phase 
 * displayIcon  - function (){}
 * 
 * Execution phase 
 * displayIcon - invoked 
 * 
 * 
 * FEC created 
 * MC - phase 
 * 
 * icon - undefined 
 * iconType - function 
 * Execution phase 
 * return iconType  and displayIcon remove from callstack and GEC
 * 
 *@note : displayIcon function remove from GEC context but we have still access icon variable 
 * that define in displayIcon scope because when function defined inner the function that parent 
 * function share his lexical scope to child function that he can access his memory still after *  remove  GEC (global execution context)
 *
 * 
 * 
 * 
 */