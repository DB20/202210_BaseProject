export class Cafe {
  id: Number;
  nombre: String;
  tipo: String;
  region: String;
  sabor: String;
  altura: number;
  imagen: String;

  public constructor(
    id: number,
    nombre: string,
    tipo: string,
    region: string,
    sabor:string,
    altura: number,
    imagen: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
 }
}
