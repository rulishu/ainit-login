
let name = 'lishu';
name = "lishu";
name = "'li'"+'cui'+"'shu'";
console.log(name);
const user = 'cui';
const pass = 'ru';
console.log(
'select count(1) from a1 where username ='+'\''
+user+'\''+
' and password = ' +'\''
+pass+ '\''+
'');

console.log(
    'select count(1) as num from a1 where username = '
    +user+
    ' and password = '
    +pass+
    ''
);
console.log(
    'select count(1) as num from a1 where username = \"'
    +user+
    '\" and password = \"'
    +pass+
    '\"'
);