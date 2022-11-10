class Bank {
    static getaccntdetails() {
        var acdetail = {
            100: { name: "User1", acno: 100, pin: 1234, pwd: "qwerty1", balance: 1000 },
            101: { name: "User2", acno: 101, pin: 1234, pwd: "qwerty2", balance: 2000 },
            103: { name: "User3", acno: 103, pin: 1234, pwd: "qwerty3", balance: 3000 },
        }
        return acdetail;
    }


    static login() {
        var acno = document.querySelector("#Acnumbr").value
        var pwd= document.querySelector("#pwd").value

        try {
            if (isNaN(acno)) throw "Not a Valid Number";
            // is not a number
        }
        catch (error) {
            alert(error)
        }
        let data = Bank.getaccntdetails()
        if (acno in data) {
            let datapwd = data[acno].pwd;
            if (datapwd == pwd) {
                alert("login successful");
                window.location.href = "landing.html";
            }
            else {
                alert("Incorrect account number or password");
            }
        } else {
            alert("login failed");
        }
    }
    static deposit() {
        var acno = document.querySelector("#Acnumbr").value;
        var pin = document.querySelector("#pin").value;
        var Amt = Number(document.querySelector("#Amt").value);
        let data = Bank.getaccntdetails();
        if (acno in data) {
            let datapin = data[acno].pin;
            if (pin == datapin) {


                data[acno].balance += Amt;
                alert("Amount has been credited");

                alert(data[acno].balance);
            }
            else
                alert("Pin invalid")
        }
        else
            alert("Incorrect Detais");

    }

    static withdraw() {
        var acno = document.querySelector("#Acnumbr").value;
        var pin = document.querySelector("#pin").value;
        var Amt = Number(document.querySelector("#Amt").value);
        let data = Bank.getaccntdetails();
        if (acno in data) {
            let datapin = data[acno].pin;
            if (pin == datapin) {


                data[acno].balance -= Amt;
                alert("Amount has been debited");

                alert(data[acno].balance);
            }
            else
                alert("Pin invalid")
        }
        else
            alert("Incorrect Detais");
    }
    static balance() {
        var acno = document.getElementById('ano').value;
        var data = Bank.getaccntdetails();
        if(acno in data)
        {
            let uname = data[acno].name;
            let ubalance = data[acno].balance;
            document.getElementById('uname').innerHTML="Hello " + uname;
            document.getElementById('ubalance').innerHTML="Your Current Balance is " + ubalance;
        }
        
    }

}