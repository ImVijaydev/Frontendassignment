import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shortenDescription'
})

export class ShortenDescription implements PipeTransform{
    transform(value: any) {
        return value.substr(0,100) + " ...";
    }

}