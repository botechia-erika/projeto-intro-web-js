// class  Animales permite construir mas facilmente nombre y nomeDono de cada PET

class Pets{
  constructor(nombreAnimal, nomeDono){
  this.nomeAnimal = nomeAnimal;
  this.nomeDono = nomeDono;
  this.motivoVisita = dataVisita;
  this.cadastroId = cadastroId
}
  //methods get y set para alterar class
  get nombreAnimal(){
    return this._nomeAnimal;
  }
  set nombreAnimal(nomeAnimal){
    this._nomeAnimal = nomeAnimal;
  }
  get nomeDono(){
    return this._nomeDono;
  }
  set nomeDono(nomeDono){
  return this._nomeDono = nomeDono;
  }
   get motivoViasita(){
    return this.motivoVisita;
  }
  set motivoVisita(motivoVisita){
  return this._motivoVisita = motivoVisita;
  }

}