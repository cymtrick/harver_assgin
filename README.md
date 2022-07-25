Perfomance check using console.time

````

(base) prashanth@Bindus-MacBook-Pro harver-exercise-se % node original.js
Received response with status:200
Received response with status:200
Received response with status:200
(node:67605) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)

perf: 5.043s
The file was saved!

(base) prashanth@Bindus-MacBook-Pro harver-exercise-se % node refactored.js 
Received response with status:200
Received response with status:200
Received response with status:200
(node:67619) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
<Buffer ff d8 ff e0 00 10 4a 46 49 46 00 01 01 00 00 01 00 01 00 00 ff db 00 43 00 05 03 04 04 04 03 05 04 04 04 05 05 05 06 07 0c 08 07 07 07 07 0f 0b 0b 09 ... 118018 more bytes>

perf: 1.341s
The file was saved!
(base) prashanth@Bindus-MacBook-Pro harver-exercise-se % 
````
