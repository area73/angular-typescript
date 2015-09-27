/**
 * Created by rerades on 2/9/15.
 */

    export function decToHex(num:number):string {
        num = Math.round(num > 16777215 ? 16777215 : num < 0 ? 0 : num) ;
        return num.toString(16)
    }


