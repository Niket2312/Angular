import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class BlogService{
    blog=[{
        id:1,
        title:"Niket",
        description:"description1",
        imageurl:"https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
        languages:[{language_id:1,language_text:'Angular'},{language_id:2,language_text:'java'},{language_id:3,language_text:'python'}],
        author:"niket",
        date:"23-12-2000"
    },{
        id:2,
        title:"Niket2",
        description:"description1",
        imageurl:"https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
        languages:[{language_id:1,language_text:'Angular'},{language_id:2,language_text:'java'},{language_id:3,language_text:'python'}],
        author:"niket",
        date:"23-12-2000"
    },
{
    id:3,
    title:"Niket3",
    description:"description1",
    imageurl:"https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
    languages:[{language_id:1,language_text:'Angular'},{language_id:2,language_text:'java'},{language_id:3,language_text:'python'}],
    author:"niket",
    date:"23-12-2000"
},
{
    id:4,
    title:"Niket4",
    description:"description1",
    imageurl:"https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg",
    languages:[{language_id:1,language_text:'Angular'},{language_id:2,language_text:'java'},{language_id:3,language_text:'python'}],
    author:"niket",
    date:"23-12-2000"
}]
    getData(form:any){
        console.log(form);
        this.blog.push(form)
        console.log(this.blog);    
    }
    getId(id:number){
        return this.blog.find(x=>x.id==id)
    }
    getLength(){
        return this.blog.length
    }
    onDelete2(id:number){
        console.log(id);
        
        let i:any=this.blog.find(x=>x.id===id)
        console.log(i);
        this.blog=this.blog.filter(e=>{
            return e!=i
        })
        console.log(this.blog);
    }
    onEdit(blogEdit:any){
        // this.blog = this.blog.filter(e1 => 
        //     {
        //         e1.id === blogEdit.id
            
        //     })
        // const index = this.blog.findIndex((el) => el.id === blogEdit.id)
        // console.log(index);
        
        // this.blog[index]=blogEdit;

        // console.log(this.blog[index]);
        
        // this.blog[index].title = blogEdit.title
        // this.blog[index].description = blogEdit.description
        // this.blog[index].imageurl = blogEdit.imageurl
        // this.blog[index].languages = blogEdit.languages
        // this.blog[index].author = blogEdit.author
        // this.blog[index].date = blogEdit.date

        //  = {
        //     id:blogEdit.id,
        //     title:blogEdit.title,
        //     description:blogEdit.description,
        //     imageurl:blogEdit.imageurl,
        //     languages:blogEdit.languages,
        //     author:blogEdit.author,
        //     date:blogEdit.date
        // }

        console.log(this.blog);
        

        console.log(blogEdit.id);
        const index = this.blog.findIndex((e1) => e1.id == blogEdit.id)
        this.blog[index] = {
            id: blogEdit.id,
            title: blogEdit.title,
            imageurl: blogEdit.imageurl,
            description: blogEdit.description,
            author: blogEdit.author,
            languages: blogEdit.languages,
            date: blogEdit.date,
        }
        // let index:any=this.blog.find((e)=>{
        //     return e.id===blogEdit.id
        // })
        // console.log(index);
        //    this.blog[index]={
        //     id:blogEdit.id,
        //     title:blogEdit.title,
        //     description:blogEdit.description,
        //     imageurl:blogEdit.imageurl,
        //     languages:blogEdit.languages,
        //     author:blogEdit.author,
        //     date:blogEdit.date
        // }
        // console.log(this.blog);
    
        


    }

    
}