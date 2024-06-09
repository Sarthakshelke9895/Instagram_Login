
           document.getElementById('username1').addEventListener('focus', function() {
            document.getElementById('usernamefloat').style.transform = 'translateY(-12px)';
           });
           document.getElementById('username1').addEventListener('focus', function() {
            document.getElementById('usernamefloat').style.fontSize = "12px";
           });
           document.getElementById('username1').addEventListener('focus', function() {
            document.getElementById('usernamefloat').style.marginRight= "55px";
           });




           document.getElementById('Password1').addEventListener('focus', function() {
            document.getElementById('passfloat').style.transform = 'translateY(-12px)';
           });
           document.getElementById('Password1').addEventListener('focus', function() {
            document.getElementById('passfloat').style.fontSize = "12px";
           });
           document.getElementById('Password1').addEventListener('focus', function() {
            document.getElementById('passfloat').style.marginRight= "55px";
           });

            

        
           function printtext(){
            var userinput= document.getElementById('username1').value;
            var pass = document.getElementById('Password1').value;
            console.log("Username:"+userinput+"\nPasword:"+pass);

          
           
           }