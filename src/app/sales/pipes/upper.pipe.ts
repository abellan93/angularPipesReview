import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: 'uUppercase'

})
export class UpperPipe implements PipeTransform{
    transform(value: string, arg: boolean = true):string{

       return (arg) ? value.toUpperCase() : value.toLowerCase();
    }

}