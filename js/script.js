/* 

    *Basic JavaScript 

    โดยส่วนใหญ่่เวลาเราเขียนโค้ดการทำงานอะไรบางอย่าง 
    เราจะต้องกำหนดจุดแสดงผลให้กับมันด้วย เหมือนต้องจี้จุดด้วยว่าจะให้มันไปแสดงผลตรงไหน
    หรือเกิดเหตุการณ์ที่ไหน และยังสามารถรอรับเหตุการณ์ที่จะเกิดขึ้นได้ด้วย
    เช่น กดปุ่มแล้วสั่งให้มันเด้งขึ้นมา etc.
*/

// Document Write           เป็นการพิมพ์ข้อความออกมาทางหน้าจอ
document.write();
// Using console.log        แสดงผลลัพธ์ในส่วนของ console ใช้สำหรับ debug
console.log();
/* 
    *Finding HTML Element
    เป็นการไปค้นหา HTML Tag ตามที่เราต้องการ โดยเรามักจะใช้สำหรับการไปดึงคุณสมบัติต่าง ๆ
    ของแท็ก หรือเอาค่าที่เราเขียนใส่กลับเข้าไปในแท็ก
    ที่ใช้บ่อย ๆ ได้แก่
*/
// 1.  Finding HTML Element by Id
document.getElementById("YourID");
// 2.  Finding HTML Element by Class
document.getElementsByClassName("YourClass");
// 3.  Finding HTML Element by TagName
document.getElementsByTagName("p");

/* 
    *Lenght
    .length          ใช้หาความยาวของ Array หรือความยาวของ String ได้เช่นกัน
*/

/*  
    *Convert to String, Convert to Integer 
    .toString();     ใช้สำหรับแปลงเป็น String
    parseInt();      ใช้สำหรับแปลงเป็น Integer
*/

/* 

    *JavaScript Operators

    -  Arithmetic Operators
    -  Assighment Operators
    -  Comparison and Logical Operators
    -  String Operators


    *Arithmetic Operators
    1.     +            Addition
    2.     -            Subtraction
    3.     *            Multiplication
    4.     /            Division
    5.     %            Modulus
    6.     ++           Increment
    7.     --           Decrement

   *Assighment Operators
    1.      =       x = y       x = y
    2.      +=      x += y      x = x + y
    3.      -=      x -= y      x = x - y
    4.      *=      x *= y      x = x * y
    5.      /=      x /= y      x = x / y
    6.      %=      x %= y      x = x % y
    
   *Comparison and Logical Operators
    1.      ==      equal to
    2.      ===     equal value and equal type
    3.      !=      not equal
    4.      !===    not equal value or not equal type
    5.      >       greater than
    6.      <       less than
    7.      >=      greater than or equal to
    8.      <=      less than or equal to
    9.      &&      and
    10.     ||      or
    11.     !       not

*/

/*
   *JavaScript Conditional
   
   -    if
   -    else
   -    else if
   -    swith

*/

/*
   *JavaScript Arrays
   
   -    Arrays
   -    Objects
   -    Adding Array Elements
   -    Looping Array Elements

   *Arrays []
   ใช้บ่อยมาก ในกรณีเช่น ข้อมูลของเราถูกส่งมาจาก Database และอยู่ีในรูปแบบของ Array
   เราก็จะต้องนำเอาข้อมูลทั้งหมดนั้นมาแสดงผล และ อื่น ๆ

   *Objects {}
   คล้ายกับ Array เพียงแต่ว่า เราจะมีตัวแปรของค่า index เพิ่มขึ้นมา

   *Adding Array Element
  .push("Text")         เพิ่มข้่อมูลเข้าไปยัง Array
  .join()               รวม Array เข้าด้วยกัน
  .pop()                เลือกเอา Array สุดท้ายออกมา
  .shift()              ลบ Array แรกออก
  .unshift()            แทรกด้านหน้า
  splice()              แทรกข้อมูลใหม่เข้าไปยังตำแหน่งใด ๆ ใน Array

   *Looping Array Element
  ex. 
        for (index = 0; index < fruits.length; index++) {...}
   
*/

/*
    *JavaScript Events
    Events เป็นการทำงานของ JS ในเรื่องของเหตุการณ์ไม่ว่าจะเป็นการดักเหตุการณ์ที่จะเกิดขึ้น 
    หรือ กำหนดให้เกิดเหตุการณ์ขึ้นตามกำหนด ดังนี้
    
    -   onchange        An HTML element has been changed
    -   onclick         The user clicks an HTML element
    -   onmouseover     The user moves the mouse over an HTML element
    -   onmouseout      The user moves the mouse away from an HTML element
    -   onkeydown       The user pushes a keyboard key
    -   onload          The browser has finished loading the page
    -   onsubmit        An Form element has beeb submit

*/

/*
    *JavaScript JSON
    โดยส่วนมาก JSON จะเกิดจาก API ที่ให้ข้อมูลเรานำมาใช้งานให้เอาไปแสดงผล 
    แต่ JSON นั้นจะอยู่ในรูปแบบของ JSON String ซึ่งเราจะต้องแปลงให้อยู่ในรูปของ
    JSON Object กันก่อน โดยใช้คำสั่ง JSON.parse()

*/

/*
    *The HTML DOM Document Object
    1.  Finding HTML Elements
    2.  Changing HTML Elements
    3.  Adding and Deleting Elements
    4.  Adding Events Handlers

    *Finding HTML Elements
    เป็นการค้นหาแท็ก HTML ที่เราต้องการไปกระทำอะไรบางอย่าง 
    document.getElementById()
    document.getElementByClassName()
    document.getElementByTagName()

    *Changing HTML Elements
    เป็นคำสั่งในการไปเปลี่ยนแปลงข้อมูลของแท็ก HTML
    element.innerHTML =                         Change the inner HTML of an element
    element.atribute =                          Change the atrribute of an HTML element
    element.setAttribute(attribute, value)      Change the attrubute of an HTML element
    element.style.property =                    Change the style of an HTML element

    *Adding Events Handlers
    เป็นการเพิ่ม ลบ และแทนที่ ของ Element ที่เราต้องการ โดยมี Method ด้านล่าง
    document.createElement()                    Create an HTML element
    document.removeChild()                      Remove an HTML element
    document.appendChild()                      Add an HTML element
    document.replaceChild()                     Replace an HTML element
    document.write(text)                        Write into the HTML element

*/

/*
    *JavaScript Changing HTML Style
    .style จะเป็นการสั่งให้ JS นั้นไปเปลี่ยนแปลง Style ของ CSS โดยใช้ .style ในการส่งค่า CSS ไปแสดงผล

*/