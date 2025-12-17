function genratePassword(length , 
    includeuppercase ,
    includelowercase,
    includenum,
    includesymbols ){
        const lowercase="abcdefijklmnopqrstuvwxyz"
        const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const number= "1234567890"
        const symbols ="!@#$%^&*()_+=-"

        let allowedchar="";
        let password="";

        allowedchar+=includelowercase? lowercase : "";
        allowedchar+=includeuppercase? uppercase : "";
        allowedchar+=includenum? number : "";
        allowedchar+=includesymbols? symbols : "";

        if(length<=0){
            return`Password length must be greater than zero`;
        }
        if(allowedchar.length==0){
            return `atleat one set ofvalue must be selected `
        }

        for(let i=0;i<=length;i++){
            const randomindx= Math.floor(Math.random()*allowedchar.length);
            password+= allowedchar[randomindx];
        }

        return password;
        
}
const length =10;
const includeuppercase=true;
const includelowercase =true;
const includenum =true;
const includesymbols=true;

const password =genratePassword(length , 
    includeuppercase ,
     includelowercase,
      includenum,
       includesymbols);
console.log(`password genrated: ${password}`);