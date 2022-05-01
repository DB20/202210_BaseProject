export class Cafe {
  id: Number;
  nombre: String;
  tipo: String;
  region: String;
  sabor: String;
  altura: String;
  image: String;

  public constructor(id: number, nombre: string, tipo: string, region: string,sabor:string, altura:string,image: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.image = image;
 }
}
