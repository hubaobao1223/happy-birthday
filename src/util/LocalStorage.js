let localStorage = window.localStorage
const itemKeyPrefix = "hb-"

class LocalStorage{
  getItem(key){
    return JSON.parse(localStorage.getItem(this.getKey(key)))
  }

  setItem(key,value){
    localStorage.setItem(this.getKey(key),JSON.stringify(value))
  }

  removeItem(key){
    localStorage.removeItem(this.getKey(key))
  }

  clear(){
    localStorage.clear()
  }

  getKey(key){
    return itemKeyPrefix+key
  }
}

export default new LocalStorage()