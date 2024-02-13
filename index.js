class HashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size)
            .fill(null);
    }
    hash(key) {
        let hashCode = 0;
    
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
    
        return hashCode % this.hashmap.length;
    }
    
    set(key, value) {
        let hashIndex = this.hash(key)
        if (!this.hashmap[hashIndex]) {
            this.hashmap[hashIndex] = []
            this.length++
        }
        this.hashmap[hashIndex][key] = value
    }
    
    get(key) {
        const hashIndex = this.hash(key)
        if (this.hashmap[hashIndex][key]) {
            return this.hashmap[hashIndex][value]
        } else {
            return null;
        }
    }
    
    has(key) {
        let hashIndex = this.hash(key)
        if (this.hashmap[hashIndex][key]) {
            return true;
        } else {
            return false;
        }
    }
    
    remove(key) {
        const hashIndex = this.hash(key);
        let value = this.get(key);
    
        if (value) delete this.hashmap[hashIndex][key];
        if(!Object.keys(this.hashmap[hashIndex]).length) {
            delete this.hashmap[hashIndex];
            this.length--;
        }
    }
    
    lengths() {
        let count = 0;

        for (let i = 0; i < this.hashmap.length; i++) {
            if (this.hashmap[i]) {
                count++;
            }
        }
        return count;

    }
    
    clear() {
        this.hashmap.clear
    }
    
    keysAndValues() {
        const kkey = [];
        for (let i = 0; i < this.hashmap.length; i++) {
            if (this.hashmap[i]) {
                kkey.push(this.hashmap[i][0]);
            }
        }
        return kkey;
    }
}

