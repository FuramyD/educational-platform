import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "duration"
})
export class DurationPipe implements PipeTransform {

    transform(value: number, unit: string, endings: string[]) {
        const lastNumber = Number(value.toString().slice(-1));
        const [single, plural1, plural2] = endings;
        switch (true) {
            case (value > 9 && value <= 20):
                return `${value} ${unit+plural2}`;
            case (lastNumber === 1):
                return `${value} ${unit+single}`;
            case (lastNumber <= 4 && lastNumber !== 0):
                return `${value} ${unit+plural1}`;
            default:
                return `${value} ${unit+plural2}`;
        }
    }

}
