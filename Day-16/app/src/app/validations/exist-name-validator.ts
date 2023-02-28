import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { map } from "rxjs";
import { PostServiceLogin } from "../forms/login/post.service-login";


export function ExistNameValidator(postService: PostServiceLogin
):AsyncValidatorFn {
    return(control: AbstractControl) => {
        return postService.searchByName(control.value).pipe(map((x)=>(x.length > 0 ? {productExist: true} : null)));
    };
}
    
