# small compiler

a small compiler (less than 300 lines) that converts lisp-style expressions into javascript function calls. for example -

**input:** `(add 2 (subtract 4 2))`  
**output:** `add(2, subtract(4, 2));`
