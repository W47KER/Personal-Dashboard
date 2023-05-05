import { v4 as uuidv4 } from 'uuid';
export class Note{
    id!: string
     title!: string 
    content!: string 

    constructor( content : string, title : string){
        this.id = uuidv4()
        this.title = title
        this.content = content
        
       
    }
}


