export class Registro{
    public format: string;
    public texto:string;
    public tipo:string;
    public icono:string;
    public created:Date; 

    constructor(format: string, texto: string){
        this.format=format;
        this.texto=texto;
        this.created=new Date();
        this.determinarTipo();
    }
    private determinarTipo(){
        const inicioTexto=this.texto.substring(0,4);
        
        switch(inicioTexto){
            case 'http':
                this.tipo='http';
                this.icono='globe';
                break;
            case 'geo':
                this.tipo='geo';
                this.icono='pin';
                break;
            default:
                this.tipo='geo';
                this.icono='map';
        }
    }
}