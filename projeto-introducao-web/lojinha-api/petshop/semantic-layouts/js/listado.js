// class  Animales permite construir mas facilmente nombre y descripcion de cada PET

class Animal{
  constructor(nombreAnimal, descripcion){
  this.nombreAnimal = nombreAnimal;
  this.descripcion = descripcion;
}
  //methods get y set para alterar class
  get nombreAnimal(){
    return this._nombreAnimal;
  }
  set nombreAnimal(nombreAnimal){
    this._nombreAnimal = nombreAnimal;
  }
  get descripcion(){
    return this._descripcion;
  }
  set descripcion(descripcion){
  return this._descripcion = descripcion;
  }
}