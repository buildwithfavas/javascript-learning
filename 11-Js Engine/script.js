// Js is everwhere can run inside browser,server,smartwatch,inside robots because of Javascript Runtime environment
// Javascript Runtime environment is a container having js engine, also have APIs, eventloop, callbackqueue, microtask queue
//---------------------------------------------------
//Js engines:
//Microsoft    : Chakra
//Firefox      : Spidermonkey
//Google chrome: V8
//---------------------------------------------------
//How code executed in Js engine:
// Code => Parsing => Compilation => Execution
//---------------------------------------------------
//1.Parsing:
//code breaken to tokens, syntax parser convert to AST(abstract syntax tree)
//---------------------------------------------------
//2.Compilation:
//JIT Compilation(Just in time compilation)(use interpreter and compiler)
//Interpretter: executes code line by line dont know what going to happen in next line.(code is faster).
//Compiler: whole code is compiled and optimized code is generated, then it executes.(efficency).
//in modern webbrowsers Javascript can be interpritted and compiled language depends on js engine
//high level code converted byte code 
//compiler optimize code as it has can on runtime so its called Just in time compilation
//in some js engine there is AOT(ahead of time compilation) compiler optimise a code going to execute later as much as it can
//other optimization compiler do : inlining, copy elision, inline caching.
//---------------------------------------------------
//3.Execution: (have 2 major components)
//1.memory heap : place where all variables is stored (garbage collecter sweeps the garbage by mark&sweep algorithm)
//2.call stack 
//---------------------------------------------------
//V8 has interpriter called ignition, turbofan is the optimizing compiler
//V8 Js engine Architecture:
// Javascript source code => parser => abstract syntax tree => interpreter ignition =>  Compiler TurboFan
//                                                                    ||                       ||
//                                                                     v                        V
//                                                                 Bytecode    <=      Optimized Machine code                           
//Garbage collector is "Orinoco"  use mark and sweep algorithm
//another garbage collector called Oil palm for diffrent purpose   //refer mdn

