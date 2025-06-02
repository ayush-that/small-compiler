# small compiler

a small compiler that transforms lisp function calls into js function calls.

**input:** `(add 2 (subtract 4 2))`  
**output:** `add(2, subtract(4, 2));`

note - i took reference from gnu typist's js lessons to build this. check it out [here](https://github.com/odCat/gtypist/blob/master/lessons/p.typ#L797). to replicate, install gtypist and then run it as `gtypist p.typ`.

**license:** gnu gpl v3
