//JavaScript is synchronous, single threaded language
// "Everything in JavaScript happens inside the Execution Context"
// The first component memory component
// this is the place where all the variables and functions are stored as key-value pairs
// memory component is also known as Variable environment
// second is code component also known as Thread of execution
// synchronous single threaded language.that it can only go to the next line once the current line has been finished executing
//------------------------------------------------------------------------------------------------------------------------------------------

var n = 2;
function square (num) {
var ans = num * num;
return ans;
}

var square2 = square(n);
var square4 = square(4);

//Everything in JavaScript happens inside an execution context. JavaScript code is run behind the scenes. 
// So when you run this whole code, a global execution context is created.
//  These have two components: memory component and the code component. So the first phase is memory creation phase. 
// The second is the code execution phase. First phase of memory creation, JavaScript will allocate memory to all the variables and functions.
//  So when it allocates memory to `n` it stores a special value which is known as `undefined` in the first phase.
//  And in case of functions it stores the whole code of the function inside this memory space. Now second phase is code execution phase. 
// Once again runs through this whole JavaScript program line by line and it executes the code now.
//  So this is the point when all these functions and every calculation in the program is done. 
// Okay. So as soon as it encounters this first line where `n` is equals to two, it actually places the two inside the `n`. 
// So till now the value of `n` was `undefined`. Then it invokes the function.
//  So again creation of execution context and there will again be two phases involved.
//  First phase is the memory creation phase. So will be allocating memory to `num`. 
// Will be storing `undefined`. So the phase two is the code execution phase. Executing each line here.
//  So when this function is invoked, value of `n` here is which is two is passed to `num`.
//  The value of `n` is two right now. The code will then move to the next line. Will do the calculation and put the value in `ans`.
//  Now just return the whole control back to the execution context where the function was invoked. 
// When the whole function is executed is that this whole execution context for that instance of that function will be deleted.
//same way next time when we call square(4); it create another excution context and works as explained finally its done that function execution context gets deleted
//if whole code is done the global execution context also gets deleted.
//execution context is created in the callstack and newer execution context is stacked above existing(is pushed and poped from call stack)

//Call stack maintains the order of execution of execution contexts.
//call stack also known as : execution context stack, program stack, controlstack, runtime stack, machine stack
//------------------------------------------------------------------------------------------------------------------------------------------