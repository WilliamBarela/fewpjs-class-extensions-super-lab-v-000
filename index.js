// Write your classes here

class Tree {
  constructor(spcies){
    this._species = species;
  }
  
  static definition(){
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
  }
}

class Deciduous{
  constructor(species, name){
    super(species);
    this._name = name;
  }
  
  static definition(){
    return `${ super.definition() } Deciduos trees shed their leaves annually.`
  }
}