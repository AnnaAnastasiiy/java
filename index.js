var a = Number(prompt("a*x^2+b*x+c=0: введіть a"));
var b = Number(prompt("a*x^2+b*x+c=0: введіть b"));
var c = Number(prompt("a*x^2+b*x+c=0: введіть c"));

document.write(a);
document.write("*x^2");

if (b>=0) 
 document.write("+");

document.write(b);
document.write("*x");

if (c>=0)
 document.write("+");

document.write(c);

document.write("=0 <br>");

var desc = Math.sqrt(d(a,b,c));

var x1 = (-b+desc)/2.0/a;
var x2 = (-b-desc)/2.0/a;
document.write("x1=");
document.write(x1);
document.write("<br> x2=");
document.write(x2);

function d(a, b, c) {
    return b*b-4*a*c;
}
