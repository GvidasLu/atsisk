import vaisius from "./vaisius.js"

class krepsys {
    
    static vaisiai = []

    static pripildyti() {
        
        krepsys.vaisiai = [...Array(20).keys()].map(()=> new vaisius())
        
        krepsys.vaisiai.sort((a, b) => b.dydis - a.dydis)
    }

    static isimti() {
        
        const vaisiai = krepsys.vaisiai
        
        const didziausias = krepsys.vaisiai[0];
       
        vaisiai.splice (0, 1);
       
        krepsys.vaisiai = vaisiai;
       
        return didziausias;
    }

    static papildyti(upto = 20) {
        
        if(krepsys.vaisiai.length < upto) {
            
            let count = krepsys.vaisiai.length
            
            let gap = Array(upto - count).fill(new vaisius())
            
            krepsys.vaisiai = krepsys.vaisiai.concat(gap)
        }
    }
}

export default krepsys;