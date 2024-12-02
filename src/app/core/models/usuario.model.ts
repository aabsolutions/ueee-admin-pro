import { environment } from "../../../environments/environment";

const base_url = environment.base_url;

export class Usuario {
    constructor(
        public email: string,
        public fullName: string,
        public password?: string,
        public roles?: string[],
        public img?: string,
        public _id?: string
    ){}

    get imagenUrl(){

        if(!this.img){
            return `${base_url}/uploads/usuarios/no-image`; 
        }else if(this.img.includes('https')){
            return this.img;
        }else if(this.img){
            return `${base_url}/uploads/usuarios/${this.img}`;
        }else{
            return `${base_url}/uploads/usuarios/no-image`;
        }
    }

    get obtenerNombre(){
        return this.fullName;
    }

    get obtenerCorreo(){
        return this.email;
    }
}