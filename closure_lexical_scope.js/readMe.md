Understanding Lexical Scope and Closures in JavaScript
Lexical Scope
Lexical scope in JavaScript refers to the concept where the inner function has access to the variables and functions defined in its outer enclosing function. This access is possible because of how JavaScript code is written and executed.

Consider the following example:

javascript
Copy code
function outer() {
  let username = "pj007";

  function inner() {
    console.log(`Username: ${username}`);
  }

  inner();
}

outer();
Behind the Scenes:
Memory Creation Phase:

Global Execution Context (GEC) creates space for the outer function.
outer function is invoked.
Function Execution Context (FEC) for outer is created.
Variables like username and inner are initialized within outer.
Execution Phase:

inner() is invoked and can access username due to lexical scoping.
Key Learning:
Inner functions have access to outer function variables because of lexical scoping. Lexical scoping allows functions to retain access to the variables of their containing functions even after those functions have finished executing.

Closures
Closures are an essential concept that builds on lexical scope. A closure is formed when an inner function maintains access to the variables of its outer function, even after the outer function has finished executing and its execution context has been removed from the call stack.

Consider this example:

javascript
Copy code
function displayIcon(){
    let icon = "BIBI";
    function iconType(){
        return icon;
    }

    return iconType;
}

const show = displayIcon();
Behind the Scenes:
Memory Creation Phase:
GEC creates space for the displayIcon function.
displayIcon is invoked, and its FEC is created with variables like icon and iconType.
iconType function is returned from displayIcon.
Execution Phase:
displayIcon function is removed from the call stack and GEC, but iconType maintains access to the icon variable due to closure.
Key Insight:
Even after the displayIcon function is removed from the execution context, the iconType function, returned from displayIcon, still has access to the icon variable. This phenomenon, where inner functions maintain access to outer function variables, is known as a closure.

By understanding lexical scope and closures, JavaScript developers can write more efficient and maintainable code.

Let's continue this discussion! What other JavaScript concepts would you like to explore?